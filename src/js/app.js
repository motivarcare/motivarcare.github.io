import { auditMetadata, heroContent, auditAreas, nielsenHeuristics, casos } from './audit-data.js';

// Lista plana de todos los hallazgos de todos los casos, cada uno con una
// referencia a su caso de origen — útil para métricas y para la tabla.
const allFindings = casos.flatMap(caso =>
  caso.hallazgos.map(h => ({ ...h, casoId: caso.id, casoNumero: caso.numero, casoTitulo: caso.titulo, casoEstado: caso.estado, areaId: caso.areaId }))
);

let currentArea = 'all';
let currentSeverity = 'all';
let currentSearch = '';

// IDs de casos expandidos en la tabla de hallazgos (por defecto todos los
// casos arrancan expandidos; toggleCaso agrega/quita ids de este set).
const expandedCasoIds = new Set(casos.map(caso => caso.id));

document.addEventListener('DOMContentLoaded', () => {
  renderHeroContent('all');
  renderHeaderMetrics();
  renderAreasCards();
  renderHeuristicsTable();
  renderFindings();
  setupEventListeners();
});

function renderHeroContent(areaId) {
  const content = heroContent[areaId] || heroContent.all;

  const titleEl = document.getElementById('hero-title');
  if (titleEl) {
    // Sin espacio antes de una coma o punto en el sufijo (ej. ", de la duda...")
    const suffixSeparator = /^[,.]/.test(content.titleSuffix) ? '' : ' ';
    titleEl.innerHTML = `${content.titlePrefix} <span class="italic text-terracotta font-normal underline decoration-terracotta/40 underline-offset-8">${content.titleAccent}</span>${suffixSeparator}${content.titleSuffix}`;
  }

  const labelEl = document.getElementById('hero-summary-label');
  if (labelEl) labelEl.textContent = content.summaryLabel;

  const paragraphsEl = document.getElementById('hero-paragraphs');
  if (paragraphsEl) {
    paragraphsEl.innerHTML = content.paragraphs.map((p, i) => {
      const cls = i === 0
        ? 'font-reading text-lg md:text-xl text-[#1E3025] leading-relaxed'
        : 'font-reading text-sm text-[#2D4536] leading-relaxed';
      return `<p class="${cls}">${p}</p>`;
    }).join('');
  }
}

function renderHeuristicsTable() {
  const body = document.getElementById('heuristics-table-body');
  if (!body) return;

  body.innerHTML = nielsenHeuristics.map(h => `
    <tr class="border-b border-[#D4DCD0] align-top hover:bg-white/50 transition-colors">
      <td class="py-3 pr-4 font-code text-xs font-bold text-terracotta whitespace-nowrap">${h.id}</td>
      <td class="py-3 pr-4 font-ui text-sm font-bold text-forest-dark">${h.name}</td>
      <td class="py-3 font-reading text-sm text-[#2A3E32] leading-snug">${h.adaptedContext}</td>
    </tr>
  `).join('');
}

// Ancho de barra proporcional a "count" sobre el total de hallazgos (0 si no
// hay hallazgos todavía, para no dividir por cero).
function barWidth(count, total) {
  return total > 0 ? `${Math.round((count / total) * 100)}%` : '0%';
}

