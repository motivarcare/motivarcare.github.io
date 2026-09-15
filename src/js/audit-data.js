/**
 * audit-data.js
 * Base de datos estructurada para el informe interactivo de Auditoría UX MotivarCare.
 * Enfoque: Directivos/Stakeholders + Equipo de Diseño y Desarrollo.
 */

export const auditMetadata = {
  title: "Auditoría de Experiencia de Usuario (UX) & Confianza Digital",
  client: "MotivarCare",
  date: "Septiembre 2026",
  version: "1.0",
  methodology: "10 Heurísticas de Nielsen adaptadas a Telepsicología y Salud Mental",
  executiveSummary: "Estudio pericial enfocado en detectar y resolver las fugas de conversión y barreras emocionales que afectan al paciente en la toma de decisión para iniciar terapia virtual, así como en optimizar la fluidez operativa del profesional de la salud mental."
};

/**
 * heroContent
 * Título y texto explicativo de la sección principal (hero), dinámico según
 * la pestaña activa: "all" (general) o el id de una de las 3 áreas.
 * Explica en qué consiste el trabajo / cada área, sin adelantar hallazgos.
 */
export const heroContent = {
  all: {
    summaryLabel: "// Resumen del trabajo",
    titlePrefix: "Un diagnóstico integral de la",
    titleAccent: "experiencia de confianza",
    titleSuffix: "en MotivarCare.",
    paragraphs: [
      "Este informe reúne una auditoría integral de experiencia de usuario (UX) sobre los 3 entornos digitales de MotivarCare: la landing pública, la aplicación del paciente y el portal del profesional. Cada pantalla se evalúa bajo las <strong>10 Heurísticas de Usabilidad de Nielsen</strong>, adaptadas a las exigencias particulares de la salud mental digital: confianza, claridad, privacidad y reducción de fricción en momentos de vulnerabilidad emocional.",
      "Está pensado como una herramienta de consulta viva para la toma de decisiones: útil tanto para la dirección y stakeholders de negocio —que necesitan un diagnóstico estratégico con impacto en conversión y retención— como para los equipos de diseño y desarrollo, que necesitan hallazgos accionables y priorizados."
    ]
  },
  landing: {
    summaryLabel: "// Área 1 · Landing Page Pública",
    titlePrefix: "El",
    titleAccent: "primer contacto",
    titleSuffix: "público con MotivarCare.",
    paragraphs: [
      "Evalúa <strong>www.motivarcare.com</strong>, la puerta de entrada para cualquier persona que busca iniciar terapia online antes de registrarse. Se analiza cómo comunica su propuesta de valor, la credibilidad médica inicial (matrícula, respaldo profesional), la transparencia de tarifas y la claridad del llamado a la acción para comenzar el proceso.",
      "Perfil simulado: <strong>usuario no registrado</strong>. Es el momento de mayor motivación pero también de mayor incertidumbre: cualquier duda no resuelta en los primeros segundos incrementa el riesgo de abandono."
    ]
  },
  patient: {
    summaryLabel: "// Área 2 · Experiencia del Paciente",
    titlePrefix: "El camino del",
    titleAccent: "paciente",
    titleSuffix: ", desde el contacto inicial hasta la consulta.",
    paragraphs: [
      "Evalúa <strong>app.motivarcare.com</strong>, el flujo completo desde el triaje o la búsqueda guiada de un/a terapeuta, la selección de horario y la sincronización de husos horarios, hasta la pasarela de pago y el ingreso a la videoconsulta.",
      "Perfil simulado: <strong>paciente</strong>. Es la etapa de mayor fricción operativa, donde los errores de agenda, cobro o conexión tienen el mayor costo emocional."
    ]
  },
  professional: {
    summaryLabel: "// Área 3 · Portal del Profesional",
    titlePrefix: "La",
    titleAccent: "operación diaria",
    titleSuffix: "del profesional de la salud mental.",
    paragraphs: [
      "Evalúa <strong>pro.motivarcare.com</strong>, el entorno de gestión para psicólogos y psicólogas: configuración de agenda y zonas horarias, historial de pacientes y sala de consulta clínica.",
      "Perfil simulado: <strong>profesional</strong>. La eficiencia y previsibilidad de este entorno impactan directamente en la calidad percibida del servicio y en la retención de terapeutas en la plataforma."
    ]
  }
};

/**
 * auditAreas
 * NOTA: "score" y "status" son todavía valores provisorios (no recalculados
 * a partir del trabajo de auditoría real) — pendiente de revisión. Solo
 * "findingsCount" refleja datos reales, tomados de "casos" más abajo.
 */
export const auditAreas = [
  {
    id: "landing",
    name: "Landing Page Pública",
    url: "https://www.motivarcare.com/",
    badge: "Adquisición & Confianza",
    description: "Primer pliegue de contacto con el paciente potencial. Evalúa la claridad de la propuesta de valor, la credibilidad médica inicial, la transparencia de costos y el llamado a la acción (CTA) para iniciar terapia.",
    score: 68,
    status: "Revisión Prioritaria",
    findingsCount: { critica: 0, mayor: 1, menor: 3, recomendacion: 2, aRevisar: 0 }
  },
  {
    id: "patient",
    name: "Experiencia del Paciente",
    url: "https://app.motivarcare.com/",
    badge: "Conversión & Retención",
    description: "Flujo integral del usuario desde el triaje o búsqueda de terapeuta, selección de horario, pasarela de pago, hasta la sala de espera virtual y la realización de la videoconsulta.",
    score: 59,
    status: "Revisión Prioritaria",
    findingsCount: { critica: 1, mayor: 8, menor: 12, recomendacion: 8, aRevisar: 1 }
  },
  {
    id: "professional",
    name: "Portal del Profesional",
    url: "https://pro.motivarcare.com/",
    badge: "Operación & Eficiencia",
    description: "Entorno de gestión para los psicólogos: validación de matrícula/colegiatura, configuración de horarios y zonas horarias, historial de pacientes y sala de consulta clínica.",
    score: 64,
    status: "Pendiente de auditoría",
    findingsCount: { critica: 0, mayor: 0, menor: 0, recomendacion: 0, aRevisar: 0 }
  }
];

export const nielsenHeuristics = [
  {
    id: "H01",
    name: "H1. Visibilidad del estado del sistema",
    adaptedContext: "Claridad inmediata sobre el estado de la reserva, pasos completados del triaje y confirmación de la sala de espera virtual antes de la sesión."
  },
  {
    id: "H02",
    name: "H2. Coincidencia con el mundo real",
    adaptedContext: "Uso de vocabulario clínico empático, cálido y no estigmatizante. Eliminación de tecnicismos informáticos en momentos de vulnerabilidad."
  },
  {
    id: "H03",
    name: "H3. Control y libertad del usuario",
    adaptedContext: "Facilidad para cancelar, reprogramar sin fricciones punitivas o retroceder durante el cuestionario de triaje emocional sin perder datos."
  },
  {
    id: "H04",
    name: "H4. Consistencia y estándares",
    adaptedContext: "Coherencia estética y funcional entre la landing institucional, la app del paciente y el panel del terapeuta."
  },
  {
    id: "H05",
    name: "H5. Prevención de errores",
    adaptedContext: "Prevención de discrepancias en husos horarios entre países, verificación de micrófono/cámara previa a la sesión y alertas de sesión expirada."
  },
  {
    id: "H06",
    name: "H6. Reconocimiento antes que recuerdo",
    adaptedContext: "Fichas de terapeutas con especialidades claras, enfoque clínico (TCC, psicoanálisis, etc.) y honorarios visibles sin rebuscar."
  },
  {
    id: "H07",
    name: "H7. Flexibilidad y eficiencia de uso",
    adaptedContext: "Sistemas de matching guiado en 3 pasos para nuevos pacientes y accesos directos para agendamiento recurrente."
  },
  {
    id: "H08",
    name: "H8. Estética sobria y minimalismo antiestrés",
    adaptedContext: "Reducción de sobrecarga cognitiva; diseño limpio que no fatigue ni genere ansiedad sensorial en el paciente."
  },
  {
    id: "H09",
    name: "H9. Diagnóstico y recuperación de errores",
    adaptedContext: "Mensajes humanos y tranquilizadores ante fallos de cobro o desconexión en videollamada, con alternativa de WhatsApp o teléfono directo."
  },
  {
    id: "H10",
    name: "H10. Confidencialidad médica y soporte",
    adaptedContext: "Garantías explícitas de secreto profesional médico, cifrado de sesiones y acceso directo a asistencia humana en crisis."
  }
];

/**
 * casos
 * Casos de la Bitácora de Auditoría UX (ver /bitacora-auditoria-ux en el
 * repositorio de trabajo). Cada caso agrupa uno o más "hallazgos", cada
 * hallazgo con su propia severidad, heurística, clasificación y viewport.
 *
 * Severidades reales usadas en todo el proyecto: "Crítica", "Mayor", "Menor",
 * "Recomendación", "A revisar" (de mayor a menor prioridad; "A revisar" es
 * para hallazgos que probablemente no impliquen ninguna acción).
 */
