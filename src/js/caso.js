import { casos, auditAreas } from './audit-data.js';

const SEVERITY_STYLES = {
  'Mayor': { bg: 'bg-amber-600', text: 'text-white' },
  'Menor': { bg: 'bg-[#405648]', text: 'text-white' },
  'Recomendación': { bg: 'bg-emerald-700', text: 'text-white' }
};

const VERIFICATION_STYLES = {
  'replica': { label: 'Se replica', bg: 'bg-[#F8EAE6]', border: 'border-terracotta/40', text: 'text-terracotta' },
  'no-aplica': { label: 'No aplica / no se replica', bg: 'bg-[#E4EBE0]', border: 'border-[#CBD5C7]', text: 'text-[#405648]' },
  'variante': { label: 'Variante', bg: 'bg-[#FDF4E3]', border: 'border-amber-600/40', text: 'text-amber-700' }
};

function severityBadge(severidad) {
  const s = SEVERITY_STYLES[severidad] || SEVERITY_STYLES['Menor'];
  return `<span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold ${s.bg} ${s.text}">Severidad: ${severidad}</span>`;
}

function evidenceGallery(evidencia) {
  if (!evidencia || evidencia.length === 0) return '';
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
      ${evidencia.map(ev => `
        <a href="${ev.src}" target="_blank" rel="noopener" class="block rounded-lg overflow-hidden border border-[#CBD5C7] bg-white/60 hover:border-forest-ink transition-all">
          <img src="${ev.src}" alt="${ev.caption}" class="w-full h-auto block" loading="lazy" />
          <span class="block px-3 py-2 font-ui text-[11px] text-[#526659]">${ev.caption}</span>
        </a>
      `).join('')}
    </div>
  `;
}

function verificationBlock(v) {
  const style = VERIFICATION_STYLES[v.resultado] || VERIFICATION_STYLES['variante'];
  return `
    <div class="p-4 rounded-lg border ${style.border} ${style.bg} space-y-2">
      <div class="flex flex-wrap items-center gap-2 font-ui text-[11px] uppercase tracking-wider font-bold">
        <span class="${style.text}">${style.label}</span>
        <span class="text-[#526659]">· Viewport: ${v.viewport}</span>
      </div>
      <p class="font-reading text-sm text-[#24392D] leading-relaxed">${v.textoHtml}</p>
      ${evidenceGallery(v.evidencia)}
    </div>
  `;
}

function hallazgoBlock(h) {
  return `
    <article id="hallazgo-${h.numero}" class="p-6 md:p-8 rounded-xl border border-[#CBD5C7] bg-[#F1F5EF] shadow-sm space-y-4 scroll-mt-24">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#D4DCD0] pb-3">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="font-code font-bold text-xs text-[#112017] px-2 py-0.5 rounded bg-[#DEE5DA] border border-[#BAC5B7]">
            Hallazgo ${h.numero}
          </span>
          <span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-white border border-[#CBD5C7] text-[#3C5245]">
            ${h.clasificacion}
          </span>
          <span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-white border border-[#CBD5C7] text-[#3C5245]">
            Viewport: ${h.viewport}
          </span>
        </div>
        ${severityBadge(h.severidad)}
      </div>

      <div>
        <span class="font-ui text-[10px] uppercase tracking-widest text-terracotta font-bold block mb-1">
          ${h.heuristicaNombre}
        </span>
        <h3 class="font-hero text-2xl sm:text-3xl text-[#112017] leading-tight font-normal">
          ${h.titulo}
        </h3>
      </div>

      <div class="font-reading text-base text-[#24392D] leading-relaxed">
        ${h.descripcionHtml}
      </div>

      ${h.notaHtml ? `
        <div class="p-3.5 rounded-lg bg-[#E4EBE0] border border-[#CBD5C7] text-xs">
          <strong class="font-ui text-[10px] uppercase tracking-wider text-[#112017] font-bold block mb-1">Nota</strong>
          <p class="font-reading text-[#2A3E32] leading-snug">${h.notaHtml}</p>
        </div>
      ` : ''}

      ${evidenceGallery(h.evidencia)}

      <div class="p-4 rounded-lg bg-[#DEE6DA] border-l-4 border-[#112017] space-y-1">
        <span class="font-ui text-[10px] uppercase tracking-widest font-bold text-[#112017] block">
          Recomendación de Diseño & Solución
        </span>
        <p class="font-reading text-sm text-[#1A2C21] leading-relaxed">
          ${h.recomendacion}
        </p>
      </div>

      ${h.verificaciones && h.verificaciones.length > 0 ? `
        <div class="space-y-3 pt-2">
          <span class="font-ui text-[10px] uppercase tracking-widest font-bold text-[#526659] block">
            Verificación en otros viewports
          </span>
          ${h.verificaciones.map(verificationBlock).join('')}
        </div>
      ` : ''}
    </article>
  `;
}

function render() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const caso = casos.find(c => c.id === id);

  const notFoundEl = document.getElementById('caso-not-found');
  const contentEl = document.getElementById('caso-content');

  if (!caso) {
    notFoundEl.classList.remove('hidden');
    contentEl.classList.add('hidden');
    return;
  }

  const area = auditAreas.find(a => a.id === caso.areaId);

  document.getElementById('page-title').textContent = `Caso ${caso.numero} — ${caso.titulo} · Auditoría UX MotivarCare`;

  document.getElementById('caso-badges').innerHTML = `
    <span class="font-code font-bold text-xs text-[#112017] px-2 py-0.5 rounded bg-[#DEE5DA] border border-[#BAC5B7]">
      Caso ${caso.numero}
    </span>
    <span class="font-ui text-[11px] uppercase tracking-wider font-bold text-[#55695D]">
      ${area ? area.name : caso.areaName}
    </span>
    <span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold border ${caso.estado === 'Completado' ? 'bg-emerald-700 text-white border-emerald-700' : 'bg-white text-[#3C5245] border-[#CBD5C7]'}">
      ${caso.estado}
    </span>
    <span class="font-ui text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-bold bg-white text-[#3C5245] border border-[#CBD5C7]">
      Idioma: ${caso.idioma}
    </span>
  `;

  document.getElementById('caso-titulo').textContent = caso.titulo;
  document.getElementById('caso-descripcion').innerHTML = caso.descripcionHtml;

  document.getElementById('caso-pasos').innerHTML = caso.pasosRealizados.map(p => `<li>${p}</li>`).join('');

  document.getElementById('caso-hallazgos').innerHTML = caso.hallazgos.map(hallazgoBlock).join('');

  document.getElementById('caso-feedback').innerHTML = caso.feedbackPositivo.map(f => `<li>${f}</li>`).join('');

  // Si la URL trae un ancla a un hallazgo específico, hacer scroll hacia él.
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant', block: 'start' }));
    }
  }
}

document.addEventListener('DOMContentLoaded', render);