function renderHeaderMetrics() {
  const total = allFindings.length;
  const criticaCount = allFindings.filter(f => f.severidad === 'Crítica').length;
  const mayorCount = allFindings.filter(f => f.severidad === 'Mayor').length;
  const menorCount = allFindings.filter(f => f.severidad === 'Menor').length;
  const recomendacionCount = allFindings.filter(f => f.severidad === 'Recomendación').length;
  const revisarCount = allFindings.filter(f => f.severidad === 'A revisar').length;

  // Cifra destacada del scorecard: hallazgos Críticos + Mayores sobre el
  // total de hallazgos relevados (no un "score" de salud, que no forma
  // parte de la metodología real de este informe).
  const scoreMayorEl = document.getElementById('metric-score-mayor');
  if (scoreMayorEl) scoreMayorEl.textContent = criticaCount + mayorCount;
  const scoreTotalEl = document.getElementById('metric-score-total');
  if (scoreTotalEl) scoreTotalEl.textContent = total;

  const totalEl = document.getElementById('metric-total-findings');
  if (totalEl) totalEl.textContent = total;

  const criticaEl = document.getElementById('metric-critica-count');
  if (criticaEl) criticaEl.textContent = criticaCount;
  const criticaBarEl = document.getElementById('metric-critica-bar');
  if (criticaBarEl) criticaBarEl.style.width = barWidth(criticaCount, total);

  const mayorEl = document.getElementById('metric-mayor-count');
  if (mayorEl) mayorEl.textContent = mayorCount;
  const mayorBarEl = document.getElementById('metric-mayor-bar');
  if (mayorBarEl) mayorBarEl.style.width = barWidth(mayorCount, total);

  const menorEl = document.getElementById('metric-menor-count');
  if (menorEl) menorEl.textContent = menorCount;
  const menorBarEl = document.getElementById('metric-menor-bar');
  if (menorBarEl) menorBarEl.style.width = barWidth(menorCount, total);

  const recomendacionEl = document.getElementById('metric-recomendacion-count');
  if (recomendacionEl) recomendacionEl.textContent = recomendacionCount;
  const recomendacionBarEl = document.getElementById('metric-recomendacion-bar');
  if (recomendacionBarEl) recomendacionBarEl.style.width = barWidth(recomendacionCount, total);

  const revisarEl = document.getElementById('metric-arevisar-count');
  if (revisarEl) revisarEl.textContent = revisarCount;
  const revisarBarEl = document.getElementById('metric-arevisar-bar');
  if (revisarBarEl) revisarBarEl.style.width = barWidth(revisarCount, total);
}

function renderAreasCards() {
  const container = document.getElementById('areas-grid-container');
  if (!container) return;

  container.innerHTML = auditAreas.map(area => {
    const isSelected = currentArea === area.id;
    const activeClass = isSelected 
      ? 'border-[#C2593F] bg-[#DEE5DA] shadow-md ring-2 ring-[#C2593F]/40' 
      : 'border-[#CBD5C7] bg-[#E2E8DF] hover:border-[#112017]';

    return `
      <div onclick="filterByArea('${area.id}')" 
           class="p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${activeClass}">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-ui text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-white/70 border border-[#CBD5C7] text-[#112017]">
              ${area.badge}
            </span>
            <span class="font-ui text-xs font-bold ${area.score < 60 ? 'text-[#C2593F]' : 'text-[#2D4536]'}">
              Salud: ${area.score}/100
            </span>
          </div>
          <h3 class="font-hero text-2xl sm:text-3xl font-normal text-[#112017] mb-1">
            ${area.name}
          </h3>
          <a href="${area.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()" 
             class="font-code text-[11px] text-[#55695D] hover:text-[#C2593F] underline inline-block mb-3">
            ${area.url} ↗
          </a>
          <p class="font-reading text-sm text-[#273B2F] leading-relaxed mb-4">
            ${area.description}
          </p>
        </div>
        <div class="pt-3 border-t border-[#BAC5B7] flex items-center justify-between font-ui text-xs text-[#526659]">
          <span>Hallazgos: <strong>${area.findingsCount.critica + area.findingsCount.mayor + area.findingsCount.menor + area.findingsCount.recomendacion + area.findingsCount.aRevisar}</strong></span>
          <span class="text-[#C2593F] font-bold">${area.findingsCount.mayor} Mayores</span>
        </div>
      </div>
    `;
  }).join('');
}

const SEVERITY_BADGES = {
  'Crítica': { bg: 'bg-terracotta', textCol: 'text-white' },
  'Mayor': { bg: 'bg-amber-600', textCol: 'text-white' },
  'Menor': { bg: 'bg-[#405648]', textCol: 'text-white' },
  'Recomendación': { bg: 'bg-emerald-700', textCol: 'text-white' },
  'A revisar': { bg: 'bg-salvia-muted', textCol: 'text-white' }
};