export const casos = [
  {
    id: 1,
    numero: "01",
    slug: "caso-01-landing-page-consistencia-visual",
    areaId: "landing",
    areaName: "Landing Page Pública",
    titulo: "Landing Page pública — consistencia visual (composición, tipografía y color) en escritorio, tablet y móvil",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Recorrido completo de la landing pública (<strong>https://www.motivarcare.com/</strong>) navegado bajo el perfil de <strong>usuario no registrado</strong>, en tres pasadas: modo escritorio (ventana de 1440×900, con Chrome), modo tablet (768×1024, recorrido y evaluado con el navegador integrado, con capturas de evidencia puntuales tomadas con Chrome) y modo móvil (375×812, pasada rápida de cierre). El foco de las tres pasadas es específicamente la <strong>consistencia de las decisiones de composición</strong>, la <strong>paleta de color</strong> y las <strong>elecciones tipográficas</strong> a lo largo de toda la página — no se evaluó la interacción con el widget de chat “Escribirle a Maca” (fuera de alcance).",
    pasosRealizados: [
      "Se abrió www.motivarcare.com en Chrome, con la ventana redimensionada a 1440×900 (resolución de escritorio).",
      "Se recorrió la página de punta a punta mediante scroll progresivo, capturando cada sección: hero, tarjetas destacadas, “Psicólogos certificados”, “Cuatro pasos para empezar”, “¿Quiénes somos?”, Maca (asistente IA), Precios, Reviews, FAQ y footer.",
      "Se inspeccionaron con zoom los elementos que mostraban variaciones visuales entre sí.",
      "A partir de la revisión manual del Evaluador UX, se navegó además app.motivarcare.com y pro.motivarcare.com únicamente para comparar el logo de cabecera de cada portal (sin evaluar el resto de esos portales, que corresponde a casos aparte).",
      "No se interactuó con el widget de chat “Escribirle a Maca” (se deja para un caso aparte).",
      "Pasada en tablet: se repitió el recorrido de www.motivarcare.com con viewport emulado de 768×1024, usando el navegador integrado para el relevamiento y la evaluación. Se recorrió la página de punta a punta, verificando si los hallazgos de la pasada de escritorio se replican y si aparecen inconsistencias nuevas propias de este breakpoint.",
      "Para los puntos que requerían quedar documentados con una captura guardada, se abrió el mismo sitio con el mismo viewport (768×1024) en Chrome, ya que el navegador integrado no tiene forma de guardar capturas como archivo.",
      "Pasada rápida en móvil (cierre del caso): a pedido del Evaluador UX, se hizo una revisión rápida en modo móvil (375×812, navegador integrado) sin volver a evaluar uno por uno los hallazgos ya confirmados en escritorio/tablet — el Evaluador UX confirmó que todo lo reportado para tablet se verifica también en móvil —, buscando únicamente inconsistencias nuevas propias de este breakpoint.",
      "Durante esa revisión, el navegador integrado mostró texto y títulos cortados/truncados en el borde derecho en varias secciones. Al verificar el mismo recorrido en Chrome con una ventana real de 375×812, el texto se veía completo y bien ajustado en todas esas secciones — no se reprodujo el corte. Se concluyó que fue un artefacto de la emulación de viewport móvil del navegador integrado, no un problema real del sitio, y no se documentó como hallazgo."
    ],
    feedbackPositivo: [
      "El botón de acción primario (“Ingresar”, “Comienza hoy en motivarcare.com”, “Reservar la primera sesión”) mantiene el mismo degradado azul→verde-azulado y la misma forma de píldora en todas las secciones relevadas: es el elemento más consistente de la página.",
      "La sección “Psicólogos certificados” usa un set de íconos de línea coherente entre sí (formación, experiencia, compromiso).",
      "El espaciado generoso entre secciones y la ausencia de elementos parpadeantes o intrusivos (fuera del widget de chat, no evaluado en este caso) están alineados con el criterio de “estética sobria y minimalismo antiestrés” (H8) esperable en un producto de salud mental.",
      "El patrón de acordeón en FAQ es estándar y predecible; su color índigo/violeta, al usarse siempre de forma consistente entre sí, no se considera un problema.",
      "En tablet, la grilla 2×2 de “Cuatro pasos para empezar” se adapta bien (4 tarjetas, sin huecos ni desbordes) — a diferencia de la grilla de 5 tarjetas destacadas (ver Hallazgo 5), acá el número par de ítems evita el problema.",
      "En móvil, la grilla de 5 tarjetas destacadas pasa a 1 columna y resuelve sola el problema del Hallazgo 5 (sin ítems huérfanos ni huecos)."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "El logo “MotivarCare” tiene 3 tratamientos distintos entre la landing, la app del paciente y el portal del profesional",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Mayor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "El isotipo + wordmark de MotivarCare aparece con un tratamiento diferente entre la landing y la app del paciente:<ul class=\"list-disc pl-5 space-y-1 mt-2\"><li><strong>Landing (www.motivarcare.com):</strong> ícono de corazón en outline con degradado azul→verde-azulado, wordmark en dos colores (“motivar” en azul oscuro + “care” en verde-azulado) y tagline “TU BIENESTAR, SIN ESPERAS” debajo.</li><li><strong>App del paciente (app.motivarcare.com):</strong> ícono de corazón sólido con línea de latido, en color índigo/violeta liso (sin degradado), wordmark “MotivarCare” en una sola palabra y un solo color (índigo), sin tagline.</li></ul><p class=\"mt-2\">Son 2 combinaciones distintas de ícono, color y tipografía para la misma marca, en 2 de las puertas de entrada al producto.</p>",
        notaHtml: "También se navegó pro.motivarcare.com, pero solo se llegó a la pantalla de acceso (sin autenticarse como profesional), que muestra un ícono acompañado del texto “Portal Profesional” en lugar del wordmark de marca. Como no se pudo verificar el logo real dentro del portal (requiere sesión de profesional), no se incluye ese dato como parte de este hallazgo — queda pendiente.",
        recomendacion: "Definir un único lockup de marca (mismo ícono, mismos colores/degradado, misma tipografía y mismo criterio de tagline) y aplicarlo sin variaciones entre la landing y la app del paciente. Extender la revisión al portal del profesional una vez que se pueda acceder autenticado.",
        evidencia: [
          { src: "capturas/caso-01/hallazgo-logo-landing.png", caption: "Logo en la landing" },
          { src: "capturas/caso-01/hallazgo-logo-app-paciente.png", caption: "Logo en la app del paciente" }
        ],
        verificaciones: []
      },
      {
        numero: 2,
        titulo: "Elementos sin función clara superpuestos a la fotografía de portada (hero)",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Dos observaciones sobre la imagen de portada del hero:<ol class=\"list-decimal pl-5 space-y-1 mt-2\"><li>Una línea diagonal punteada blanca atraviesa el rostro de la persona en la fotografía, sin una función aparente (no es parte de una animación con propósito visible, ni un elemento interactivo).</li><li>Sobre la fotografía se apoya un panel blanco con degradado a transparente, pensado para dar legibilidad al texto — pero ese panel tiene una altura menor a la de la fotografía completa, lo que genera un quiebre visual entre el panel y el resto de la imagen.</li></ol>",
        recomendacion: "Quitar la línea punteada si no cumple una función, o darle un propósito visual claro. Extender el panel de contraste a la altura completa de la fotografía (o rediseñar la superposición) para eliminar el quiebre visual entre ambos.",
        evidencia: [
          { src: "capturas/caso-01/hallazgo-hero-linea-punteada.jpg", caption: "Línea punteada sobre el rostro" },
          { src: "capturas/caso-01/hallazgo-hero-panel-vs-foto.jpg", caption: "Borde inferior del panel vs. borde inferior de la foto" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "no-aplica",
            textoHtml: "No se replica. A este ancho el hero cambia de composición: la fotografía ocupa el ancho completo sin ningún panel superpuesto ni línea punteada, y el título/texto pasan a ubicarse debajo de la imagen, sobre fondo plano. Es un patrón distinto al de escritorio, no una variación del mismo problema.",
            evidencia: [{ src: "capturas/caso-01/01-hero-general-tablet.jpg", caption: "Hero en tablet" }]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "Sigue sin replicarse, confirmado por el Evaluador UX (el hero mantiene la composición de tablet: foto completa, sin panel ni línea punteada).",
            evidencia: []
          }
        ]
      },
      {
        numero: 3,
        titulo: "Varias fotografías de personas se perciben artificiales / poco creíbles",
        heuristicaId: "H02",
        heuristicaNombre: "H2 — Coincidencia con el mundo real",
        severidad: "Recomendación",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Varias de las fotografías de personas usadas en la landing (portada del hero, “¿Quiénes somos?”, “Psicólogos certificados”) tienen una apariencia muy pulida y artificial, compatible con imágenes generadas por IA o banco de stock genérico. En un producto de salud mental, donde la confianza humana es un factor central de conversión, esto puede jugar en contra de la credibilidad percibida.",
        recomendacion: "Evaluar el reemplazo progresivo de estas imágenes por fotografía real (de pacientes/profesionales, con los consentimientos correspondientes) o por banco de imágenes con un grado de naturalidad mayor, priorizando la pieza más visible: la foto del hero.",
        evidencia: [
          { src: "capturas/caso-01/01-hero-general.jpg", caption: "Hero" },
          { src: "capturas/caso-01/03-psicologos-certificados-general.jpg", caption: "Psicólogos certificados" },
          { src: "capturas/caso-01/04-quienes-somos-general.jpg", caption: "¿Quiénes somos?" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se replica sin cambios — son las mismas fotografías, reutilizadas tal cual entre breakpoints.",
            evidencia: [
              { src: "capturas/caso-01/01-hero-general-tablet.jpg", caption: "Hero en tablet" },
              { src: "capturas/caso-01/03-psicologos-certificados-general-tablet.jpg", caption: "Psicólogos certificados en tablet" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se replica, confirmado por el Evaluador UX.",
            evidencia: []
          }
        ]
      },
      {
        numero: 4,
        titulo: "Scroll horizontal interno en el carrusel de Reviews",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "La sección “Reviews” muestra las tarjetas de testimonios dentro de un contenedor con su propia scrollbar horizontal, visible de forma permanente debajo de las tarjetas. Es el único punto de la página con un scroll interno propio (inner scroll) — el resto del sitio se navega únicamente con el scroll vertical de la ventana —, lo que rompe el patrón de navegación esperado y puede pasar desapercibido o resultar incómodo en dispositivos sin scroll horizontal nativo (por ejemplo, mouse sin rueda lateral).",
        recomendacion: "Ocultar la scrollbar nativa y depender únicamente de las flechas de navegación que ya existen arriba a la derecha de la sección, o reemplazar el patrón por un carrusel con paginación (dots) sin scrollbar visible.",
        evidencia: [
          { src: "capturas/caso-01/hallazgo-reviews-scroll-horizontal.jpg", caption: "Scroll horizontal en Reviews (escritorio)" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se replica. El contenedor de Reviews sigue mostrando su propia scrollbar horizontal (la tercera tarjeta queda parcialmente cortada por el borde del viewport), con el mismo comportamiento que en escritorio.",
            evidencia: [{ src: "capturas/caso-01/hallazgo-reviews-scroll-horizontal-tablet.jpg", caption: "Scroll horizontal en Reviews (tablet)" }]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se replica, confirmado por el Evaluador UX y observado también por Claude durante la pasada rápida (2 tarjetas visibles y la tercera cortada por el borde, mismo patrón).",
            evidencia: []
          }
        ]
      },
      {
        numero: 5,
        titulo: "En tablet, la grilla de tarjetas destacadas deja un ítem huérfano con un hueco vacío al lado",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "La sección de tarjetas destacadas debajo del hero (“Desde cualquier lugar”, “Conexión en minutos”, “Inteligencia artificial a la medida”, “Miles de psicólogos en Latinoamérica”, “Acompañamiento que hace bien”) tiene 5 tarjetas. En escritorio se acomodan en una grilla de varias columnas sin problema, pero en tablet la grilla pasa a 2 columnas: las primeras 4 tarjetas completan 2 filas parejas, y la quinta (“Acompañamiento que hace bien”) queda sola en una tercera fila, con un espacio vacío grande a su derecha. No se detectó este mismo quiebre en la grilla de 2×2 de “Cuatro pasos para empezar” (esa sección tiene 4 ítems, número par, por lo que no genera huérfano) — es un problema puntual de esta sección por tener una cantidad impar de tarjetas.",
        recomendacion: "Para este breakpoint, evaluar alguna de estas opciones: pasar la grilla a 1 columna (evita el hueco, cada tarjeta ocupa el ancho completo), agregar una sexta tarjeta para volver el número par, o hacer que la última tarjeta ocupe el ancho completo de la fila cuando sobra sola.",
        evidencia: [
          { src: "capturas/caso-01/hallazgo-tablet-tarjeta-huerfana.jpg", caption: "Tarjeta huérfana en la grilla (tablet)" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "No aplica. En móvil la grilla pasa a 1 sola columna (las 5 tarjetas se apilan verticalmente), por lo que no queda ningún ítem huérfano ni hueco vacío — el problema es específico del layout de 2 columnas de tablet.",
            evidencia: []
          }
        ]
      },
      {
        numero: 6,
        titulo: "Margen izquierdo escaso en el contenido alineado a la izquierda (header y sección “Maca · Cuando necesite hablar”)",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En los bloques de contenido alineados a la izquierda (no centrados), el margen respecto del borde izquierdo del viewport queda muy ajustado — aproximadamente 16px —, tanto para el logo del header como para el eyebrow, el título y el párrafo de la sección “Maca · Cuando necesite hablar”. Ese margen se percibe más escaso que en el resto del sitio, donde buena parte del contenido está centrado o vive dentro de tarjetas con su propio padding interno (lo que da sensación de más “aire” alrededor, aunque el margen de página de base sea similar). Además, como el logo del header está tan pegado al borde y es de tamaño reducido, pierde presencia de marca.",
        recomendacion: "Aumentar el margen/padding horizontal del contenido alineado a la izquierda (header y secciones tipo “Maca”), y evaluar agrandar levemente el isotipo + wordmark del header para darle más presencia.",
        evidencia: [
          { src: "capturas/caso-01/hallazgo-margen-header-logo-tablet.png", caption: "Logo del header" },
          { src: "capturas/caso-01/hallazgo-margen-maca-seccion-tablet.jpg", caption: "Eyebrow, título y párrafo de la sección Maca" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se replica, confirmado por el Evaluador UX.",
            evidencia: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    numero: "02",
    slug: "caso-02-signup-paciente",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    titulo: "Sign-up del paciente — creación de cuenta y pasos de bienvenida, en escritorio, tablet y móvil",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Recorrido del flujo completo de alta de una cuenta nueva de paciente en <strong>https://app.motivarcare.com/</strong>, navegado bajo el perfil de <strong>paciente</strong> en proceso de registro. El objetivo fue llegar hasta la creación efectiva de la cuenta y recorrer la serie de pasos de bienvenida que le siguen (cuestionario inicial de matching, integración opcional de calendario, sugerencia de psicólogos y tour guiado del panel), sin llegar a reservar una sesión real (eso queda para un caso aparte). Los datos de prueba (nombre, apellido, email y contraseña) fueron provistos por el Evaluador UX a pedido de Claude. Se hicieron tres pasadas: escritorio (ventana de 1440×900, con Chrome), tablet (viewport de 768×1024, con Chrome) y móvil (viewport de 375×812, con el navegador integrado de Claude, con dos verificaciones puntuales cruzadas en Chrome real).",
    pasosRealizados: [
      "Se abrió app.motivarcare.com en Chrome (1440×900). Se accedió al formulario de creación de cuenta desde “¿Es tu primera vez en MotivarCare? Crear una cuenta”.",
      "Se completó el formulario (Nombre: GASTON F, Apellido: MARTINO, Email y contraseña provistos por el Evaluador UX) y se envió. La cuenta se creó, pero la app mostró una pantalla de verificación de email obligatoria (“Revisa tu correo para continuar”), bloqueando visualmente el acceso.",
      "El Evaluador UX revisó su correo y pasó el link de verificación recibido (sin saberlo en ese momento, ya lo había abierto/clickeado él mismo antes de pasarlo, con lo cual la cuenta ya había quedado verificada). Al navegar ese mismo link desde Claude, el link ya estaba consumido y mostró error (“Este enlace no sirvió para confirmar el correo”). Al tocar “Ir al inicio”, la app mostró el dashboard ya autenticado — pero como una cuenta distinta, preexistente en esa sesión de Chrome (no la cuenta de prueba recién creada), lo cual se detectó al revisar “Mis datos” y ver un email y nombre distintos a los ingresados. Se frenó de inmediato y se avisó al Evaluador UX (ver Hallazgo 1). No se modificó nada en esa cuenta.",
      "Por indicación del Evaluador UX, se hizo logout completo y se repitió el caso desde cero con los mismos datos de prueba.",
      "Al intentar crear la cuenta de nuevo con el mismo email, la app respondió correctamente con “Ese email ya tiene cuenta...” (la cuenta del paso 2 sí había quedado creada). Se inició sesión en su lugar — la cuenta ya estaba verificada — y el login llevó directo al cuestionario de bienvenida, sin ninguna fricción.",
      "Se completó el cuestionario inicial de matching (9 pasos): tipo de terapia y motivos de consulta, objetivos de la terapia, preferencias sobre el/la psicólogo/a, tipo de enfoque terapéutico, experiencia previa en terapia, estado de ánimo actual, red de apoyo, y una pregunta de seguridad obligatoria sobre ideas de autolesión en las últimas 2 semanas.",
      "En la pregunta de seguridad (paso 9/9) se eligió deliberadamente “A veces” para verificar el comportamiento de la plataforma ante una respuesta de riesgo — un chequeo directamente relacionado con H10 (Confidencialidad médica y soporte). Se documenta el resultado en el Hallazgo 2.",
      "Se completó el cuestionario con la respuesta “No” para poder continuar el flujo. Se pasó por el paso opcional de integración con Google Calendar (se lo saltó con “Lo hago después”) y por la pantalla de psicólogos sugeridos (“Más tarde”), llegando al dashboard del paciente, donde apareció además un tour guiado del panel (“Un tour con Maca”, 9 pasos) — no se recorrió completo, ya que excede el alcance definido para este caso.",
      "No se llegó a reservar ninguna sesión de prueba ni se interactuó con “Escribirle a Maca” — quedan para casos aparte.",
      "Verificación de accesibilidad por teclado (a pedido del Evaluador UX): se creó una segunda cuenta de prueba para recorrer los 9 pasos del cuestionario desde cero, exclusivamente con teclado (Tab/Shift+Tab, Espacio, Enter, sin mouse). Se completaron los 9 pasos íntegramente por teclado: selector de tipo de terapia, chips de selección múltiple y única (hasta 19 opciones), combos nativos de preferencia y la pregunta de seguridad final — todos alcanzables y operables sin mouse. Se registra el resultado en el Hallazgo 5.",
      "Pasada en tablet (768×1024): se repitió el recorrido con la ventana de Chrome redimensionada a 768×1024, verificando login, sign-up, dashboard y psicólogos sugeridos, para chequear si los Hallazgos 1 a 5 se replican y si aparecen problemas nuevos propios de este breakpoint.",
      "Para chequear el cuestionario de 9 pasos en tablet se creó una tercera cuenta de prueba y se recorrieron los 9 pasos completos en este viewport, prestando atención a las grillas de tarjetas con más ítems (19 motivos en el paso 2, 9 objetivos en el paso 3). Se completaron sin inconvenientes de layout.",
      "Pasada en móvil (375×812), a pedido del Evaluador UX: se repitió el recorrido con el navegador integrado de Claude emulando 375×812, verificando login, sign-up, dashboard y menú de cuenta. Se creó una cuarta cuenta de prueba para recorrer el cuestionario completo desde cero en este viewport.",
      "Dos observaciones puntuales de esta pasada se cruzaron con Chrome real antes de documentarlas, por precaución ante falsos positivos de la emulación móvil del navegador integrado: la posible marca de agua del Hallazgo 4 (el Evaluador UX la revisó personalmente y confirmó que no está presente en este viewport) y un texto cortado en el menú de cuenta (ver Hallazgo 8), verificado primero por código y luego reproducido de forma idéntica en una ventana de Chrome real."
    ],
    feedbackPositivo: [
      "El mensaje “Progreso guardado. Si salís, podés seguir después.” en cada paso del cuestionario comunica con claridad que no hay riesgo de perder el avance (H1).",
      "La pantalla de “Apoyo inmediato” ante la pregunta de seguridad está muy bien resuelta en tono y contenido: mensaje empático, recursos concretos de Argentina (línea de crisis y emergencias médicas con teléfonos), aviso de que se envían por correo, y salida clara — más allá de la contradicción señalada en el Hallazgo 2.",
      "El mensaje de error al intentar crear una cuenta con un email ya registrado es claro y accionable: “Ese email ya tiene cuenta. Podés iniciar sesión con la contraseña que usaste, o pedir recuperar acceso si no la recordás.”",
      "En el paso “¿Qué tipo de terapia preferís?”, cada enfoque terapéutico (TCC, psicodinámica, humanista, etc.) viene acompañado de una descripción breve en lenguaje simple — útil para quien no conoce la jerga clínica, en línea con H2.",
      "La pantalla de psicólogos sugeridos muestra el % de match y las etiquetas de especialidad que coinciden con los motivos de consulta elegidos, dando una razón visible de por qué se sugiere cada profesional.",
      "La integración con Google Calendar se ofrece como un paso opcional, con un botón “Lo hago después” igual de visible que “Conectar ahora” — no se fuerza la conexión de una cuenta externa para poder avanzar.",
      "Los 9 pasos del cuestionario de bienvenida son completamente navegables y operables con teclado (Tab/Shift+Tab, Espacio y Enter alcanzan y accionan cada tarjeta, combo y botón), sin ningún control que dependa exclusivamente del mouse — un punto fuerte de accesibilidad, con solo el detalle menor señalado en el Hallazgo 5.",
      "En tablet (768×1024), el cuestionario de 9 pasos se adapta correctamente en todas sus grillas de tarjetas (incluida la de 19 ítems del paso 2), sin generar ningún ítem huérfano ni desborde — a diferencia de lo detectado en tablet en el Caso 01. El dashboard reorganiza su navegación en una barra inferior de pestañas, un patrón mobile-friendly apropiado.",
      "En móvil (375×812), el formulario de “Crear una cuenta” se ve completo, sin ningún recorte de texto — nombre, apellido, email, contraseña y repetir contraseña se leen enteros con buen espaciado.",
      "En móvil, la pantalla de login muestra el formulario completo (título, campos y botón “Entrar”) sin necesidad de scroll, resolviendo mejor que tablet el problema de jerarquía visual señalado en el Hallazgo 6.",
      "El dashboard en móvil reutiliza el mismo patrón de barra inferior de pestañas visto en tablet, y usa carruseles horizontales deslizables de forma consistente para contenido secundario — un patrón mobile-friendly reconocible."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "Un link de verificación ya usado puede terminar mostrando el dashboard de una cuenta distinta, sin ninguna advertencia",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Crítica",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Al hacer clic en “Ir al inicio” desde la pantalla de error de un link de verificación ya usado, la app no mostró el login ni un mensaje sobre la cuenta nueva — mostró directamente el dashboard ya autenticado de <strong>otra cuenta</strong>, que ya tenía una sesión activa guardada en ese navegador. No hubo ningún indicio visual de que se trataba de una cuenta distinta a la recién creada; recién se detectó al abrir “Mis datos” y ver un nombre y email diferentes a los ingresados en el sign-up.<p class=\"mt-2\"><strong>Causa confirmada mediante test controlado:</strong> el Evaluador UX planteó como hipótesis que el origen era tener varias pestañas de Chrome abiertas y haber cerrado sesión (logout) en solo una de ellas. Claude reprodujo el escenario de forma controlada: se abrieron dos pestañas (A y B), se inició sesión con la cuenta de prueba en la pestaña A, y se confirmó que la pestaña B también mostraba la sesión activa. Luego se cerró sesión únicamente en la pestaña A, lo que la devolvió correctamente al login. Al navegar y recargar (F5) la pestaña B a continuación, <strong>la pestaña B siguió completamente autenticada</strong>, sin pedir login ni mostrar ningún aviso.</p><p class=\"mt-2\">Esto confirma la hipótesis: el logout no invalida la sesión del lado del servidor de forma global — solo limpia el estado de la pestaña/contexto donde se ejecutó la acción. Cualquier otra pestaña del mismo navegador que ya tuviera una sesión iniciada permanece autenticada indefinidamente después de un logout. Este es, muy probablemente, el mecanismo exacto que produjo el incidente original.</p><p class=\"mt-2\">Más allá de la causa puntual, el problema de UX original sigue siendo real: la app nunca comunica en qué cuenta está parado el usuario, ni distingue entre “no autenticado”, “autenticado con la cuenta nueva” y “autenticado con otra cuenta preexistente”.</p>",
        recomendacion: "Corregir que el logout invalide la sesión del lado del servidor (no solo borre el estado local de la pestaña activa), de forma que cualquier otra pestaña o contexto del mismo navegador quede deslogueado también en su próxima acción. Además, tras un error en el link de verificación, “Ir al inicio” debería llevar siempre a un estado neutral y explícito (login, o una pantalla que confirme claramente qué cuenta está activa) en vez de depender silenciosamente de la sesión que encuentre en el navegador.",
        evidencia: [
          { src: "capturas/caso-02/07-hallazgo1-test-pestanaB-antes-logout.jpg", caption: "Pestaña B autenticada, antes de cualquier logout" },
          { src: "capturas/caso-02/10-hallazgo1-test-pestanaA-login-tras-logout.jpg", caption: "Pestaña A: login inmediatamente después de “Cerrar sesión”" },
          { src: "capturas/caso-02/08-hallazgo1-test-pestanaB-despues-logout-pestanaA.jpg", caption: "Pestaña B sigue autenticada pese al logout en A" },
          { src: "capturas/caso-02/09-hallazgo1-test-pestanaB-tras-reload-F5.jpg", caption: "Pestaña B, tras un F5 completo, sigue autenticada" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "no-aplica",
            textoHtml: "No se repitió el test controlado en este viewport. Es un problema de manejo de sesión del lado del servidor, no de layout/CSS, por lo que no depende del ancho de pantalla — se espera que se comporte igual en tablet.",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "Tampoco se repitió el test controlado en este viewport, por el mismo motivo (problema de backend, no de layout).",
            evidencia: []
          }
        ]
      },
      {
        numero: 2,
        titulo: "El mensaje “No guardamos este cuestionario” ante una respuesta de riesgo no es cierto",
        heuristicaId: "H09",
        heuristicaNombre: "H9 — Diagnóstico y recuperación de errores",
        severidad: "Mayor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "En el último paso del cuestionario (pregunta de seguridad obligatoria: “En las últimas 2 semanas, ¿tuviste ideas de autolesión?”), elegir una opción distinta de “No” muestra una pantalla de “Apoyo inmediato” con recursos de ayuda y el texto: “Gracias por tu tiempo. <strong>No guardamos este cuestionario</strong>; podés volver a registrarte cuando te sientas en condiciones.” Sin embargo, al cerrar esa pantalla (quedando deslogueado) y volver a iniciar sesión con la misma cuenta, la app mostró “Retomamos donde lo habías dejado” en el paso 9/9, <strong>con la misma respuesta de riesgo todavía seleccionada</strong>. Es decir: el cuestionario completo sí había quedado guardado, contradiciendo directamente lo que la pantalla le informó al usuario en el momento más sensible de todo el flujo.",
        recomendacion: "Corregir la contradicción: si por diseño no se debe guardar la respuesta a esta pregunta (o el cuestionario completo) por motivos de privacidad, hay que asegurarse de que el backend efectivamente no la persista. Si en cambio sí se guarda a propósito (por ejemplo, para que un profesional humano revise el caso), el mensaje al paciente debería decir la verdad — la confianza en este tipo de mensajes es crítica en un producto de salud mental.",
        evidencia: [
          { src: "capturas/caso-02/03-paso9-pregunta-autolesion-apoyo-inmediato.jpg", caption: "Mensaje “No guardamos este cuestionario”" },
          { src: "capturas/caso-02/04-paso9-respuesta-guardada-al-reingresar.jpg", caption: "Misma respuesta ya seleccionada al volver a entrar" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "no-aplica",
            textoHtml: "No se volvió a probar con una respuesta de riesgo en este viewport. Es un problema de contenido/persistencia de datos en el backend, no de layout, por lo que no se espera que dependa del viewport — queda como pendiente si se quiere una confirmación visual dedicada.",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "Tampoco se probó con una respuesta de riesgo en este viewport. Mismo pendiente que en tablet.",
            evidencia: []
          }
        ]
      },
      {
        numero: 3,
        titulo: "Nombre y apellido se guardan sin normalizar (tal cual se tipean)",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Recomendación",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "El formulario de sign-up no normaliza mayúsculas/minúsculas en Nombre y Apellido: al escribir “GASTON F” / “MARTINO” (en mayúsculas, sin tilde), esos valores se guardan y se muestran tal cual en todo el resto de la app (título del cuestionario, saludo, etc. — ej. “GASTON F MARTINO, armamos tu perfil”), en lugar de presentarse con formato de nombre propio (“Gastón F. Martino”). En un producto clínico, donde el nombre del paciente puede aparecer en pantallas compartidas con el profesional, un dato ingresado con mayúsculas sostenidas o errores de tipeo queda así de forma permanente.",
        recomendacion: "Aplicar un formato consistente de nombre propio (capitalizar la primera letra de cada palabra) al guardar o al mostrar Nombre/Apellido, o al menos ofrecer la posibilidad de corregirlo fácilmente desde “Mis datos”.",
        evidencia: [
          { src: "capturas/caso-02/02-paso1-cuestionario-inicial.jpg", caption: "Nombre sin normalizar en el cuestionario" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se replica sin cambios. “GASTON F MARTINO” sigue apareciendo en mayúsculas sostenidas en el título del cuestionario y en el menú de cuenta.",
            evidencia: [
              { src: "capturas/caso-02/15-dashboard-tablet-nombre-sin-normalizar.jpg", caption: "Nombre sin normalizar en el menú de cuenta (tablet)" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se replica sin cambios. “GASTON F MARTINO” aparece igual, sin normalizar, tanto en el título del cuestionario como en el menú de cuenta.",
            evidencia: [
              { src: "capturas/caso-02/16-menu-cuenta-mobile-idioma-cortado.jpg", caption: "Nombre sin normalizar en la cabecera del menú de cuenta (móvil)" }
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo: "Marca de agua de un banco de imágenes visible en la foto de fondo del login",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "La pantalla de login (panel izquierdo) usa una fotografía de stock (living/escritorio con vista al mar) que conserva una marca de agua semitransparente, “@sunt_mrr”, superpuesta sobre el cielo en la esquina superior derecha de la imagen — visible aunque tenue, al tratarse de texto claro sobre un fondo también claro. Da la impresión de una licencia de imagen mal gestionada (foto de preview o sin comprar/exportar en su versión final) y resta profesionalismo a la primera pantalla que ve cualquier usuario, paciente o profesional, antes de loguearse.",
        recomendacion: "Reemplazar la imagen por la versión con licencia final (sin marca de agua) del mismo banco de imágenes, o por una fotografía propia/comprada sin restricciones. Verificar la licencia de uso de esta imagen específica antes de que la plataforma salga a producción.",
        evidencia: [
          { src: "capturas/caso-02/11-login-marca-agua-imagen-stock.png", caption: "Zoom sobre la marca de agua (escritorio)" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se replica, y es más visible que en escritorio. La misma foto se usa sin recortar, y al ocupar el viewport completo en este breakpoint (ver Hallazgo 6) la marca de agua se ve proporcionalmente más grande.",
            evidencia: [
              { src: "capturas/caso-02/13-login-tablet-marca-agua-zoom.png", caption: "Zoom sobre la marca de agua (tablet)" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "No se replica. El Evaluador UX revisó personalmente la pantalla de login en móvil en su propio navegador y confirmó que la marca de agua no está presente en este viewport (probablemente por el recorte/compresión que sufre la imagen decorativa a este ancho, ver Hallazgo 6).",
            evidencia: []
          }
        ]
      },
      {
        numero: 5,
        titulo: "El foco de teclado no se mueve al inicio de cada paso nuevo del cuestionario",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Recomendación",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Los 9 pasos del cuestionario de bienvenida <strong>sí son completamente navegables y operables con teclado</strong> (Tab/Shift+Tab, Espacio, Enter) — este fue el objetivo principal de la verificación y quedó confirmado sin bloqueos: todas las tarjetas de selección, el selector de tipo de terapia y los combos de preferencias son alcanzables y accionables sin mouse. Sin embargo, se observó un detalle menor: al avanzar de un paso a otro con “Continuar”, el foco de teclado no se mueve al título o primer control del nuevo paso — queda anclado en el mismo botón “Continuar”. Es funcional, pero no es la experiencia ideal para una persona que navega con lector de pantalla, ya que no se anuncia el nuevo título del paso al llegar.",
        recomendacion: "Al completar la transición entre pasos del cuestionario, mover programáticamente el foco de teclado hacia el título del nuevo paso (con <code>tabindex=\"-1\"</code> + <code>.focus()</code>, patrón estándar para wizards accesibles). Esto es una mejora de pulido, no un bloqueante: el cuestionario ya es usable de punta a punta solo con teclado.",
        evidencia: [],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "no-aplica",
            textoHtml: "No se repitió la navegación exclusivamente por teclado en este viewport (interacción principal táctil). El comportamiento de foco depende del mismo código de la aplicación en todos los breakpoints, por lo que no se espera que varíe.",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "Tampoco se repitió por teclado en este viewport (interacción principal táctil). Mismo razonamiento que en tablet.",
            evidencia: []
          }
        ]
      },
      {
        numero: 6,
        titulo: "En tablet, la pantalla de login se abre mostrando solo la imagen decorativa, sin ningún indicio del formulario",
        heuristicaId: "H06",
        heuristicaNombre: "H6 — Reconocimiento antes que recuerdo",
        severidad: "Mayor",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En escritorio, la pantalla de login muestra la foto decorativa a la izquierda y el formulario (email, contraseña, botón “Entrar”) a la derecha, ambos visibles al mismo tiempo. En tablet, el layout pasa a una sola columna apilada: la fotografía se ubica arriba y el formulario debajo — pero la fotografía ocupa toda la altura del viewport inicial (rebasando incluso el borde inferior de la pantalla), por lo que al cargar la página <strong>no se ve ningún indicio de que exista un formulario de login</strong>: ni el logo, ni el título, ni un campo de texto, ni siquiera el borde superior de la tarjeta blanca. Hay que hacer scroll hacia abajo “a ciegas” para encontrar el formulario.",
        recomendacion: "Recortar la altura de la imagen decorativa en este breakpoint (por ejemplo, a una proporción fija tipo banner, no a la altura completa del viewport), de forma que el formulario —o al menos su encabezado y el campo de email— quede visible sin necesidad de scroll. Alternativamente, ocultar la imagen decorativa por debajo de cierto ancho, como suele hacerse en móvil.",
        evidencia: [
          { src: "capturas/caso-02/12-login-tablet-imagen-domina-sin-formulario.jpg", caption: "Estado inicial de la pantalla, sin scroll" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "No se replica. En este viewport la imagen decorativa se muestra compacta (no ocupa la altura completa) y el formulario de login es visible por completo sin necesidad de scroll. El problema es específico del breakpoint de tablet.",
            evidencia: []
          }
        ]
      },
      {
        numero: 8,
        titulo: "En móvil, el valor de “Idioma y moneda” en el menú de cuenta queda renderizado fuera del viewport",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Menor",
        clasificacion: "Responsive",
        viewport: "Móvil (375×812)",
        descripcionHtml: "En el panel de menú de cuenta, la fila “Idioma y moneda” muestra su valor (“Español · $ARS” o similar) a la derecha de la etiqueta. En móvil, esa fila completa mide 385px de ancho real (confirmado por código: <code>scrollWidth</code>/<code>clientWidth</code> de 385px) dentro de un viewport de 375px, y el valor queda posicionado con su borde derecho en x≈415px — 40px más allá del borde del viewport — por lo que el texto no se ve completo: solo asoma “Espano” y el resto queda renderizado fuera de la pantalla, sin ninguna forma de alcanzarlo (no hay scroll horizontal disponible). Se confirmó primero con inspección de código y después se reprodujo de forma idéntica en una ventana de Chrome real, descartando que sea un artefacto de emulación. No es bloqueante (la fila entera sigue siendo tocable), pero el dato se ve incompleto y poco prolijo.",
        recomendacion: "En la fila de “Idioma y moneda” (y en el resto de filas de valor de este panel, por si comparten el mismo estilo), permitir que la etiqueta y el valor se acomoden en dos líneas en vez de una fila rígida, o truncar el valor con ellipsis (<code>text-overflow: ellipsis</code> + <code>overflow: hidden</code> + un <code>max-width</code> acorde al espacio disponible) para que nunca se salga del contenedor visible.",
        evidencia: [
          { src: "capturas/caso-02/16-menu-cuenta-mobile-idioma-cortado.jpg", caption: "Menú de cuenta completo, con el valor cortado" },
          { src: "capturas/caso-02/17-menu-cuenta-mobile-idioma-cortado-zoom.png", caption: "Zoom sobre la fila (capturado en Chrome real)" }
        ],
        verificaciones: []
      }
    ]
  },
  {
    id: 3,
    numero: "03",
    slug: "caso-03-home-paciente",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    titulo: "Exploración de la Home Page del Paciente — secciones, navegación, paneles desplegables e identidad visual, en escritorio, tablet y móvil",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Recorrido exhaustivo de la Home de <code>app.motivarcare.com</code> bajo el perfil de <strong>paciente</strong>, sin llegar a reservar ninguna sesión ni turno. El objetivo fue relevar cada sección visible de la Home, la navegación principal, y cualquier panel, menú o modal que se despliegue desde ella (incluyendo el panel de cuenta/administración); validar la consistencia de las decisiones gráficas y de identidad de producto a lo largo de toda la página; hacer scroll hasta el final para relevar la totalidad de las funcionalidades ofrecidas; y distinguir las secciones de uso cotidiano de los paneles de administración de cuenta. Se evaluó usabilidad, accesibilidad y consistencia visual en todo momento. Se usó Chrome vía plugin (Claude in Chrome), a pedido del Evaluador UX. Se inició sesión con la cuenta de prueba original del Caso 02 (<code>gaston.f.martino@gmail.com</code>), ingresada manualmente por el Evaluador UX por política de manejo de credenciales. Se hicieron tres pasadas: escritorio (ventana de 1440×900) y tablet (viewport de 768×1024), ambas con Chrome vía plugin y la misma sesión de login ya persistida; y móvil (viewport de 375×812), con el navegador integrado de Claude, donde la sesión ya estaba iniciada con una cuenta de prueba distinta (<code>gaston.f.martino+mobile1@gmail.com</code>, un alias de la misma casilla). En las pasadas de tablet y móvil, a pedido del Evaluador UX, no se repitieron las validaciones de color/identidad visual, iconografía ni accesibilidad por teclado. El navegador integrado no ofrece una forma de guardar capturas de pantalla en disco (a diferencia del plugin de Chrome), por lo que la evidencia de la pasada de móvil se apoya principalmente en inspección de DOM y observación en vivo, salvo que se indique lo contrario. Se sumó además una sexta pasada, a pedido del Evaluador UX, para validar específicamente el diseño y la jerarquía visual de los botones de la Home, exclusivamente en escritorio, incluyendo una comparación directa entre el botón “Cuenta” del header y el CTA principal “Reservar sesión” (ver Hallazgos 21 y 22).",
    pasosRealizados: [
      "Se abrió <code>app.motivarcare.com</code> en Chrome (1440×900). El Evaluador UX inició sesión manualmente con la cuenta de prueba <code>gaston.f.martino@gmail.com</code> (Claude no ingresa contraseñas por política, aun cuando el Evaluador UX las provee explícitamente — se le pidió que lo hiciera él mismo en la ventana ya abierta).",
      "Tras el login, la app mostró la pantalla de “Psicólogos sugeridos para vos” (matching post-registro). Se usó “Más tarde” para saltearla y llegar a la Home real, indicado así por el Evaluador UX.",
      "Se relevó la Home por completo: carrusel principal (hero), accesos rápidos, y las 4 secciones extendidas que siguen debajo (Sesiones, Diario emocional, Ejercicios, Música), haciendo scroll hasta el pie de página.",
      "Se abrió el menú “Cuenta” (desplegable superior derecho) y se recorrieron todas sus secciones: Cuenta (Datos personales, Actividad de sesiones), Preferencias (Idioma y moneda, Notificaciones), Ayuda (Preguntas frecuentes, Manual de usuario, Contactar soporte), Legal (Términos y condiciones, Política de privacidad, Líneas de apoyo), Teléfonos útiles, y las opciones inferiores (alternar a “Inicio clásica” / cerrar sesión).",
      "Se entró a cada uno de esos destinos para confirmar que cargan correctamente y que su contenido corresponde a lo que promete la etiqueta del menú.",
      "Se abrió el panel de notificaciones (campana superior derecha) y se relevó su contenido.",
      "Se probó el menú lateral de navegación (ícono-solo, se expande al pasar el mouse) y se confirmó que cada ícono lleva a Inicio, Sesiones, Chat, Diario, Ejercicios y Música.",
      "Se descubrió, dentro del menú “Cuenta”, una opción “Inicio clásica” que alterna a una versión completamente distinta de la Home (diseño, layout, y estructura de menú diferentes a la Home por defecto). Se recorrió esa segunda Home también hasta el final, y se verificó el camino de vuelta (“Inicio ML”, en la misma posición del menú de esa versión).",
      "Se recorrieron las páginas de destino de cada tarjeta de acceso rápido de la Home (Sesiones, Diario/Ejercicios/Música), sin completar ninguna reserva ni compra. Se abrió el modal “Elegí tu terapia” (accedido desde “Comprar sesiones”) solo para confirmar su contenido, sin adquirir ningún paquete.",
      "Se completó el “Tour con Maca” (tour guiado, 9 pasos) accesible desde la esquina inferior izquierda, para relevar su contenido y su comportamiento.",
      "Se probaron los controles manuales del carrusel principal (flechas y puntos) y se observó su comportamiento de auto-avance.",
      "En una segunda pasada, a pedido del Evaluador UX, se profundizó específicamente en tres aspectos de identidad visual: (a) el esquema de colores azul/verde de la Home comparado con el de la landing pública (<code>www.motivarcare.com</code>); (b) los íconos del carrusel hero (fondo blanco translúcido); (c) la consistencia entre la iconografía de los 6 accesos rápidos y la de las 4 secciones extendidas equivalentes.",
      "Para el punto (a), se inspeccionaron directamente las hojas de estilo (<code>document.styleSheets</code>) de ambas superficies vía consola, extrayendo los valores exactos de las variables CSS de color (<code>:root</code>) y las reglas de fondo de cada variante del hero, en vez de estimar colores a partir de capturas de pantalla — esto evita errores por la reproducción de color de los JPG y por el auto-avance del carrusel.",
      "Para asignar con certeza cada slide del carrusel a su variante de color (el carrusel avanza solo cada pocos segundos, lo que generó lecturas contradictorias en un primer intento), se leyeron los 3 slides directamente del DOM en simultáneo (los 3 están siempre presentes en el track del carrusel) en lugar de fiarse del slide visible en un momento dado.",
      "Para el punto (b), se aisló el SVG de cada ícono del hero vía JavaScript y se los inspeccionó ampliados (zoom) uno por uno, navegando manualmente a cada slide.",
      "Para el punto (c), se recorrió nuevamente la Home completa comparando, sección por sección, el ícono de cada tarjeta de acceso rápido contra el ícono del banner y de las sub-tarjetas de su sección extendida correspondiente (Sesiones, Diario emocional, Ejercicios, Música).",
      "En una tercera pasada, a pedido del Evaluador UX, se hizo un control de accesibilidad de la Home navegando exclusivamente con teclado (tecla Tab / Mayús+Tab para moverse entre elementos, Enter/Espacio para activarlos, Escape para cerrar paneles), incluyendo el menú de navegación lateral izquierdo. Se recargó la página antes de empezar para asegurar que el foco partiera del principio del documento (sin ningún clic de mouse previo, que puede alterar el punto de partida del orden de tabulación).",
      "Se recorrió el orden de tabulación completo de la Home de punta a punta: menú lateral (Inicio, Sesiones, Chat, Diario, Ejercicios, Música, Tour con Maca, ícono de cuenta), logo, campana de notificaciones, botón “Cuenta”, el carrusel hero (flechas y puntos), “Conectá Google Calendar”, “Reservar sesión”, las 6 tarjetas de acceso rápido, las 4 secciones extendidas con sus sub-tarjetas, y el pie de página, verificando en cada parada (vía inspección del elemento con foco por consola y capturas) si el indicador de foco es visible y si el elemento corresponde a lo esperado.",
      "Se abrieron con teclado (Enter) el panel de notificaciones, el menú “Cuenta” y el modal “Elegí tu terapia” (este último desde la tarjeta “Comprar sesiones”, sin llegar a elegir ningún profesional ni completar ninguna compra), y en cada caso se probó si Tab permite navegar su contenido interno y si Escape los cierra.",
      "Se comparó el estado de foco por teclado del menú lateral contra su estado al pasar el mouse (hover), para verificar si ambas interacciones exponen la misma información a la persona usuaria.",
      "En una cuarta pasada, a pedido del Evaluador UX, se repitió la exploración completa de la Home (mismo alcance que los pasos 1 a 11) en viewport <strong>tablet (768×1024)</strong>, usando una pestaña nueva de Chrome; la sesión de login previa se mantuvo activa y no fue necesario volver a autenticarse. Por instrucción explícita del Evaluador UX, en esta pasada se omitieron el control de accesibilidad por teclado (Hallazgos 13 a 16, sin sentido en un dispositivo táctil) y las validaciones de color/identidad visual e iconografía (Hallazgos 10 a 12): se asume que esos 7 hallazgos se repiten sin cambios en tablet y en móvil, y no fueron re-verificados en esta pasada ni en la de móvil que quede pendiente.",
      "Se confirmó que, a este ancho, el menú lateral de escritorio desaparece por completo y es reemplazado por una barra de navegación inferior fija (Inicio, Sesiones, Chat, Diario, Más) y, en el header, un ícono de hamburguesa (☰) junto a la campana de notificaciones. Se verificó que la hamburguesa abre el mismo panel “Cuenta” que en escritorio (con su mismo contenido completo), y que el ítem “Más” de la barra inferior abre un panel distinto y mucho más acotado, “Explorar” (Ejercicios / Música relajante / Mi cuenta), con solo una intersección parcial con “Cuenta”.",
      "Se re-verificaron uno por uno, en tablet, los Hallazgos 1, 2, 3, 4, 5, 6, 8 y 9 de la pasada de escritorio (ver el campo “Viewport” actualizado en cada uno). Para el Hallazgo 5 (“Abrir diario” rotulado “Ir al inicio”), dado que esa tarjeta queda parcialmente recortada al final de la fila de accesos rápidos, se confirmó el texto de su enlace interno vía inspección de DOM en lugar de una captura de pantalla. Para el Hallazgo 6 (carrusel sin control de pausa), se buscó en el DOM cualquier botón o control con texto o <code>aria-label</code> relacionado a pausa/reproducción y no se encontró ninguno, igual que en escritorio.",
      "Se buscó el “Tour con Maca” en los dos menús de navegación disponibles en tablet (“Cuenta” vía hamburguesa, y “Explorar” vía “Más”) y no apareció en ninguno de los dos. Se confirmó vía inspección de DOM que el botón del tour (clase <code>portal-sidebar-tour</code>) sigue presente en el HTML pero no se renderiza en absoluto en este viewport (<code>offsetParent: null</code>, <code>getBoundingClientRect()</code> con todos sus valores en cero) — no es solo una omisión visual del menú, sino un elemento completamente inalcanzable.",
      "Se navegó por las 5 secciones de la barra inferior (Inicio, Sesiones, Chat, Diario, Más) y por “Inicio clásica” (alcanzable desde el panel “Cuenta”) para relevar diferencias estructurales respecto de escritorio en la fila de accesos rápidos y en las secciones extendidas.",
      "Se observaron, en varias oportunidades (recargas y scrolls sucesivos sobre el carrusel hero, y al navegar a “Más” → “Mi cuenta”), dos comportamientos puntuales que en un primer momento se consideraron como posibles hallazgos: un glitch de renderizado intermitente del carrusel hero (slides sin texto, o texto de dos slides superpuesto) y un destello de pantalla en blanco de ~2 segundos al entrar a “Mis datos” desde “Mi cuenta”. En una verificación posterior, el Evaluador UX no pudo reproducir ninguno de los dos comportamientos, y se determinó que probablemente se trató de un artefacto de la herramienta de automatización del navegador (Claude in Chrome) y no de un problema real del producto. Por ese motivo, ninguno de los dos quedó documentado como hallazgo en este caso.",
      "En una quinta pasada, a pedido del Evaluador UX, se repitió la exploración en viewport <strong>móvil (375×812)</strong>, con el mismo alcance que la pasada de tablet, pero usando el navegador integrado de Claude (Claude Browser) en lugar del plugin de Chrome. La sesión ya estaba iniciada (con la cuenta <code>gaston.f.martino+mobile1@gmail.com</code>, ver punto 6) y no fue necesario autenticarse. Como en tablet, no se repitieron las validaciones de color/identidad visual, iconografía ni accesibilidad por teclado (Hallazgos 10 a 16).",
      "Se confirmó que la navegación de móvil es idéntica a la de tablet: misma barra inferior fija (Inicio, Sesiones, Chat, Diario, Más), mismo ícono de hamburguesa junto a la campana, mismo panel “Cuenta” completo al abrir la hamburguesa, y mismo panel “Explorar” (Ejercicios / Música relajante / Mi cuenta) al tocar “Más”.",
      "Se re-verificaron uno por uno, en móvil, los Hallazgos 1 a 6, 8, 9, 17, 18 y 19 de las pasadas anteriores. Para los Hallazgos 2 y 4 (URLs de destino de “Actividad de sesiones” y “Líneas de apoyo”), a diferencia de la pasada de tablet, en esta pasada sí se navegó efectivamente a cada destino (<code>/profile?tab=subscription</code> y <code>/docs/crisis.html</code>) y se leyó su contenido con la herramienta de extracción de texto de la página, confirmando título y contenido exactos. Para el Hallazgo 5 (“Abrir diario”/“Ir al inicio”) y el Hallazgo 6 (carrusel sin control de pausa), se repitieron las mismas inspecciones de DOM que en tablet, con el mismo resultado. Para el Hallazgo 17 (Tour con Maca), se repitió la inspección de DOM del botón (clase <code>portal-sidebar-tour</code>) y dio el mismo resultado (<code>offsetParent: null</code>, rect en cero). Para el Hallazgo 18 (7 tarjetas de acceso rápido), se leyeron los títulos de las tarjetas directamente del DOM y coinciden exactamente con los de tablet.",
      "Se hizo scroll completo de la Home de punta a punta (incluyendo la sección “Música” y el pie de página) sin encontrar contenido nuevo respecto de lo ya relevado en tablet; dos tramos de la página aparecieron en blanco por un instante durante el scroll (la sección “Música” y el pie de página), pero en ambos casos el contenido apareció correctamente 1 a 2 segundos después sin necesidad de recargar — se interpretó como una demora normal de carga de imágenes/iframes y no como un glitch, a diferencia de lo reportado (y luego descartado) en la pasada de tablet.",
      "Se abrió “Inicio clásica” desde el panel “Cuenta” para repetir la comparación del Hallazgo 1 en móvil. A diferencia de escritorio y tablet, la página resultó mucho más corta: no aparece el saludo “Hola, GASTON” (ausente incluso del HTML, no solo oculto) ni los bloques de estado “Sesiones reservadas / Sesiones disponibles / Profesional activo” que sí están presentes en tablet. Se investigó el motivo del recorte inspeccionando el DOM en la zona donde debería estar el panel de planes de precios (Basic/Pro/Plus): el panel completo (<code>section.sessions-package-options-panel</code>) está presente en el HTML pero colapsado a tamaño cero (<code>getBoundingClientRect()</code> con todos los valores en cero), dejando un hueco en blanco en la página en lugar de los planes — ver Hallazgo 20.",
      "En una sexta pasada, a pedido del Evaluador UX, se relevó específicamente el diseño y la jerarquía visual de los <strong>botones</strong> de la Home, exclusivamente en escritorio (1440×900, “Inicio ML”), asumiendo el mismo comportamiento para tablet y móvil salvo que se indique lo contrario. El pedido puntual del Evaluador UX fue entender qué decisiones visuales distinguen a un CTA, y señaló como sospechoso que el botón “Cuenta” del header pareciera compartir estilo con los botones de acción. Se usó Chrome (plugin), en una pestaña nueva; la sesión ya estaba iniciada.",
      "Al cargar la Home se interpuso un modal no visto en pasadas anteriores, “Elegí un profesional” (“Para ver precios de paquetes y comprar sesiones necesitás tener un profesional asignado”), con dos botones: “Ir a elegir profesional” (primario, relleno violeta) y “Más tarde” (secundario, blanco con borde). Se usó “Más tarde” para llegar a la Home; ese par de botones se usó luego como referencia de cómo se ve un par primario/secundario bien diferenciado en este mismo producto (ver Hallazgo 22).",
      "Se relevó la Home completa (hero, barra “Sin sesiones disponibles”, accesos rápidos, secciones extendidas “Sesiones” y “Diario emocional”) identificando cada elemento clicable y agrupándolo por apariencia visual (color de fondo, relleno vs. contorno vs. texto plano, radio de borde, peso de fuente).",
      "Para no depender de una lectura aproximada por color de pantalla, se extrajeron por consola los estilos computados (<code>getComputedStyle</code>) de todos los <code>button</code>, <code>a</code> y <code>[role=\"button\"]</code> visibles de la página, deduplicados por firma visual (color de fondo, color de texto, borde, radio, peso de fuente, padding y sombra), para tener los valores exactos de cada variante de botón realmente en uso.",
      "Se comparó puntualmente el botón “Cuenta” del header contra el botón “Reservar sesión” de la barra superior (el CTA principal de la Home) mediante una captura ampliada (zoom) de esa zona de la pantalla, y contra los valores exactos obtenidos en el paso 35.",
      "Se buscaron, en toda la Home, las demás apariciones de las mismas etiquetas de botón (“Reservar sesión”, “Reservar sesión de prueba”) para ver si mantienen el mismo estilo entre sí.",
      "En una séptima pasada, a pedido del Evaluador UX, se revisó puntualmente el Hallazgo 7 (originalmente una demora de renderizado en el paso 2/9 del “Tour con Maca”, que el Evaluador UX no lograba reproducir) con Chrome (plugin), sesión ya iniciada. Se completaron los 9 pasos del tour uno por uno, tomando una captura de cada paso para comparar el pie de cada tarjeta (botones y márgenes laterales) entre sí y contra los botones reales del resto del producto. No se logró reproducir la demora original — los 9 pasos cargaron de forma inmediata. En su lugar se confirmaron y documentaron dos inconsistencias de diseño reales: los botones “Atrás”/“Dale” no siguen el sistema de diseño del resto del producto, y el margen lateral de la tarjeta del tour varía sin ningún patrón entre los 9 pasos (amplio en el paso 1, moderado en el paso 2, y prácticamente perdido del paso 3 en adelante). Se reemplazó el contenido del Hallazgo 7 original por este hallazgo nuevo, conservando su numeración para no alterar la del resto de los casos.",
      "En una octava pasada, a pedido del Evaluador UX, se revisó la tarjeta “Tu profesional” de los accesos rápidos de la Home, con Chrome (plugin), sesión ya iniciada. Se probó el flujo completo del botón “Reservar sesión de prueba”: se eligió un profesional y un horario disponible (sin completar ningún pago), llegando a una pantalla de confirmación que muestra el precio de lista completo a pagar antes de continuar al medio de pago. Se comparó además la ilustración y el estilo de botón de esta tarjeta contra las otras 5 tarjetas de la misma fila. Se confirmaron los cuatro puntos señalados por el Evaluador UX (wording técnico, tamaño/posición del botón, ilustración inconsistente, y expectativa de gratuidad contradicha por el precio de lista mostrado antes de pagar) y se documentaron como el Hallazgo 23, agrupando todos esos puntos salvo la variante de color del botón, ya cubierta por el Hallazgo 22."
    ],
    feedbackPositivo: [
      "La sección “Ejercicios” está muy bien resuelta: agrupa las prácticas en “Rutinas guiadas” temáticas (Calma rápida, Reset de ansiedad aguda con etiqueta “SOS”, Rutina pre-sueño, etc.), con duración y cantidad de ejercicios visibles de entrada, y un tono de acompañamiento apropiado (“Si alguno te genera molestia, suspendelo y comentalo en próxima sesión”).",
      "Los estados vacíos están redactados de forma clara y consistente en toda la Home y sus sub-páginas (“Todavía no tenés sesiones reservadas”, “Todavía no tienes paquetes comprados”, “Todavía no tienes historial de sesiones”, Chat deshabilitado con explicación de cuándo se habilita).",
      "El panel de notificaciones agrupa los avisos por categoría (Calendario, Diario, Ejercicio) con iconografía diferenciada y es fácil de escanear.",
      "El “Tour con Maca” tiene una redacción cálida y clara, se puede saltear en cualquier momento, hace scroll automáticamente hasta cada sección que explica, y se completaron los 9 pasos sin errores de navegación (más allá del Hallazgo 7, puntual).",
      "El pie de página (Soporte / Ayuda / Legal / Teléfonos útiles) se repite de forma consistente en la Home y en todas las sub-páginas visitadas (Mis datos, Mi suscripción, Ajustes, Sesiones, Música), reforzando que la ayuda y los recursos de emergencia están siempre a un scroll de distancia — se confirmó que esto también se cumple en tablet y en móvil.",
      "Los precios y la información de los paquetes (MotivarCare Basic/Pro/Plus) coinciden exactamente entre la Home clásica y el modal “Elegí tu terapia” de la Home nueva — buena señal de que, más allá del Hallazgo 1, los datos de negocio subyacentes sí están sincronizados entre ambas versiones.",
      "El menú lateral (ícono-solo que se expande al pasar el mouse) es prolijo y no consume espacio cuando no se necesita.",
      "El orden de tabulación general de la Home es lógico y sigue una secuencia predecible de arriba hacia abajo y de izquierda a derecha (menú lateral → header → hero → accesos rápidos → secciones extendidas → pie de página), sin saltos erráticos entre zonas alejadas de la pantalla (más allá de los tres paneles superpuestos del Hallazgo 13). Todos los elementos interactivos relevados durante el control de teclado mostraron algún indicador de foco visible, y la página hace scroll automáticamente para mantener a la vista el elemento enfocado, incluso dentro de las secciones extendidas."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "Dos versiones de la Home coexisten, con diseño y navegación totalmente distintos, y un selector con etiquetas internas poco claras",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Mayor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Dentro del menú “Cuenta” existe una opción llamada <strong>“Inicio clásica”</strong> que reemplaza toda la Home por defecto (identificada internamente en su propio selector como <strong>“Inicio ML”</strong>) por una segunda versión de la Home con una identidad visual, layout, y hasta arquitectura de información <strong>completamente distintos</strong>: cambia el logo/branding superior (“Portal Paciente” en vez de “MotivarCare”), el menú lateral usa otras etiquetas (“Diario emocional”, “Música relajante” en vez de “Diario”, “Música”), el acceso a la cuenta pasa de un botón “Cuenta” a un ícono de hamburguesa (☰), aparece un saludo “Hola, GASTON” que no existe en la Home nueva, y la página expone directamente los 3 planes de precios (MotivarCare Basic/Pro/Plus) en el cuerpo de la Home, algo que en la versión nueva solo aparece dentro de un modal (“Elegí tu terapia”). Ambas versiones están activas y son alcanzables por cualquier paciente, no es un remanente inaccesible. El selector para volver muestra el texto <strong>“Inicio ML”</strong>, una sigla de desarrollo que no tiene ningún significado para un/a paciente y rompe con el tono empático del resto del producto. Tener dos experiencias de producto completamente distintas y alternables constituye una inconsistencia mayor de identidad visual y de producto, además de duplicar el esfuerzo de mantenimiento y multiplicar la superficie de bugs (todos los demás hallazgos de este caso, salvo que se indique lo contrario, se relevaron sobre “Inicio ML”, la que ve un/a paciente por defecto).",
        recomendacion: "Definir cuál de las dos es la versión vigente del producto y discontinuar la otra (o, si ambas deben coexistir por una migración en curso, ocultar el selector al público y quitarlo del menú de cuenta). Si se mantiene el selector, renombrarlo con lenguaje orientado a la persona usuaria (ej. “Probar el diseño anterior” / “Volver al diseño nuevo”) en vez de la sigla interna “ML”.",
        evidencia: [
          { src: "capturas/caso-03/01-home-ml-vista-general.jpg", caption: "Home por defecto (“Inicio ML”)" },
          { src: "capturas/caso-03/08-inicio-clasica-vista-completa.jpg", caption: "Home alternativa completa (“Inicio clásica”)" },
          { src: "capturas/caso-03/09-inicio-ml-toggle-label.png", caption: "Etiqueta “Inicio ML” del selector, vista desde la Home clásica" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se replica sin cambios: la duplicación de Home y el selector “Inicio ML” / “Inicio clásica” se reproducen tal cual a este ancho, con el mismo texto interno “Inicio ML” en el toggle.",
            evidencia: [
              { src: "capturas/caso-03/26-tablet-inicio-clasica.jpg", caption: "“Inicio clásica” en tablet, mismo selector" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "variante",
            textoHtml: "La duplicación y el selector también se reproducen, pero “Inicio clásica” en este viewport difiere además de la versión de tablet: falta el saludo “Hola, GASTON” y los bloques de estado (“Sesiones reservadas / Sesiones disponibles / Profesional activo”), y el panel de planes de precios colapsa a tamaño cero — ver Hallazgo 20.",
            evidencia: []
          }
        ]
      },
      {
        numero: 2,
        titulo: "El ítem de menú “Actividad de sesiones” abre la pantalla “Mi suscripción”, no un historial de actividad",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Dentro del menú “Cuenta” → sección “CUENTA”, el ítem <strong>“Actividad de sesiones”</strong> no abre ningún registro de actividad: navega a <code>/profile?tab=subscription</code>, una pantalla titulada <strong>“Mi suscripción”</strong> que muestra el paquete activo y las sesiones disponibles (paquete/créditos), no un historial o bitácora de acciones. El historial real de sesiones vive en otro lugar del producto (la sección “Sesiones” de la Home, en “Historial de sesiones”), por lo que esta etiqueta es además redundante y confunde sobre dónde encontrar cada cosa.",
        recomendacion: "Renombrar el ítem del menú a “Mi suscripción” (o “Mi plan”), coherente con el título real de la pantalla, o bien redirigir efectivamente a un historial de actividad si esa es la intención original del ítem.",
        evidencia: [
          { src: "capturas/caso-03/02-drawer-cuenta-actividad-sesiones-idioma.jpg", caption: "Menú con el ítem “Actividad de sesiones”" },
          { src: "capturas/caso-03/03-actividad-sesiones-abre-mi-suscripcion.jpg", caption: "Pantalla resultante, “Mi suscripción”" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: mismo ítem dentro del panel “Cuenta” accedido por la hamburguesa, misma URL de destino <code>/profile?tab=subscription</code>.",
            evidencia: [
              { src: "capturas/caso-03/30-tablet-menu-cuenta-superior-sin-tour.jpg", caption: "Panel “Cuenta” en tablet, con el ítem “Actividad de sesiones”" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se navegó efectivamente a <code>/profile?tab=subscription</code> y se confirmó el mismo título “Mi suscripción” y el mismo contenido (“Sin paquete activo”, “0 / 0”) vía extracción de texto.",
            evidencia: []
          }
        ]
      },
      {
        numero: 3,
        titulo: "Faltan tildes en varios textos de la interfaz, de forma recurrente en distintos módulos",
        heuristicaId: "H02",
        heuristicaNombre: "H2 — Coincidencia con el mundo real",
        severidad: "Menor",
        clasificacion: "Otros",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Se detectaron múltiples strings de la interfaz sin tildes, en al menos tres módulos distintos y no relacionados entre sí, lo que sugiere un problema sistémico (posiblemente en el pipeline de generación de contenido) y no errores aislados: (a) en “Idioma y moneda” (tanto en el resumen del menú “Cuenta” como en el modal de selección), el idioma aparece como <strong>“Espanol”</strong> en vez de “Español”, y <strong>“Portugues”</strong> en vez de “Português”; (b) en la página de recursos de crisis (“Líneas de apoyo”, ver Hallazgo 4), <strong>“Linea 988 (US)”</strong> en vez de “Línea”; (c) en la pantalla de Chat, el texto de ayuda dice *“Cuando tengas un profesional asignado, <strong>podras</strong> escribirle desde <strong>aqui</strong>”* (faltan las tildes de “podrás” y “aquí”), y el placeholder del campo deshabilitado dice *“Chat deshabilitado hasta <strong>asignacion</strong>”* (falta la tilde de “asignación”). Para un producto redactado enteramente en castellano y con foco en Latinoamérica, estos errores de ortografía recurrentes afectan la percepción de calidad y profesionalismo, algo particularmente sensible en un producto de salud.",
        recomendacion: "Revisar el pipeline de generación/carga de textos en castellano para confirmar que preserva correctamente los caracteres acentuados, y hacer una pasada de corrección ortográfica sobre el resto de la interfaz (no se descarta que aparezcan más casos fuera de lo relevado en este caso).",
        evidencia: [
          { src: "capturas/caso-03/04-tildes-idioma-moneda-modal.png", caption: "“Espanol” / “Portugues”, sin tilde" },
          { src: "capturas/caso-03/05-lineas-apoyo-pagina-sin-estilo.jpg", caption: "“Linea 988”, sin tilde" },
          { src: "capturas/caso-03/06-tildes-chat-podras-aqui-asignacion.jpg", caption: "“podras” / “aqui” / “asignacion”, sin tilde" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se re-verificó únicamente el caso (a): el panel “Cuenta” muestra también “Espanol · \\$” en la fila “Idioma y moneda”, igual que en escritorio. Los casos (b) y (c) no se repitieron en esta pasada — se asumen idénticos.",
            evidencia: [
              { src: "capturas/caso-03/30-tablet-menu-cuenta-superior-sin-tour.jpg", caption: "“Espanol · $” en el panel “Cuenta” de tablet" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se re-verificó también únicamente el caso (a): el mismo panel “Cuenta” muestra “Espanol” sin tilde. Los casos (b) y (c) no se repitieron en esta pasada — se asumen idénticos.",
            evidencia: []
          }
        ]
      },
      {
        numero: 4,
        titulo: "La página de “Líneas de apoyo” (recursos de crisis) no tiene ningún estilo de marca y prioriza un número de EE. UU. antes que el de Argentina",
        heuristicaId: "H10",
        heuristicaNombre: "H10 — Confidencialidad médica y soporte",
        severidad: "Mayor",
        clasificacion: "Otros",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "“Líneas de apoyo” (dentro de “Cuenta” → “LEGAL”) abre, en una pestaña nueva, <code>app.motivarcare.com/docs/crisis.html</code> — una página HTML estática <strong>completamente sin estilo</strong>: sin logo, sin la paleta ni la tipografía del producto, texto negro plano sobre fondo blanco, contenido mínimo (un título, 3 viñetas y una línea de texto). Es, con diferencia, la pantalla con peor terminación visual de todo el recorrido, justo en el punto de contacto más sensible del producto — la persona que llega ahí puede estar en una situación de angustia o crisis. Además, el primer ítem de la lista es <strong>“Linea 988 (US): 988lifeline.org”</strong>, una línea de EE. UU., listada antes que “Argentina: 135 (desde CABA) / (011) 5275-1135”, pese a que el resto del producto (precios en pesos argentinos, números de teléfono locales en el resto del menú de cuenta) está claramente orientado a Argentina. No queda claro por qué el recurso de otro país aparece primero.",
        recomendacion: "Integrar esta pantalla a la identidad visual del resto del producto (o, como mínimo, incluirla dentro de la SPA en vez de como archivo estático suelto) y reordenar la lista para que el recurso local (Argentina) aparezca primero, dejando el de EE. UU. como referencia adicional. Dado lo sensible del contenido, vale la pena sumar también una frase de contención breve antes de la lista de números.",
        evidencia: [
          { src: "capturas/caso-03/05-lineas-apoyo-pagina-sin-estilo.jpg", caption: "Página “Líneas de apoyo”, sin ningún estilo de marca" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "El ítem “Líneas de apoyo” está presente en el mismo lugar del panel “Cuenta” y abre la misma página estática <code>docs/crisis.html</code>, con el mismo orden de números (EE. UU. antes que Argentina).",
            evidencia: [
              { src: "capturas/caso-03/30-tablet-menu-cuenta-superior-sin-tour.jpg", caption: "Panel “Cuenta” en tablet, con el ítem “Líneas de apoyo”" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se navegó efectivamente a <code>docs/crisis.html</code> y se confirmó, vía extracción de texto, el mismo contenido exacto (“Linea 988 (US)” primero, Argentina segundo, Emergencias 911).",
            evidencia: []
          }
        ]
      },
      {
        numero: 5,
        titulo: "El acceso “Abrir diario” de la sección “Diario emocional” está rotulado como “Ir al inicio”",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "En la sección extendida “Diario emocional” de la Home, de las 3 tarjetas de acceso rápido (“Nueva entrada”, “Ver registros”, “Abrir diario”), la tercera tiene como título “Abrir diario” pero su enlace interior dice <strong>“Ir al inicio”</strong> — un texto que no corresponde a la acción (no lleva a la Home, sino al diario) y que además reutiliza, de forma confusa, una frase que en el resto del producto sí significa “volver a la Home”.",
        recomendacion: "Cambiar el texto del enlace por algo consistente con las otras dos tarjetas de la misma sección, por ejemplo “Abrir” o “Ir al diario”.",
        evidencia: [
          { src: "capturas/caso-03/07-abrir-diario-link-ir-al-inicio.png", caption: "Tarjeta “Abrir diario” con el enlace interno “Ir al inicio”" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce, confirmado vía inspección de DOM (el botón de esa tarjeta contiene el texto “Abrir diarioIr al inicio›”, es decir título “Abrir diario” + enlace interno “Ir al inicio”). Sin captura archivada porque la tarjeta queda parcialmente recortada al final de la fila de accesos rápidos en este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se repitió la misma inspección de DOM con idéntico resultado, y además se vio visualmente la fila “Abrir diario ›” al hacer scroll por la sección “Tu diario”.",
            evidencia: []
          }
        ]
      },
      {
        numero: 6,
        titulo: "El carrusel principal (hero) avanza solo, sin control visible de pausa",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Recomendación",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "El carrusel de 3 banners en la parte superior de la Home avanza automáticamente cada pocos segundos. Tiene flechas de navegación manual y puntos indicadores (ambos funcionan correctamente), pero no se encontró ningún control para pausar el avance automático. En un producto de salud mental, donde reducir estímulos y dar control a la persona usuaria es parte explícita de la propuesta de valor, un carrusel que avanza sin pedir permiso — y sin forma de detenerlo — va a contramano de ese objetivo, además de ser una recomendación estándar de accesibilidad (contenido que se auto-actualiza debería poder pausarse).",
        recomendacion: "Agregar un control de pausa/play visible, o directamente detener el auto-avance y dejar la navegación en manos de la persona usuaria (flechas/puntos).",
        evidencia: [],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se confirmó vía inspección de DOM que no existe ningún botón o control con texto o <code>aria-label</code> relacionado a pausa/reproducción en toda la página.",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Misma inspección de DOM, mismo resultado: ningún control de pausa/reproducción en la página.",
            evidencia: []
          }
        ]
      },
      {
        numero: 7,
        titulo: "Los botones y los márgenes laterales del pie de cada pantalla del “Tour con Maca” no son consistentes entre sí ni con el resto del producto",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Se revisaron paso a paso las 9 pantallas del tour guiado (“Un tour con Maca”) para intentar reproducir el hallazgo originalmente documentado en este punto (una demora de aprox. 1 segundo entre el resaltado y el texto explicativo del paso 2/9). No se logró reproducir esa demora en esta revisión — los 9 pasos cargaron título, texto y controles de forma inmediata y simultánea — por lo que probablemente haya sido un artefacto puntual de la herramienta de prueba usada en el momento original, y no un problema real del producto. En su lugar, se detectaron dos inconsistencias de diseño distintas en el pie de las tarjetas del tour, verificadas en Chrome real.<p class=\"mt-2\"><strong>Botones fuera del sistema de diseño:</strong> los botones “Atrás” y “Dale” no siguen ninguna de las decisiones visuales del resto del producto. Son rectángulos chicos, con esquinas apenas redondeadas, relleno gris claro (“Atrás”) o gris oscuro (“Dale”) y tipografía chica — mientras que el resto de los llamados a la acción de la plataforma (“Reservar sesión”, “Ver ejercicios”, “Abrir diario”, etc.) usan un estilo consistente entre sí: esquinas bien redondeadas, relleno de color de marca (azul/violeta) y tipografía en negrita más grande.</p><p class=\"mt-2\"><strong>Márgenes laterales inconsistentes:</strong> el padding izquierdo/derecho de la tarjeta del tour varía sin ningún patrón aparente entre los 9 pasos. El paso 1/9 (pantalla de bienvenida) tiene un margen amplio y prolijo. El paso 2/9 (“Menú a la izquierda”) ya se ve visiblemente más angosto. Y del paso 3/9 en adelante (Barra superior, Tu saldo y reservar, Atajos de Inicio, Bloque Sesiones, Diario emocional, Ejercicios y Música) el margen lateral prácticamente desaparece: el título y el ícono de cerrar (×) quedan pegados al borde/esquina de la tarjeta, sin el aire que sí tienen los pasos 1 y 2.</p>",
        recomendacion: "Unificar el componente de tarjeta del tour guiado para que use un padding lateral consistente en los 9 pasos (tomando como referencia el paso 1, que es el que mejor resuelve el espaciado), y reemplazar los botones “Atrás”/“Dale” por el mismo componente de botón (color, tipografía y radio de esquina) que ya usa el resto de la plataforma.",
        evidencia: [
          { src: "capturas/caso-03/37-tour-maca-paso1-margenes-amplios.png", caption: "Paso 1/9 (“Un tour con Maca”): margen lateral amplio y prolijo" },
          { src: "capturas/caso-03/38-tour-maca-paso2-margenes-moderados.png", caption: "Paso 2/9 (“Menú a la izquierda”): margen ya visiblemente más angosto" },
          { src: "capturas/caso-03/39-tour-maca-paso3-margenes-perdidos.png", caption: "Paso 3/9 (“Barra superior”): el margen lateral prácticamente desaparece" },
          { src: "capturas/caso-03/40-tour-maca-paso6-margenes-perdidos.png", caption: "Paso 6/9 (“Bloque Sesiones”): mismo problema de margen perdido" },
          { src: "capturas/caso-03/41-tour-maca-botones-atras-dale-vs-real.png", caption: "Comparación: botones “Atrás”/“Dale” del tour vs. el botón “Reservar sesión” del resto del producto" }
        ],
        verificaciones: []
      },
      {
        numero: 8,
        titulo: "La sección “Música” incorpora videos de YouTube, con la marca de YouTube visible dentro del reproductor",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "A revisar",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Al entrar a “Música” (tanto desde la tarjeta de acceso rápido como desde la sección extendida), el contenido se reproduce embebido directamente desde YouTube (ej. el video “1 A.M Study Session [lofi hip hop]” del canal “Lofi Girl”), con el botón de play rojo característico de YouTube y el nombre del canal visibles dentro del reproductor. Es la única pantalla de todo el recorrido donde aparece una marca de un tercero de forma tan prominente, lo que rompe con la estética cuidada y propia del resto del producto. No se evaluó en este caso si esto tiene además alguna implicancia de privacidad (carga de un iframe de un tercero dentro de un producto de salud), lo cual podría ser materia de un chequeo técnico aparte.",
        recomendacion: "Evaluar un reproductor propio (o al menos uno sin la marca de YouTube tan visible) para mantener la coherencia visual, y confirmar con el equipo técnico si la carga de contenido de YouTube tiene alguna implicancia de privacidad a documentar.",
        evidencia: [],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se archivó captura mostrando el mismo video “1 A.M Study Session [lofi hip hop]” de “Lofi Girl” con el botón de play rojo de YouTube visible.",
            evidencia: [
              { src: "capturas/caso-03/33-tablet-musica-youtube-branding.jpg", caption: "Marca de YouTube visible en el reproductor de “Música” (tablet)" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "variante",
            textoHtml: "Se reprodujo el mismo video, con el mismo botón de play rojo y, además, un texto explícito “Mirar en YouTube” debajo del reproductor que no se había notado en las pasadas anteriores.",
            evidencia: []
          }
        ]
      },
      {
        numero: 9,
        titulo: "Los 6 accesos rápidos del tope de la Home duplican, casi punto por punto, las 4 secciones extendidas que siguen más abajo en la misma página",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Recomendación",
        clasificacion: "Otros",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "La Home presenta primero una fila de 6 tarjetas de acceso rápido (Tu profesional, Comprar sesiones, Próximas sesiones, Diario, Ejercicios, Música) y, inmediatamente debajo, 4 secciones extendidas (Sesiones, Diario emocional, Ejercicios, Música) que llevan a los mismos destinos con mayor desarrollo visual. Para una cuenta sin actividad (como la usada en este caso), esto se traduce en una Home larga que repite la misma información y los mismos accesos dos veces antes de llegar al pie de página, lo que aumenta el scroll necesario y la carga cognitiva sin sumar información nueva.",
        recomendacion: "Evaluar si conviene fusionar ambos niveles en uno solo (por ejemplo, quedándose con las secciones extendidas, que ya incluyen accesos directos propios) o diferenciar más claramente su propósito — por ejemplo, reservando la fila superior para accesos realmente frecuentes y bajando el resto del contenido educativo/de descubrimiento a un solo bloque por sección.",
        evidencia: [],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "variante",
            textoHtml: "El patrón se reproduce también en tablet, con la misma fila de 7 tarjetas (ver Hallazgo 18 para el detalle de las diferencias estructurales propias de este viewport).",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "variante",
            textoHtml: "El patrón se reproduce también en móvil, con la misma fila de 7 tarjetas que en tablet (ver Hallazgo 18).",
            evidencia: []
          }
        ]
      },
      {
        numero: 10,
        titulo: "La paleta de azules/violetas y verdes de la Home no coincide con la de la landing pública",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Mayor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Se confirmó, mediante inspección directa de las hojas de estilo de cada superficie (no de una lectura visual de capturas), que la Home (<code>app.motivarcare.com</code>) y la landing pública (<code>www.motivarcare.com</code>) usan dos paletas de marca distintas, pese a compartir la sospecha inicial del Evaluador UX de que debían coincidir. En la Home, el color de marca principal (variable <code>--brand</code>, usado en el hero, los CTA y los acentos) es un <strong>violeta/púrpura <code>#5F44EB</code></strong>, y el verde que aparece como color secundario (variante <code>--access</code> del hero, y el <code>--ok-text</code>/<code>--ok-bg</code> de estados “ok”) es un <strong>verde oscuro/bosque, <code>#15803D</code></strong> (y <code>#166534</code> en los estados de éxito). En la landing, en cambio, el color de marca principal (variables <code>--plv2-blue</code> y <code>--plv2-hero-accent</code>, usadas en los links destacados del título, el botón “Ingresar” y el logo) es un <strong>azul brillante, <code>#2563EB</code>/<code>#2F62C4</code></strong>, y el verde (<code>--plv2-teal</code> y <code>--plv2-hero-green-dark</code>) es un <strong>verde azulado/teal, <code>#45B8AD</code>/<code>#2E8B57</code></strong>, notoriamente más claro y “frío” que el verde bosque de la Home. La landing sí define una variable <code>--plv2-violet: #6B5CB3</code> cercana al violeta de la Home, pero se usa únicamente como acento fantasma a muy baja opacidad (6-7%, <code>--plv2-violet-ghost</code> / <code>--plv2-violet-mist</code>), nunca como color protagonista. En resumen: lo que en la landing es el color dominante (azul brillante) pasa a ser un acento casi invisible en la Home (violeta como color dominante en cambio), y el verde de ambas superficies pertenece a familias tonales distintas (bosque vs. teal). Esto confirma la sospecha del Evaluador UX: alguien que llega desde la landing y entra al portal puede percibir el cambio de paleta como una pérdida de continuidad de marca.",
        recomendacion: "Unificar ambas superficies bajo un mismo set de tokens de color de marca (o, si la decisión de producto es que el portal use una paleta “cálida” deliberadamente distinta de la landing pública orientada a marketing, documentar esa decisión explícitamente para que no se interprete como una inconsistencia no intencional). Como mínimo, acercar el verde de ambas superficies a la misma familia tonal.",
        evidencia: [
          { src: "capturas/caso-03/17-landing-paleta-azul-verde.jpg", caption: "Hero de la landing: título en azul/verde teal, botón “Ingresar” y CTA en degradé azul→teal" },
          { src: "capturas/caso-03/10-hero-slide-care-purpura.jpg", caption: "Slide del hero de la Home en violeta #5F44EB" },
          { src: "capturas/caso-03/11-hero-slide-access-verde.jpg", caption: "Slide del hero de la Home en verde bosque #15803D" },
          { src: "capturas/caso-03/12-hero-slide-match-purpura.jpg", caption: "Tercer slide del hero de la Home, también en violeta" }
        ],
        verificaciones: []
      },
      {
        numero: 11,
        titulo: "El ícono del slide “Especialistas en tu necesidad” (matching) es ambiguo y no se lee como “buscar especialista”",
        heuristicaId: "H06",
        heuristicaNombre: "H6 — Reconocimiento antes que recuerdo",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "De los 3 íconos cuadrados de esquinas redondeadas y fondo blanco translúcido que acompañan a cada slide del hero, dos se leen de forma inmediata y literal sin necesidad del texto que los acompaña: un <strong>corazón</strong> para “Hacer terapia es cuidarte” (kicker “Habla con expertos”) y el número <strong>“24”</strong> para “Tu proceso, 24 horas” (kicker “Siempre disponible”). El tercero, en el slide “Especialistas en tu necesidad” (kicker “Matching inteligente”), es un glyph abstracto: dos trazos curvos tipo gancho que se cruzan, con pequeñas marcas a modo de “eslabón” entre ellos. Aislado de su texto, este ícono es fácilmente confundible con símbolos ya establecidos para otras acciones — “sincronizar/actualizar”, “intercambiar” o “deshacer/rehacer” — y no comunica por sí mismo la idea de “matching entre paciente y especialista”, que es lo que efectivamente representa (según pudo inferirse del código: dos trazos que se buscan y conectan). Al ser el único de los tres íconos del hero que no es autoexplicativo, rompe el patrón de literalidad que establecen sus dos vecinos y fue, con razón, el que generó la duda original del Evaluador UX.",
        recomendacion: "Reemplazar el glyph por uno más literal para la idea de “matching con un especialista” — por ejemplo dos siluetas de personas unidas por un check o una línea, una pieza de rompecabezas combinándose, o una lupa sobre un perfil — manteniendo el mismo estilo de trazo (línea fina, sin relleno) que ya usan los otros dos íconos del hero.",
        evidencia: [
          { src: "capturas/caso-03/13-hero-icono-matching-zoom.png", caption: "Ícono ampliado del slide “Matching inteligente”" },
          { src: "capturas/caso-03/12-hero-slide-match-purpura.jpg", caption: "Contexto completo del slide" }
        ],
        verificaciones: []
      },
      {
        numero: 12,
        titulo: "La iconografía de los 6 accesos rápidos no se reutiliza en las secciones extendidas equivalentes, y una de ellas mezcla íconos de línea con emojis",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Comparando cada una de las 6 tarjetas de acceso rápido del tope de la Home contra el banner y las sub-tarjetas de su sección extendida equivalente (ver también Hallazgo 9, sobre la duplicación de contenido entre ambos niveles), ningún par reutiliza exactamente el mismo ícono: <strong>Comprar sesiones</strong> (tarjeta: signo “+”) no se corresponde con ningún ícono de la sección “Sesiones” (banner: calendario con un check/reloj; sub-tarjeta “Paquetes comprados”: un cubo/paquete 3D — ninguno retoma el “+”). <strong>Próximas sesiones</strong> (tarjeta: calendario simple) tampoco coincide de forma exacta con el calendario-con-check del banner de “Sesiones”, aunque sí se acerca a la sub-tarjeta “Calendario”. <strong>Diario</strong> (tarjeta: documento/bloc) se acerca al banner de “Diario emocional” (documento con lápiz) y a la sub-tarjeta “Nueva entrada” (documento), pero las otras dos sub-tarjetas de esa misma sección usan íconos sin relación entre sí: “Ver registros” reutiliza el mismo ícono de reloj que “Historial de sesiones” (de la sección “Sesiones”), y “Abrir diario” usa una línea de pulso/actividad que no se relaciona visualmente con ningún otro ícono de “diario” en la página. <strong>Ejercicios</strong> es el par más consistente (la tarjeta y el banner comparten la misma figura humana estirándose, el banner solo agrega un pequeño destello), pero las 3 tarjetas de “Prácticas destacadas” que siguen debajo usan <strong>emojis</strong> (🤸 Respiración 4-7-8, 🌳 Anclaje sensorial, 😌 Suspiro fisiológico) en lugar de íconos SVG de línea — el único punto de toda la Home donde aparece un sistema de iconografía distinto (emoji) al resto del producto (SVG de línea). <strong>Música</strong>, por último, usa una nota musical en la tarjeta pero unos auriculares en el banner de la sección — dos íconos distintos para el mismo concepto.",
        recomendacion: "Definir un único ícono SVG de línea por concepto (Sesiones/Calendario, Compras/Paquetes, Diario, Ejercicios, Música) y reutilizarlo consistentemente en la tarjeta superior, el banner de la sección extendida y sus sub-tarjetas. Reemplazar los emojis de “Prácticas destacadas” por íconos del mismo sistema de línea para no introducir un lenguaje visual ajeno al resto del producto.",
        evidencia: [
          { src: "capturas/caso-03/14-seccion-sesiones-iconos.jpg", caption: "Iconografía de la sección “Sesiones”" },
          { src: "capturas/caso-03/15-seccion-ejercicios-diario-iconos.jpg", caption: "Iconografía de “Ejercicios” y “Diario emocional”" },
          { src: "capturas/caso-03/16-seccion-musica-iconos.jpg", caption: "Iconografía de “Música”" },
          { src: "capturas/caso-03/01-home-ml-vista-general.jpg", caption: "Fila de accesos rápidos, para comparar contra las secciones extendidas" }
        ],
        verificaciones: []
      },
      {
        numero: 13,
        titulo: "Los paneles superpuestos (notificaciones, menú “Cuenta” y el modal “Elegí tu terapia”) no atrapan el foco de teclado: al tabular, el foco escapa al contenido de fondo mientras el panel sigue visualmente abierto",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Mayor",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Se probaron con teclado los tres paneles superpuestos de la Home que se abren desde el header o desde una tarjeta: el panel de <strong>notificaciones</strong>, el menú desplegable <strong>“Cuenta”</strong> y el modal <strong>“Elegí tu terapia”</strong> (abierto desde “Comprar sesiones”). Los tres se abren correctamente con Enter sobre su disparador. Pero en los tres casos, al presionar Tab una vez con el panel abierto, <strong>el foco no se mueve a ningún elemento interno del panel — salta directo a un elemento del contenido de fondo</strong>, que además queda visualmente tapado u oscurecido por el overlay: desde notificaciones, el foco pasa al botón “Cuenta” (detrás del overlay atenuado); desde el menú “Cuenta”, el foco pasa a la flecha “Banner anterior” del carrusel hero (también detrás del overlay); y desde el modal “Elegí tu terapia” — el caso más grave, porque el modal cubre la pantalla por completo — el foco pasa a la tarjeta “Próximas sesiones”, que en ese momento es <strong>totalmente invisible</strong> para quien está navegando, tapada por el modal. En ningún caso el contenido interactivo propio del panel (los ítems de notificación y su ícono de ajustes, los ~12 links del menú “Cuenta” — incluyendo “Líneas de apoyo” —, o los 4 botones “Elegir profesional” del modal) es alcanzable por teclado. Solo la tecla Escape permite cerrar los tres paneles de forma confiable; sin ella, una persona que navegue exclusivamente con teclado no tiene forma de interactuar con nada de lo que ofrecen estos tres paneles, ni de saber dónde quedó ubicado el foco mientras el panel sigue abierto en pantalla. Al repetirse el mismo patrón en tres componentes distintos y visualmente muy distintos entre sí, no parece un error puntual sino una falla sistémica en el manejo de foco de los overlays de todo el producto.",
        recomendacion: "Implementar un focus trap estándar en los tres componentes (y revisar si hay más overlays en el resto del producto con el mismo problema): al abrir, mover el foco al primer elemento interactivo del panel (o al panel mismo); mientras esté abierto, que Tab y Mayús+Tab solo recorran los elementos internos del panel, ciclando del último al primero; y al cerrar (por Escape o por su botón de cierre), devolver el foco al elemento que lo abrió. Es un patrón bien documentado (WAI-ARIA Authoring Practices, patrón “Dialog (Modal)”) y aplicable por igual a los tres casos relevados.",
        evidencia: [
          { src: "capturas/caso-03/21-teclado-notificaciones-foco-escapa.jpg", caption: "Panel de notificaciones abierto, foco visible en “Cuenta” detrás del overlay" },
          { src: "capturas/caso-03/22-teclado-menu-cuenta-foco-escapa.jpg", caption: "Menú “Cuenta” abierto, foco visible en la flecha del hero detrás del overlay" },
          { src: "capturas/caso-03/23-teclado-modal-elegir-terapia-foco-escapa.jpg", caption: "Modal “Elegí tu terapia” abierto, foco en una tarjeta completamente tapada e invisible" }
        ],
        verificaciones: []
      },
      {
        numero: 14,
        titulo: "El menú de navegación lateral no muestra la etiqueta de texto de cada ítem cuando se navega por teclado, solo al pasar el mouse",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Menor",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "El menú lateral izquierdo se muestra siempre colapsado, mostrando solo el ícono de cada sección (Inicio, Sesiones, Chat, Diario, Ejercicios, Música), y se expande para mostrar también el texto (por ejemplo “Inicio”) únicamente cuando se pasa el mouse por encima. Al navegar con teclado (Tab), cada ítem sí recibe un indicador de foco visible (un realce sutil alrededor del ícono), pero el menú <strong>no se expande</strong> — el texto de la etiqueta nunca aparece. Una persona vidente que navegue con teclado (por ejemplo, por una dificultad motriz que le impide usar el mouse con precisión, un caso de uso habitual de la navegación por teclado) ve únicamente un ícono resaltado y debe reconocerlo sin ayuda de texto, mientras que una persona que use mouse sí recibe esa ayuda. El nombre accesible del link (el texto “Inicio”, “Sesiones”, etc.) sí está presente en el HTML y sería leído por un lector de pantalla, por lo que el impacto es específico a personas videntes que dependen del teclado.",
        recomendacion: "Expandir el menú (o al menos mostrar la etiqueta en un tooltip) también en el evento <code>:focus-visible</code> de cada link, no solo en <code>:hover</code>, para que la navegación por teclado y por mouse ofrezcan la misma información.",
        evidencia: [
          { src: "capturas/caso-03/18-teclado-sidebar-foco-sin-etiqueta.jpg", caption: "Foco por teclado en el menú, sin etiqueta visible" },
          { src: "capturas/caso-03/19-teclado-sidebar-zoom-sin-etiqueta.png", caption: "Zoom sobre el mismo estado" },
          { src: "capturas/caso-03/20-sidebar-hover-con-etiqueta.png", caption: "El mismo menú, expandido con la etiqueta “Inicio” visible al pasar el mouse" }
        ],
        verificaciones: []
      },
      {
        numero: 15,
        titulo: "Los puntos del carrusel usan <code>role=\"tab\"</code> pero no implementan la navegación por flechas propia de ese patrón",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Los 3 puntos indicadores del carrusel hero tienen <code>role=\"tab\"</code> dentro de un contenedor <code>role=\"tablist\"</code>. El patrón estándar de accesibilidad para un tablist (WAI-ARIA Authoring Practices) espera que solo uno de los “tabs” esté en el orden de tabulación a la vez, y que las flechas izquierda/derecha del teclado muevan la selección entre ellos. En la implementación actual, en cambio, <strong>los 3 puntos reciben foco por Tab de forma independiente</strong> (como si fueran 3 botones sueltos), y las flechas del teclado no tienen ningún efecto sobre ellos estando enfocados. Esto no impide usarlos — cada uno se activa con Enter o Espacio — pero se aparta del patrón que una persona habituada a otros tablists (por ejemplo, los de cualquier sistema operativo) esperaría encontrar.",
        recomendacion: "Si se mantiene <code>role=\"tab\"</code>/<code>role=\"tablist\"</code>, implementar el patrón completo (un solo punto en el orden de tabulación por vez, navegación entre ellos con las flechas). Si no se planea implementarlo por completo, considerar quitar esos roles ARIA y dejarlos como botones simples, para no prometer un comportamiento que la interfaz no cumple.",
        evidencia: [],
        verificaciones: []
      },
      {
        numero: 16,
        titulo: "No hay un enlace para saltear el menú lateral y el header e ir directo al contenido principal",
        heuristicaId: "H07",
        heuristicaNombre: "H7 — Flexibilidad y eficiencia de uso",
        severidad: "Recomendación",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Al recargar la Home y presionar Tab por primera vez, el foco entra directamente al menú lateral (6 ítems) y continúa por el header (logo, notificaciones, Cuenta) antes de llegar al contenido principal de la página — un total de 9 paradas de Tab antes de alcanzar el carrusel hero. No existe un enlace “Saltar al contenido” (skip link), un recurso estándar y de bajo costo de implementación que le ahorraría ese recorrido repetitivo a cualquier persona que navegue con teclado, especialmente porque el menú lateral y el header se repiten idénticos en cada página del producto.",
        recomendacion: "Agregar un enlace “Saltar al contenido principal” visualmente oculto que se muestra al recibir foco (primer elemento del documento, antes del menú lateral), apuntando al contenedor del contenido principal de cada página.",
        evidencia: [],
        verificaciones: []
      },
      {
        numero: 17,
        titulo: "En tablet y en móvil, el botón del “Tour con Maca” no es alcanzable en ningún menú, pero el tour igual se dispara automáticamente sin que la persona usuaria pueda controlarlo",
        heuristicaId: "H07",
        heuristicaNombre: "H7 — Flexibilidad y eficiencia de uso",
        severidad: "Recomendación",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En escritorio, el “Tour con Maca” (tour guiado de onboarding, 9 pasos, ver Hallazgo 7 y el feedback positivo del punto 10) se accede desde un botón fijo en la esquina inferior izquierda del menú lateral. En tablet, ese menú lateral desaparece (reemplazado por la barra de navegación inferior y el menú “Cuenta”/“Explorar” del header), y el tour no fue reubicado en ningún otro lugar: no está en el panel “Cuenta” (abierto desde la hamburguesa) ni en el panel “Explorar” (abierto desde “Más”), los dos únicos menús de navegación disponibles a este ancho. Se confirmó vía inspección de DOM que el botón del tour (clase <code>portal-sidebar-tour</code>) <strong>sigue presente en el HTML de la página</strong>, pero no se renderiza en absoluto (<code>offsetParent: null</code>, <code>getBoundingClientRect()</code> con <code>x</code>, <code>y</code>, <code>width</code> y <code>height</code> en cero) — no es una decisión de diseño que lo excluya limpiamente de este layout, sino un elemento que quedó huérfano al adaptarlo: existe en el código pero ninguna persona usuaria de tablet puede llegar a él manualmente. En una verificación posterior realizada por el Evaluador UX (por fuera de esta pasada, sin evidencia archivada por Claude), se encontró que el tour igual se dispara automáticamente en tablet y en móvil pese a que su botón de disparo manual no es alcanzable: la persona usuaria sí llega a verlo, sin necesidad de encontrar un acceso en ningún menú. Esto reduce el impacto original del hallazgo — no se trata de un recurso de onboarding completamente perdido, como se había reportado inicialmente — pero introduce un problema distinto: al no existir un control visible, la persona usuaria no puede decidir cuándo verlo ni volver a abrirlo más adelante si lo necesita, y el tour puede dispararse en un momento en el que ya no es útil o incluso resulta intrusivo.",
        recomendacion: "Independientemente de que el tour se dispare solo, agregar un acceso visible al “Tour con Maca” en alguno de los dos menús de tablet/móvil (idealmente en “Explorar”, que ya agrupa contenido de descubrimiento) para que la persona usuaria pueda volver a abrirlo cuando quiera, y evaluar si conviene condicionar el disparo automático (por ejemplo, solo la primera vez que se visita la Home, o con un mecanismo explícito de “no volver a mostrar”) para que no quede fuera del control de la persona usuaria.",
        evidencia: [
          { src: "capturas/caso-03/30-tablet-menu-cuenta-superior-sin-tour.jpg", caption: "Panel “Cuenta” completo, sin ninguna opción de tour" },
          { src: "capturas/caso-03/31-tablet-menu-cuenta-inferior-sin-tour.jpg", caption: "Resto del panel “Cuenta”, tampoco tiene el tour" },
          { src: "capturas/caso-03/32-tablet-menu-explorar-mas-sin-tour.jpg", caption: "Panel “Explorar”, con sus 3 únicas opciones, sin el tour" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se repitió la misma inspección visual de ambos menús (“Cuenta” y “Explorar”) y la misma inspección de DOM del botón del tour, con idéntico resultado (<code>offsetParent: null</code>, rect en cero).",
            evidencia: []
          }
        ]
      },
      {
        numero: 18,
        titulo: "En tablet y en móvil, la fila de accesos rápidos crece a 7 tarjetas y aparecen dos bloques nuevos sin equivalente en escritorio, acentuando la duplicación de contenido del Hallazgo 9",
        heuristicaId: "H08",
        heuristicaNombre: "H8 — Estética sobria y minimalismo antiestrés",
        severidad: "Menor",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "La Home de tablet no es una simple reducción de la de escritorio: reorganiza el contenido y agrega piezas nuevas. La fila de accesos rápidos pasa de 6 a <strong>7 tarjetas</strong>, sumando “Reservar sesión” (con su propio ícono y CTA “Reservar ahora”) como primera tarjeta, algo que en escritorio no tiene una tarjeta propia en ese nivel. Debajo de esa fila aparece un banner “<strong>Tus próximas sesiones</strong>” (con la sesión de prueba pendiente y su CTA “Reservar sesión de prueba”) que no existe en esa posición en escritorio. Y dentro de la sección extendida “Diario emocional”, en el lugar donde escritorio muestra la tarjeta “Nueva entrada”, tablet muestra en cambio un widget “<strong>¿Cómo te sentís hoy?</strong>” (chequeo de ánimo) sin equivalente directo en la versión de escritorio relevada en este caso. El resultado es una Home de tablet más larga que la de escritorio, no más corta, y que profundiza el problema ya señalado en el Hallazgo 9 (contenido y accesos duplicados entre la fila superior y las secciones extendidas): a los 4 pares de accesos duplicados de escritorio se suma ahora un quinto (“Reservar sesión” arriba vs. el banner “Tus próximas sesiones” y el propio “Reservar sesión de prueba” dentro de él).",
        recomendacion: "Al definir el rediseño responsive de esta pantalla, revisar si “Reservar sesión” y el banner “Tus próximas sesiones” deberían reemplazar (no sumarse a) alguna de las tarjetas o secciones ya existentes, y confirmar con el equipo de producto si el widget “¿Cómo te sentís hoy?” es una funcionalidad nueva pensada solo para tablet/móvil o si también debería estar disponible en escritorio.",
        evidencia: [
          { src: "capturas/caso-03/24-tablet-home-vista-inicial.jpg", caption: "Fila de 7 tarjetas en tablet" },
          { src: "capturas/caso-03/25-tablet-estructura-completa-7-tarjetas.jpg", caption: "Banner “Tus próximas sesiones” en tablet" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se confirmaron los mismos 7 títulos de tarjeta (“Reservar sesión”, “Tu profesional”, “Comprar sesiones”, “Próximas sesiones”, “Diario”, “Ejercicios”, “Música”) vía inspección de DOM, y se vio visualmente tanto el banner “Tus próximas sesiones” como el widget “¿Cómo te sentís hoy?”.",
            evidencia: []
          }
        ]
      },
      {
        numero: 19,
        titulo: "La sección de música se llama “Música” en un lugar y “Música relajante” en otro, dentro de la misma versión de la Home",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Otros",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Dentro de “Inicio ML”, la sección y el ícono del menú lateral de escritorio identifican a este contenido como “<strong>Música</strong>” (mismo nombre que la tarjeta de acceso rápido y el banner de la sección extendida, ver también Hallazgo 12). En tablet y en móvil, el mismo destino se lista en el panel “Explorar” (abierto desde “Más”) como “<strong>Música relajante</strong>” — un nombre más largo y distinto, pese a llevar exactamente al mismo lugar (<code>/bienestar/musica</code>, titulado en la propia página “🎧 Música para relajar”). No es un error grave, pero es una tercera variante de nombre para el mismo concepto dentro de una sola versión del producto, lo que dificulta reconocer que se trata de la misma sección al pasar de un viewport a otro.",
        recomendacion: "Unificar el nombre de esta sección en un solo texto (por ejemplo “Música” a secas, ya usado en la tarjeta de acceso rápido) y reutilizarlo en todos los puntos de entrada, independientemente del viewport.",
        evidencia: [
          { src: "capturas/caso-03/01-home-ml-vista-general.jpg", caption: "Etiqueta “Música” en el menú lateral de escritorio" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "variante",
            textoHtml: "El mismo destino se lista como “Música relajante” en el panel “Explorar”, en vez de “Música” — mismo lugar (<code>/bienestar/musica</code>), nombre distinto.",
            evidencia: [
              { src: "capturas/caso-03/32-tablet-menu-explorar-mas-sin-tour.jpg", caption: "“Música relajante” en el panel “Explorar” de tablet" }
            ]
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "variante",
            textoHtml: "Se confirmó visualmente la misma etiqueta “Música relajante” en el panel “Explorar”.",
            evidencia: []
          }
        ]
      },
      {
        numero: 20,
        titulo: "En “Inicio clásica”, a 375px el panel de planes de precios colapsa a tamaño cero y desaparece de la página, dejando un hueco en blanco",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Mayor",
        clasificacion: "Responsive",
        viewport: "Móvil (375×812)",
        descripcionHtml: "En escritorio y en tablet, “Inicio clásica” (la Home alternativa del Hallazgo 1) expone directamente en el cuerpo de la página los 3 planes de precios (MotivarCare Basic/Pro/Plus) y, en tablet, además una serie de bloques de estado (“Sesiones reservadas”, “Sesiones disponibles”, “Profesional activo”). En móvil, ninguno de esos bloques de estado llega siquiera a estar en el HTML (no es un problema de este hallazgo, son simplemente reemplazados por un bloque más corto, “Próximas Sesiones: Sin turnos agendados”), pero el panel de planes de precios sí está en el HTML — y no se renderiza: se confirmó vía inspección de DOM que el contenedor completo del panel (<code>section.content-card.sessions-package-options-panel.dashboard-package-options-panel</code>, que incluye los 3 <code>article.deal-card</code> de cada plan con su título “MotivarCare Basic”/“...Plus”) tiene un <code>getBoundingClientRect()</code> con <code>x</code>, <code>y</code>, <code>width</code> y <code>height</code> en cero, igual que el patrón ya visto en el Hallazgo 17 con el “Tour con Maca”: el contenido existe pero es completamente inalcanzable e invisible. A diferencia del Tour, acá el efecto visual es además directamente perceptible sin abrir consola: en la página se ve un hueco en blanco de varios cientos de píxeles entre la tarjeta “Próximas Sesiones” y el pie de página, exactamente donde deberían estar los 3 planes. En esta versión de la Home (“Inicio clásica”), los planes de precios en el cuerpo de la página son la única vía visible de compra (a diferencia de “Inicio ML”, que los ofrece a través del modal “Elegí tu terapia”), por lo que en móvil “Inicio clásica” queda, en la práctica, sin forma de comprar un plan.",
        recomendacion: "Revisar las reglas de layout responsive de ese panel específicamente por debajo del breakpoint de tablet (probablemente una regla de grid/flex que no contempla anchos menores a ~768px) para que los planes vuelvan a ser visibles en móvil, o bien rediseñar deliberadamente esa sección para pantallas chicas (por ejemplo, en una lista vertical o un carrusel) en lugar de dejarla colapsada. Confirmar si el mismo colapso ocurre también en tablet en algún punto intermedio del rango 375–768px.",
        evidencia: [],
        verificaciones: []
      },
      {
        numero: 21,
        titulo: "El botón “Cuenta” del header usa el mismo estilo visual que el CTA principal “Reservar sesión”, sin nada que los distinga como acciones de jerarquía distinta",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Mayor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "El botón “Cuenta ▾” del header (arriba a la derecha, abre el menú con “Mi perfil”, “Mi suscripción”, “Ajustes”, “Cerrar sesión”) se extrajo vía <code>getComputedStyle()</code> y se comparó con el botón CTA “Reservar sesión” del hero de la Home. Los valores son prácticamente idénticos: mismo color de fondo violeta de marca <code>rgb(95, 68, 235)</code> / <code>#5F44EB</code> (el mismo <code>--brand</code> ya identificado en el Hallazgo 10), mismo <code>border-radius</code> de 10px, mismo tratamiento de sombra (<code>box-shadow</code>) y texto en blanco. Las únicas diferencias encontradas —un borde adicional muy sutil en “Cuenta” y un <code>font-weight</code> de 700 contra 750 en el CTA— son demasiado pequeñas para funcionar como señal de jerarquía visual a simple vista. El resultado es que un botón de navegación/utilidad (abrir un menú de cuenta) y la acción de conversión principal de la página (reservar una sesión) son visualmente intercambiables: nada en el color, la forma o el tamaño indica cuál de los dos es “la” acción que la página quiere que el usuario tome. Esto confirma la observación original del Evaluador UX. Se validó únicamente en escritorio, a pedido explícito del Evaluador UX; se asume el mismo comportamiento en tablet y móvil por tratarse de un componente de header que no cambia de layout entre viewports, pero no fue verificado de forma independiente en esos dos anchos.",
        recomendacion: "Reservar el color de marca sólido (<code>#5F44EB</code>) y el tratamiento de sombra exclusivamente para el/los CTA de conversión (Reservar sesión, Comprar paquete, etc.), y darle a “Cuenta” un estilo claramente distinto y de menor peso visual — por ejemplo botón secundario/ghost (borde o fondo neutro, sin sombra), o un patrón de avatar/ícono de usuario en lugar de un botón de texto sólido, que es el patrón más habitual para este tipo de menú en otras aplicaciones.",
        evidencia: [
          { src: "capturas/caso-03/34-boton-cuenta-vs-cta-reservar-zoom.png", caption: "Comparación directa (zoom): botón “Cuenta” vs. CTA “Reservar sesión”" }
        ],
        verificaciones: []
      },
      {
        numero: 22,
        titulo: "No existe un sistema consistente de jerarquía de botones en la Home: la misma acción (“Reservar sesión”) aparece en al menos tres colores distintos, y las tarjetas con enlaces internos alternan entre subrayado y sin subrayar sin un criterio aparente",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Escritorio (1440×900)",
        descripcionHtml: "Al catalogar todos los botones y enlaces visualmente distintos de la Home (deduplicados por firma de estilo vía <code>getComputedStyle()</code>: color de fondo, color de texto, borde, <code>border-radius</code>, <code>font-weight</code>, <code>padding</code>, <code>box-shadow</code>), se encontraron al menos tres colores distintos usados para la misma etiqueta o intención de acción “reservar”: el violeta de marca <code>#5F44EB</code> (<code>border-radius</code> 10px, ya visto en el Hallazgo 21), un azul <code>rgb(29, 78, 216)</code> / <code>#1D4ED8</code> (<code>border-radius</code> 8px) en una variante de “Reservar sesión” dentro del panel de “Sesiones”, y un tercer color, un navy casi negro <code>rgb(30, 27, 75)</code> / <code>#1E1B4B</code> (<code>border-radius</code> 12px), en el botón “Reservar sesión de prueba” que aparece junto al anterior en el mismo bloque. Ninguno de los tres colores corresponde a la paleta de marca documentada en el Hallazgo 10 (violeta + verde), salvo el primero. Además, más allá de los botones “sólidos”, buena parte de las tarjetas clicables de la Home (accesos rápidos, tarjetas de “Ejercicios”, tarjetas del pie de las secciones extendidas) usan enlaces de texto internos que alternan entre subrayado y sin subrayar de tarjeta a tarjeta, sin que el subrayado parezca correlacionar con si el elemento es o no interactivo. En conjunto, esto indica que no hay un sistema de botones (tipo “primario / secundario / terciario”) aplicado de forma consistente: cada sección parece haber definido su propio color y forma para una acción del mismo tipo. Como en el Hallazgo 21, esta validación se hizo únicamente en escritorio, a pedido explícito del Evaluador UX.",
        recomendacion: "Definir un sistema formal de botones (por ejemplo primario = violeta de marca sólido, secundario = borde o fondo neutro, terciario = enlace de texto con subrayado consistente) y aplicarlo de forma uniforme a toda acción de “reservar”/“comprar” en la Home, retirando las variantes azul y navy que no pertenecen a la paleta de marca. De forma independiente, definir una regla única sobre cuándo un enlace de texto lleva subrayado (por ejemplo, siempre en estado hover/foco, nunca en reposo, o viceversa) y aplicarla de forma pareja en todas las tarjetas.",
        evidencia: [
          { src: "capturas/caso-03/35-botones-reservar-sesion-tres-colores.jpg", caption: "Banner de “Sesiones”: botón azul “Reservar sesión” junto al navy “Reservar sesión de prueba”" },
          { src: "capturas/caso-03/36-tarjetas-enlaces-subrayados-diario.jpg", caption: "Banner “Diario emocional”: enlaces subrayados vs. tarjetas inferiores sin ese tratamiento" }
        ],
        verificaciones: []
      },
      {
        numero: 23,
        titulo: "La tarjeta “Tu profesional” da la impresión de una sesión de prueba gratuita, pero deriva a un pago de precio completo; además usa una ilustración y un botón que no siguen el lenguaje visual del resto de la Home",
        heuristicaId: "H02",
        heuristicaNombre: "H2 — Coincidencia con el mundo real",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "En la Home, la primera de las 6 tarjetas de accesos rápidos (“Tu profesional”) invita a “Reservar sesión de prueba”. En español, “sesión de prueba” — sobre todo sin ninguna aclaración de costo al lado — genera una expectativa fuerte de gratuidad o bajo riesgo (como el “período de prueba” de una suscripción). Al seguir el flujo completo (elegir un profesional y un horario) se llega a una pantalla que dice “SESIÓN DE PRUEBA — Confirmá tu turno antes de pagar”, con “TOTAL A PAGAR AHORA: 1 sesión · precio de lista” — en el caso probado, ARS 64.000, el precio de lista completo del profesional, sin descuento ni período gratuito de ningún tipo. Para un producto de salud mental, donde la propia auditoría ya señala la sensibilidad del momento en que alguien busca ayuda por primera vez, que la primera interacción con el sistema de pagos contradiga la expectativa que genera su propio wording es un problema real de confianza, no solo estético.<p class=\"mt-2\">El texto de la tarjeta contribuye a esa confusión: “Se define al reservar tu sesión de prueba o una sesión con créditos” usa lenguaje de sistema (“se define”) en vez de lenguaje centrado en la persona, y en ningún momento aclara que esa “sesión de prueba” tiene costo.</p><p class=\"mt-2\">Además, se detectaron dos problemas visuales menores en la misma tarjeta: el botón “Reservar sesión de prueba” ocupa aproximadamente la mitad del ancho de la tarjeta y está corrido hacia la izquierda, en vez de centrado o de ancho completo como sería esperable en el CTA principal de una tarjeta; y la ilustración usada (dos personas sentadas conversando, estilo semi-3D) no se repite en ninguna de las otras 5 tarjetas de la misma fila (Comprar sesiones, Próximas sesiones, Diario, Ejercicios, Música), que usan todas el mismo lenguaje de ícono simple dentro de un círculo de color — una ruptura del lenguaje visual del resto de la Home. (La existencia de una tercera variante de color para este mismo botón, distinta de las mencionadas acá, ya está documentada en el Hallazgo 22.)</p>",
        recomendacion: "Replantear el copy de esta tarjeta para que quede explícito desde el primer contacto que la “sesión de prueba” tiene costo (por ejemplo, mostrando el rango de precio o la palabra “paga” junto al título), y evaluar si el nombre “sesión de prueba” es el más adecuado dado lo que realmente ofrece, o si conviene renombrarla (ej. “primera sesión”) para no generar una expectativa de gratuidad. De forma independiente, alinear el botón de esta tarjeta al mismo ancho/alineación que usan las demás, y reemplazar la ilustración por un ícono del mismo sistema que el resto de las tarjetas de accesos rápidos.",
        evidencia: [
          { src: "capturas/caso-03/42-tu-profesional-tarjeta.png", caption: "Tarjeta “Tu profesional”: ilustración distinta al resto y botón angosto corrido a la izquierda" },
          { src: "capturas/caso-03/43-tu-profesional-pago-confirmacion.png", caption: "Pantalla tras elegir profesional y horario: “Sesión de prueba” con precio de lista completo a pagar" }
        ],
        verificaciones: []
      }
    ]
  }
];
