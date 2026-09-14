# MotivarCare — Informe de Auditoría UX

> **Sitio oficial del informe:** [motivarcare.github.io](https://motivarcare.github.io/)  
> **Fecha:** Septiembre 2026  
> **Metodología:** 10 Heurísticas de Nielsen adaptadas a Telepsicología & Salud Mental

---

## 🎯 Áreas Auditadas
1. **Landing Page Pública:** `https://www.motivarcare.com/` (Adquisición, propuesta de valor y confianza de entrada)
2. **Experiencia del Paciente:** `https://app.motivarcare.com/` (Matching de psicólogo, reserva de turno, sala de espera y videoconsulta)
3. **Portal del Profesional:** `https://pro.motivarcare.com/` (Gestión de agenda, validación de matrícula y consulta clínica)

---

## 🎨 Dirección Visual del Informe (Estilo Opción 7)
* **Base:** Papel Salvia Sereno (`#E8ECE6`) con retícula técnica de ingeniería médica.
* **Tinta principal:** Bosque profundo / Carbón vegetal (`#112017`).
* **Color de acento:** Terracota Óxido (`#C2593F`).
* **Tipografía Hero (Nivel 1):** *Instrument Serif* (escala monumental de alto impacto estético).
* **Tipografía de Lectura Regular:** *Newsreader* (100% Serif para todos los párrafos y diagnósticos).
* **Tipografía de Metadatos y Chips:** *Plus Jakarta Sans* y *Space Mono*.

---

## 🚀 Cómo Probar Localmente

1. Abre una terminal en esta carpeta (`motivarcare.github.io`):
```bash
npm install
npm run dev
```

2. El servidor local abrirá automáticamente:
```
http://localhost:3000/
```

### Despliegue Automático en GitHub Pages:
El repositorio cuenta con un flujo de trabajo automatizado en `.github/workflows/deploy.yml`. Cada vez que hagas `git push` a `main` (o `master`), GitHub Actions se encargará automáticamente de:
1. Instalar las dependencias (`npm ci`).
2. Compilar el proyecto con Vite (`npm run build`).
3. Publicar el paquete estático directamente en GitHub Pages.

*(Para compilar manualmente en local, puedes ejecutar `npm run build`, lo que generará la carpeta `dist/`).*

---

## 📁 Estructura del Proyecto
```text
motivarcare.github.io/
├── index.html              # Plantilla HTML principal del informe
├── package.json            # Scripts de Vite (dev, build, preview)
├── vite.config.js          # Configuración de rutas y servidor
├── src/
│   ├── css/
│   │   └── style.css       # Fuentes Google y retícula salvia
│   └── js/
│       ├── audit-data.js   # Datos estructurados (las 3 áreas, 10 heurísticas y hallazgos)
│       └── app.js          # Lógica de renderizado, filtros por área y severidad
└── README.md
```