// Nombre corto de un viewport ("Escritorio (1440×900)" -> "Escritorio"),
// para no repetir la resolución en columnas/etiquetas compactas.
function shortViewportLabel(viewport) {
  return viewport.split(' (')[0];
}

// Todos los viewports en los que un hallazgo aplica: el viewport donde se
// detectó originalmente, más cualquier viewport de sus "verificaciones"
// cuyo resultado no sea "no-aplica" (es decir, donde se confirmó que se
// replica o aparece como variante).
function getApplicableViewports(h) {
  const verified = (h.verificaciones || [])
    .filter(v => v.resultado !== 'no-aplica')
    .map(v => v.viewport);
  return [h.viewport, ...verified];
}

function renderFindings() {
  const container = document.getElementById('findings-container');
  if (!container) return;

  // Filtra los casos por área (pestaña activa), y dentro de cada caso
  // filtra sus hallazgos por severidad y por búsqueda de texto.
  const visibleCasos = casos
    .filter(caso => currentArea === 'all' || caso.areaId === currentArea)
    .map(caso => {
      const hallazgosFiltrados = caso.hallazgos.filter(h => {
        const matchSeverity = currentSeverity === 'all' || h.severidad === currentSeverity;
        const search = currentSearch.toLowerCase();
        const matchSearch = !search ||
          h.titulo.toLowerCase().includes(search) ||
          h.descripcionHtml.toLowerCase().includes(search) ||
          h.heuristicaNombre.toLowerCase().includes(search) ||
          h.clasificacion.toLowerCase().includes(search);
        return matchSeverity && matchSearch;
      });
      return { caso, hallazgosFiltrados };
    })
    .filter(({ hallazgosFiltrados }) => hallazgosFiltrados.length > 0);

  const totalVisible = visibleCasos.reduce((acc, { hallazgosFiltrados }) => acc + hallazgosFiltrados.length, 0);
  const countEl = document.getElementById('visible-findings-count');
  if (countEl) countEl.textContent = `${totalVisible} hallazgo(s) encontrado(s)`;

  if (totalVisible === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="5" class="p-12 text-center">
          <p class="font-reading text-lg text-[#55695D] italic">No se encontraron hallazgos con los filtros seleccionados.</p>
          <button onclick="resetFilters()" class="mt-3 px-4 py-1.5 rounded-lg bg-[#112017] text-[#E8ECE6] font-ui text-xs font-bold">
            Restablecer Filtros
          </button>
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = visibleCasos.map(({ caso, hallazgosFiltrados }) => {
    // Un filtro de severidad o búsqueda activo expande automáticamente el
    // caso para que los resultados filtrados queden visibles; si no hay
    // filtros activos, se respeta el estado de expansión manual (colapsado
    // por defecto).
    const filtersActive = currentSeverity !== 'all' || currentSearch !== '';
    const isExpanded = filtersActive || expandedCasoIds.has(caso.id);

    const headerRow = `
      <tr class="bg-[#DEE5DA] border-t-2 border-b border-salvia-border">
        <td colspan="5" class="px-3 py-2">
          <div class="flex items-center gap-2">
            <button onclick="toggleCaso(${caso.id}, event)" aria-expanded="${isExpanded}" aria-label="${isExpanded ? 'Colapsar' : 'Expandir'} hallazgos del caso ${caso.numero}"
                    class="w-6 h-6 flex items-center justify-center rounded border border-[#BAC5B7] bg-white text-[#3C5245] hover:text-terracotta hover:border-terracotta transition-all shrink-0">
              <span class="inline-block text-xs transition-transform duration-150 ${isExpanded ? 'rotate-90' : ''}">▸</span>
            </button>
            <a href="./caso.html?id=${caso.id}" class="flex items-center gap-2 group flex-1 min-w-0">
              <span class="font-code font-bold text-xs text-[#112017] px-2 py-0.5 rounded bg-white border border-[#BAC5B7] whitespace-nowrap shrink-0">
                CASO ${caso.numero}
              </span>
              <span class="font-ui text-sm font-bold text-forest-dark group-hover:text-terracotta transition-colors truncate min-w-0">
                ${caso.titulo}
              </span>
              <span class="font-ui text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold bg-white text-[#526659] border border-[#CBD5C7] whitespace-nowrap shrink-0">
                ${hallazgosFiltrados.length} hallazgo${hallazgosFiltrados.length === 1 ? '' : 's'}
              </span>
            </a>
          </div>
        </td>
      </tr>
    `;

    if (!isExpanded) return headerRow;

    const hallazgoRows = hallazgosFiltrados.map(h => {
      const sev = SEVERITY_BADGES[h.severidad] || SEVERITY_BADGES['Menor'];
      return `
        <tr class="border-b border-[#D4DCD0] hover:bg-white/60 transition-colors cursor-pointer" onclick="window.location.href='./caso.html?id=${caso.id}#hallazgo-${h.numero}'">
          <td class="px-3 py-3">
            <span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold ${sev.bg} ${sev.textCol}">
              ${h.severidad}
            </span>
          </td>
          <td class="px-3 py-3 font-ui text-sm text-forest-dark font-semibold">
            ${h.titulo}
          </td>
          <td class="px-3 py-3 font-ui text-xs text-[#526659]">
            ${h.heuristicaNombre}
          </td>
          <td class="px-3 py-3 font-ui text-xs text-[#526659]">
            ${h.clasificacion}
          </td>
          <td class="px-3 py-3 font-ui text-xs text-[#526659]">
            ${getApplicableViewports(h).map(shortViewportLabel).join(', ')}
          </td>
        </tr>
      `;
    }).join('');

    return headerRow + hallazgoRows;
  }).join('');
}

window.toggleCaso = function(casoId, event) {
  if (event) event.preventDefault();
  if (expandedCasoIds.has(casoId)) {
    expandedCasoIds.delete(casoId);
  } else {
    expandedCasoIds.add(casoId);
  }
  renderFindings();
};

function setupEventListeners() {
  // Búsqueda en tiempo real
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderFindings();
    });
  }

  // Filtro de severidad
  const sevFilter = document.getElementById('severity-filter');
  if (sevFilter) {
    sevFilter.addEventListener('change', (e) => {
      currentSeverity = e.target.value;
      renderFindings();
    });
  }
}

