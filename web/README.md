# web · Portal interno

Portal de trabajo de MotivarCare. Muestra el estado de cada frente, sus documentos y sus materiales. **Todo el contenido sale de los archivos `.md` del repositorio**: al editar un `.md`, el portal se actualiza solo.

Está hecho con [Astro](https://astro.build/), con los estilos del investor deck (Fraunces + Manrope, crema, verdes bosque, salvia y acento amarillo).

## Cómo correrlo

Necesita Node.js 18.20.8 o más nuevo.

```bash
cd web
npm install      # solo la primera vez, o cuando cambie package.json
npm run dev      # abre el portal en http://localhost:4321
```

Con `npm run dev` andando, cualquier cambio en un `.md` (agregar, editar o borrar) se ve al instante en el navegador.

Otros comandos:

- `npm run build`: genera el sitio estático en `web/dist/`.
- `npm run preview`: sirve la versión generada para revisarla.

## De dónde sale cada página

| Página | Archivo |
|---|---|
| Inicio (`/`) | `00-resumen/index.md` |
| Página de cada frente (`/05-auditoria/`) | `README.md` de la carpeta del frente |
| Documentos de un frente | Cualquier otro `.md` dentro de la carpeta del frente, en cualquier subcarpeta |
| Materiales de un frente | Todos los archivos que no son `.md` (pptx, docx, imágenes, html…), con enlace a GitHub |
| Contexto (`/contexto/`) | `contexto.md` en la raíz |

**Caso especial: Design system.** La página de `04-design-system` muestra el `README.md` de ese frente en forma visual. Cada sección `##` lleva una muestra, y las tablas de Color, Tipografía, Personas y sesiones, Formas y elevación y Movimiento se convierten en muestras (colores con su contraste, especímenes tipográficos, glifos, radios y animaciones). Si se edita una tabla, la muestra cambia. La lógica está en `src/lib/ds.ts` y `src/components/ds/`.

### Encabezado (frontmatter) de cada frente

El `README.md` de cada frente empieza con este bloque. El portal lo usa para la tarjeta de la portada y la cabecera de la página:

```yaml
---
titulo: Auditoría
numero: "05"
estado: en-curso        # sin-iniciar | en-curso | en-revision | completado
resumen: "Una o dos frases sobre el frente."
actualizado: 2026-10-14
proximos_pasos:
  - "Primer paso pendiente."
  - "Segundo paso pendiente."
---
```

Opcionalmente, un frente puede destacar sus trabajos principales con el campo `iniciativas`. Cada una se muestra como una tarjeta con imagen, estado y botón:

```yaml
iniciativas:
  - titulo: Investor deck
    tipo: Presentación
    fecha: Octubre 2026
    estado: en-revision
    descripcion: "Qué es y qué contiene."
    imagen: /img/comercial/investor-deck.jpg   # archivo dentro de web/public/
    enlace: /decks/investor-deck/index.html     # página del portal o URL externa
    boton: Ver el investor deck
```

Un frente también puede mostrar una **grilla de tarjetas** con imagen debajo de la cabecera (por ejemplo, para enlazar documentos), con el campo `tarjetas`. Y con `ancho: completo`, el texto del README usa todo el ancho de la página y los paneles de próximos pasos, documentos y materiales van debajo, algo útil para las tablas anchas:

```yaml
ancho: completo        # normal (por defecto) | completo
materiales: false      # oculta el panel de materiales (por defecto se muestra)
complementarios:       # panel "Materiales complementarios" con enlaces directos a archivos sueltos
  - titulo: Alternativas para "¿Cómo estás hoy?"
    archivo: exploraciones/animo-alternativas.png   # ruta dentro de la carpeta del frente
    descripcion: "Exploración"  # opcional
tarjetas:
  - titulo: BetterHelp
    etiqueta: EE. UU. · suscripción semanal              # opcional, va arriba del título
    frase: "La conversación con el terapeuta como pantalla principal."
    imagen: /img/investigacion/betterhelp.jpg             # archivo dentro de web/public/, en 4:3
    enlace: /01-investigacion/competencia/res-betterhelp/ # página del portal o URL externa
    boton: Ver el análisis                                # por defecto, "Ver más"
```

La grilla va debajo de la cabecera. Para ubicarla en otro lugar del texto, se escribe `<div data-tarjetas></div>` en una línea propia del README, donde tiene que aparecer. En GitHub esa línea no se ve.

Los demás `.md` de un frente (los documentos) también aceptan el campo `tarjetas` en su encabezado, con la misma marca para ubicarlas en el texto. En la parte del texto que va después de la marca, las imágenes tienen que usar rutas de `web/public/` (por ejemplo, `/img/...`), no rutas relativas.

### Encabezado de la portada

```yaml
---
titulo: Título grande de la portada, con una *palabra* destacada
bajada: Frase que va debajo del título.
actualizado: 2026-10-14
---
```

La palabra entre `*asteriscos*` del título lleva el subrayado amarillo ondulante del investor deck.

### Documentos

Los documentos no necesitan encabezado. El título se toma del primer `# Título` del archivo. Opcionalmente se puede agregar:

```yaml
---
titulo: Título que reemplaza al del archivo
estado: en-revision
---
```

### Referencias a otros frentes

En cualquier `.md`, una carpeta de frente escrita como código se muestra en el portal como un enlace con el nombre de la página. En GitHub se sigue viendo el nombre de la carpeta.

| En el `.md` | En el portal |
|---|---|
| `` `05-auditoria` ``, `` `05-auditoria/` `` o `` `05-auditoria/README.md` `` | Enlace "05 · Auditoría" a la página del frente |
| `` `01-investigacion/competencia/RES-clearly.md` `` | Enlace "01 · Investigación › (título del documento)" al documento |
| `` `00-resumen/index.md` `` | Enlace "Portada del portal" a la portada |
| `` `05-auditoria/bitacora-auditoria-ux/` `` (una carpeta u otro archivo) | Enlace "05 · Auditoría", seguido de `bitacora-auditoria-ux/` |

Las rutas que no empiezan con la carpeta de un frente (por ejemplo `web/public/landing/`) no cambian. La lógica está en `src/lib/rehype-frentes.mjs`.

## Estructura del código

```
web/
├── astro.config.mjs        configuración (permite leer las carpetas del repo)
├── src/content.config.ts   qué .md se leen y qué campos lleva cada uno
├── src/lib/portal.ts       utilidades: estados, URLs, listado de materiales
├── src/layouts/Base.astro  estructura común: barra superior y pie
├── src/components/         logo, chip de estado, ilustración de la portada (la del investor deck), mapa de frentes
├── src/pages/              portada, página de frente, documento y contexto
├── src/styles/global.css   estilos (paleta y tipografía del investor deck)
├── public/img/             imágenes del portal (fotos de la portada e imágenes de las iniciativas)
├── public/decks/           investor deck en HTML (02-comercial)
└── public/landing/         propuesta de nueva landing pública (08-landing-page): HTML, CSS y JS propios, sin depender del portal
```
