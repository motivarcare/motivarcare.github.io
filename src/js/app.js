import { auditMetadata, auditAreas, nielsenHeuristics, auditFindings } from './audit-data.js';

let currentArea = 'all';
let currentSeverity = 'all';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {
  renderHeaderMetrics();
  renderAreasCards();
  renderFindings();
  setupEventListeners();
});

function renderHeaderMetrics() {
  const scoreEl = document.getElementById('metric-global-score');
  if (scoreEl) scoreEl.textContent = auditMetadata.healthScoreGlobal;

  const totalEl = document.getElementById('metric-total-findings');
  if (totalEl) totalEl.textContent = auditFindings.length;

  const criticalCount = auditFindings.filter(f => f.severity === 'critical').length;
  const criticalEl = document.getElementById('metric-critical-count');
  if (criticalEl) criticalEl.textContent = criticalCount;

  const majorCount = auditFindings.filter(f => f.severity === 'major').length;
  const majorEl = document.getElementById('metric-major-count');
  if (majorEl) majorEl.textContent = majorCount;
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
          <span>Hallazgos: <strong>${area.findingsCount.critical + area.findingsCount.major + area.findingsCount.minor}</strong></span>
          <span class="text-[#C2593F] font-bold">${area.findingsCount.critical} Críticos</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderFindings() {
  const container = document.getElementById('findings-container');
  if (!container) return;

  const filtered = auditFindings.filter(finding => {
    const matchArea = currentArea === 'all' || finding.areaId === currentArea;
    const matchSeverity = currentSeverity === 'all' || finding.severity === currentSeverity;
    const matchSearch = !currentSearch || 
      finding.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      finding.description.toLowerCase().includes(currentSearch.toLowerCase()) ||
      finding.heuristicName.toLowerCase().includes(currentSearch.toLowerCase());
    return matchArea && matchSeverity && matchSearch;
  });

  const countEl = document.getElementById('visible-findings-count');
  if (countEl) countEl.textContent = `${filtered.length} hallazgo(s) encontrado(s)`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center border border-dashed border-[#BAC5B7] rounded-xl bg-[#DFE5DC]">
        <p class="font-reading text-lg text-[#55695D] italic">No se encontraron hallazgos con los filtros seleccionados.</p>
        <button onclick="resetFilters()" class="mt-3 px-4 py-1.5 rounded-lg bg-[#112017] text-[#E8ECE6] font-ui text-xs font-bold">
          Restablecer Filtros
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(finding => {
    const severityBadges = {
      critical: { text: 'Crítico', bg: 'bg-[#C2593F]', textCol: 'text-white' },
      major: { text: 'Mayor', bg: 'bg-amber-600', textCol: 'text-white' },
      minor: { text: 'Menor', bg: 'bg-[#405648]', textCol: 'text-white' },
      opportunity: { text: 'Oportunidad', bg: 'bg-emerald-700', textCol: 'text-white' }
    };
    const sev = severityBadges[finding.severity] || severityBadges.minor;

    return `
      <article class="p-6 md:p-8 rounded-xl border border-[#CBD5C7] bg-[#F1F5EF] hover:border-[#112017] transition-all card-finding shadow-sm space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4DCD0] pb-3">
          <div class="flex items-center gap-2">
            <span class="font-code font-bold text-xs text-[#112017] px-2 py-0.5 rounded bg-[#DEE5DA] border border-[#BAC5B7]">
              ${finding.id}
            </span>
            <span class="font-ui text-[11px] uppercase tracking-wider font-bold text-[#55695D]">
              ${finding.areaName}
            </span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold ${sev.bg} ${sev.textCol}">
              Severidad: ${sev.text}
            </span>
          </div>
        </div>

        <div>
          <span class="font-ui text-[10px] uppercase tracking-widest text-[#C2593F] font-bold block mb-1">
            ${finding.heuristicName}
          </span>
          <h3 class="font-hero text-2xl sm:text-3xl text-[#112017] leading-tight font-normal">
            ${finding.title}
          </h3>
        </div>

        <p class="font-reading text-base text-[#24392D] leading-relaxed">
          ${finding.description}
        </p>

        <!-- Bloque de impacto para el negocio y el usuario (Enfoque Stakeholders) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div class="p-3.5 rounded-lg bg-[#E4EBE0] border border-[#CBD5C7] text-xs space-y-1">
            <strong class="font-ui text-[10px] uppercase tracking-wider text-[#112017] font-bold block">
              // Impacto en Negocio & Conversión
            </strong>
            <p class="font-reading text-[#2A3E32] leading-snug">
              ${finding.businessImpact}
            </p>
          </div>
          <div class="p-3.5 rounded-lg bg-[#E4EBE0] border border-[#CBD5C7] text-xs space-y-1">
            <strong class="font-ui text-[10px] uppercase tracking-wider text-[#C2593F] font-bold block">
              // Impacto Emocional en el Paciente
            </strong>
            <p class="font-reading text-[#2A3E32] leading-snug">
              ${finding.emotionalImpact}
            </p>
          </div>
        </div>

        <!-- Recomendación accionable -->
        <div class="p-4 rounded-lg bg-[#DEE6DA] border-l-4 border-[#112017] space-y-1">
          <span class="font-ui text-[10px] uppercase tracking-widest font-bold text-[#112017] block">
            Recomendación de Diseño & Solución
          </span>
          <p class="font-reading text-sm text-[#1A2C21] leading-relaxed">
            ${finding.recommendation}
          </p>
          <div class="flex items-center gap-4 pt-2 font-ui text-xs text-[#526659]">
            <span>Esfuerzo estimado: <strong class="text-[#112017]">${finding.effort}</strong></span>
            <span>Retorno de inversión: <strong class="text-[#C2593F]">${finding.roi}</strong></span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

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