// Funciones globales accesibles desde onclick
window.filterByArea = function(areaId) {
  currentArea = areaId;

  // Actualizar botones de navegación
  const buttons = document.querySelectorAll('.nav-area-btn');
  buttons.forEach(btn => {
    if (btn.dataset.area === areaId) {
      btn.className = 'nav-area-btn px-4 py-2 rounded-t-lg bg-[#112017] text-[#E8ECE6] font-ui text-xs font-bold';
    } else {
      btn.className = 'nav-area-btn px-4 py-2 rounded-t-lg text-[#3C5245] hover:text-[#112017] font-ui text-xs font-semibold';
    }
  });

  renderHeroContent(areaId);
  renderAreasCards();
  renderFindings();
};

window.resetFilters = function() {
  currentArea = 'all';
  currentSeverity = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  const sevFilter = document.getElementById('severity-filter');
  if (sevFilter) sevFilter.value = 'all';

  filterByArea('all');
};

// Colapsa/expande la tabla de las 10 Heurísticas de Nielsen (colapsada por
// defecto); el encabezado, título y descripción de la sección siempre
// quedan visibles.
window.toggleHeuristicsTable = function() {
  const wrapper = document.getElementById('heuristics-table-wrapper');
  const icon = document.getElementById('heuristics-toggle-icon');
  const btn = document.getElementById('heuristics-toggle');
  if (!wrapper) return;

  const willExpand = wrapper.hidden;
  wrapper.hidden = !willExpand;

  if (icon) icon.classList.toggle('rotate-90', willExpand);
  if (btn) {
    btn.setAttribute('aria-expanded', String(willExpand));
    btn.setAttribute('aria-label', willExpand ? 'Colapsar tabla de heurísticas' : 'Expandir tabla de heurísticas');
  }
};
