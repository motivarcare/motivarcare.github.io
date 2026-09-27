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
    findingsCount: { critica: 4, mayor: 10, menor: 23, recomendacion: 10, aRevisar: 2 }
  },
  {
    id: "professional",
    name: "Portal del Profesional",
    url: "https://pro.motivarcare.com/",
    badge: "Operación & Eficiencia",
    description: "Entorno de gestión para los psicólogos: validación de matrícula/colegiatura, configuración de horarios y zonas horarias, historial de pacientes y sala de consulta clínica.",
    score: 64,
    status: "Revisión Prioritaria",
    findingsCount: { critica: 0, mayor: 6, menor: 6, recomendacion: 5, aRevisar: 5 }
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
        numero: 14,
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
        numero: 15,
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
        numero: 16,
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
  },
  {
    id: 4,
    numero: "04",
    slug: "caso-04-reserva-paquete-sesiones",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    titulo: "Reserva de un paquete de sesiones desde la Home del Paciente y agendamiento del turno",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Se relevaron, en la Home de <code>app.motivarcare.com</code> bajo el perfil de <strong>paciente</strong>, todos los puntos de entrada a reservar o comprar sesiones, y luego se completó un flujo real de principio a fin: elegir un paquete, pagarlo, y agendar un turno usando las sesiones acreditadas. Se usó Chrome real (plugin Claude in Chrome), a pedido del Evaluador UX, con la sesión ya iniciada. A diferencia de casos anteriores, en este caso se llegó a completar una compra real (en el ambiente de prueba/sandbox de la pasarela de pago), con los datos de la tarjeta ingresados manualmente por el Evaluador UX y su autorización explícita para confirmar el pago, precisamente para poder verificar cómo queda reflejada la compra y la reserva resultante en la cuenta del paciente.",
    pasosRealizados: [
      "Se abrió <code>app.motivarcare.com</code> en Chrome (sesión ya iniciada) y se relevaron todos los botones de la Home relacionados con reservar o comprar sesiones: el CTA “Reservar sesión” del hero, “Reservar sesión de prueba” de la tarjeta “Tu profesional”, “Comprar sesiones”, el botón “Reservar sesión” del banner “Sesiones”, y “Reservar sesión de prueba” de la tarjeta “Sesión de prueba pendiente” dentro de ese mismo banner.",
      "Se comparó el estilo visual de estos cinco botones. Se confirmó que la inconsistencia de tres colores distintos para la misma acción “Reservar” (violeta de marca, azul <code>#1D4ED8</code> y navy <code>#1E1B4B</code>) ya está documentada en el <strong>Hallazgo 22 del Caso 3</strong>, así que no se generó un hallazgo nuevo por esto en este caso.",
      "Se abrió el modal “Elegí tu terapia” desde la tarjeta “Comprar sesiones” y se relevaron los tres paquetes ofrecidos (MotivarCare Basic, Pro, Plus) y la opción “Comprar sesiones individuales”.",
      "Se eligió el paquete <strong>MotivarCare Basic</strong> (4 sesiones, ARS 61.000/sesión, “Total del paquete ARS 243.500” con 5% OFF) y se presionó “Adquirir este paquete”, lo que redirigió a una pasarela de pago externa (dLocal Go), que se identificaba a sí misma como un ambiente de prueba (“Estás en un ambiente de prueba”, banner propio de la pasarela).",
      "En la pantalla de pago se detectó que el monto a pagar (<strong>ARS 608.500,00</strong>) no coincidía con el total mostrado en la selección del paquete (<strong>ARS 243.500</strong>) — ver Hallazgo 1. Se volvió atrás sin ingresar ningún dato, se reprodujo la discrepancia abriendo el mismo paquete por segunda vez (mismo monto exacto, ARS 608.500,00), y se consultó al Evaluador UX antes de seguir.",
      "A pedido explícito del Evaluador UX, éste ingresó manualmente los datos de una tarjeta de prueba en la pasarela (Claude no completó ningún campo de pago). El único campo que quedó sin completar fue “Tipo de documento” (bloqueaba el envío por validación); al no tratarse de un dato financiero ni de una credencial, se seleccionó la opción “DNI” para poder continuar, y recién entonces, con autorización explícita del Evaluador UX, se presionó “Confirmar pago”.",
      "El pago se completó (“Su pago por ARS 608.500,00 fue completado”, ambiente de prueba de dLocal Go) y la app mostró “¡Compra confirmada! Acreditamos MotivarCare Basic (4 sesiones) en tu cuenta” — confirmando que el paquete acreditado fue el correcto (Basic, 4 sesiones) pese al monto cobrado incorrecto.",
      "Se verificó en “Sesiones → Paquetes comprados” que el registro quedó persistido con el mismo monto incorrecto (MotivarCare Basic, 4 sesiones, ARS 608.500), confirmando que no es un glitch transitorio de la pantalla de checkout sino un dato que queda grabado así en la cuenta del paciente.",
      "Se observó que, ya con el paquete comprado, la tarjeta “Tu profesional” de la Home mostraba un profesional asignado (“Giuliano Simeone”) sin que en ningún momento del flujo de compra se haya pedido elegirlo. Esto contradice el texto “Se define al reservar tu sesión de prueba o una sesión con créditos” ya señalado como confuso en el <strong>Hallazgo 23 del Caso 3</strong>; se suma esta comprobación práctica como refuerzo de ese hallazgo existente, sin modificarlo.",
      "Se abrió la ficha del profesional asignado (Giuliano Simeone, Psicólogo, 82% compatibilidad, 8 años de experiencia, ★5.0) y se detectó que el texto de “Sobre el profesional” y el de “Enfoque” repiten la misma oración (“Psicologo de la UBA, con mas de 10 años de experiencia”) entre 6 y 8 veces seguidas, sin tildes, y que el bloque “Enfoque” queda además contaminado con ese mismo texto repetido en lugar de mostrar solo su propio contenido — ver Hallazgo 2.",
      "Se probó el flujo de “Reservar sesión” con las sesiones ya acreditadas: el profesional viene fijo (no se puede elegir otro desde ese modal), se eligió un día y horario de la disponibilidad ofrecida, y se confirmó la reserva.",
      "Al confirmar esa primera reserva se observó, transitoriamente, que “Próximas Reservas” mostraba dos filas idénticas (mismo profesional, mismo día y horario) y que el contador de “sesiones disponibles” había descontado 2 créditos en lugar de 1; al recargar la página el estado se autocorrigió solo (quedó 1 sola reserva y un descuento de 1 crédito). Se repitió la prueba reservando un segundo turno (viernes 25/09, 09:00) y esta vez no se reprodujo el comportamiento. Dado que no fue reproducible de forma consistente — en línea con el criterio ya aplicado en el Caso 3 para glitches intermitentes similares, que se decidió no documentar como hallazgo — se acordó con el Evaluador UX no generar un hallazgo formal por esto y dejarlo asentado acá como observación, por si se repite en una revisión futura.",
      "Se abrió el detalle de una de las reservas confirmadas (“Ver detalle”) y se verificó que muestra correctamente la fecha, la hora, el huso horario (America/Buenos_Aires), un acceso directo a Google Meet, la opción de copiar el enlace, y las políticas de reprogramación/cancelación (“Conectate 5 min antes · reprogramar con 24 h · cancelar tarde pierde el crédito”).",
      "A pedido del Evaluador UX, se revisó la casilla de correo de la cuenta de prueba (<code>gaston.f.martino@gmail.com</code>) para confirmar la llegada de los mails de confirmación del pago y de las sesiones reservadas. Se encontraron, todos recibidos correctamente: un mail de <strong>dLocalGo</strong> (<code>no-reply@dlocalgo.com</code>) confirmando el pago acreditado, con el mismo monto (ARS 608.500,00) y la referencia de pago; dos mails de <strong>MotivarCare</strong> (<code>no-reply@motivarcare.com</code>), uno por cada sesión reservada, con el título “Tu sesión quedó confirmada”, el profesional, la fecha y hora, y accesos directos a la videollamada (“Unirme a la videollamada”) y para escribirle al profesional; y, además, dos invitaciones de <strong>Google Calendar</strong> enviadas por la cuenta del profesional (<code>motivarcare.test.pro@gmail.com</code>, “Test Professional”), una por cada sesión, con el formato estándar de invitación de Calendar (Yes/No/Maybe) y el enlace de Google Meet.",
      "A pedido del Evaluador UX, se sumó una sugerencia de producto (Hallazgo 3) que no requiere verificación en pantalla ni evidencia fotográfica, por tratarse de una funcionalidad que hoy no existe: un mecanismo de seguimiento por mail para las personas que crean su cuenta pero no llegan a reservar ninguna sesión.",
      "A pedido del Evaluador UX, se revisó el panel de notificaciones de la app (ícono de campana, arriba a la derecha) para verificar su correspondencia con las acciones realizadas y los mails recibidos durante este caso. El panel mostraba una notificación de “Profesional asignado” — correcta y esperable, ya que llegó luego de la asignación automática del profesional al comprar el paquete (ver paso 9) — pero ninguna notificación sobre el pago realizado ni sobre las dos sesiones reservadas, pese a que en Ajustes → Notificaciones las categorías “Pago”, “Sesión pronto” y “Próxima sesión” estaban habilitadas — ver Hallazgo 4.",
      "A pedido del Evaluador UX, se probó el flujo de compra de sesiones individuales (“Comprar sesiones individuales”, dentro del mismo modal “Elegí tu terapia”). Se relevó el precio de catálogo (ARS 64.000 por sesión) para 1, 2 y 3 sesiones, y la cantidad personalizable (“Otra cantidad”, probada con 5 sesiones), confirmando en todos los casos que el cálculo del total en el modal es correcto (precio por sesión × cantidad).",
      "Se avanzó hasta la pasarela de pago (dLocal Go, mismo ambiente de prueba) para 1, 2 y 3 sesiones, sin completar el pago en ningún caso. A diferencia del Hallazgo 1 (paquetes), el monto mostrado en el checkout coincidió exactamente con el precio de catálogo en los tres casos (ARS 64.000, ARS 128.000 y ARS 192.000 respectivamente) — ver Feedback positivo.",
      "Durante esta prueba se detectaron dos problemas menores adicionales: (a) el modal “Sesiones fuera de paquete” muestra el precio con el formato “$ 64.000 ARS” en su estado inicial, pero cambia al formato “ARS 64.000” (sin el símbolo “$”) apenas se interactúa con alguna de las pestañas de cantidad, incluso volviendo a la misma opción — ver Hallazgo 5; (b) en la pasarela de pago, la descripción del pedido pluraliza mal “sesión”, mostrando “2 sesiónes” y “3 sesiónes” (con tilde) en lugar de “sesiones” — ver Hallazgo 6.",
      "A pedido del Evaluador UX, se descartó probar los paquetes Pro y Plus (ver Pendientes) y se pasó directamente a validar este caso en viewport tablet (768×1024), con alcance acotado a una revisión visual/responsive de botones y modales, sin completar compras ni reservas nuevas.",
      "Se redimensionó el navegador a 768×1024 y se revisó la Home del paciente. El layout se reorganiza correctamente en una grilla de tarjetas con navegación inferior (Inicio/Sesiones/Chat/Diario/Más), pero se detectaron dos problemas: la tarjeta “Reservar sesión” (nueva en este viewport, no existe como tarjeta propia en escritorio) queda con el mismo fondo azul destacado que “Comprar sesiones” — ver Hallazgo 7 —, y no hay ninguna barra de encabezado fija con el logo de MotivarCare, a diferencia de escritorio — ver Hallazgo 8.",
      "Se abrió el modal “Elegí tu terapia” en tablet: el contenido de los tres paquetes se reorganiza en tarjetas apiladas verticalmente, legibles y con scroll correcto, pero el modal se muestra a pantalla completa (sin bordes redondeados ni superposición oscura visible) y los tres botones “Adquirir este paquete” se ven con relleno sólido, a diferencia de escritorio donde solo el de Basic tiene ese tratamiento — ver Hallazgos 9 y 10.",
      "Se abrió el modal “Sesiones fuera de paquete” desde el botón “Comprar sesiones individuales”. El contenido y el cálculo de precios se ven correctamente (mismo comportamiento que en escritorio, incluyendo el mismo problema de formato de moneda del Hallazgo 5), pero este modal se presenta como un diálogo centrado con márgenes y esquinas redondeadas, un patrón distinto al del modal anterior dentro del mismo flujo — ver Hallazgo 10.",
      "A pedido del Evaluador UX, se repitió la misma revisión visual/responsive (sin compras ni reservas) en viewport móvil (375×812).",
      "En la Home, se confirmó el mismo problema de la tarjeta “Reservar sesión” compitiendo visualmente con “Comprar sesiones” (Hallazgo 7) y la ausencia de una barra de encabezado con el logo de MotivarCare (Hallazgo 8) ya observados en tablet.",
      "En el modal “Elegí tu terapia” se confirmó el mismo patrón a pantalla completa sin bordes, y los tres botones “Adquirir este paquete” con relleno sólido (Hallazgo 9), igual que en tablet. También se confirmó que el modal “Sesiones fuera de paquete” reproduce el mismo problema de formato de moneda del Hallazgo 5 (“$ 64.000 ARS” inicial → “ARS 64.000” tras interactuar).",
      "A diferencia de tablet, en móvil el modal “Sesiones fuera de paquete” no se presenta como un diálogo centrado con márgenes holgados, sino casi a pantalla completa, con márgenes mínimos — una variante del mismo problema de inconsistencia de estilos entre los dos modales del flujo de compra (Hallazgo 10), que en ningún caso llega a coincidir con el estilo a pantalla completa sin bordes de “Elegí tu terapia”.",
      "A pedido del Evaluador UX, se avanzó con la compra y la reserva “reales” (pago efectivamente completado, en el ambiente de prueba/sandbox) en viewport móvil (375×812), repitiendo el mismo paquete ya probado en escritorio (“MotivarCare Basic”) sobre la misma cuenta de prueba, que ya tenía ese paquete activo desde el paso 4.",
      "Se abrió el modal “Elegí tu terapia” y se seleccionó nuevamente el paquete “MotivarCare Basic”. Se observó que el precio de catálogo había cambiado levemente respecto del mostrado horas antes, en la misma sesión de trabajo, durante la revisión visual de este paquete en móvil (paso 26): de “Ahorrás ARS 12.500 / Total ARS 243.500” a “Ahorrás ARS 13.000 / Total ARS 243.000”. Se confirmó el nuevo valor recargando la página y volviendo a abrir el modal, con el mismo resultado las dos veces.",
      "Se presionó “Adquirir este paquete”, redirigiendo nuevamente a dLocal Go. A diferencia de la compra original (paso 5, Hallazgo 1), esta vez el monto mostrado en el checkout (“Monto a pagar: ARS 243.000,00”) coincidió exactamente con el precio de catálogo recién observado (paso 29) — el desfasaje del Hallazgo 1 no se reprodujo en este intento. Se señaló esto explícitamente al Evaluador UX antes de continuar, aclarando que se documentaría sin sacar conclusiones apresuradas sobre la causa (ver verificación agregada al Hallazgo 1). Se confirmó además que la descripción del pedido mostraba “MotivarCare · MotivarCare Basic” (sin conteo de sesiones), por lo que el problema de pluralización del Hallazgo 6 —específico del checkout de sesiones individuales, donde sí se muestra “N sesiones”— no aplica a este flujo de compra de paquetes.",
      "A pedido explícito del Evaluador UX, éste volvió a ingresar manualmente los datos de una tarjeta de prueba (los mismos que en el paso 6) y, recién con su autorización explícita (“si”, en respuesta directa a la pregunta de si se debía confirmar el pago), se presionó “Confirmar pago”.",
      "El pago se completó (“Su pago por ARS 243.000,00 fue completado”, referencia T-155350-i1lb2m39-sn2770s20517f4-ur1ck8mr43oc) y, tras el redireccionamiento automático, la app volvió a mostrar la pantalla “¡Compra confirmada! Acreditamos MotivarCare Basic (4 sesiones) en tu cuenta”.",
      "Se verificó que el contador de “sesiones disponibles” pasó correctamente de 2 (créditos restantes de la compra original, luego de las dos reservas ya hechas en escritorio) a 6, reflejando la suma de las 4 sesiones nuevas.",
      "Se verificó en “Sesiones → Paquetes comprados” que ambas compras del paquete Basic quedan listadas por separado: la nueva, con el monto correcto (ARS 243.000, coincidente con el catálogo), y la original (paso 8, Hallazgo 1), que sigue persistida con el monto incorrecto (ARS 607.000 — a su vez levemente distinto de los ARS 608.500 originales, otra muestra de que el precio de catálogo del paquete fue variando con el correr de las pruebas).",
      "Al explorar la pantalla “Sesiones” en busca del control para reservar con los créditos nuevos, se detectó que el botón “Comprar” (una de dos pestañas junto a “Reservar”, bajo “Próximas Reservas”) no muestra ningún selector de paquete: lleva directamente a la pasarela de pago con un paquete ya preseleccionado (“MotivarCare Pro”, ARS 460.000) — ver Hallazgo 11. Se salió de esa pantalla sin ingresar ningún dato ni confirmar nada, verificando el comportamiento dos veces.",
      "Se usó en cambio el botón “Reservar” (la otra pestaña, junto a “Comprar”) bajo “Próximas Reservas”, que sí abrió correctamente el modal “Reservar sesión”, con el profesional fijo (Giuliano Simeone) y el contador mostrando las 6 sesiones disponibles.",
      "Se eligió un día y horario (miércoles 23/09, 09:00) del listado de disponibilidad y se confirmó la reserva.",
      "La reserva se agregó correctamente al listado de “Próximas Reservas” (como la primera, antes de las dos ya existentes) y el contador de sesiones disponibles descontó 1 crédito correctamente, pasando de 6 a 5.",
      "Se abrió el detalle de esta nueva reserva (“Ver detalle”) y se confirmó que se ve igual de completo y correcto que en escritorio (paso 13): fecha, hora, huso horario, acceso a Google Meet, enlace copiable y las políticas de reprogramación/cancelación, todo legible y bien distribuido en el ancho de móvil."
    ],
    feedbackPositivo: [
      "La pantalla de confirmación de pago de la pasarela y la de “¡Compra confirmada!” de la app son claras, tranquilizadoras y confirman sin ambigüedad qué se acreditó.",
      "El detalle de cada sesión reservada (“Ver detalle”) centraliza todo lo necesario en una sola pantalla: fecha, hora, huso horario, acceso directo a Google Meet, enlace copiable, y las políticas de reprogramación/cancelación explicadas en una frase simple.",
      "El modal “Elegí tu terapia” compara con claridad el ahorro y el precio por sesión de los tres paquetes (Basic/Pro/Plus), con el plan recomendado destacado visualmente (“MÁS ELEGIDO”).",
      "Los mails de confirmación llegaron todos correctamente y con la información esperada: el de dLocalGo confirmando el pago acreditado, el de MotivarCare confirmando cada sesión reservada (con acceso directo a la videollamada), y el de la cuenta del profesional con la invitación estándar de Google Calendar para cada sesión — un buen resguardo adicional para la persona paciente, más allá de lo que queda guardado dentro de la app.",
      "El flujo de compra de sesiones individuales calcula el monto correctamente en todos los pasos: el precio de catálogo (ARS 64.000 por sesión) coincide exactamente con el monto mostrado en la pasarela de pago para 1, 2 y 3 sesiones, a diferencia de lo detectado con los paquetes en el Hallazgo 1 — lo que indica que ese problema es específico del flujo de paquetes y no un problema general del checkout.",
      "El contenido de los modales de compra (paquetes y sesiones individuales) se reorganiza correctamente en tablet: las tarjetas se apilan de forma legible, con scroll funcional y sin recortes de texto ni superposición de elementos.",
      "Ese mismo buen comportamiento de reflow se confirmó también en móvil: el contenido de ambos modales se mantiene legible, sin textos cortados ni botones superpuestos, pese al ancho mucho más acotado (375px).",
      "El flujo de reserva de sesión con créditos ya acreditados se probó también de punta a punta en móvil (pasos 36-39): el modal “Reservar sesión”, la selección de horario y el detalle de la reserva confirmada se ven y funcionan igual de bien que en escritorio, sin ningún recorte ni problema de layout pese al ancho reducido.",
      "El contador de “sesiones disponibles” y el registro de “Paquetes comprados” reflejaron correctamente, en todos los escenarios probados en este caso (primera compra, segunda compra, reservas sucesivas), la suma y resta de créditos correspondiente a cada acción."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "El monto cobrado en el checkout no coincide con el precio del paquete mostrado en su selección (2,5× más alto), y el dato incorrecto queda persistido en la cuenta del paciente",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "Crítica",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Al elegir el paquete “MotivarCare Basic” en el modal “Elegí tu terapia”, la tarjeta muestra con claridad: 4 sesiones, ARS 61.000 por sesión, “Total del paquete ARS 243.500” (con 5% OFF sobre un precio de lista de ARS 256.500). Al confirmar “Adquirir este paquete”, la app redirige a una pasarela de pago externa (dLocal Go) que muestra un monto completamente distinto: “Monto a pagar: ARS 608.500,00” — casi 2,5 veces el precio anunciado. Se reprodujo la discrepancia abriendo el mismo paquete por segunda vez, con resultado idéntico (ARS 608.500,00 otra vez). Con autorización explícita del Evaluador UX, se completó el pago (usando una tarjeta de prueba que él mismo ingresó) para confirmar qué ocurre después: la app acreditó correctamente el paquete contratado (“Acreditamos MotivarCare Basic (4 sesiones) en tu cuenta”), es decir que no se cobró de más por confundir el paquete con otro — el paquete es el correcto, pero el monto asociado a él está mal. Ese monto incorrecto (ARS 608.500) queda además persistido como el precio “oficial” de esa compra en “Sesiones → Paquetes comprados”, visible para el paciente en cualquier momento futuro. Para un producto de salud digital, donde la claridad y la confianza en torno al dinero son especialmente sensibles (más aún al tratarse de una compra real, no de una simulación visual), un desfasaje de esta magnitud entre lo que se promete y lo que efectivamente se cobra es un problema de máxima prioridad.<p class=\"mt-2\">Nota aparte: la pasarela de pago se identificó a sí misma como un ambiente de prueba/“sandbox” (“Estás en un ambiente de prueba”) — algo que vale la pena confirmar si es lo esperado para este entorno o si debería apuntar a producción.</p>",
        recomendacion: "Auditar el cálculo del monto entre el paso de selección del paquete (donde el precio se muestra correctamente) y la creación de la orden de pago que se envía a la pasarela — es ahí donde debe estar introduciéndose el error. Agregar una validación de integridad (por ejemplo, que el backend rechace o alerte si el monto a cobrar no coincide con el precio de catálogo vigente del paquete elegido) antes de permitir que cualquier compra real llegue a la pasarela de pago.",
        evidencia: [
          { src: "capturas/caso-04/01-paquete-basic-precio-catalogo.png", caption: "Tarjeta del paquete “MotivarCare Basic”: Total del paquete ARS 243.500" },
          { src: "capturas/caso-04/02-checkout-monto-a-pagar.png", caption: "Pasarela de pago: Monto a pagar ARS 608.500,00" },
          { src: "capturas/caso-04/03-pago-confirmado-basic-4-sesiones.jpg", caption: "Confirmación de pago y compra: “Acreditamos MotivarCare Basic (4 sesiones)”" },
          { src: "capturas/caso-04/04-paquetes-comprados-monto.png", caption: "Registro persistido en la cuenta: MotivarCare Basic, 4 sesiones, ARS 608.500" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "no-aplica",
            textoHtml: "En un segundo intento de compra del mismo paquete, esta vez en móvil y sobre una cuenta que ya tenía el paquete Basic activo, el desfasaje <strong>no se reprodujo</strong>: el checkout mostró “ARS 243.000,00”, coincidente con el precio de catálogo vigente en ese momento. El registro de esta nueva compra quedó persistido en “Paquetes comprados” con ese mismo monto correcto, mientras que el de la compra original sigue con el monto incorrecto. No se puede afirmar todavía si la no reproducción se debe al viewport, a tratarse de una segunda compra sobre una cuenta que ya tiene el paquete, a que el problema ya se haya corregido parcialmente, o a otro factor — se señala este resultado sin sacar conclusiones apresuradas, como pista a seguir en una próxima validación.",
            evidencia: [
              { src: "capturas/caso-04/22-movil-paquete-basic-precio-catalogo-243000.jpg", caption: "Paquete Basic en móvil: Total del paquete ARS 243.000 (precio de catálogo levemente distinto al de compras anteriores del mismo día)" },
              { src: "capturas/caso-04/23-movil-checkout-dlocalgo-monto-243000-coincide-catalogo.jpg", caption: "Checkout dLocal Go en móvil: Monto a pagar ARS 243.000,00, coincide exactamente con el catálogo" },
              { src: "capturas/caso-04/25-movil-paquetes-comprados-243000-vs-607000.png", caption: "Paquetes comprados: la nueva compra quedó persistida en ARS 243.000, mientras la original sigue en ARS 607.000" }
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: "La ficha del profesional asignado muestra su biografía con la misma oración repetida varias veces, sin tildes, y esa repetición contamina también la sección “Enfoque”",
        heuristicaId: "H06",
        heuristicaNombre: "H6 — Reconocimiento antes que recuerdo",
        severidad: "Menor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Tras comprar el paquete, la tarjeta “Tu profesional” de la Home ya tenía asignado un profesional (Giuliano Simeone, Psicólogo, verificado, ★5.0, 82% compatibilidad, 8 años de experiencia). Al abrir su ficha completa, el bloque “Sobre el profesional” repite la misma oración (“Psicologo de la UBA, con mas de 10 años de experiencia”) entre 6 y 8 veces seguidas, sin ningún otro contenido real sobre el profesional, y sin tildes (“Psicologo”, “mas”). El bloque “Enfoque”, que sí arranca con un contenido propio y correcto (“Psicodinámica o psicoanalítica; Sistémica o familiar”), queda inmediatamente después contaminado con el mismo texto repetido del bloque anterior, en lugar de limitarse a su propio contenido. La falta de tildes en sí ya está documentada, como patrón sistémico en otros textos del producto, en el <strong>Hallazgo 3 del Caso 3</strong> — lo nuevo acá es la repetición/rotura del contenido, que sugiere un problema en el template o en la carga de datos de la ficha del profesional. Para un producto de salud mental, donde la ficha del profesional es la principal herramienta con la que el paciente evalúa a quién le va a confiar su proceso terapéutico, mostrar un texto tan visiblemente roto y sin sentido debilita la percepción de calidad y profesionalismo del profesional (y del producto).",
        recomendacion: "Revisar el template o la fuente de datos que arma la ficha del profesional para confirmar por qué el texto de “Sobre el profesional” se repite en bucle y por qué el bloque “Enfoque” hereda ese mismo contenido en lugar del suyo propio. Hacer una pasada por las fichas de otros profesionales de la plataforma para confirmar si el problema es puntual de este perfil o generalizado.",
        evidencia: [
          { src: "capturas/caso-04/05-profesional-bio-texto-repetido.png", caption: "Ficha de Giuliano Simeone: “Sobre el profesional” y “Enfoque” con el mismo texto repetido" }
        ],
        verificaciones: []
      },
      {
        numero: 3,
        titulo: "No existe un mecanismo de seguimiento para las personas que crean su cuenta pero no llegan a reservar ninguna sesión",
        heuristicaId: "H07",
        heuristicaNombre: "H7 — Flexibilidad y eficiencia de uso",
        severidad: "Recomendación",
        clasificacion: "Otros",
        viewport: "No aplica (sugerencia funcional, no ligada a una pantalla o viewport específico)",
        descripcionHtml: "A lo largo de todos los casos relevados hasta ahora no se observó ningún mecanismo de reenganche para pacientes que se registran en la plataforma pero no llegan a completar una reserva (ni de sesión de prueba ni de paquete). Para un producto de salud mental, donde crear la cuenta ya implica un paso emocionalmente significativo (reconocer que se está buscando ayuda), perder a esa persona en silencio en el tramo entre el registro y la primera sesión es una oportunidad de conversión y de cuidado desaprovechada: quien no avanza puede estar experimentando fricción con el producto (por ejemplo, no saber cómo elegir profesional), dudas sobre el costo, o simplemente haber postergado la decisión, y en cualquiera de esos casos un gesto de seguimiento humano y a tiempo puede ser la diferencia entre que la persona vuelva o abandone del todo.",
        recomendacion: "Implementar un seguimiento automático (por ejemplo, disparado a las 24-48 horas de la creación de la cuenta sin actividad de reserva) que envíe un mail cálido y no invasivo preguntando si la persona necesita ayuda para dar el siguiente paso, idealmente ofreciendo de forma proactiva un profesional sugerido (aprovechando el mismo mecanismo de matching/compatibilidad ya usado en otras partes del producto) para facilitar una primera sesión. Cuidar especialmente el tono (evitar que se perciba como un mail de venta insistente) y dar una forma simple de no seguir recibiendo estos recordatorios.",
        evidencia: [],
        verificaciones: []
      },
      {
        numero: 4,
        titulo: "El panel de notificaciones no avisa del pago realizado ni de las sesiones reservadas, pese a tener esas categorías habilitadas en Ajustes",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Recomendación",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "El panel de notificaciones de la app (ícono de campana, arriba a la derecha) mostró correctamente una notificación de “Profesional asignado”, correspondiente a la asignación automática del profesional al confirmarse la compra del paquete (ver paso 9 y el Hallazgo 23 del Caso 3) — esa notificación sí corresponde a un evento real y llegó en el momento esperado. Sin embargo, no se generó ninguna notificación dentro de la app para el pago realizado (Hallazgo 1) ni para ninguna de las dos sesiones reservadas, a pesar de que en Ajustes → Notificaciones (<code>/profile?tab=settings#notificaciones</code>) las categorías “Pago”, “Sesión pronto” y “Próxima sesión” están explícitamente habilitadas. Esto contrasta con el canal de email, que sí funcionó correctamente para estos mismos eventos (ver Feedback positivo de este caso): el paciente terminó enterándose del pago y de sus sesiones por mail, pero no encontró ningún rastro de esos eventos dentro del propio panel de notificaciones de la plataforma, pese a haber configurado explícitamente que quería recibirlos ahí.",
        recomendacion: "Revisar el disparo de notificaciones in-app para los eventos de “Pago”, “Sesión pronto” y “Próxima sesión” (dado que ya existen como categorías configurables en Ajustes, es probable que el problema esté solo en que nada las está disparando todavía, no en su diseño). Priorizar al menos la de pago, dada la sensibilidad del dinero en un producto de salud, y las de sesión, que son las que más valor aportan como recordatorio dentro del flujo diario de uso de la app.",
        evidencia: [
          { src: "capturas/caso-04/09-panel-notificaciones-sin-pago-ni-sesion.jpg", caption: "Panel de notificaciones: solo “Profesional asignado”, sin pago ni sesiones" },
          { src: "capturas/caso-04/10-ajustes-notificaciones-pago-sesion-habilitadas.jpg", caption: "Ajustes → Notificaciones: “Pago”, “Sesión pronto” y “Próxima sesión” habilitadas" }
        ],
        verificaciones: []
      },
      {
        numero: 5,
        titulo: "El modal de compra de sesiones individuales muestra el precio con dos formatos de moneda distintos según se haya interactuado o no con las pestañas de cantidad",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Al abrir el modal “Sesiones fuera de paquete” (accesible desde “Comprar sesiones” → “Comprar sesiones individuales”), su estado inicial —con “1 sesión” preseleccionada, sin haber tocado nada— muestra el precio con el formato “$ 64.000 ARS” (signo peso más el código de moneda). En cuanto se hace clic en cualquiera de las pestañas de cantidad (“2 sesiones”, “3 sesiones”, o incluso al volver a hacer clic sobre “1 sesión” ya seleccionada), el formato cambia a “ARS 64.000” (código de moneda al principio, sin el signo “$”) y ya no vuelve al formato original durante esa apertura del modal. El monto en sí es correcto en ambos casos — solo cambia su presentación visual —, pero tener dos estilos de formato de moneda coexistiendo en la misma pantalla, dependiendo de un detalle de interacción que la persona usuaria no percibe como relevante, es una inconsistencia menor que puede sumar fricción/desconfianza en una pantalla que ya de por sí tiene que transmitir claridad sobre dinero.",
        recomendacion: "Unificar el formato de moneda usado en este modal (definir uno solo, por ejemplo “ARS 64.000” o “$ 64.000 ARS”, y aplicarlo siempre, incluyendo el render inicial antes de cualquier interacción). Revisar si el mismo patrón de doble formato aparece en otras pantallas de precios de la plataforma (paquetes, checkout, etc.).",
        evidencia: [
          { src: "capturas/caso-04/11-modal-sesiones-individuales-formato-dolar-inicial.jpg", caption: "Estado inicial del modal: “$ 64.000 ARS”" },
          { src: "capturas/caso-04/12-modal-sesiones-individuales-formato-ars-sin-simbolo.png", caption: "Tras interactuar con las pestañas: “ARS 64.000”, sin “$”" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: mismo formato inicial “$ 64.000 ARS” y mismo cambio a “ARS 64.000” (sin “$”) tras interactuar con las pestañas de cantidad.",
            evidencia: []
          },
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica a escritorio y tablet: mismo formato inicial “$ 64.000 ARS” y mismo cambio a “ARS 64.000” tras interactuar con las pestañas de cantidad.",
            evidencia: []
          }
        ]
      },
      {
        numero: 6,
        titulo: "La pasarela de pago pluraliza mal “sesión” en la descripción del pedido al comprar sesiones individuales (“sesiónes” con tilde, en vez de “sesiones”)",
        heuristicaId: "H02",
        heuristicaNombre: "H2 — Coincidencia con el mundo real",
        severidad: "Menor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "En la pantalla de método de pago de dLocal Go, la descripción del pedido (“MotivarCare · N sesión/sesiones”) usa correctamente el singular “1 sesión” cuando se compra una sola sesión, pero al comprar 2 o 3 sesiones muestra “2 sesiónes” y “3 sesiónes” — con una tilde que no corresponde, ya que el plural correcto de “sesión” es “sesiones”, sin acento. Se reprodujo de forma consistente en ambos casos probados (2 y 3 sesiones), lo que sugiere que la pluralización simplemente concatena el sufijo “es” a la forma singular acentuada (“sesión” + “es”) en lugar de usar la forma plural correcta. El monto cobrado no se ve afectado — es un error puramente de texto —, pero se suma al patrón ya señalado en el Hallazgo 3 del Caso 3 sobre problemas de acentuación en distintos módulos del producto.",
        recomendacion: "Corregir la lógica de pluralización de esta etiqueta (usar directamente la forma plural correcta “sesiones” en lugar de construirla a partir del singular) en el servicio que arma la descripción del pedido enviado a la pasarela de pago.",
        evidencia: [
          { src: "capturas/caso-04/13-checkout-dlocalgo-dos-sesiones-tilde-sesiones.jpg", caption: "Pasarela de pago: “MotivarCare · 2 sesiónes”, monto ARS 128.000,00 correcto" }
        ],
        verificaciones: []
      },
      {
        numero: 7,
        titulo: "En tablet, las tarjetas “Reservar sesión” y “Comprar sesiones” comparten el mismo tratamiento visual destacado, generando dos llamados a la acción principales compitiendo entre sí",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En la Home, en viewport tablet, el botón “Reservar sesión” que en escritorio vive dentro del banner horizontal (“N sesiones disponibles”) se reorganiza como una tarjeta propia dentro de la grilla de accesos rápidos, junto a “Tu profesional”, “Comprar sesiones”, “Próximas sesiones”, etc. El problema es que esta nueva tarjeta “Reservar sesión” (con su botón “Reservar ahora”) queda con exactamente el mismo fondo azul sólido que la tarjeta “Comprar sesiones” — en escritorio, ese tratamiento destacado (fondo azul) es exclusivo de “Comprar sesiones”, mientras el resto de las tarjetas usa fondo blanco con un ícono de color. En tablet, entonces, dos acciones con propósitos bien distintos — reservar un turno usando créditos que la persona ya tiene, versus comprar créditos nuevos — terminan compitiendo por la misma jerarquía visual de “acción principal”, lo que puede generar dudas sobre cuál tocar en quien llega con la sesión de prueba pendiente o con créditos ya disponibles.",
        recomendacion: "Definir cuál de las dos acciones (reservar o comprar) es la más relevante por contexto (por ejemplo: destacar “Reservar sesión” cuando hay créditos disponibles sin agendar, y “Comprar sesiones” cuando no quedan créditos) y usar el fondo azul destacado solo para esa, dejando la otra con el tratamiento neutro (fondo blanco) que usan el resto de las tarjetas.",
        evidencia: [
          { src: "capturas/caso-04/14-tablet-home-reservar-comprar-mismo-azul-sin-logo.jpg", caption: "Home en tablet: tarjetas “Reservar sesión” y “Comprar sesiones” con el mismo fondo azul" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: la tarjeta “Reservar sesión” y la tarjeta “Comprar sesiones” comparten el mismo fondo azul destacado también en móvil.",
            evidencia: [
              { src: "capturas/caso-04/18-movil-home-reservar-comprar-mismo-azul-sin-logo.jpg", caption: "Home en móvil: tarjetas “Reservar sesión” y “Comprar sesiones” con el mismo fondo azul" }
            ]
          }
        ]
      },
      {
        numero: 8,
        titulo: "En tablet no hay una barra de encabezado persistente con el logo de MotivarCare — la marca solo aparece dentro del copy del hero y de los modales",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Identidad visual",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En escritorio, todas las pantallas del portal del paciente muestran una barra de encabezado blanca fija con el isotipo + wordmark “MotivarCare” a la izquierda, visible en todo momento. En tablet (768×1024) esa barra desaparece: lo único fijo arriba de la pantalla son los íconos de notificaciones (campana) y menú (hamburguesa), sin ningún logo ni wordmark visible — ni en la Home ni en la pantalla “Sesiones”. La marca vuelve a aparecer, pero solo como texto pequeño (“MOTIVARCARE”) dentro del encabezado de los modales de compra (ver Hallazgos 9 y 10), y no de forma persistente en la navegación. Para un producto de salud mental donde generar confianza y sensación de estar en un espacio reconocible es importante, perder el ancla visual de marca en la superficie táctil que más se usa (tablet) es una regresión respecto de escritorio.",
        recomendacion: "Sumar el isotipo de MotivarCare (aunque sea en su versión compacta, sin el wordmark completo) a la barra superior fija de la versión tablet/móvil, junto a los íconos de notificaciones y menú.",
        evidencia: [
          { src: "capturas/caso-04/14-tablet-home-reservar-comprar-mismo-azul-sin-logo.jpg", caption: "Home en tablet: barra superior sin logo ni wordmark, solo campana y menú" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: tampoco hay barra de encabezado fija con el logo de MotivarCare en móvil, solo los íconos de notificaciones y menú.",
            evidencia: [
              { src: "capturas/caso-04/18-movil-home-reservar-comprar-mismo-azul-sin-logo.jpg", caption: "Home en móvil: barra superior sin logo ni wordmark, solo campana y menú" }
            ]
          }
        ]
      },
      {
        numero: 9,
        titulo: "En tablet, los tres paquetes del modal “Elegí tu terapia” muestran su botón “Adquirir este paquete” con relleno sólido, mientras que en escritorio solo el paquete Basic tiene ese tratamiento",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En escritorio, dentro del modal “Elegí tu terapia”, el botón “Adquirir este paquete” del paquete MotivarCare Basic se muestra con relleno sólido (fondo violeta, texto blanco), mientras que los de Pro y Plus se muestran como botones outline (fondo blanco, borde y texto violeta) — pese a que es el paquete Pro el que lleva la etiqueta “MÁS ELEGIDO”. En tablet (768×1024), en cambio, los tres paquetes muestran su botón con relleno sólido, cada uno en un tono de violeta distinto (Basic más oscuro, Plus más claro). El monto y el contenido de cada tarjeta son correctos en ambos casos — es solo el tratamiento visual del botón el que cambia entre viewports —, pero esta inconsistencia hace que la jerarquía visual entre los tres paquetes (cuál se ve más “elegible” a simple vista) termine siendo distinta según el dispositivo desde el que se mire.",
        recomendacion: "Unificar el criterio de qué paquete(s) reciben el botón con relleno sólido (por ejemplo, reservarlo para el paquete con la etiqueta “MÁS ELEGIDO”) y aplicar el mismo criterio en escritorio y en tablet/móvil.",
        evidencia: [
          { src: "capturas/caso-04/15-tablet-modal-elegi-tu-terapia-fullbleed-basic-solido.jpg", caption: "Paquete Basic con botón sólido" },
          { src: "capturas/caso-04/16-tablet-modal-elegi-tu-terapia-pro-plus-solidos.jpg", caption: "Paquetes Pro y Plus, también con botón sólido" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: los tres botones “Adquirir este paquete” también se muestran con relleno sólido en móvil.",
            evidencia: [
              { src: "capturas/caso-04/19-movil-modal-elegi-tu-terapia-fullbleed-basic-solido.jpg", caption: "Paquete Basic con botón sólido, en móvil" },
              { src: "capturas/caso-04/20-movil-modal-elegi-tu-terapia-pro-plus-solidos.jpg", caption: "Paquetes Pro y Plus, también con botón sólido, en móvil" }
            ]
          }
        ]
      },
      {
        numero: 10,
        titulo: "En tablet, los dos modales del flujo de compra (paquetes y sesiones individuales) usan patrones de presentación distintos: uno a pantalla completa sin bordes y otro como diálogo centrado con márgenes",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "En viewport tablet (768×1024), el modal “Elegí tu terapia” (paquetes) se presenta a pantalla completa, ocupando todo el ancho y alto disponibles, sin bordes redondeados ni superposición oscura visible alrededor. El modal “Sesiones fuera de paquete” (sesiones individuales), al que se llega tocando un botón dentro de ese mismo primer modal, en cambio se presenta como un diálogo centrado, más chico que la pantalla, con esquinas redondeadas y una superposición oscura visible en los márgenes — el patrón de modal más habitual en escritorio. Al ser dos pasos consecutivos del mismo flujo de compra, alternar entre estos dos estilos de superposición dentro de la misma interacción se siente inconsistente y puede desorientar levemente a quien no espera ese cambio de comportamiento.",
        recomendacion: "Unificar el patrón de modal usado en tablet para todo el flujo de compra — por ejemplo, adoptar el estilo de pantalla completa (más apropiado para touch) tanto para “Elegí tu terapia” como para “Sesiones fuera de paquete”, o el estilo de diálogo centrado para ambos.",
        evidencia: [
          { src: "capturas/caso-04/15-tablet-modal-elegi-tu-terapia-fullbleed-basic-solido.jpg", caption: "Modal “Elegí tu terapia”: pantalla completa, sin bordes ni superposición" },
          { src: "capturas/caso-04/17-tablet-modal-sesiones-individuales-centrado.jpg", caption: "Modal “Sesiones fuera de paquete”: diálogo centrado con márgenes y esquinas redondeadas" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (375×812)",
            resultado: "variante",
            textoHtml: "La inconsistencia entre los dos modales persiste, pero con una forma distinta a la de tablet: “Elegí tu terapia” se mantiene a pantalla completa sin bordes, mientras que “Sesiones fuera de paquete” pasa a mostrarse casi a pantalla completa con márgenes mínimos, en lugar del diálogo centrado con márgenes holgados que se ve en tablet.",
            evidencia: [
              { src: "capturas/caso-04/21-movil-modal-sesiones-individuales.jpg", caption: "Modal “Sesiones fuera de paquete” en móvil: casi a pantalla completa, con márgenes mínimos" }
            ]
          }
        ]
      },
      {
        numero: 11,
        titulo: "El botón “Comprar” en la pantalla de Sesiones lleva directo a la pasarela de pago con un paquete ya preseleccionado (el más caro), sin mostrar ningún selector de paquete",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "Mayor",
        clasificacion: "Usabilidad",
        viewport: "Móvil (375×812)",
        descripcionHtml: "En la pantalla “Sesiones” (accesible desde la navegación inferior), bajo el título “Próximas Reservas”, hay dos botones tipo pestaña: “Reservar” y “Comprar”. El botón “Reservar” funciona como se espera: abre el modal “Reservar sesión” para usar créditos ya disponibles. El botón “Comprar”, en cambio, no muestra ningún selector de paquete ni pasa por el modal “Elegí tu terapia” (el mismo al que se llega desde la tarjeta “Comprar sesiones” de la Home) — lleva directamente a la pasarela de pago externa (dLocal Go) con un paquete ya elegido de antemano: “MotivarCare Pro”, el más caro de los tres (ARS 460.000, prácticamente el doble del paquete Basic). No hay ningún texto, aviso ni pantalla intermedia dentro de la app que indique qué paquete se está por comprar antes de llegar al checkout; la única forma de enterarse es leyendo la etiqueta “MotivarCare · MotivarCare Pro” ya dentro de la pantalla de pago externa. Se verificó dos veces, con el mismo resultado ambas veces, y en ningún caso se completó ni se ingresó dato de pago alguno. Para un producto de salud que además involucra dinero real, un botón ambiguamente etiquetado “Comprar” que aterriza sin aviso en el checkout del paquete más caro es un riesgo concreto de que alguien inicie —o, si no presta atención al monto ya dentro de la pasarela, incluso complete— una compra que no quería hacer.",
        recomendacion: "Hacer que el botón “Comprar” de esta pantalla abra el mismo selector de paquetes (“Elegí tu terapia”) que usa la tarjeta “Comprar sesiones” de la Home, en lugar de saltar directo a un paquete fijo. Si el comportamiento actual es intencional (por ejemplo, como atajo hacia un paquete “recomendado”), mostrar como mínimo una pantalla de confirmación dentro de la app, con el nombre y el precio del paquete, antes de redirigir a la pasarela de pago externa.",
        evidencia: [
          { src: "capturas/caso-04/28-movil-boton-comprar-checkout-directo-pro-460000.jpg", caption: "Checkout de dLocal Go tras tocar “Comprar”: MotivarCare Pro, ARS 460.000,00, sin haber elegido ningún paquete" }
        ],
        verificaciones: []
      }
    ]
  },
  {
    id: 5,
    numero: "05",
    slug: "caso-05-diario-emocional",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    titulo: "Diario emocional — acceso desde la Home y la navegación principal, registro de entradas privadas y compartidas, y revisión del historial",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Se evaluó, en <code>app.motivarcare.com</code> bajo el perfil de <strong>paciente</strong>, la funcionalidad de “Diario emocional”: sus dos puntos de entrada (la tarjeta “Diario” de la Home y el acceso equivalente de la navegación principal), el registro de una entrada privada y de una entrada para compartir con el profesional, y la revisión del historial y las estadísticas resultantes en “Mis registros” — incluyendo el gráfico “Evolución emocional”, el timeline de entradas, los “Insights de la semana” y la “Vista previa del informe” que se arma de cara a la próxima sesión. Se usó Chrome real (plugin Claude in Chrome), con la sesión ya iniciada, en tres pasadas: escritorio (ventana ~1568×765), tablet (768×1024) y móvil (500×805, el ancho efectivamente alcanzado tras una limitación técnica del redimensionado automático de esta sesión). No se probó el botón “Enviar al psicólogo/a”, por tratarse de una acción irreversible que notifica al profesional y requiere autorización explícita previa. A pedido del Evaluador UX, se da por cerrado el caso en este punto, con algunos puntos puntuales que exceden el alcance de viewport quedando como pendientes para un caso aparte.",
    pasosRealizados: [
      "Se abrió la Home de app.motivarcare.com (paciente) en escritorio y se confirmaron los dos puntos de acceso al Diario: la tarjeta “Diario” de los accesos rápidos, y el ícono equivalente del panel de navegación lateral — ambos llevan a <code>/diario</code>, con idéntico contenido.",
      "Se relevó la estructura completa del formulario “Nueva entrada”: selección de estado de ánimo, pregunta guiada abierta, chips de “¿Qué sentiste?”, campo de texto libre, selector de “¿Qué necesitás ahora?” y, al final, el control “¿Quién puede ver esta entrada?” (“Solo yo” / “Para mi psicólogo/a”).",
      "Se observó que ese control de privacidad viene preseleccionado en “Para mi psicólogo/a” sin que la persona haya tocado nada — ver Hallazgo 1.",
      "Se registraron, en escritorio, una entrada de prueba marcada explícitamente como privada (“Solo yo”) y otra dejada en el valor por defecto (compartida), para poder verificar después que ambas se tratan de forma distinta en las estadísticas y en la “Vista previa del informe”.",
      "Se revisó el gráfico “Evolución emocional” de “Mis registros” en dos escenarios sucesivos (una entrada “Bien” esa semana, y luego esa misma entrada más una “Mal”): en ambos casos el punto se dibujó a una altura que no coincidía con el valor real ni con el propio atributo <code>title</code> del punto, confirmado por script (<code>getBoundingClientRect()</code>) — ver Hallazgo 2.",
      "Se revisaron el Timeline de entradas, los “Insights de la semana” y la “Vista previa del informe”: los tres reflejaron con exactitud los datos reales, y el informe de cara a la sesión incluyó únicamente la entrada marcada como compartida — ver Feedback positivo.",
      "Se repitió toda la batería anterior en tablet (768×1024): se confirmaron los dos puntos de acceso (tarjeta de Home y, en este viewport, el ícono “Diario” de la barra de navegación inferior en lugar del panel lateral), se reprodujo el Hallazgo 1, y se registró una tercera entrada de prueba. El gráfico “Evolución emocional”, esta vez con tres entradas en la semana, sí dibujó el punto a la altura correcta — evidencia de que el desvío del Hallazgo 2 no es constante, sino dependiente del valor puntual del promedio.",
      "Se repitió la batería en móvil (500×805, tras una limitación técnica de la sesión para llegar a un ancho menor por redimensionado automático): se confirmaron ambos accesos, se reprodujo nuevamente el Hallazgo 1, y se registró una cuarta entrada de prueba. Se notó además, sin llegar a abrir un hallazgo nuevo, que la fila de chips de estado de ánimo no entra completa en el ancho disponible y tiene una señal de scroll horizontal muy sutil.",
      "El gráfico “Evolución emocional” en móvil, con las cuatro entradas acumuladas, mostró la instancia más marcada del Hallazgo 2: el punto se dibujó dos filas por debajo de donde correspondía (a la altura de “Mal” en vez de “Bien”), en el sentido que subestima el ánimo real.",
      "El Evaluador UX reportó, ya fuera de la batería original, dos controles de “Volver” apilados y con flechas de aspecto distinto al entrar a “Mis registros” desde “Ver registros”, sólo en tablet y en móvil. Se verificó con Chrome real: se confirmó por inspección de código que son dos componentes superpuestos por error (un botón genérico y el enlace propio de la pantalla, con tipografías distintas), que el duplicado sólo aparece al llegar por navegación interna (no al cargar la URL de forma directa), y que en escritorio el botón genérico está oculto por CSS — ver Hallazgo 3.",
      "No se presionó en ningún viewport el botón “Enviar al psicólogo/a”, por tratarse de una acción irreversible que notifica al profesional y excede el alcance de esta pasada.",
      "A pedido del Evaluador UX, se da por cerrado el caso en este punto, quedando pendientes algunos puntos puntuales que no están ligados a un viewport en particular (ver detalle en la bitácora del caso)."
    ],
    feedbackPositivo: [
      "Los dos puntos de acceso al Diario —la tarjeta de la Home y el ícono de la navegación principal (panel lateral en escritorio, barra inferior en tablet/móvil)— llevan al mismo lugar y se comportan de forma idéntica en los tres viewports.",
      "El formulario de “Nueva entrada” está bien estructurado en pasos claros y guiados, con lenguaje cálido y no clínico, y contadores de caracteres visibles en los campos de texto libre.",
      "La lógica de privacidad funciona correctamente a nivel de datos, más allá del valor por defecto del Hallazgo 1: el contador “Compartidas con psicólogo” y la “Vista previa del informe” reflejaron con exactitud solo las entradas marcadas para compartir, sin filtrar en ningún momento contenido de las entradas privadas, incluso con cuatro entradas acumuladas y varios viewports de por medio.",
      "“Insights de la semana” generó en todo momento un resumen textual preciso y coherente con los datos reales registrados durante la prueba.",
      "Todo el flujo probado (acceso, formulario de nueva entrada, “Mis registros” con sus estadísticas/timeline/insights, y “Vista previa del informe”) reflowa correctamente a una sola columna tanto en tablet como en móvil, sin textos cortados ni elementos superpuestos, salvo el detalle menor de descubribilidad de la fila de chips de mood en móvil."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "La opción de privacidad de una nueva entrada del diario viene preseleccionada en “Para mi psicólogo/a” (compartida), en vez de “Solo yo” (privada)",
        heuristicaId: "H10",
        heuristicaNombre: "H10 — Confidencialidad médica y soporte",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Al abrir el formulario de “Nueva entrada” del Diario emocional, el control “¿Quién puede ver esta entrada?” —al final del formulario, justo antes de “Guardar entrada”— ya viene con “Para mi psicólogo/a” resaltado y seleccionado antes de que la persona toque nada, y no con “Solo yo”. El mecanismo en sí funciona correctamente una vez que la persona elige una opción (ver Feedback positivo), pero que la opción compartida sea la que viene activada de entrada es contraintuitivo para un diario personal dentro de un producto de salud mental: la expectativa razonable de quien escribe en “su” diario es que lo escrito quede privado salvo que decida explícitamente compartirlo, no al revés. Esto es particularmente sensible porque el propio formulario invita a volcar contenido íntimo y potencialmente vulnerable (sentimientos como “Ansiedad” o “Soledad”, “qué pensamiento te quedó dando vueltas”, “qué necesitás ahora”), y alguien que escribe rápido o en un momento de angustia, sin detenerse a leer el pie del formulario, puede terminar compartiendo con su psicólogo/a un pensamiento que hubiera preferido guardar solo para sí.",
        recomendacion: "Invertir el valor por defecto de este control a “Solo yo”, dejando que compartir una entrada con el profesional sea siempre una decisión activa y consciente. Si existe una razón de producto para mantener “compartida” como default, considerar al menos reforzar visualmente ese default la primera vez que se usa el diario, en vez de dejarlo solo como el estado visualmente resaltado de un botón al final del formulario.",
        evidencia: [
          { src: "capturas/caso-05/03-nueva-entrada-privacidad-default-psicologo.jpg", caption: "Formulario de “Nueva entrada”, sin interacción previa con el control: “Para mi psicólogo/a” ya aparece seleccionado" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: “Para mi psicólogo/a” vuelve a aparecer preseleccionado sin interacción previa.",
            evidencia: [
              { src: "capturas/caso-05/10-tablet-nueva-entrada-privacidad-default-psicologo.jpg", caption: "Mismo default en tablet" }
            ]
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se reproduce por tercera vez, con el mismo comportamiento exacto.",
            evidencia: [
              { src: "capturas/caso-05/16-movil-nueva-entrada-privacidad-default-psicologo.jpg", caption: "Mismo default en móvil" }
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: "El punto de datos del gráfico “Evolución emocional” no se dibuja a la altura correspondiente al estado de ánimo real (ni al promedio ya calculado correctamente)",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Mayor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "En “Mis registros” (<code>/diario/registros</code>), el gráfico “Evolución emocional” ubica en el eje vertical, de arriba a abajo, las filas “Muy bien”, “Bien”, “Regular”, “Mal” y “Muy mal”, y dibuja un punto por semana a la altura correspondiente al ánimo promedio de las entradas de esa semana. Esa altura no coincide de forma confiable con el valor real: con una sola entrada “Bien” esa semana, el punto se dibujó a la altura de “Regular” (un escalón peor de lo real); tras agregar una entrada “Mal” esa misma semana —promedio matemático “Regular”—, el punto se dibujó a la altura de “Bien” (un escalón mejor de lo que corresponde). Se verificó con precisión midiendo por script las coordenadas verticales exactas de las etiquetas del eje y del punto: en el segundo escenario, el punto quedó en Y=451px, prácticamente pegado a “Bien” (Y=455px) y lejos de “Regular” (Y=506px). El propio elemento del punto tiene un atributo <code>title=\"Regular\"</code> — el cálculo del promedio semanal es correcto, pero la fórmula que lo traduce a una posición vertical está mal, y el desvío no es sistemático en una sola dirección. Para una app de salud mental, donde este gráfico es la herramienta pensada para visualizar de un vistazo la tendencia del ánimo, un punto que no refleja el valor real puede llevar a una lectura errónea de la evolución emocional de la persona.",
        recomendacion: "Revisar la función que traduce el valor de ánimo (o el promedio semanal ya calculado, que es correcto) a la coordenada vertical del punto en el gráfico. Agregar un test automatizado que verifique, para cada una de las cinco categorías de ánimo, que el punto se dibuja alineado con su fila correspondiente del eje, dado que el desvío detectado no fue consistente en una sola dirección.",
        evidencia: [
          { src: "capturas/caso-05/05-evolucion-emocional-bien-renderiza-como-regular.png", caption: "Una sola entrada “Bien” esa semana: el punto se dibuja a la altura de “Regular”" },
          { src: "capturas/caso-05/06-evolucion-emocional-promedio-bien-mal-tooltip-regular-punto-en-bien.png", caption: "Dos entradas, “Bien” + “Mal”, promedio correcto “Regular” según el title del punto: el punto se dibuja a la altura de “Bien”" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "variante",
            textoHtml: "Con una tercera entrada sumada a las dos anteriores (Bien + Mal + Bien esa semana), el punto se dibujó esta vez a la altura de “Regular”, coincidiendo con el <code>title=\"Regular\"</code> del propio punto — a diferencia de los dos escenarios de escritorio, acá no se reprodujo el desvío. Refuerza que el problema depende del valor puntual del promedio semanal, y no es un desplazamiento constante en una sola dirección.",
            evidencia: [
              { src: "capturas/caso-05/11-tablet-evolucion-emocional-3-entradas-punto-regular.png", caption: "Tres entradas esa semana: el punto se dibuja correctamente a la altura de “Regular”" }
            ]
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "variante",
            textoHtml: "La instancia más marcada hasta ahora: con cuatro entradas esa semana (Bien + Mal + Bien + Bien), el <code>title</code> del punto decía “Bien”, pero el punto se dibujó a la altura de “Mal” — un desvío de dos filas, en el sentido que muestra la semana peor de lo que fue. Confirmado por script: punto en Y=439px, prácticamente idéntico a la fila “Mal” (Y=440px) y lejos de “Bien” (Y=340px).",
            evidencia: [
              { src: "capturas/caso-05/18-movil-evolucion-emocional-4-entradas-punto-en-mal.jpg", caption: "Cuatro entradas esa semana (título “Bien”): el punto se dibuja a la altura de “Mal”, dos filas por debajo de lo correcto" }
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo: "En “Mis registros” aparecen dos controles de “Volver” apilados y con estilos distintos, al llegar por navegación interna (solo en tablet y móvil)",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Responsive",
        viewport: "Tablet (768×1024)",
        descripcionHtml: "Hallazgo reportado inicialmente por el Evaluador UX y verificado por el equipo de auditoría con Chrome real. Al entrar a “Mis registros” (<code>/diario/registros</code>) haciendo clic en “Ver registros” desde la landing <code>/diario</code> —es decir, navegando dentro de la app, sin recargar la página—, en tablet y en móvil aparecen dos controles de “volver” apilados uno debajo del otro, arriba a la izquierda: primero un botón genérico que dice “← Volver”, y debajo un enlace que dice “← Volver a Diario”. Ambos llevan al mismo destino (<code>/diario</code>), pero se ven visiblemente distintos entre sí, incluida la forma de la flecha. La inspección del código confirmó que son dos componentes distintos superpuestos por error: uno es un botón “de volver” genérico y reutilizable (clase <code>in-app-back in-app-back--main</code>), probablemente pensado para pantallas sin su propio control de regreso; el otro es el enlace “Volver a Diario” propio de esta pantalla (clase <code>diary-back-link</code>). El botón genérico usa la tipografía Arial, mientras que el enlace propio usa Inter (la tipografía del resto del sitio) — de ahí la sensación de “dos flechas distintas”, aunque el carácter “←” es el mismo en ambos casos. El defecto no impide navegar ni causa pérdida de datos, pero es una inconsistencia visual y de redundancia funcional que puede confundir.",
        recomendacion: "Revisar por qué el botón genérico “de volver” se está renderizando junto con el enlace propio de “Mis registros” cuando se llega por navegación interna en tablet y móvil, y ocultarlo o eliminarlo en esa pantalla para que quede un solo control de regreso, consistente con lo que ya ocurre en escritorio. Dado que el componente genérico parece compartido por varias pantallas del portal, vale la pena revisar si otras pantallas a las que se llega por navegación interna en tablet/móvil tienen el mismo problema.",
        evidencia: [
          { src: "capturas/caso-05/20-tablet-doble-control-volver-registros.png", caption: "Tablet: los controles “← Volver” y “← Volver a Diario” apilados" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: mismas dos clases superpuestas, mismo destino (/diario). La pantalla carga con un scroll inicial de unos 70px que deja el primer control apenas fuera del viewport hasta subir el scroll del todo; una vez arriba, ambos se ven apilados igual que en tablet.",
            evidencia: [
              { src: "capturas/caso-05/21-movil-doble-control-volver-registros.png", caption: "Móvil: mismo apilado, tras subir el scroll al tope de la pantalla" }
            ]
          },
          {
            viewport: "Escritorio (~1424×749)",
            resultado: "no-aplica",
            textoHtml: "No se reproduce. El botón genérico (misma clase <code>in-app-back in-app-back--main</code>) está presente en el código pero oculto por una regla de CSS (<code>display: none</code>). En escritorio se ve un único control “← Volver” (sin el modificador --main), que forma parte de una barra superior general presente en otras pantallas del portal, y que no genera duplicado con el enlace propio de “Mis registros”.",
            evidencia: []
          }
        ]
      }
    ]
  }
,
  {
    id: 6,
    numero: "06",
    slug: "caso-06-mi-cuenta-datos-personales",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    titulo: "“Mi Cuenta” — administración de la foto de perfil, nombre completo, email, teléfono, contacto de emergencia y zona horaria",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Se evaluó, en <code>app.motivarcare.com</code> bajo el perfil de <strong>paciente</strong>, la pantalla “Mis datos” (<code>/profile?tab=data</code>), accesible desde el menú “Cuenta” → “Datos personales”. Es la pantalla donde el paciente administra su foto de perfil, nombre completo, email, teléfono, contacto de emergencia y zona horaria, todos agrupados bajo un único botón “Guardar perfil”. Se usó Chrome real (plugin Claude in Chrome), con la sesión ya iniciada, en tres pasadas sucesivas a pedido del Evaluador UX: escritorio (ventana ~1568×765), tablet (768×1024) y móvil (500×805). Además de la revisión visual e interactiva habitual, se usó inspección de red (<code>read_network_requests</code>) y de DOM/JavaScript para verificar con precisión qué campos efectivamente persisten sus cambios y cuáles no, dado que varias fallas de esta pantalla no son visibles a simple vista.",
    pasosRealizados: [
      "Se abrió “Mis datos” (<code>/profile?tab=data</code>) desde el menú “Cuenta”, y se relevó la estructura completa de la pantalla: “Foto de perfil”, “Nombre completo”, “Email”, “Teléfono”, “Contacto de emergencia”, “Zona horaria” y un único botón “Guardar perfil” al pie.",
      "Se inspeccionó por script el estado de cada campo: “Nombre completo” y “Email” tienen el atributo <code>disabled</code>; “Teléfono”, “Contacto de emergencia” y “Zona horaria” son editables — ver Hallazgo 1.",
      "Se probó la subida de foto de perfil con tres archivos: uno de ~7,4 MB (rechazado por peso), un archivo de texto disfrazado de imagen (rechazado por tipo) y una imagen válida de ~3 KB (aceptada, con actualización inmediata del avatar). Se confirmó que el cambio de foto —a diferencia del resto de los campos— persiste de inmediato, sin necesidad de “Guardar perfil”, incluyendo el botón “Quitar foto”.",
      "Se completaron “Teléfono” y “Contacto de emergencia” con datos de prueba y se presionó “Guardar perfil”: el botón guarda y redirige a la Home sin ninguna confirmación visible. Al volver a “Mis datos”, ambos campos aparecían vacíos otra vez.",
      "Se repitió la prueba inspeccionando el tráfico de red (<code>read_network_requests</code>) en el momento exacto de guardar: solo se dispara un <code>PATCH</code> a <code>/api/profiles/me/timezone</code> y otro a <code>/api/profiles/me/notification-preferences</code> — nunca una petición con los valores de “Teléfono” ni “Contacto de emergencia”. Se confirmó el mismo resultado en una pestaña nueva y completamente limpia — ver Hallazgo 2.",
      "Se probó “Zona horaria”: un campo de texto libre que expone el identificador técnico crudo (por ejemplo <code>America/Buenos_Aires</code>) en vez de un nombre legible. Se reemplazó por un valor inválido (<code>Zona/Que/No/Existe</code>) y se guardó: el <code>PATCH</code> respondió <code>200 OK</code> sin ningún error visible, y al recargar el valor había quedado silenciosamente en “UTC” — ver Hallazgo 3.",
      "Se notó que, sin ninguna interacción, la pantalla dispara de forma continua peticiones <code>GET</code> repetidas a varios endpoints del backend (<code>/api/profiles/me</code>, <code>/api/bookings/mine</code>, <code>/api/auth/me</code>, entre otros). Se midió con precisión: 49 peticiones en 5 segundos de inactividad sobre “Mis datos”, y 84 peticiones en 3 segundos sobre la Home (del orden de 10 peticiones por segundo, sostenidas). En una pestaña nueva y limpia, con una navegación similar, el problema no se reprodujo en el tiempo probado — ver Hallazgo 4.",
      "A raíz de que el Evaluador UX reportó haber podido guardar “Teléfono” y “Contacto de emergencia” sin problemas al probarlo por su cuenta, se repitió la verificación de los Hallazgos 2 y 3. Se extrajo el token de sesión del <code>localStorage</code> y se hizo un <code>fetch</code> manual a <code>GET /api/profiles/me</code>: la respuesta del servidor no incluye ningún campo de teléfono ni de contacto de emergencia. Se confirmó que los valores vistos en pantalla viven exclusivamente en el <code>localStorage</code> (clave <code>therapy_patient_portal_v3</code>), no en el servidor.",
      "Se repitió el guardado con valores nuevos y distintos, observando la red en el momento exacto de presionar “Guardar perfil”: no se disparó ningún <code>PATCH</code> con esos valores, pero al recargar los campos mostraban igual los valores nuevos — confirmando que provienen únicamente del <code>localStorage</code>, actualizado del lado del cliente. Se repitió también la prueba de zona horaria con un nuevo valor inválido, con idéntico resultado.",
      "El Evaluador UX señaló que existen dos formas distintas de llegar a “Mis datos”: un ícono de persona al pie del panel de navegación izquierdo, y la opción “Datos personales” del menú “Cuenta” (esquina superior derecha). Se verificaron ambos caminos: llevan exactamente a la misma URL y pantalla, pero el ícono de persona muestra el nombre completo y el email de la cuenta en vez de un rótulo del tipo “Mi cuenta” — ver Hallazgo 5.",
      "Se repitió la evaluación completa en viewport de tablet (768×1024, Chrome real redimensionado antes de navegar a la aplicación). Se reprodujeron de forma idéntica los Hallazgos 1, 2 y 3 (incluida la verificación contra el backend en cada caso), y la variante táctil del Hallazgo 5 (“Más” de la barra inferior → “Explorar” → “Mi cuenta”, vs. menú hamburguesa → “Datos personales”).",
      "En tablet, el Hallazgo 4 se reprodujo de forma mucho más inmediata y agresiva: 60 peticiones en 5 segundos de inactividad sobre la Home (~12 peticiones por segundo), en prácticamente cada pestaña nueva abierta. Se documentó además un síntoma nuevo y más severo: mientras el patrón está activo, el foco no llega a establecerse en los campos de texto, el tipeo no se refleja en absoluto y la propia herramienta de captura de pantalla llegó a agotar su tiempo de espera (30 segundos) — la pantalla queda inutilizable para cualquier persona, no solo degradada. Por este motivo se elevó la severidad de Mayor a Crítica.",
      "Para poder completar de todos modos las pruebas de los Hallazgos 2 y 3, y restaurar los valores de la cuenta de prueba, mientras el Hallazgo 4 estaba activo, se recurrió a fijar el valor de los campos por script (disparando los eventos que React necesita para detectarlo) en lugar de tipear carácter por carácter — algo que una persona usuaria real no tiene forma de hacer.",
      "Se repitió la evaluación completa en viewport de móvil (500×805). La navegación resultó prácticamente idéntica a la de tablet, y se reprodujeron de forma idéntica los Hallazgos 1, 2, 3 y 5 (con la misma variante táctil de navegación ya documentada en tablet).",
      "En móvil se confirmó nuevamente la naturaleza inconsistente del Hallazgo 4: hubo tramos de varios segundos sin ninguna petición de fondo, y otros tramos —en particular, inmediatamente después de presionar “Guardar perfil”— en los que el patrón se disparaba de inmediato y bloqueaba la interacción con la pantalla, igual que lo documentado en tablet.",
      "Se notó nuevamente, igual que en tablet y fuera del alcance específico de este caso, contenido de la Home cortado en los bordes izquierdo y derecho en viewport de móvil. Con esta tercera pasada se completa la cobertura de los tres viewports principales (escritorio, tablet y móvil) para el alcance definido de este caso.",
      "A pedido del Evaluador UX, que reportó no poder reproducir el Hallazgo 4 (peticiones repetidas) al usar la aplicación de forma manual, se reclasificó su severidad de Crítica a “A revisar” — sin eliminar el hallazgo, dado que el patrón solo se detectó y midió durante las pasadas realizadas con la herramienta de automatización de Chrome de esta auditoría, sin una reproducción independiente fuera de ese entorno."
    ],
    feedbackPositivo: [
      "La subida de foto de perfil tiene validaciones robustas y mensajes claros y en buen tono: rechaza archivos de más de 4 MB y archivos que no son imágenes, indicando en cada caso exactamente qué hacer para solucionarlo.",
      "El cambio de foto de perfil (subir una nueva o quitarla con “Quitar foto”) se guarda de inmediato y se confirmó que persiste correctamente tras una recarga completa de la página.",
      "El campo “Zona horaria”, cuando se le asigna un valor válido, sí se guarda y persiste correctamente — el problema señalado en el Hallazgo 3 es la falta de validación, no el guardado en sí."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "“Nombre completo” y “Email” están deshabilitados sin ninguna indicación visual",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Los campos “Nombre completo” y “Email” de “Mis datos” no se pueden editar: tienen el atributo <code>disabled</code> y no aceptan ninguna entrada de teclado. El problema es que, visualmente, son indistinguibles de los campos que sí son editables en la misma pantalla (“Teléfono”, “Contacto de emergencia”, “Zona horaria”): mismo fondo blanco, mismo borde gris claro, mismo color y peso de texto. No hay ningún ícono de candado, texto de ayuda, tooltip al pasar el mouse, ni ningún otro indicio de que estos dos campos estén bloqueados y por qué. La única diferencia detectable es el cursor del mouse al pasar por encima (flecha normal en vez del cursor de texto), una señal demasiado sutil para que la note la mayoría de las personas. Una persona que quiera corregir un error de tipeo en su nombre (la cuenta de prueba está en mayúsculas sostenidas: “GASTON FER MARTINO”) o actualizar su email, intentará hacer clic y escribir sin obtener ningún resultado ni ninguna explicación de por qué no puede.",
        recomendacion: "Dar una señal visual clara de que estos campos no son editables desde acá: fondo gris claro, cursor <code>not-allowed</code>, y sobre todo un texto breve o tooltip que explique qué hacer si la persona necesita corregir su nombre o cambiar su email (por ejemplo, un flujo de cambio de email con verificación aparte, o indicar cómo contactar a soporte).",
        evidencia: [
          { src: "capturas/caso-06/02-nombre-email-sin-indicacion-deshabilitado.png", caption: "“Nombre completo” y “Email”, con la misma apariencia que los campos editables de abajo (escritorio)" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: ambos campos siguen con <code>disabled: true</code>, sin ninguna diferencia visual respecto de “Teléfono” y “Contacto de emergencia”.",
            evidencia: [
              { src: "capturas/caso-06/09-mis-datos-vista-general-tablet.jpg", caption: "Vista general de “Mis datos” en tablet, sin indicación visual de los campos deshabilitados" }
            ]
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se reproduce por tercera vez, con el mismo comportamiento exacto.",
            evidencia: [
              { src: "capturas/caso-06/13-mis-datos-vista-general-movil.jpg", caption: "Vista general de “Mis datos” en móvil, mismo problema" }
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: "“Teléfono” y “Contacto de emergencia” nunca se guardan, pese a poder completarse con normalidad",
        heuristicaId: "H10",
        heuristicaNombre: "H10 — Confidencialidad médica y soporte",
        severidad: "Crítica",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Los campos “Teléfono” y “Contacto de emergencia” se completan con normalidad: aceptan texto, no muestran ningún error, y el botón “Guardar perfil” se comporta como si la operación fuera exitosa (guarda y redirige a la Home sin ningún mensaje de error). Sin embargo, al volver a “Mis datos”, ambos campos aparecen vacíos otra vez. Se confirmó la causa exacta inspeccionando el tráfico de red en el momento de presionar “Guardar perfil”: la única petición que se dispara es un <code>PATCH</code> a <code>/api/profiles/me/timezone</code> (y, de forma llamativa, otro a <code>/api/profiles/me/notification-preferences</code>, sin relación visible con esta pantalla) — nunca se envía ninguna petición al backend con el valor de “Teléfono” ni de “Contacto de emergencia”. Se verificó el mismo resultado dos veces, incluyendo una vez en una pestaña completamente nueva.<br><br><strong>Nota importante — por qué puede parecer que “sí se guarda”:</strong> al reabrir “Mis datos” en el mismo navegador donde ya se completaron estos campos antes, ambos aparecen con datos, lo que da la sensación de que el guardado funciona. Consultando directamente el backend (<code>GET /api/profiles/me</code> con el token de sesión, sin pasar por la interfaz) se comprobó que la respuesta del servidor <strong>no contiene ningún campo de teléfono ni de contacto de emergencia</strong>. Los valores que se ven en pantalla viven únicamente en el <code>localStorage</code> del navegador (una copia local en la máquina de quien probó el formulario), no en el servidor — se perderían al entrar desde otro dispositivo u otro navegador, y el profesional o el equipo de soporte nunca podrían verlos.<br><br>El caso de “Contacto de emergencia” es particularmente grave en un producto de salud mental: es el dato que se supone debe estar disponible para una situación de crisis, y el paciente que lo completa —convencido de que ya quedó guardado— en realidad no tiene ningún contacto de emergencia registrado en el servidor, accesible para quien lo necesite en un momento crítico.",
        recomendacion: "Conectar ambos campos al guardado real (que el <code>PATCH</code> de “Guardar perfil” incluya también teléfono y contacto de emergencia, o que existan endpoints propios para cada uno). Mientras tanto, dado que es un dato de seguridad, considerar además una confirmación explícita en pantalla de qué campos se guardaron y cuáles no, en vez de una redirección silenciosa a la Home.",
        evidencia: [
          { src: "capturas/caso-06/05-telefono-contacto-emergencia-completados.jpg", caption: "Ambos campos completados, antes de presionar “Guardar perfil”" },
          { src: "capturas/caso-06/06-telefono-contacto-emergencia-no-retiene-texto.jpg", caption: "Tras recargar la pantalla, ambos campos vuelven a estar vacíos" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: se completaron ambos campos con valores nuevos y se guardó; no se disparó ningún <code>PATCH</code> con esos valores, y se confirmó contra el backend (<code>GET /api/profiles/me</code>) que el servidor no tiene ningún campo de teléfono ni de contacto de emergencia. No se adjuntan capturas nuevas por tratarse de los mismos campos ya documentados en escritorio.",
            evidencia: []
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se reproduce por tercera vez, con el mismo resultado exacto: solo se dispararon los <code>PATCH</code> ya conocidos (<code>/timezone</code> y <code>/notification-preferences</code>), y el backend confirmó que no existe ningún campo de teléfono ni de contacto de emergencia en la cuenta.",
            evidencia: []
          }
        ]
      },
      {
        numero: 3,
        titulo: "“Zona horaria” es un campo de texto libre sin validar, y ante un valor inválido cae silenciosamente en “UTC”",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "Crítica",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "El campo “Zona horaria” muestra y permite editar directamente el identificador técnico de la zona horaria (por ejemplo, <code>America/Buenos_Aires</code>), tal como lo usaría una API, en vez de un selector con nombres legibles (“Argentina (GMT-3)”) o al menos un campo con autocompletado que solo acepte zonas válidas. Al escribir un valor que no es una zona horaria real (<code>Zona/Que/No/Existe</code>) y presionar “Guardar perfil”, la petición al backend respondió <code>200 OK</code>, sin ningún mensaje de error ni advertencia. Al recargar la pantalla, el valor había sido reemplazado silenciosamente por “UTC” —una zona horaria válida, pero que no es la del paciente (con 3 horas de diferencia respecto de Argentina)— sin que en ningún momento se informe que lo escrito no era válido. Para una plataforma donde la zona horaria determina cómo se muestran los horarios de sesiones con el profesional, un cambio accidental o un error de tipeo en este campo de texto libre —sin ningún tipo de validación, ni cliente ni con aviso del servidor— puede hacer que el paciente vea sus próximas sesiones a una hora distinta de la real, con el consiguiente riesgo de llegar tarde o faltar a una sesión.",
        recomendacion: "Reemplazar el campo de texto libre por un selector de zona horaria con nombres legibles (o, como mínimo, un campo con autocompletado que solo permita elegir entre zonas IANA válidas). Del lado del backend, ante un valor inválido, devolver un error explícito en vez de aplicar un fallback silencioso a “UTC”, y mostrar ese error de forma clara en la pantalla.",
        evidencia: [
          { src: "capturas/caso-06/03-zona-horaria-valor-invalido-antes-guardar.png", caption: "Campo con el valor inválido “Zona/Que/No/Existe”, justo antes de guardar" },
          { src: "capturas/caso-06/04-zona-horaria-fallback-silencioso-utc.png", caption: "Tras guardar y recargar: el valor quedó en “UTC”, sin ningún aviso (escritorio)" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "replica",
            textoHtml: "Se reproduce de forma idéntica: se reemplazó el valor por otro inválido (<code>Zona/Tablet/Invalida</code>) y se guardó; el fallback silencioso a “UTC” se confirmó nuevamente contra el backend.",
            evidencia: [
              { src: "capturas/caso-06/10-zona-horaria-valor-invalido-tablet.jpg", caption: "Mismo valor inválido escrito en el campo, viewport de tablet" }
            ]
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se reproduce por tercera vez: con el Hallazgo 4 activo en el momento de la prueba, el campo no aceptaba tipeo directo, por lo que el valor inválido (<code>Zona/Movil/Invalida</code>) se fijó por script; el fallback a “UTC” se confirmó igualmente contra el backend. No se adjunta captura del campo con el valor inválido en este viewport, por la misma razón.",
            evidencia: []
          }
        ]
      },
      {
        numero: 4,
        titulo: "Peticiones repetidas e indefinidas al backend en toda la app autenticada, que en tablet llegan a inutilizar el formulario por completo",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "A revisar",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "Este hallazgo no es específico de las pantallas de “Mi Cuenta”: se detectó mientras se probaba esta pantalla, pero se confirmó que también ocurre en la Home, por lo que corresponde a la app autenticada en general y no a este caso puntual. Con la pantalla completamente quieta, sin ninguna interacción, se disparan de forma continua e indefinida peticiones <code>GET</code> repetidas a <code>/api/profiles/me</code>, <code>/api/bookings/mine</code>, <code>/api/auth/me</code>, <code>/api/profiles/me/matching</code> y <code>/api/profiles/me/pending-professional-review</code>. Se midió con precisión: 49 peticiones en 5 segundos de inactividad total sobre “Mis datos”, y 84 peticiones en 3 segundos sobre la Home (del orden de 10 peticiones por segundo, sostenidas en el tiempo, sin que la persona haga nada). La reproducción en esta pasada no fue consistente: una pestaña nueva a veces no mostraba el problema en el tiempo probado (hasta 25 segundos de espera), lo que sugería que dependía de acumular una sesión de navegación más larga.<br><br><strong>Nota de revisión — reclasificación de severidad:</strong> el Evaluador UX reportó no poder reproducir este patrón de peticiones repetidas al usar la aplicación de forma manual. El hallazgo fue detectado y medido únicamente durante las pasadas de esta auditoría, realizadas con la herramienta de automatización de Chrome (Claude in Chrome), y no se cuenta con una reproducción independiente fuera de ese entorno. No se descarta que se trate de un artefacto propio de la herramienta de prueba (por ejemplo, algún mecanismo de la extensión o de la sesión automatizada que quede reintentando peticiones) en vez de un defecto real de la aplicación. Por este motivo se reclasifica la severidad de Crítica a <strong>A revisar</strong>, sin eliminar el hallazgo: toda la evidencia de red y de bloqueo de interacción registrada durante las pruebas se mantiene documentada tal como se relevó, a la espera de una confirmación independiente.",
        recomendacion: "Antes de asignar prioridad de desarrollo, confirmar si el patrón de peticiones repetidas es reproducible fuera de la herramienta de automatización de Chrome usada en esta auditoría (navegando de forma manual durante varios minutos, e idealmente con más de un navegador/dispositivo), dado que el Evaluador UX no logró reproducirlo por su cuenta. Si se confirma como un defecto real de la aplicación: investigar con herramientas de profiling del lado del desarrollo (React DevTools Profiler, panel Network del navegador con una sesión larga) el origen de estas peticiones — es muy probable que se trate de un <code>useEffect</code> (u otro mecanismo de polling/suscripción) sin una función de limpieza (<code>cleanup</code>) correcta. Si, en cambio, se confirma que es un artefacto de la herramienta de prueba, cerrar el hallazgo dejando esta investigación como constancia.",
        evidencia: [],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "variante",
            textoHtml: "El problema se reprodujo de forma mucho más inmediata y agresiva que en escritorio: en prácticamente cada pestaña nueva abierta, sin necesidad de ninguna navegación previa, apareció en pocos segundos (60 peticiones en 5 segundos de inactividad sobre la Home — ~12 peticiones por segundo). Se documentó además un síntoma nuevo y más severo que el de escritorio: mientras el patrón está activo, la pantalla deja de responder a interacciones básicas. Se confirmó por script que, tras hacer clic sobre un campo de texto, el foco no llega a establecerse (<code>document.activeElement</code> seguía apuntando a <code>&lt;body&gt;</code>); el texto tecleado no se refleja en ningún campo; y en más de una ocasión la herramienta de captura de pantalla agotó su tiempo de espera (30 segundos) intentando fotografiar la página, señal de que el renderizado del navegador está sobrecargado. Fue necesario recurrir a técnicas de scripting (fijar valores directamente y disparar los eventos que React necesita para detectarlos) para poder completar las pruebas y restaurar la cuenta de prueba — algo que una persona usuaria real no tiene forma de hacer. En la práctica, mientras el problema está activo, el formulario de “Mis datos” queda completamente inutilizable, no solo con una experiencia degradada. Por este motivo se elevó la severidad de Mayor a Crítica respecto de la primera documentación en escritorio.",
            evidencia: []
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se confirmó, una vez más, la naturaleza inconsistente del problema: dentro de una misma sesión de prueba hubo tramos de varios segundos sin ninguna petición de fondo, y otros tramos —en particular, inmediatamente después de presionar “Guardar perfil”— en los que el patrón se disparaba de inmediato, bloqueando la interacción de la misma manera que en tablet. Esto refuerza la hipótesis de que ciertas acciones puntuales (como guardar el perfil) están relacionadas con el disparo del problema, más que el simple paso del tiempo en la sesión.",
            evidencia: []
          }
        ]
      },
      {
        numero: 5,
        titulo: "Existen dos accesos distintos y con rótulos inconsistentes hacia la misma pantalla de “Mis datos”",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×765)",
        descripcionHtml: "La pantalla “Mis datos” (<code>/profile?tab=data</code>) es alcanzable desde dos lugares completamente distintos de la interfaz: (1) un ícono de persona ubicado al pie del panel de navegación izquierdo, sin ningún texto visible junto a él salvo que se pase el mouse por encima, y (2) la opción “Datos personales”, agrupada bajo el encabezado “CUENTA” dentro del menú desplegable “Cuenta” de la esquina superior derecha (que también incluye “Actividad de sesiones”, “Idioma y moneda”, “Notificaciones”, etc.). Ambos caminos llevan exactamente a la misma URL y a la misma pantalla. El problema no es que exista más de un acceso en sí —eso puede ser válido como atajo— sino que los dos están rotulados de forma inconsistente entre sí: el ícono del panel izquierdo, al pasar el mouse, muestra el nombre completo y el email de la persona (“GASTON FER MARTI...”, “gaston.f.martino+test@...”) como si fuera un acceso genérico “a tu cuenta”, mientras que el menú “Cuenta” ofrece una opción puntual y explícita llamada “Datos personales”. Una persona que use el panel izquierdo no tiene forma de anticipar, antes de hacer clic, que va a llegar exactamente al mismo lugar que “Datos personales” en el otro menú — lo que puede generar más clics de los necesarios o la sensación de que falta contenido en un menú que en realidad está duplicado en el otro.",
        recomendacion: "Unificar el criterio de acceso a “Mis datos”: si se mantienen los dos caminos, usar el mismo rótulo o ícono reconocible en ambos (por ejemplo, “Mi cuenta” o “Datos personales” en los dos lugares), en vez de que uno se identifique con el nombre/email de la persona y el otro con un texto de menú explícito. Alternativamente, evaluar si el ícono de persona del panel izquierdo debería llevar a una vista distinta (un resumen de cuenta con accesos a “Datos personales”, “Actividad de sesiones”, etc.) en vez de ir directo a “Mis datos”, para que ambos accesos cumplan roles claramente diferenciados.",
        evidencia: [
          { src: "capturas/caso-06/07-acceso-panel-izquierdo-icono-persona.jpg", caption: "Escritorio: panel izquierdo expandido al pasar el mouse; el ícono de persona muestra el nombre y el email de la cuenta" },
          { src: "capturas/caso-06/08-acceso-menu-cuenta-datos-personales.jpg", caption: "Escritorio: menú “Cuenta”, con la opción “Datos personales” agrupada bajo “CUENTA”" }
        ],
        verificaciones: [
          {
            viewport: "Tablet (768×1024)",
            resultado: "variante",
            textoHtml: "En tablet la navegación es distinta (no hay panel lateral ni botón “Cuenta”), pero el mismo patrón de fondo se repite con una variante propia: el botón “Más” de la barra de navegación inferior abre una hoja “Explorar” que agrupa, bajo “Bienestar y tu cuenta”, los accesos a “Ejercicios”, “Música relajante” y “Mi cuenta” —este último lleva directamente a “Mis datos”—; por separado, el ícono de menú hamburguesa abre el mismo panel de cuenta que en escritorio, con “Datos personales”. De nuevo, dos caminos distintos con dos rótulos distintos (“Mi cuenta” agrupado con bienestar, vs. “Datos personales” agrupado con cuenta) llevan al mismo destino.",
            evidencia: [
              { src: "capturas/caso-06/11-acceso-explorar-mi-cuenta-tablet.jpg", caption: "Tablet: hoja “Explorar” abierta desde “Más”, con “Mi cuenta” agrupado junto a “Ejercicios” y “Música relajante”" },
              { src: "capturas/caso-06/12-acceso-menu-datos-personales-tablet.jpg", caption: "Tablet: menú abierto desde el ícono hamburguesa, con “Datos personales” agrupado bajo “CUENTA”" }
            ]
          },
          {
            viewport: "Móvil (500×805)",
            resultado: "replica",
            textoHtml: "Se verificó exactamente el mismo patrón que en tablet, con la misma navegación (“Más” → “Explorar” → “Mi cuenta”, y menú hamburguesa → “Datos personales”), confirmando que la inconsistencia no es un problema puntual de un solo viewport sino algo estructural de cómo está organizada la navegación de cuenta en toda la app.",
            evidencia: [
              { src: "capturas/caso-06/14-acceso-explorar-mi-cuenta-movil.jpg", caption: "Móvil: misma hoja “Explorar” con “Mi cuenta”" },
              { src: "capturas/caso-06/15-acceso-menu-datos-personales-movil.jpg", caption: "Móvil: mismo menú con “Datos personales”" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    numero: "07",
    slug: "caso-07-login-signup-profesional",
    areaId: "professional",
    areaName: "Portal del Profesional",
    titulo: "Pantallas de login y alta profesional (sign up) — desde el ingreso hasta el envío del perfil a revisión",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Se evaluó, en <code>pro.motivarcare.com</code>, el flujo completo de ingreso y alta de un profesional nuevo: la pantalla de login (incluida “Olvidé mi contraseña”) y el wizard de alta (“Onboarding profesional”), que consta de 8 pasos — “Correo y contraseña”, “Revisá tu correo”, “Identidad profesional”, “Perfil público”, “Servicios y precios”, “Multimedia”, “Formación” y “Recibir pagos” — hasta el envío final del perfil a revisión manual del equipo de MotivarCare. Se usó Chrome real (plugin Claude in Chrome) para la pasada de escritorio. Por pedido explícito del Evaluador UX, cada vez que el flujo requería crear la cuenta o completar un campo de contraseña, el propio Evaluador UX lo completó directamente en el navegador; lo mismo para los campos sensibles de datos bancarios del Paso 8 (“Recibir pagos”), que se le pidió completar con datos ficticios. El caso incluye dos pasadas completas de punta a punta, con dos cuentas de prueba distintas (<code>gaston.f.martino+pro1@gmail.com</code> y <code>gaston.f.martino+pro2@gmail.com</code>), ya que la primera pasada no dejó evidencia fotográfica propia de varios hallazgos (se verificaron solo por inspección directa de DOM/JavaScript) y se repitió el recorrido completo para poder capturar pantalla de cada uno. Además de la revisión visual e interactiva habitual, se usó inspección de DOM/JavaScript (<code>javascript_tool</code>) y de red/consola (<code>read_network_requests</code>, <code>read_console_messages</code>) para confirmar con precisión varios hallazgos que no son evidentes a simple vista. Posteriormente, el Evaluador UX repitió por su cuenta, de forma manual (sin esta herramienta de automatización), una pasada equivalente en viewport de tablet y de móvil, confirmando que los mismos hallazgos se reproducen en ambos.",
    pasosRealizados: [
      "Primera pasada (cuenta <code>...+pro1@gmail.com</code>): se abrió la pantalla de login de <code>pro.motivarcare.com</code> y se probaron varios escenarios de error: envío del formulario vacío, email con formato inválido, contraseña demasiado corta y credenciales incorrectas. En los cuatro casos la pantalla respondió con el mismo mensaje genérico combinado, sin distinguir cuál de los dos campos era el problema — ver Hallazgo 1.",
      "Se probó el enlace “¿Olvidaste tu contraseña?” (<code>/forgot-password</code>). Al hacer clic en “Volver” no se observó respuesta y se lo reportó como posible hallazgo. El Evaluador UX aclaró que se trataba de una ventana modal de la propia herramienta de prueba que había quedado bloqueando la app por encima, y que él mismo la cerró. Se repitió la prueba en una pestaña nueva y limpia: el botón funcionó con normalidad. Se retractó el hallazgo — queda registrado acá únicamente como constancia del proceso de verificación.",
      "Se inició el alta (“Onboarding profesional”). En el Paso 1 (“Correo y contraseña”) se probó a propósito completar los dos campos de contraseña con valores que no coinciden entre sí: el botón “Continuar” quedó deshabilitado, sin ningún mensaje indicando el problema — ver Hallazgo 2. Luego, a pedido del Evaluador UX, fue él quien escribió la contraseña real directamente en el navegador.",
      "Tras confirmar el email (enlace de verificación provisto por el Evaluador UX), el wizard avanzó al Paso 3 (“Identidad profesional”). Al intentar seleccionar el título profesional con clics directos sobre las opciones del desplegable nativo, la selección no se registraba (problema ya conocido de esta herramienta de prueba con <code>&lt;select&gt;</code> nativos, no de la app). Se cambió a fijar el valor por referencia de elemento (<code>form_input</code>), método que funcionó de forma confiable en adelante.",
      "Inspeccionando por script la lista completa de opciones del desplegable “Título profesional”, se encontró que la opción visible “Nutricionista” tiene, en el HTML subyacente, <code>value=\"Sociólogo\"</code> — ver Hallazgo 3.",
      "Se completaron los Pasos 4 y 5 (“Perfil público”, “Servicios y precios”) con datos de prueba sin incidentes relevantes, salvo un reacomodo de layout al escribir el precio (aparece una línea de “Equivalente orientativo” que empuja los campos de descuento hacia abajo) — no constituye un hallazgo en sí.",
      "En el Paso 6 (“Multimedia”) se confirmó por script que el botón “Siguiente paso” permanecía deshabilitado (<code>button.disabled === true</code>) sin ningún mensaje visible. Se generó un video de prueba corto (~3 segundos, con <code>ffmpeg</code>) y se lo subió: <code>button.disabled</code> pasó a <code>false</code> de inmediato, confirmando que el video es obligatorio sin comunicarlo — ver Hallazgo 4.",
      "Se completó el Paso 7 (“Formación”) con un diploma de prueba (Universidad de Buenos Aires, Licenciatura en Psicología, 2015–2020), con su archivo adjunto correctamente confirmado en pantalla (“Adjunto listo”).",
      "En el Paso 8 (“Recibir pagos”), se inspeccionaron por script los campos “Nombre (como en el DNI)” y “Apellido (como en el DNI)”, pre-completados a partir del nombre de la cuenta: sus valores reales eran únicamente “G” y “M” — ver Hallazgo 5. Se avisó al Evaluador UX antes de que completara el resto del paso.",
      "Se le pidió al Evaluador UX que completara los campos sensibles restantes (tipo de documento, CUIT/CUIL, banco, CBU/CVU o alias) con datos ficticios. Corrigió además manualmente los campos de Nombre/Apellido truncados.",
      "Al presionar “Continuar al alta”, apareció el modal de éxito (“Onboarding finalizado”), pero la consola registró en simultáneo <code>finishWebOnboarding: diploma document read failed Error: DIPLOMA_DOCUMENT_MISSING</code>. Al presionar “Acceder a mi cuenta”, la app devolvió al Paso 7 con un error pidiendo volver a subir el diploma, pese a que ya se había cargado y confirmado.",
      "Se intentó volver a adjuntar el diploma mediante la herramienta de automatización: la carga no quedó reflejada en la interfaz ni disparó ninguna petición de red, pese a que un listener por script confirmó que el evento <code>change</code> sí se disparó con un archivo adjunto. Un segundo intento de “Continuar al alta” dio el mismo resultado, y el mensaje de error del diploma quedó además visible en el Paso 8, sin relación con diplomas.",
      "Se le pidió al Evaluador UX que subiera él mismo el diploma directamente en el navegador. Esa carga manual sí mostró la confirmación esperada (“Adjunto listo”). Pese a eso, un tercer “Continuar al alta” volvió a registrar el mismo error en consola (tres instancias nuevas, con timestamp actualizado). Sin embargo, esta vez “Acceder a mi cuenta” sí llevó a la pantalla real de post-alta, “Tu perfil está en revisión” — el alta se había completado del lado del servidor pese al error persistente del lado del cliente — ver Hallazgo 6.",
      "Se verificó la pantalla “Completar documentos”: mostraba tanto el documento de identidad como el diploma con el estado “Cargado” para ambos.",
      "Dado que la cuenta quedó en estado “En revisión” (sin acceso al panel del profesional), no fue posible volver a los campos de “Título profesional” ni “Multimedia” de esa misma cuenta para obtener capturas adicionales — motivo por el cual se realizó una segunda pasada completa con una cuenta nueva.",
      "Segunda pasada, con capturas de pantalla (cuenta <code>...+pro2@gmail.com</code>): se cerró la sesión de la primera cuenta y se repitieron, en una pestaña limpia, los cuatro escenarios de error del login del Hallazgo 1, esta vez con captura de pantalla de cada uno: envío vacío, email con formato inválido (que además dispara la validación nativa del navegador, con su propio mensaje, independiente del banner genérico de la app), contraseña corta, y credenciales incorrectas (email válido, contraseña incorrecta) — las primeras tres muestran el mismo banner genérico del lado cliente; la última, un banner distinto pero también genérico del lado servidor (“El email o la contraseña no coinciden...”). En ningún caso se distingue el campo específico.",
      "Se inició un alta nueva con el email <code>gaston.f.martino+pro2@gmail.com</code>. En el Paso 1 se repitió la prueba del Hallazgo 2: contraseñas que no coinciden entre sí, confirmando por script (<code>button.disabled === true</code>) el mismo resultado que en la primera pasada, esta vez con captura de pantalla. Se dejaron ambos campos de contraseña vacíos y se le pidió al Evaluador UX que los completara él mismo.",
      "Con el enlace de verificación de email provisto por el Evaluador UX, se llegó directo al Paso 3 (“Identidad profesional”). Al completar Nombre/Apellido y abrir el desplegable “Título profesional” para elegir la opción correcta por script, se capturó pantalla del desplegable abierto: se confirmó, además, que la opción corrupta “Nutricionista” (<code>value=\"Sociólogo\"</code>) convive con una <strong>segunda opción, también de texto “Nutricionista”, esta sí con <code>value=\"Nutricionista\"</code> correcto</strong> — es decir, hay dos opciones visualmente idénticas en la misma lista, una rota y una funcional, un detalle no registrado en la primera pasada — ver Hallazgo 3 (actualizado).",
      "Se completó el resto del Paso 3 (experiencia, horas de práctica, género, países, idioma, ámbitos de atención) y el Paso 4 (“Perfil público”) con los mismos datos de prueba que en la primera pasada.",
      "En el Paso 5 (“Servicios y precios”) se confirmó nuevamente el reacomodo de layout ya descripto al escribir el precio, y se completaron los descuentos por paquete en las nuevas posiciones.",
      "En el Paso 6 (“Multimedia”) se repitió la verificación del Hallazgo 4 con capturas de pantalla del antes y el después: se subió primero la foto de perfil (el botón “Siguiente paso” siguió deshabilitado) y luego el video de presentación, confirmando por script el cambio de <code>button.disabled</code> de <code>true</code> a <code>false</code> exactamente al completarse la subida del video.",
      "Se completó el Paso 7 (“Formación”) con los mismos datos del diploma de prueba. Al intentar adjuntar el archivo por la vía automatizada, se repitió el mismo comportamiento ya documentado en la primera pasada (el campo no refleja ningún archivo adjunto pese a que el evento <code>change</code> sí se dispara) — reforzando que no es un problema puntual de una sola sesión.",
      "En el Paso 8 (“Recibir pagos”) se repitió la verificación del Hallazgo 5 con captura de pantalla: los campos “Nombre” y “Apellido” volvieron a llegar pre-completados como “G” y “M” respectivamente. Se avisó al Evaluador UX y se le pidió completar los campos sensibles restantes (tipo de documento, CUIT/CUIL, banco, CBU/CVU o alias) con datos ficticios, y que subiera él mismo el archivo del diploma dado que la carga automatizada no había quedado reflejada.",
      "Con todos los datos completos, el Evaluador UX presionó “Continuar al alta”. Apareció nuevamente el modal “Onboarding finalizado”, pero la consola registró, además del ya conocido <code>DIPLOMA_DOCUMENT_MISSING</code>, un error nuevo: <code>Could not sync onboarding payout profile Error: Invalid payload</code> — un fallo adicional al sincronizar los datos bancarios del Paso 8.",
      "Al presionar “Acceder a mi cuenta”, el resultado fue distinto al de la primera pasada: en vez de “Tu perfil está en revisión”, apareció una pantalla nueva, “Tu registro está incompleto” (“Guardamos tu progreso... Hasta que envíes el alta, no entra en revisión del equipo”).",
      "Al presionar el botón “Continuar registro” de esa pantalla, en vez de retomar el wizard en el Paso 7 u 8 (donde había quedado), la app devolvió directo al <strong>Paso 1 (“Correo y contraseña”)</strong>, pidiendo completar la contraseña de nuevo — contradiciendo el mensaje “Guardamos tu progreso” de la pantalla anterior — ver Hallazgo 6 (actualizado con esta variante).",
      "A pedido del Evaluador UX, se dio por concluida la pasada en este punto: ya se cuenta con evidencia sólida y reproducible en dos cuentas de prueba distintas.",
      "Verificación en tablet y móvil (a cargo del Evaluador UX, de forma manual): el Evaluador UX realizó, por su cuenta y sin esta herramienta de automatización, una pasada equivalente del login y del wizard de alta en viewport de tablet y de móvil, y confirmó que se reproducen los mismos hallazgos ya documentados en escritorio (Hallazgos 1 a 6), sin variantes adicionales reportadas para estos viewports."
    ],
    feedbackPositivo: [
      "El Paso 7 (“Formación”) comunica con claridad sus requisitos obligatorios (que cada diploma necesita un archivo adjunto), a diferencia del Paso 6 (“Multimedia”) — ver Hallazgo 4.",
      "La carga de archivos (foto de perfil, video, diploma, documento de identidad) muestra una confirmación clara en pantalla cuando funciona correctamente (“Adjunto listo” / “Cambiar...”, con nombre de archivo).",
      "La pantalla final “Tu perfil está en revisión” (cuando efectivamente se alcanza) comunica con claridad qué sigue: revisión manual, plazo estimado con fecha concreta, y el canal de aviso por email.",
      "El uso de <code>form_input</code> (en vez de clics directos) resultó un método confiable para todos los campos de tipo desplegable probados en este caso (título profesional, experiencia, horas de práctica, género, país, años de diploma), en ambas cuentas de prueba.",
      "Las tres notificaciones por correo asociadas a este flujo llegaron sin problemas y sin demoras: el email de verificación de cuenta, el email que avisa que el registro fue recibido y quedó en revisión, y el email que avisa que la cuenta fue aprobada."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "El login no distingue por campo: siempre muestra el mismo error genérico combinado",
        heuristicaId: "H09",
        heuristicaNombre: "H9 — Diagnóstico y recuperación de errores",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "Se probaron cuatro escenarios de error en la pantalla de login: formulario vacío, email con formato inválido, contraseña demasiado corta, y credenciales incorrectas (email existente, contraseña equivocada). En los tres primeros casos la pantalla responde con el mismo banner genérico del lado del cliente (“Necesitamos un email válido y contraseña de al menos 8 caracteres. Corregí los campos y reintentá.”), sin indicar cuál de los dos campos es el problema ni resaltar visualmente el campo específico. El caso de credenciales incorrectas dispara un segundo mensaje, también genérico pero distinto y del lado del servidor (“El email o la contraseña no coinciden. Revisá mayúsculas, probá de nuevo o usá «Crear cuenta» si recién te registrás.”). En ningún caso se distingue si el problema es el email o la contraseña. Adicionalmente, el campo de email dispara la validación nativa del navegador (el tooltip estándar “Incluye un signo @...”) cuando el formato es inválido, una ayuda que depende del navegador y no es un mensaje propio, cuidado ni traducido por la propia app.",
        recomendacion: "Agregar validación y mensajes específicos por campo (formato de email inválido, campo vacío, contraseña muy corta) antes de intentar el login, con su propio mensaje de la app en vez de depender del tooltip nativo del navegador. Para el caso de credenciales incorrectas, al menos resaltar visualmente los dos campos involucrados aunque el mensaje de texto se mantenga genérico por motivos de seguridad.",
        evidencia: [
          { src: "capturas/caso-07/04-login-envio-vacio-error-generico.jpg", caption: "Envío vacío, banner genérico del cliente" },
          { src: "capturas/caso-07/05-login-password-corta-mismo-error-generico.jpg", caption: "Email válido + contraseña corta, mismo banner genérico" },
          { src: "capturas/caso-07/06-login-credenciales-incorrectas-error-generico.jpg", caption: "Email + contraseña incorrectos, banner genérico distinto, del servidor" }
        ],
        verificaciones: [
          {
            viewport: "Tablet",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX (sin la herramienta de automatización de esta auditoría): se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          }
        ]
      },
      {
        numero: 2,
        titulo: "Paso 1 del alta: si las contraseñas no coinciden, el botón “Continuar” se deshabilita sin ningún mensaje de error",
        heuristicaId: "H09",
        heuristicaNombre: "H9 — Diagnóstico y recuperación de errores",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "En el Paso 1 del alta (“Correo y contraseña”), al completar los dos campos de contraseña con valores que no coinciden entre sí, el botón “Continuar” queda deshabilitado (confirmado por script: <code>button.disabled === true</code>) — pero la pantalla no muestra ningún mensaje, ícono ni indicación de que el problema es que las contraseñas no coinciden. Una persona en esta situación ve un botón inactivo sin ninguna pista de qué corregir. Se verificó el mismo resultado en dos cuentas de prueba distintas.",
        recomendacion: "Mostrar un mensaje explícito (“Las contraseñas no coinciden”) junto al segundo campo de contraseña en cuanto detecte la discrepancia, en vez de solo deshabilitar el botón en silencio.",
        evidencia: [
          { src: "capturas/caso-07/07-paso1-passwords-no-coinciden-boton-deshabilitado.jpg", caption: "Contraseñas distintas cargadas, botón “Continuar” deshabilitado, sin mensaje" }
        ],
        verificaciones: [
          {
            viewport: "Tablet",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          }
        ]
      },
      {
        numero: 3,
        titulo: "Paso 3 del alta: la opción “Nutricionista” del desplegable “Título profesional” guarda el valor “Sociólogo” (y aparece duplicada)",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "Mayor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "El campo “Título profesional” del Paso 3 (“Identidad profesional”) es un desplegable nativo. Se inspeccionó su HTML subyacente por script y se encontró que sus siete opciones son: “Seleccionar” (<code>value=\"\"</code>), “Psicólogo”, “Psiquiatra”, “Sexólogo”, <strong>“Nutricionista” (<code>value=\"Sociólogo\"</code>)</strong>, “Coach”, y una <strong>segunda opción también de texto “Nutricionista” (<code>value=\"Nutricionista\"</code>)</strong> — es decir, el texto “Nutricionista” aparece dos veces en la lista desplegada, una de ellas correcta y la otra corrupta. Cualquier profesional que elija la primera de las dos (la que efectivamente ve resaltada al abrir el desplegable en este orden) quedaría, del lado del servidor, registrado como “Sociólogo” en lugar de “Nutricionista” — con el impacto directo que eso tiene en el matching con pacientes y en la confianza general de la plataforma. No se revisó si existen desajustes similares en otras opciones de este mismo desplegable ni en desplegables equivalentes de otras pantallas.",
        recomendacion: "Eliminar la opción duplicada y corregir el <code>value</code> de la opción “Nutricionista” que corresponde, para que coincida con su texto visible. Revisar la lista completa de opciones de este desplegable (y de desplegables equivalentes en otras pantallas) contra los valores que efectivamente persiste el backend, y agregar una validación o test automatizado que compare periódicamente el texto y el valor de cada opción, dado el impacto directo que un error acá tiene sobre el matching de pacientes con profesionales.",
        evidencia: [
          { src: "capturas/caso-07/08-paso3-dropdown-titulo-profesional-nutricionista-duplicado.jpg", caption: "Desplegable abierto, mostrando “Nutricionista” dos veces en la lista" },
          { src: "capturas/caso-07/09-paso3-dropdown-nutricionista-duplicado-detalle.png", caption: "Detalle recortado de la lista de opciones" }
        ],
        verificaciones: [
          {
            viewport: "Tablet",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          }
        ]
      },
      {
        numero: 4,
        titulo: "Paso 6 “Multimedia”: el video de presentación es obligatorio para avanzar, sin ninguna indicación en la pantalla",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Mayor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "En el Paso 6 (“Multimedia”) del alta, el botón “Siguiente paso” aparece deshabilitado sin que la pantalla explique por qué. Se confirmó por script, en dos cuentas de prueba distintas, que el atributo <code>disabled</code> del botón cambia de <code>true</code> a <code>false</code> exactamente al subir un video al campo “Video de presentación” — es decir, el video es un requisito obligatorio real, no opcional como podría asumirse por la falta de asterisco, texto de ayuda o mensaje al intentar continuar sin él. Subir primero la foto de perfil (que sí es opcional) no alcanza para habilitar el botón. Esto contrasta directamente con el Paso 7 (“Formación”), inmediatamente posterior, que sí explica con claridad sus propios requisitos obligatorios (ver Feedback positivo) — una inconsistencia de criterio entre dos pasos consecutivos del mismo wizard. Grabar y subir un video de presentación es, además, una barrera bastante más alta que completar un campo de texto.",
        recomendacion: "Indicar con claridad, junto al campo “Video de presentación” (por ejemplo con un asterisco y un texto breve, siguiendo el mismo criterio ya usado en el Paso 7), que el video es obligatorio para continuar. Evaluar además si conviene ofrecer una alternativa más liviana (por ejemplo, permitir completar este paso más adelante desde el panel del profesional una vez aprobada la cuenta) dado el esfuerzo relativamente alto que implica grabar un video.",
        evidencia: [
          { src: "capturas/caso-07/10-paso6-multimedia-boton-deshabilitado-sin-explicacion.png", caption: "Solo con la foto de perfil subida: botón “Siguiente paso” aún deshabilitado, sin ningún mensaje" },
          { src: "capturas/caso-07/11-paso6-multimedia-boton-habilitado-tras-subir-video.png", caption: "Mismo paso, inmediatamente después de subir el video: botón habilitado" }
        ],
        verificaciones: [
          {
            viewport: "Tablet",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          }
        ]
      },
      {
        numero: 5,
        titulo: "Paso 8 “Recibir pagos”: los campos “Nombre” y “Apellido” se autocompletan truncados a un solo carácter",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "Mayor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "Los campos “Nombre (como en el DNI)” y “Apellido (como en el DNI)” del Paso 8 (“Recibir pagos”) llegan pre-completados automáticamente a partir del nombre de la cuenta. Visualmente, los campos no muestran ningún indicio de estar truncados. Se inspeccionó por script el valor real (<code>input.value</code>) de ambos campos en dos cuentas de prueba distintas: en ambos casos contenían únicamente el primer carácter de cada nombre (“G” de “GASTON F...” y “M” de “MARTINO”), no el nombre completo. Se trata de un bug de datos, no solo de presentación: estos campos existen específicamente para que el pago coincida con la identidad real del profesional en su cuenta bancaria, y un profesional que no revise con atención (o asuma que un campo pre-completado ya está correcto) podría enviar su alta con un nombre de una sola letra en los datos de cobro, con el consiguiente riesgo de que la transferencia real de sus pagos falle o quede mal identificada.",
        recomendacion: "Corregir el autocompletado de estos dos campos para que tome el nombre completo de la cuenta, no solo su primer carácter. Mientras tanto, dado que son datos críticos para el cobro real, evaluar no autocompletarlos en absoluto (dejarlos vacíos y obligar a la persona a escribirlos ella misma) antes que arriesgarse a un autocompletado silenciosamente incorrecto.",
        evidencia: [
          { src: "capturas/caso-07/12-paso8-nombre-apellido-truncados-g-m.png", caption: "Ambos campos mostrando “G” y “M”, reproducido en la segunda cuenta de prueba" }
        ],
        verificaciones: [
          {
            viewport: "Tablet",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          }
        ]
      },
      {
        numero: 6,
        titulo: "El cierre del alta falla de forma intermitente e impredecible: mensaje de éxito falso, y en algunos casos la recuperación reinicia el registro desde cero",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Mayor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "Al presionar “Continuar al alta” en el Paso 8 (el último paso del wizard), la pantalla muestra siempre un modal de éxito (“Onboarding finalizado — Tu perfil profesional ya está listo”), independientemente de si el cierre del proceso realmente funcionó del lado del cliente. Este comportamiento se verificó de punta a punta en <strong>dos cuentas de prueba completamente distintas</strong>, con resultados finales distintos entre sí, lo que confirma que el problema no depende de una cuenta en particular.<br><br><strong>Cuenta 1 (<code>...+pro1@gmail.com</code>):</strong> en los dos primeros intentos de “Continuar al alta”, la consola registró <code>finishWebOnboarding: diploma document read failed Error: DIPLOMA_DOCUMENT_MISSING</code> en simultáneo con el modal de éxito, y “Acceder a mi cuenta” devolvió al Paso 7 con un error pidiendo volver a subir el diploma (pese a que ya se había cargado y confirmado). Se intentó re-adjuntar el diploma por la vía automatizada de esta auditoría: pese a que un listener de eventos confirmó que el campo de archivo sí recibió el evento <code>change</code> con un archivo adjunto, la interfaz nunca mostró ninguna confirmación visual ni se disparó ninguna petición de red nueva — un tercer intento con este estado dio el mismo resultado. Se notó además que el mensaje de error del diploma quedó visible también en el Paso 8, un paso sin relación con diplomas. Recién en un tercer intento, después de que el Evaluador UX subiera el diploma él mismo directamente en el navegador (con confirmación visual correcta, “Adjunto listo”), “Continuar al alta” volvió a registrar el mismo error de consola (tres instancias nuevas, con marca de tiempo actualizada) — pero esta vez “Acceder a mi cuenta” sí llevó a la pantalla real de post-alta, “Tu perfil está en revisión”, y “Completar documentos” confirmó que tanto el documento de identidad como el diploma habían quedado “Cargado”s del lado del servidor.<br><br><strong>Cuenta 2 (<code>...+pro2@gmail.com</code>):</strong> se repitió el mismo patrón (modal de éxito + <code>DIPLOMA_DOCUMENT_MISSING</code>, vuelta forzada al Paso 7, diploma re-adjuntado por la vía automatizada sin confirmación visual ni de red). Con el diploma subido esta vez por el propio Evaluador UX, un nuevo intento de “Continuar al alta” registró, además del ya conocido <code>DIPLOMA_DOCUMENT_MISSING</code>, un <strong>segundo error nuevo</strong>: <code>Could not sync onboarding payout profile Error: Invalid payload</code> — un fallo adicional al sincronizar los datos bancarios del Paso 8. Esta vez, “Acceder a mi cuenta” no llevó a “Tu perfil está en revisión” sino a una pantalla distinta, <strong>“Tu registro está incompleto”</strong> (“Guardamos tu progreso. Iniciá sesión (ya lo hiciste) y continuá el registro donde lo dejaste... Hasta que envíes el alta, no entra en revisión del equipo”). Al presionar el botón “Continuar registro” de esa misma pantalla, la app <strong>no retomó el wizard en el Paso 7 u 8</strong> como el propio mensaje aseguraba, sino que devolvió directamente al <strong>Paso 1 (“Correo y contraseña”)</strong>, pidiendo completar la contraseña de nuevo — una contradicción directa con el mensaje “Guardamos tu progreso” que la propia pantalla anterior mostraba.<br><br>En síntesis: el mismo error de consola (<code>DIPLOMA_DOCUMENT_MISSING</code>) llevó a dos resultados finales completamente distintos en las dos cuentas probadas (alta exitosa en un caso, alta atascada en “registro incompleto” en el otro), y cuando el resultado es el segundo, el propio mecanismo de recuperación que la app ofrece (“Continuar registro”) está roto: en vez de retomar en el punto donde quedó la persona, la manda de nuevo al primer paso del wizard, pidiéndole la contraseña otra vez, pese a asegurarle que su progreso está guardado.",
        recomendacion: "Antes que nada, que el modal de éxito (“Onboarding finalizado”) se muestre únicamente cuando el cierre del alta efectivamente haya funcionado del lado del servidor, nunca de forma incondicional. Investigar la causa exacta de <code>DIPLOMA_DOCUMENT_MISSING</code> (a juzgar por la ausencia de una petición de red distinta para subir el archivo del diploma en sí, es posible que el archivo se mantenga solo como referencia en memoria del navegador en vez de subirse a almacenamiento persistente al completar el Paso 7) y de <code>Invalid payload</code> en la sincronización de los datos de cobro. Corregir con prioridad alta el botón “Continuar registro” de la pantalla “Tu registro está incompleto” para que efectivamente retome el wizard en el último paso completado, en vez de reiniciar desde el Paso 1 — tal como el propio mensaje de esa pantalla le promete a la persona. Investigar además por qué el mismo error de consola derivó en dos resultados finales distintos entre las dos cuentas de prueba, para descartar una condición de carrera (race condition) en el cierre del alta.",
        evidencia: [
          { src: "capturas/caso-07/01-modal-onboarding-finalizado-pese-a-error.jpg", caption: "Cuenta 1: modal de éxito, mostrado pese al error de consola simultáneo" },
          { src: "capturas/caso-07/02-vuelta-paso-7-error-diploma-persiste.jpg", caption: "Cuenta 1: vuelta forzada al Paso 7 con el error del diploma, pese a que ya se había cargado" },
          { src: "capturas/caso-07/03-perfil-en-revision-exito-real.jpg", caption: "Cuenta 1: pantalla real de post-alta, alcanzada en el tercer intento" },
          { src: "capturas/caso-07/13-modal-onboarding-finalizado-cuenta2.jpg", caption: "Cuenta 2: mismo modal de éxito falso, reproducido en una cuenta distinta" },
          { src: "capturas/caso-07/14-vuelta-paso7-error-diploma-cuenta2.jpg", caption: "Cuenta 2: misma vuelta forzada al Paso 7" },
          { src: "capturas/caso-07/15-registro-incompleto-cuenta2.jpg", caption: "Cuenta 2: pantalla nueva “Tu registro está incompleto”, con el mensaje “Guardamos tu progreso”" },
          { src: "capturas/caso-07/16-vuelta-paso1-tras-registro-incompleto-cuenta2.jpg", caption: "Cuenta 2: “Continuar registro” devuelve al Paso 1 pidiendo la contraseña, contradiciendo el mensaje anterior" }
        ],
        verificaciones: [
          {
            viewport: "Tablet",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          },
          {
            viewport: "Móvil",
            resultado: "replica",
            textoHtml: "Verificado de forma manual por el Evaluador UX: se reproduce el mismo comportamiento documentado en escritorio, sin variantes adicionales. No se guardó evidencia fotográfica propia para este viewport.",
            evidencia: []
          }
        ]
      }
    ]
  },
  {
    id: 8,
    numero: "08",
    slug: "caso-08-pantalla-principal-profesional",
    areaId: "professional",
    areaName: "Portal del Profesional",
    titulo: "Pantalla principal del profesional (Dashboard) — arquitectura de la información, navegación, iconografía y wording",
    estado: "Completado",
    idioma: "Castellano",
    descripcionHtml: "Se evaluó, en <code>pro.motivarcare.com</code>, la pantalla principal (“Dashboard”) a la que llega un profesional ya aprobado al iniciar sesión: su arquitectura de la información, la navegación principal y el acceso a los distintos paneles/secciones, el comportamiento de scroll, la iconografía, la diagramación (layout), el wording y la consistencia en el uso de los recursos visuales. Se recorrieron uno por uno todos los destinos de la barra de navegación lateral izquierda (Dashboard, Horarios, Pacientes, Chat, Ingresos) y del menú “···” de la esquina superior derecha (Reportes, Ajustes de agenda, Perfil, Ajustes, Idioma y moneda), en cuatro pasadas sucesivas: escritorio (Chrome real, ventana ~1568×737), tableta (768×1024), móvil (390×844) y, a pedido explícito del Evaluador UX antes de cerrar el caso, una verificación específica de accesibilidad por teclado limitada a escritorio (navegación con Tab/Shift+Tab/Enter/Escape/flechas, sin realizar ninguna operación). En las tres primeras pasadas, la evaluación fue puramente de observación: no se creó agenda ni se modificó ningún dato de la cuenta (no se completaron horarios, no se conectó Google Calendar, no se cambiaron preferencias de idioma/moneda, no se cerró sesión, no se envió ningún mensaje de chat). Se usó la cuenta de prueba <code>gaston.f.martino+pro1@gmail.com</code> (ya aprobada, con acceso normal al panel) y Chrome real (plugin Claude in Chrome). Además de la revisión visual e interactiva habitual, se usó inspección de DOM/JavaScript (<code>javascript_tool</code>) para confirmar con precisión numerosos hallazgos: comportamiento del modal de Google Calendar vía <code>localStorage</code>, atributos de elementos deshabilitados o no interactivos, y — en la pasada de accesibilidad — el orden de tabulación, la presencia de semántica ARIA de diálogo (<code>role=\"dialog\"</code>, <code>aria-modal</code>) y el comportamiento del foco al abrir y cerrar modales y menús.",
    pasosRealizados: [
      "Se cerró la sesión de la cuenta “pro2” (que había quedado abierta de una prueba anterior, en estado “En revisión”) y se inició sesión con la cuenta “pro1”, ya aprobada por el equipo de MotivarCare.",
      "Al ingresar, apareció un modal a pantalla completa ofreciendo conectar Google Calendar (“Integrá tu agenda con Google Calendar”). Siguiendo la consigna de no modificar datos ni conectar servicios externos, se lo cerró con “Lo hago después” (sin conectar nada) para llegar al Dashboard.",
      "Se relevó la estructura completa de la pantalla principal: una franja superior con el título “Dashboard”, una leyenda de “Estados de la sesión” (Reservada → Realizada → Pendiente de cobro → Pagada) con su propio color por estado, un interruptor “Visible”, una campana de notificaciones y un menú “···”; y, debajo, tres bloques: “Sesiones” (con pestañas “Próximas sesiones” / “Marcar realizadas”), “Resumen” (Pacientes, Próximas sesiones, Dinero por sesiones realizadas) e “Indicadores de práctica” (5 tarjetas de estado) junto a una tarjeta “Publicá tu disponibilidad”.",
      "Se abrió la campana de notificaciones (“Sin novedades por ahora.”) y el menú “···”, que agrupa “Reportes” y “Ajustes de agenda” bajo “Consultorio”, y “Perfil”, “Ajustes” e “Idioma y moneda” bajo “Cuenta”, además de “Salir”.",
      "Se pasó el mouse sobre los íconos de la barra lateral izquierda (colapsada por defecto, solo con íconos): al hacer hover, la barra se expande y muestra las etiquetas de texto de cada sección (Dashboard, Horarios, Pacientes, Chat, Ingresos), más “Idioma y moneda” y el nombre/email de la cuenta al pie. Se confirmó por script que los enlaces tienen el texto igualmente presente en el DOM aunque estén visualmente colapsados (no es un problema de accesibilidad para lectores de pantalla).",
      "Al pasar el mouse por primera vez sobre el ícono de “Dashboard” de la barra colapsada, se disparó inesperadamente un tour guiado (“Tour con Maca”, paso 1 de 17) sin haberlo solicitado explícitamente. Se cerró el tour con la “×”. Se verificó que no se repite en visitas posteriores (queda una marca en <code>localStorage</code>, <code>motivarcare.pro.portalTour.v2.&lt;id&gt;</code>), por lo que no se documenta como hallazgo, solo como observación.",
      "Se probaron las tarjetas de “Indicadores de práctica”: al hacer clic en cada una aparece un tooltip con el detalle exacto de ese indicador (por ejemplo, “Perfil público y oferta clara” detalla qué campos del perfil están completos; “Al menos un paciente activo” aclara “Pacientes en estado «activo» (según historial de reservas): 0”). Se notó una inconsistencia de color entre las tarjetas — ver Hallazgo 2.",
      "Se recargó la pantalla principal varias veces (4 veces en total durante esta pasada) para verificar el comportamiento general: el modal de Google Calendar volvió a aparecer todas las veces, pese a haber sido cerrado con “Lo hago después” en cada oportunidad anterior — ver Hallazgo 1.",
      "Se inspeccionó por script el <code>localStorage</code> del navegador: se confirmó que la clave <code>professional_calendar_prompt_dismissed_users</code> sí incluye el ID de la cuenta de prueba tras cerrar el modal, lo que confirma que el rechazo se guarda correctamente pero la pantalla no lo respeta al decidir si mostrar el modal de nuevo.",
      "Se probó la pestaña “Marcar realizadas” de la sección “Sesiones”: muestra una advertencia clara antes de listar nada (“Al marcar realizada las enviás a cobro. Una vez enviadas, no podrás modificarlas.”), un selector de fecha y un filtro “Todas”. Con la cuenta de prueba sin sesiones, se ve el estado vacío “No hay sesiones”.",
      "Se probaron los enlaces “Ver listado” (Pacientes), “Ver agenda” (Próximas sesiones) y “Ver ingresos” (Dinero por sesiones realizadas): los tres navegan correctamente a sus secciones correspondientes (<code>/pacientes</code>, <code>/horarios</code> o vista de agenda, <code>/ingresos</code>). No se evaluó el contenido de esas pantallas en profundidad — queda fuera del alcance de este caso, centrado en la pantalla principal.",
      "Se verificó por script (<code>document.documentElement.scrollHeight</code> vs. <code>window.innerHeight</code>) que, en esta resolución de escritorio, todo el contenido de la pantalla principal entra sin necesidad de hacer scroll — ambos valores coinciden exactamente (903px).",
      "Se comparó el acceso a “Idioma y moneda” y a “Perfil” desde dos lugares distintos: el pie de la barra lateral (al expandirla con hover) y el menú “···” de la esquina superior derecha. Ambos caminos llevan exactamente al mismo modal/pantalla y están rotulados de forma consistente entre sí en los dos lugares, por lo que no se documenta como hallazgo (a diferencia de un caso similar detectado en el Caso 06, acá ambos accesos están claramente identificados).",
      "A pedido del Evaluador UX, se recorrieron además, uno por uno, todos los destinos de la barra de navegación lateral izquierda (Dashboard, Horarios, Pacientes, Chat, Ingresos) y del menú “···” de la esquina superior derecha (Reportes, Ajustes de agenda, Perfil, Ajustes, Idioma y moneda), sin realizar ninguna operación (no se guardó ningún horario, no se conectó Google Calendar, no se cerró sesión, no se envió ningún mensaje de chat ni se cambió el idioma o la moneda), únicamente para verificar que cada pantalla cargue y presente su información correctamente y evaluar la consistencia visual entre ellas.",
      "“Horarios” muestra dos pestañas: “Configurar horarios de trabajo” (grilla semanal de franjas horarias por día) y “Disponibilidad configurada” (calendario mensual con el conteo de franjas publicadas). Se notó una inconsistencia en la navegación de retroceso entre ambas pestañas — ver Hallazgo 4.",
      "“Pacientes” muestra el estado vacío esperado para la cuenta de prueba (sin pacientes todavía), con una redacción breve y en línea con los demás estados vacíos ya relevados en el Dashboard.",
      "“Chat” muestra el layout típico de una mensajería (lista de conversaciones a la izquierda, panel de conversación a la derecha) con el estado vacío “Selecciona un chat” / “No hay conversaciones activas.”. Se notó que el campo para escribir un mensaje queda habilitado visualmente pese a no haber ninguna conversación seleccionada — ver Hallazgo 7.",
      "“Ingresos” es consistente en estilo y wording con el resto de las pantallas ya relevadas (mismos encabezados, misma tipografía de montos, mismo criterio de estados vacíos).",
      "Dentro del menú “···”, “Reportes” muestra el resumen de acompañamiento entre sesiones vía el asistente “Maca”, con la aclaración de que solo se listan pacientes que dieron su consentimiento, y el estado vacío correspondiente para la cuenta de prueba. No se detectaron problemas.",
      "“Ajustes de agenda” muestra 4 filas: “Tiempo mínimo”, “Valor de sesión”, “Vacaciones” y “Carga de trabajo”. Se verificó que “Valor de sesión” (USD 50 · ARS 80.000) es consistente con la conversión de moneda ya vista en el Caso 07. Se notó que la fila “Carga de trabajo” aparece deshabilitada sin ninguna explicación — ver Hallazgo 6 — y que, en esta pantalla, conviven dos controles distintos para volver a la pantalla anterior (el enlace “← Volver” de arriba y el botón “‹” junto al título “Ajustes”, dentro de la tarjeta) — ver Hallazgo 4.",
      "“Perfil” (perfil profesional público) muestra 8 secciones editables (Identidad profesional, Datos bancarios, Formación y títulos, Ámbitos de atención, Presentación pública, Tarifas, Foto y video, Preferencias avanzadas) junto con una vista previa (“Vista en matching”) de cómo lo ven los pacientes y un contador de progreso de completitud. Ese contador presenta un error de interpolación — ver Hallazgo 3.",
      "“Ajustes” (distinto de “Ajustes de agenda”, solo accesible desde el menú “···”) agrupa Notificaciones, conexión con Google Calendar, cambio de contraseña y cierre de sesión. No se modificó ninguna preferencia ni se cerró la sesión, siguiendo la consigna de no realizar operaciones.",
      "“Idioma y moneda”, tanto desde la barra lateral como desde el menú “···”, abre el mismo modal con la selección de idioma (Español/English/Português) y de moneda vigentes, sin aplicar ningún cambio.",
      "Se relevaron, en varias de estas pantallas, textos sin tilde en palabras que deberían llevarla (por ejemplo “Tiempo minimo”, “Se aplicara…”, “se mostrara…”, “Espanol”) — ver Hallazgo 5.",
      "Con la misma cuenta de prueba “pro1” ya con sesión iniciada, se redimensionó la ventana de Chrome real a 768×1024 (viewport de tableta) y se navegó a <code>pro.motivarcare.com/</code>.",
      "Al cargar, volvió a aparecer el modal de Google Calendar — se repitió la recarga/navegación directa por URL en cuatro oportunidades distintas a lo largo de la pasada y el modal apareció las cuatro veces, cerrándose siempre con “Lo hago después” — ver verificación cruzada del Hallazgo 1. El modal en sí se ve bien adaptado al ancho de tableta.",
      "Se relevó la estructura general del Dashboard en tableta: a diferencia de escritorio, no aparece la leyenda “Estados de la sesión” en ningún lugar de la pantalla — ver Hallazgo 8 (nuevo, propio de tableta).",
      "Se confirmó que, en tableta, la barra de navegación lateral izquierda de escritorio (colapsada con hover) es reemplazada por una barra de navegación inferior fija, con ícono y etiqueta de texto siempre visibles simultáneamente para las 5 secciones.",
      "Se confirmó que el menú “···” de la esquina superior derecha, en tableta, no se abre como un menú desplegable acotado sino como un panel lateral de altura completa que se desliza desde la izquierda, con la misma agrupación que en escritorio.",
      "Se recorrieron uno por uno, igual que en escritorio, los 5 destinos de la barra de navegación inferior y los 5 del menú “···”, sin realizar ninguna operación de escritura. Todas las pantallas cargaron correctamente; el único punto llamativo fue la ausencia del textarea del Chat (ver verificación del Hallazgo 7).",
      "Se notó que, a diferencia de la barra de navegación inferior (que permanece siempre fija), la cabecera superior de cada pantalla no es fija: al hacer scroll hacia abajo en una pantalla larga (por ejemplo “Perfil”), la cabecera se desplaza fuera de la vista junto con el resto del contenido — ver Hallazgo 9 (nuevo, propio de tableta).",
      "Se verificaron puntualmente, con inspección de DOM/script cuando hizo falta, los 7 hallazgos ya documentados en la pasada de escritorio, para confirmar si se replican, varían o no aplican en tableta — el detalle de cada uno está en su respectivo campo de verificaciones.",
      "A pedido puntual del Evaluador UX, se verificó específicamente el enlace del panel “Opiniones de pacientes” en “Perfil”: se probó el botón “Copiar” (funciona correctamente) y se abrió la URL completa copiada en una pestaña nueva del portal paciente, revisando además la consola del navegador y el texto completo de la página de destino en busca de cualquier mención a “opinión”. El enlace no lleva a ningún flujo de calificación — ver Hallazgo 10 (nuevo).",
      "Con la misma cuenta de prueba “pro1” ya con sesión iniciada, se redimensionó la ventana de Chrome real a 390×844 (viewport de móvil) y se navegó a <code>pro.motivarcare.com/</code>.",
      "El modal de Google Calendar volvió a aparecer en las tres recargas/navegaciones directas por URL realizadas, cerrándose siempre con “Lo hago después”. Se adapta bien al ancho de móvil — ver verificación cruzada del Hallazgo 1.",
      "Se confirmó que, igual que en tableta, no aparece la leyenda “Estados de la sesión” en el Dashboard de móvil — ver verificación del Hallazgo 8.",
      "Se confirmó que la barra de navegación inferior fija y el menú “···” como panel lateral se comportan igual que en tableta, sin diferencias relevantes.",
      "Se recorrieron uno por uno los 5 destinos de la barra inferior y los 5 del menú “···”, sin realizar ninguna operación de escritura. Se notó una diferencia de rotulado en “Horarios” no vista antes — ver Hallazgo 11 (nuevo, propio de móvil).",
      "Al probar el botón “‹ Ajustes” dentro de “Ajustes de agenda”, se repitió el mismo comportamiento ya visto en tableta: navegó al Dashboard, no a una pantalla “Ajustes” — tercera confirmación de este patrón en un tercer viewport distinto.",
      "Se notó, al navegar a “Ajustes de agenda” por URL directa en vez de por clic dentro de la app, que el enlace “← Volver” no aparece (a diferencia de navegar hasta ahí haciendo clic desde el menú “···”, donde sí aparece) — el mismo patrón dependiente del historial de navegación ya documentado para el modal de Google Calendar (Hallazgo 1), aplicado ahora también a este control.",
      "Se verificaron puntualmente los 10 hallazgos ya documentados en las pasadas de escritorio y tableta, para confirmar si se replican, varían o no aplican en móvil. Se detectó una discrepancia puntual en el Hallazgo 5 que ameritó dejarla registrada como pendiente de confirmar con desarrollo, en vez de resolverla unilateralmente.",
      "Se confirmó que el panel “Opiniones de pacientes” en “Perfil”, con el mismo enlace del Hallazgo 10, está presente también en móvil con el mismo formato.",
      "Antes de cerrar el caso, el Evaluador UX pidió una pasada adicional, exclusivamente de escritorio (Chrome real, ventana ~1568×900), para verificar si es posible navegar todos los paneles y secciones del Portal del Profesional usando únicamente el teclado, sin realizar ninguna operación de escritura ni guardar ningún cambio — el objetivo fue confirmar que toda la información esté alcanzable por teclado, no evaluar funcionalidad.",
      "La metodología consistió en recorrer cada pantalla presionando Tab/Shift+Tab repetidamente, registrando con inspección de DOM (<code>document.activeElement</code> y atributos ARIA relevantes) qué elemento recibía el foco y si el indicador visual era visible. Para menús y modales se verificó además si el foco se traslada al abrirse, si existe <code>role=\"dialog\"</code>, si Escape cierra el panel, y si el foco vuelve al control que lo abrió.",
      "Se recorrieron con esta metodología el Dashboard completo, el modal de bienvenida de Google Calendar, el menú “···” y la campana de notificaciones, y luego cada destino ya relevado: Chat, Horarios, Pacientes, Ingresos, Reportes, Ajustes de agenda, Perfil (con sus modales de edición), Ajustes generales y el modal “Idioma y moneda”.",
      "Se detectó que el foco del teclado no se traslada automáticamente al modal “Editar identidad profesional” al abrirse, y que al presionar Tab una vez, el foco pasa a un elemento de la pantalla de fondo (“02 Datos bancarios”) en lugar de quedarse dentro del modal. Se repitió la misma verificación en “Editar datos bancarios” e “Idioma y moneda”, con el mismo resultado — ver Hallazgo 12 (nuevo).",
      "Se verificó que el modal “Idioma y moneda” no se cierra al presionar Escape, a diferencia de los modales “Editar…” de Perfil — ver Hallazgo 13 (nuevo).",
      "Se verificó por script que el modal de bienvenida de Google Calendar no tiene <code>role=\"dialog\"</code> ni <code>aria-modal</code>, que el foco permanece en <code>&lt;body&gt;</code> al abrirse y que Escape no lo cierra — ver Hallazgo 1 (incorporado al hallazgo del modal de Google Calendar).",
      "Se confirmó que la barra lateral izquierda muestra correctamente el anillo de foco sobre cada ícono al navegar con teclado, pero no se expande para mostrar la etiqueta de texto de la sección (solo lo hace con el mouse) — ver Hallazgo 14 (nuevo).",
      "Se confirmó que, al cerrar el menú “···” con Escape, el foco no vuelve al botón que lo abrió, y se observó un comportamiento relacionado en la campana de notificaciones (permanece visible aunque el foco se mueva a otro elemento) — ver Hallazgo 15 (nuevo).",
      "Se verificó por script la estructura ARIA de las pestañas “Próximas sesiones” / “Marcar realizadas”: usan correctamente <code>role=\"tab\"</code> y <code>aria-selected</code>, pero no hay ningún ancestro con <code>role=\"tablist\"</code> ni navegación por flechas entre pestañas — ver Hallazgo 16 (nuevo).",
      "Como hallazgos positivos de esta pasada: las 5 tarjetas de “Indicadores de práctica” muestran su tooltip tanto al enfocarlas con teclado como al pasar el mouse; las 8 secciones tipo acordeón de “Perfil” son botones reales con <code>aria-expanded</code> correctamente sincronizado; en Horarios, tanto las pestañas superiores como los 7 días son elementos nativamente interactivos con <code>aria-pressed</code> reflejando la selección; y, en todos los casos relevados, los controles deshabilitados quedan correctamente excluidos del orden de tabulación."
    ],
    feedbackPositivo: [

      "Toda la pantalla principal entra en una sola vista sin necesidad de hacer scroll, en la resolución de escritorio evaluada — se confirmó por script que la altura del documento coincide exactamente con la altura de la ventana.",
      "La leyenda “Estados de la sesión” (Reservada → Realizada → Pendiente de cobro → Pagada), con un color distintivo por estado, queda siempre visible en la parte superior y ayuda a entender de un vistazo el ciclo de vida de una sesión.",
      "Los 5 indicadores de “Indicadores de práctica” muestran, al hacer clic, un tooltip con el detalle exacto del cálculo (por ejemplo, qué campos del perfil están completos, o cuántos pacientes están “activos” y bajo qué criterio) — una forma clara y consistente de dar contexto sin sobrecargar la tarjeta con texto.",
      "Antes de listar sesiones en la pestaña “Marcar realizadas”, la pantalla muestra una advertencia explícita e inequívoca sobre las consecuencias de la acción (“Al marcar realizada las enviás a cobro. Una vez enviadas, no podrás modificarlas.”), en línea con buenas prácticas de prevención de errores.",
      "Los estados vacíos (“No tenés reservas”, “No hay sesiones”, “Sin novedades por ahora”) usan una redacción breve y consistente entre las distintas secciones de la pantalla.",
      "Aunque la barra lateral izquierda se muestra colapsada (solo íconos) por defecto, el texto de cada sección está igualmente presente en el DOM y no depende únicamente del hover para ser accesible por lectores de pantalla.",
      "Los dos caminos para llegar a “Perfil” y a “Idioma y moneda” (barra lateral y menú “···”) están rotulados de forma consistente entre sí en ambos lugares, evitando la confusión de rótulos detectada en un caso anterior (Caso 06).",
      "El monto de “Valor de sesión” en Ajustes de agenda (USD 50 · ARS 80.000) es consistente con la conversión de moneda vista en el Caso 07, lo que confirma que el tipo de cambio se aplica de forma coherente entre distintas pantallas del portal.",
      "Los estados vacíos de “Pacientes”, “Chat” y “Reportes” mantienen la misma redacción breve y el mismo tono que los ya vistos en el Dashboard, reforzando la consistencia detectada en el resto de la pantalla principal.",
      "“Ajustes” y “Ajustes de agenda” separan con claridad, ya desde sus propios títulos y descripciones, las preferencias generales de cuenta (notificaciones, Google Calendar, contraseña, sesión) de las preferencias específicas de la agenda (tiempo mínimo, valor de sesión, vacaciones, carga de trabajo), evitando que ambas pantallas se mezclen conceptualmente pese a compartir el ícono de engranaje.",
      "(Tableta) La barra de navegación lateral colapsada de escritorio se reemplaza, en tableta, por una barra de navegación inferior fija con ícono y etiqueta de texto siempre visibles para las 5 secciones principales — una adaptación clara al ancho de tableta, que no depende de ningún hover para identificar cada sección.",
      "(Tableta) El modal de Google Calendar y el modal de “Idioma y moneda” se adaptan correctamente al ancho de tableta, conservando el mismo diseño y buen espaciado que en escritorio, sin textos cortados ni elementos superpuestos.",
      "(Tableta) Los 8 destinos de la barra inferior y del menú “···” cargaron correctamente en un solo intento cada uno, sin errores ni estados rotos, replicando la buena consistencia visual ya detectada en escritorio.",
      "(Móvil) El Dashboard reorganiza los bloques “Por enviar” / “Pendiente de cobro” con un tratamiento visual propio (fondo de color sólido en vez de tarjetas blancas) que ayuda a que esos montos se destaquen en una pantalla angosta, sin perder legibilidad.",
      "(Móvil) Los 10 destinos de la barra inferior y del menú “···” cargaron correctamente en un solo intento cada uno, y los modales (Google Calendar, Idioma y moneda) se adaptan bien al ancho de móvil, sin textos cortados ni botones superpuestos.",
      "(Accesibilidad, escritorio) Las 5 tarjetas de “Indicadores de práctica” son alcanzables por teclado (<code>tabindex=\"0\"</code>) y muestran el mismo tooltip explicativo tanto al enfocarlas con Tab como al pasar el mouse por encima — una correcta paridad entre hover y foco, a diferencia de lo detectado en la barra lateral (Hallazgo 14).",
      "(Accesibilidad, escritorio) Las 8 secciones tipo acordeón de “Perfil” son botones reales (no <code>&lt;div&gt;</code> con <code>onclick</code>) con el atributo <code>aria-expanded</code> correctamente sincronizado con su estado visual, y tanto sus 8 botones “Editar” como el botón “Copiar” del panel de opiniones de pacientes son alcanzables por teclado.",
      "(Accesibilidad, escritorio) En “Horarios”, tanto las pestañas superiores como los 7 días de la semana (LUN a DOM) están implementados como elementos nativamente interactivos (enlaces con <code>href</code> y botones, respectivamente), con <code>aria-pressed</code> reflejando correctamente el día seleccionado.",
      "(Accesibilidad, escritorio) En todas las pantallas relevadas, los controles deshabilitados (el botón “Enviar mensaje” del Chat sin conversación activa, la fila “Carga de trabajo” de Ajustes de agenda, los botones “Guardar”/“Eliminar selección del día” cuando corresponde) quedan correctamente excluidos del orden de tabulación, sin poder recibir foco por accidente ni generar confusión.",
      "(Accesibilidad, escritorio) Los 3 checkboxes de “Ajustes” (Notificaciones por email, Alertas de seguridad, Visibilidad en matching) están correctamente envueltos en su propia etiqueta (<code>&lt;label&gt;</code>), por lo que su nombre accesible coincide con el texto visible."
    ],
    hallazgos: [
      {
        numero: 1,
        titulo: "El modal de bienvenida de Google Calendar vuelve a aparecer en cada carga de la pantalla pese a haber sido rechazado, y además carece de semántica de diálogo accesible y no se cierra con Escape",
        heuristicaId: "H05",
        heuristicaNombre: "H5 — Prevención de errores",
        severidad: "Recomendación",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737); el aspecto de semántica de diálogo (ARIA) y cierre con Escape se verificó puntualmente en la pasada específica de accesibilidad por teclado (ventana ~1568×900), limitada a escritorio.",
        descripcionHtml: "Al ingresar al Dashboard, aparece un modal a pantalla completa invitando a conectar Google Calendar, con las opciones “Conectar ahora” y “Lo hago después”. Se cerró el modal con “Lo hago después” y se recargó la pantalla principal: el modal volvió a aparecer, idéntico. Se repitió la prueba varias veces (incluyendo recargas directas por URL y navegación de ida y vuelta desde “Ingresos”), y el modal apareció todas las veces sin excepción. Se inspeccionó por script el <code>localStorage</code> del navegador y se confirmó que la clave <code>professional_calendar_prompt_dismissed_users</code> sí incluye el ID de la cuenta de prueba después de cerrar el modal con “Lo hago después” — es decir, la aplicación registra correctamente el rechazo, pero la pantalla no consulta ese dato (o no lo consulta correctamente) al decidir si debe volver a mostrar el modal. Al recorrer los paneles de navegación (barra lateral y menú “···”) se confirmó que el problema no se limita al Dashboard: el modal reaparece ante cualquier carga completa de página (recarga o navegación directa por URL) hacia cualquier ruta del portal — se verificó puntualmente en <code>/</code>, <code>/horarios</code>, <code>/pacientes</code>, <code>/chat</code>, <code>/ingresos</code>, <code>/agenda/ajustes</code>, <code>/perfil</code> y <code>/ajustes</code> — mientras que, en cambio, nunca aparece al navegar de una pantalla a otra por medio de un clic dentro de la aplicación (navegación interna tipo SPA, por ejemplo desde el menú “···”). El resultado es que cualquier profesional que no quiera conectar Google Calendar tiene que rechazar la misma propuesta cada vez que recarga o abre una URL del portal directamente, indefinidamente. A esto se suma, detectado en la pasada específica de accesibilidad por teclado y relacionado también con H4 — Consistencia y estándares, que este mismo modal no tiene ningún elemento con <code>role=\"dialog\"</code>, <code>role=\"alertdialog\"</code> ni <code>aria-modal</code> — se confirmó por script que no existe ningún nodo con esos atributos en el DOM mientras el modal está en pantalla. El foco del teclado tampoco se traslada hacia él al aparecer (permanece en <code>&lt;body&gt;</code>), y la tecla Escape no lo cierra: hay que presionar Tab hasta llegar a uno de sus dos botones (“Conectar ahora” o “Lo hago después”) y confirmar con Enter. No se detectó fuga de foco hacia contenido de fondo al presionar Tab (el primer Tab lleva directamente a “Conectar ahora”), por lo que este segundo problema es exclusivamente de semántica y de la convención de cierre con Escape, no de atrapamiento de foco (a diferencia del Hallazgo 12, que sí describe fuga de foco hacia contenido de fondo en otros modales del portal).",
        recomendacion: "Corregir la lógica global de la aplicación (no solo la del Dashboard) para que, en cualquier carga completa de página, consulte la lista de usuarios que ya rechazaron la propuesta (<code>professional_calendar_prompt_dismissed_users</code>, u otro mecanismo equivalente del lado del servidor, más robusto que depender solo de <code>localStorage</code> del dispositivo) antes de decidir si mostrar el modal, en vez de mostrarlo siempre. Considerar además un límite de reintentos (por ejemplo, no volver a preguntar antes de N días) en vez de una condición binaria de “preguntar siempre” vs. “no preguntar nunca”. De forma complementaria, agregar <code>role=\"dialog\"</code> (o <code>role=\"alertdialog\"</code>, dado que interrumpe el flujo normal de la pantalla) y <code>aria-modal=\"true\"</code> a este modal, trasladar el foco a uno de sus botones al abrirse, y agregar el cierre con Escape, unificando su comportamiento con el resto de los modales del portal.",
        evidencia: [
          { src: "capturas/caso-08/01-modal-google-calendar-reaparece-cada-recarga.jpg", caption: "El modal, reaparecido en una de las recargas de prueba sobre el Dashboard" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "replica",
            textoHtml: "Replica (aspecto de reaparición en cada carga). Se repitieron cuatro recargas/navegaciones directas por URL distintas (“/” dos veces, “/agenda/ajustes”, “/perfil”) y el modal apareció las cuatro veces, igual que en escritorio. El modal se adapta correctamente al ancho de tableta (mismo diseño, buen espaciado, sin recortes). El aspecto de semántica ARIA/Escape no se repitió en este viewport, ya que la pasada de accesibilidad por teclado se limitó a escritorio.",
            evidencia: [
              { src: "capturas/caso-08/t17-modal-google-calendar-reaparece-perfil.jpg", caption: "El modal reaparecido tras navegar a “/perfil”" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Replica (aspecto de reaparición en cada carga). Se repitieron tres recargas/navegaciones directas por URL (“/” dos veces, “/agenda/ajustes”) y el modal apareció las tres veces. Se adapta correctamente al ancho de móvil. Con esta pasada, el modal fue confirmado en un total de 9 cargas de página distintas a lo largo de las tres pasadas (escritorio, tableta y móvil), sin ninguna excepción. El aspecto de semántica ARIA/Escape tampoco se repitió en este viewport, por el mismo motivo que en tableta.",
            evidencia: [
              { src: "capturas/caso-08/m15-modal-google-calendar-reaparece-perfil.jpg", caption: "El modal reaparecido tras navegar a “/perfil” en móvil" }
            ]
          }
        ]
      },
      {
        numero: 2,
        titulo: "El indicador “Conversión de reservas” usa un color distinto al resto de los indicadores con el mismo estado de alerta",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "El bloque “Indicadores de práctica” muestra 5 tarjetas de estado, encabezadas por el texto “Hay margen de crecimiento — Revisá los ítems en ámbar y el detalle en tu perfil.”. De las 5 tarjetas, 4 muestran un valor “0” (sin datos/sin actividad): “Disponibilidad en los próximos 7 días” (0 franjas), “Agenda con movimiento” (0 sem. · 0 próx.), “Conversión de reservas (con datos)” (0 compl. · pocos datos) y “Al menos un paciente activo” (0 activos). De estas 4, tres usan un ícono con fondo naranja/ámbar y el valor de texto en el mismo tono naranja, consistente con el mensaje “revisá los ítems en ámbar” del encabezado. La tarjeta “Conversión de reservas (con datos)”, en cambio, usa un ícono con fondo verde (el mismo verde que la única tarjeta realmente completa, “Perfil público y oferta clara — 4/4 requisitos”) y su valor de texto aparece en un tono neutro (azul oscuro/negro), no en ámbar. Visualmente, esta tarjeta se lee como si estuviera en buen estado, igual que la de “Perfil público”, cuando en realidad también representa un ítem sin datos suficientes.",
        recomendacion: "Unificar el criterio de color: todo indicador que el propio encabezado clasifica como “ítem en ámbar” (es decir, que necesita atención) debería usar el mismo tono de ícono y de texto que sus pares, reservando el verde exclusivamente para los indicadores realmente completos.",
        evidencia: [
          { src: "capturas/caso-08/02-indicadores-practica-inconsistencia-color-conversion-reservas.png", caption: "Las 5 tarjetas: nótese el ícono verde de “Conversión de reservas” junto a los íconos naranja de sus vecinas con el mismo estado “0”" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "replica",
            textoHtml: "Replica. Las 5 tarjetas se reordenan en una grilla de 3 columnas (en vez de 5 en una sola fila como en escritorio), pero la inconsistencia de color se mantiene idéntica: “Conversión de reservas (con datos)” sigue mostrando ícono verde y texto en tono neutro, mientras sus 3 pares con valor “0” usan ícono y texto en naranja/ámbar.",
            evidencia: [
              { src: "capturas/caso-08/t19-indicadores-practica-inconsistencia-color-zoom.png", caption: "Zoom de las 5 tarjetas en tableta" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Replica. Las 5 tarjetas se reordenan en una grilla de 2 columnas (con la última, “Al menos un paciente activo”, ocupando una fila propia de ancho completo), pero la inconsistencia de color es idéntica a escritorio y tableta.",
            evidencia: [
              { src: "capturas/caso-08/m02-indicadores-practica-inconsistencia-color.jpg", caption: "Las 5 tarjetas en móvil" }
            ]
          }
        ]
      },
      {
        numero: 3,
        titulo: "El contador de progreso del perfil muestra el texto sin interpolar “{8} de {8} listos” en lugar de los valores numéricos",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "En la pantalla “Perfil” (perfil profesional), el panel “Vista en matching” incluye, debajo de las opiniones de pacientes, una barra de progreso de completitud del perfil. En vez de mostrar los números reales (por ejemplo “8 de 8 listos”), el texto se ve literalmente como <code>{8} de {8} listos</code>, con las llaves de un placeholder de plantilla sin interpolar. La barra de progreso en sí (100%) y la lista de 8 campos completados debajo (Nombre y apellido, Título profesional, Formación académica, Ámbitos de atención, Biografía, Foto profesional, etc.) sí se muestran correctamente; el problema es puntual del texto del encabezado de esa tarjeta.",
        recomendacion: "Corregir la plantilla de texto de esa tarjeta para que interpole correctamente los valores numéricos (cantidad de campos completos y cantidad total de campos) en lugar de mostrar las llaves del placeholder sin procesar. Agregar una prueba automatizada que renderice esta tarjeta con distintos valores de completitud para evitar regresiones futuras.",
        evidencia: [
          { src: "capturas/caso-08/13-menu-perfil-contador-listos-bug.png", caption: "El texto “{8} de {8} listos”, con las llaves de la plantilla visibles sin interpolar" },
          { src: "capturas/caso-08/12-menu-perfil.jpg", caption: "Ubicación del contador dentro de la pantalla completa de Perfil" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "replica",
            textoHtml: "Replica. Se confirmó por script que el <code>&lt;strong&gt;{8} de {8} listos&lt;/strong&gt;</code> sigue sin interpolar. Cambia únicamente la ubicación relativa dentro de la pantalla (en tableta, el layout de una sola columna hace que este bloque quede debajo de “Vista en matching” y “Opiniones de pacientes”, en vez de al costado como en escritorio), pero el error de texto es idéntico.",
            evidencia: [
              { src: "capturas/caso-08/t13-perfil-contador-listos-bug.jpg", caption: "El texto “{8} de {8} listos” en tableta" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Replica, sin variantes respecto de tableta (mismo layout de una sola columna, mismo texto sin interpolar).",
            evidencia: [
              { src: "capturas/caso-08/m10-perfil-listos-bug-y-panel-opiniones.jpg", caption: "Se ve además, en la misma captura, el panel “Opiniones de pacientes” del Hallazgo 10" }
            ]
          }
        ]
      },
      {
        numero: 4,
        titulo: "Los elementos de retroceso son inconsistentes entre pantallas y, en “Ajustes de agenda”, hay dos controles redundantes para la misma acción",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Menor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "Se detectaron dos problemas relacionados con la navegación de retroceso. Primero, dentro de “Horarios”, la pestaña “Disponibilidad configurada” muestra un enlace “← Volver” arriba a la izquierda, mientras que la pestaña “Configurar horarios de trabajo” de la misma pantalla no muestra ningún enlace equivalente, pese a tratarse de dos vistas de la misma sección. Segundo, dentro de “Ajustes de agenda” conviven dos controles distintos para volver a la pantalla anterior: arriba de todo, fuera de la tarjeta blanca, un enlace “← Volver”; y, dentro de la tarjeta, junto al título “Ajustes”, un botón independiente con el símbolo “‹” (confirmado por script: es un <code>&lt;button aria-label=\"Volver\"&gt;</code> real, distinto del texto “Ajustes” contiguo, que sí es un simple <code>&lt;div&gt;&lt;h2&gt;</code> sin interactividad) que cumple, en apariencia, la misma función. Tener dos controles distintos, en dos ubicaciones distintas de la misma pantalla, para una sola acción de “volver” es redundante y puede generar dudas sobre si hacen lo mismo o cosas distintas. <em>Nota de verificación:</em> al re-testear puntualmente el botón “‹” haciendo clic exactamente sobre su área (y no sobre el texto “Ajustes” contiguo), no se observó cambio de pantalla en las pruebas automatizadas realizadas para esta auditoría, mientras que “← Volver” sí navegó correctamente hacia atrás; el Evaluador UX reporta que en su propio uso manual el botón “‹” responde con normalidad, por lo que este punto puntual queda pendiente de confirmar con el equipo de desarrollo y no se computa como una falla adicional — el hallazgo en sí es la redundancia de dos controles para la misma acción, no el funcionamiento de ninguno de los dos en particular.",
        recomendacion: "En “Horarios”, agregar el mismo enlace “← Volver” a la pestaña “Configurar horarios de trabajo” que ya tiene “Disponibilidad configurada”. En “Ajustes de agenda”, eliminar uno de los dos controles de retroceso — lo más simple es quitar el botón “‹” junto a “Ajustes”, ya que “← Volver” arriba de la pantalla ya cumple esa función — para no duplicar la misma acción con dos elementos distintos.",
        evidencia: [
          { src: "capturas/caso-08/05-sidebar-horarios.jpg", caption: "“Configurar horarios de trabajo”: sin ningún enlace de retroceso arriba a la izquierda" },
          { src: "capturas/caso-08/16-horarios-disponibilidad-configurada-con-volver.jpg", caption: "“Disponibilidad configurada”, la otra pestaña de la misma pantalla: sí muestra “← Volver”" },
          { src: "capturas/caso-08/10-menu-ajustes-agenda-breadcrumb-y-carga-trabajo.jpg", caption: "“Ajustes de agenda”: el enlace “← Volver” arriba y, dentro de la tarjeta, el botón “‹ Ajustes” — dos controles para la misma acción" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "variante",
            textoHtml: "Replica, con un dato adicional. Tanto la falta de “← Volver” en “Configurar horarios de trabajo” como los dos controles redundantes en “Ajustes de agenda” se ven exactamente igual que en escritorio. Además, en esta pasada se probó de nuevo el botón “‹” junto a “Ajustes” (clic preciso sobre el botón, no sobre el texto): esta vez sí se detectó navegación, pero hacia el Dashboard, no hacia una pantalla “Ajustes” general — comportamiento reproducido dos veces de forma idéntica. Esto es consistente con que el botón esté implementado como un “volver” genérico de historial del navegador (<code>history.back()</code>) en lugar de una acción explícita “ir a Ajustes”: el resultado final depende de qué pantalla estaba abierta antes en el historial. Sigue pendiente de confirmar con el equipo de desarrollo si el botón está pensado como “volver en el historial” o como “ir a Ajustes”, ya que su propio texto (“‹ Ajustes”) sugiere lo segundo.",
            evidencia: [
              { src: "capturas/caso-08/t09-ajustes-agenda-doble-volver-carga-trabajo-tiempo-minimo.jpg", caption: "Los dos controles de retroceso en tableta" },
              { src: "capturas/caso-08/t10-click-boton-ajustes-navega-a-dashboard.jpg", caption: "Pantalla resultante tras el clic en “‹ Ajustes”: Dashboard, no Ajustes" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "variante",
            textoHtml: "Replica, con un dato adicional que termina de explicar el comportamiento de “← Volver”. El botón “‹ Ajustes” repitió, por tercera vez en un tercer viewport, la misma navegación al Dashboard. Además, se comparó explícitamente cómo se llega a “Ajustes de agenda”: al navegar por URL directa, el enlace “← Volver” no aparece; al llegar por un clic dentro de la app (desde el menú “···”), sí aparece. Esto confirma que “← Volver” depende de que exista una entrada previa en el historial de navegación del navegador — no es una falla intermitente, sino que no tiene sentido mostrar un “volver” cuando no hay una pantalla anterior a la que volver dentro de esa sesión.",
            evidencia: [
              { src: "capturas/caso-08/m06-ajustes-agenda-doble-volver-spa-nav.jpg", caption: "“← Volver” presente, llegando por clic desde el menú" },
              { src: "capturas/caso-08/m07-ajustes-agenda-sin-volver-nav-directa-url.jpg", caption: "“← Volver” ausente, llegando por URL directa" },
              { src: "capturas/caso-08/m09-click-boton-ajustes-navega-a-dashboard.jpg", caption: "Resultado del clic en “‹ Ajustes”" }
            ]
          }
        ]
      },
      {
        numero: 5,
        titulo: "Faltan tildes en varios textos de la interfaz en distintas pantallas",
        heuristicaId: "H02",
        heuristicaNombre: "H2 — Coincidencia con el mundo real",
        severidad: "Menor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "Se relevaron varios textos en castellano sin la tilde correspondiente, repetidos en más de una pantalla: “Tiempo minimo” (debería ser “Tiempo mínimo”, en Ajustes de agenda), “Se aplicara recurrente hacia adelante durante 0 semanas…” (debería ser “Se aplicará…”, en Horarios → Configurar horarios de trabajo), “Tu portal se mostrara con estas preferencias en este dispositivo” (debería ser “se mostrará”, en el modal Idioma y moneda) y “Espanol” en lugar de “Español” (aparece repetido en el modal “Idioma y moneda”, en la etiqueta de la barra lateral y en el campo “Idiomas de atención” de Perfil). Al tratarse de un portal en castellano dirigido a profesionales de la salud, este tipo de detalles resta prolijidad y profesionalismo a la imagen del producto, aunque no afecta la funcionalidad.",
        recomendacion: "Revisar el diccionario/archivo de textos en castellano del portal profesional y corregir las tildes faltantes, priorizando “Español” por ser la más visible y repetida (aparece en al menos 3 pantallas distintas). De ser posible, incorporar un corrector ortográfico automatizado (linter de copys) al proceso de build para prevenir este tipo de errores a futuro.",
        evidencia: [
          { src: "capturas/caso-08/10-menu-ajustes-agenda-breadcrumb-y-carga-trabajo.jpg", caption: "“Tiempo minimo” sin tilde, en Ajustes de agenda" },
          { src: "capturas/caso-08/05-sidebar-horarios.jpg", caption: "“Se aplicara… durante 0 semanas…” sin tilde, en Horarios" },
          { src: "capturas/caso-08/15-menu-idioma-y-moneda.jpg", caption: "“se mostrara” y “Espanol” sin tilde, en el modal Idioma y moneda" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "variante",
            textoHtml: "Replica, con instancias adicionales. Los mismos textos sin tilde de escritorio (“Tiempo minimo”, “Se aplicara…”, “Espanol”) aparecen igual en tableta, y se sumaron dos casos nuevos: “Todavia no hay pacientes que hayan habilitado…” en Reportes, y “Portugues” / “Dolar estadounidense” en el selector de idioma y moneda (debería ser “Portugués” y “Dólar estadounidense”).",
            evidencia: [
              { src: "capturas/caso-08/t08-reportes-accento-todavia.jpg", caption: "“Todavia” sin tilde en Reportes" },
              { src: "capturas/caso-08/t15-idioma-y-moneda-modal-accentos.jpg", caption: "“Portugues” y “Dolar estadounidense” en el modal" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "variante",
            textoHtml: "Replica en general (“Tiempo minimo”, “Espanol”, “Portugues”, “Dolar estadounidense” aparecen igual que en las otras pasadas), con una instancia nueva — “Max. clientes simultaneos” en la fila “Carga de trabajo” de Ajustes de agenda — pero con una discrepancia puntual respecto de tableta: en Reportes, el mismo texto que en tableta se había registrado como “Todavia no hay pacientes que hayan habilitado…” (sin tilde) aparece en móvil correctamente escrito como “Todavía no hay pacientes que hayan habilitado…” (con tilde), para la misma cuenta de prueba y el mismo estado vacío. No se pudo determinar la causa exacta solo con esta evaluación; queda pendiente confirmar con el equipo de desarrollo y, de mínima, repetir la lectura en tableta para descartar un error de esa pasada.",
            evidencia: [
              { src: "capturas/caso-08/m08-carga-trabajo-simultaneos-sin-tilde-zoom.png", caption: "“simultaneos” sin tilde" },
              { src: "capturas/caso-08/m12-reportes-todavia-con-tilde.jpg", caption: "“Todavía”, con tilde, en Reportes en móvil" }
            ]
          }
        ]
      },
      {
        numero: 6,
        titulo: "La opción “Carga de trabajo” de Ajustes de agenda aparece deshabilitada sin ninguna explicación visible",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Menor",
        clasificacion: "Otros",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "De las 4 filas de “Ajustes de agenda” (Tiempo mínimo, Valor de sesión, Vacaciones, Carga de trabajo), las primeras 3 se muestran como filas interactivas con flecha “›” hacia la derecha. “Carga de trabajo” (Max. clientes simultáneos), en cambio, se muestra con íconos y texto en un tono grisáceo/muted y sin flecha. Se confirmó por script que la fila tiene el atributo <code>aria-disabled=\"true\"</code> y la clase <code>muted</code>, es decir que está deshabilitada intencionalmente. Sin embargo, no hay ningún texto, ícono de candado, etiqueta “Próximamente” ni tooltip que explique por qué esta opción puntual no está disponible para la cuenta de prueba, a diferencia de sus 3 filas vecinas.",
        recomendacion: "Agregar una indicación explícita (una etiqueta breve tipo “Próximamente” o “No disponible en tu plan”, o un tooltip al pasar el mouse) que explique por qué “Carga de trabajo” está deshabilitada, para que la persona entienda que se trata de una restricción intencional y no de un error de carga.",
        evidencia: [
          { src: "capturas/caso-08/11-menu-ajustes-agenda-carga-trabajo-zoom.png", caption: "“Carga de trabajo” en tono grisáceo y sin flecha “›”, sin ninguna explicación junto al texto" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "replica",
            textoHtml: "Replica, sin variantes. La fila “Carga de trabajo” se ve igual de deshabilitada (tono grisáceo, sin flecha “›”) y sin ninguna explicación visible.",
            evidencia: [
              { src: "capturas/caso-08/t09-ajustes-agenda-doble-volver-carga-trabajo-tiempo-minimo.jpg", caption: "Fila “Carga de trabajo” deshabilitada, en tableta" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Replica, sin variantes.",
            evidencia: [
              { src: "capturas/caso-08/m06-ajustes-agenda-doble-volver-spa-nav.jpg", caption: "Fila “Carga de trabajo” deshabilitada, en móvil" }
            ]
          }
        ]
      },
      {
        numero: 7,
        titulo: "El campo para escribir un mensaje en Chat queda habilitado visualmente aunque no haya ninguna conversación seleccionada",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737)",
        descripcionHtml: "En la pantalla “Chat”, con la cuenta de prueba sin conversaciones, se muestra el estado vacío “Selecciona un chat” / “No hay conversaciones activas.”. Pese a esto, el campo de texto (<code>&lt;textarea placeholder=\"Escribe un mensaje\"&gt;</code>) se ve y se comporta como habilitado (no tiene el atributo <code>disabled</code> ni <code>readOnly</code>), invitando visualmente a escribir un mensaje que en realidad no se podría enviar. Se confirmó por script que el botón de enviar sí está correctamente deshabilitado (<code>disabled: true</code>), por lo que no hay ningún riesgo funcional (no se puede enviar nada por error): es únicamente una inconsistencia visual entre el estado real de la pantalla (sin conversación activa) y la apariencia del campo de texto.",
        recomendacion: "Deshabilitar (o mostrar en modo de solo lectura, con un placeholder del tipo “Seleccioná una conversación para escribir”) el campo de texto del chat mientras no haya ninguna conversación seleccionada, en línea con el estado ya correcto del botón de enviar.",
        evidencia: [
          { src: "capturas/caso-08/07-sidebar-chat-composer-habilitado.jpg", caption: "El campo de texto del chat, con apariencia habilitada pese a no haber conversación seleccionada" }
        ],
        verificaciones: [
          {
            viewport: "Tableta (768×1024)",
            resultado: "no-aplica",
            textoHtml: "No replica (variante distinta, no es la misma inconsistencia). En tableta, “Chat” sin conversaciones muestra únicamente el mensaje centrado “No hay conversaciones activas.”, sin lista de conversaciones a la izquierda ni panel de conversación a la derecha, y sin ningún campo de texto visible: al no haber conversación seleccionada, no se renderiza ningún <code>&lt;textarea&gt;</code> en absoluto. Es decir, en tableta el problema puntual de escritorio no está presente, porque directamente no se muestra ningún campo hasta que exista o se seleccione una conversación — un comportamiento distinto (y, en este punto puntual, más correcto) que el de escritorio.",
            evidencia: [
              { src: "capturas/caso-08/t04-chat-sin-textarea-composer.jpg", caption: "Chat en tableta, sin conversaciones: sin campo de texto visible" }
            ]
          },
          {
            viewport: "Móvil (390×844)",
            resultado: "no-aplica",
            textoHtml: "No replica, igual que en tableta — mismo comportamiento (sin campo de texto visible cuando no hay conversación seleccionada).",
            evidencia: [
              { src: "capturas/caso-08/m11-chat-sin-textarea.jpg", caption: "Chat en móvil, sin conversaciones: sin campo de texto visible" }
            ]
          }
        ]
      },
      {
        numero: 8,
        titulo: "En tableta, el Dashboard no muestra la leyenda “Estados de la sesión” que sí está presente en escritorio",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "A revisar",
        clasificacion: "Responsive",
        viewport: "Tableta (Chrome real, ventana 768×1024)",
        descripcionHtml: "En la pasada de escritorio se había registrado como feedback positivo que la leyenda “Estados de la sesión” (Reservada → Realizada → Pendiente de cobro → Pagada, cada una con su color distintivo) queda siempre visible en la parte superior del Dashboard, ayudando a entender de un vistazo el ciclo de vida de una sesión. En tableta (768×1024), esa leyenda no aparece en ningún lugar de la pantalla principal: la cabecera pasa directamente del título “Dashboard” (con el interruptor “Visible”, la campana y el menú “···”) a la sección “Sesiones”, sin ningún rastro de la leyenda de colores. Se revisó la pantalla completa, de arriba a abajo, sin encontrarla reubicada en otro lugar. No se pudo determinar, solo con inspección visual y de DOM básica, si se trata de una decisión de diseño intencional para ahorrar espacio en pantallas más chicas, o de un elemento que debería mostrarse y no se está renderizando por error en este breakpoint.",
        recomendacion: "Confirmar con el equipo de diseño/desarrollo si la ausencia de la leyenda en tableta es intencional. Si lo es, considerar un formato compacto (por ejemplo, un ícono con tooltip, o un enlace “¿Qué significa cada estado?”) para no perder del todo esa información de referencia en pantallas más chicas. Si no es intencional, restituir la leyenda adaptada al ancho de tableta.",
        evidencia: [
          { src: "capturas/caso-08/t16-dashboard-header-completo-sin-leyenda.jpg", caption: "Cabecera completa del Dashboard en tableta, sin la leyenda “Estados de la sesión”" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Replica. Tampoco aparece la leyenda “Estados de la sesión” en el Dashboard de móvil — es consistente con tableta, lo que refuerza la hipótesis de que se trata de una decisión de diseño para viewports angostos (compartida entre tableta y móvil) y no de un error puntual de un solo breakpoint.",
            evidencia: [
              { src: "capturas/caso-08/m01-dashboard-vista-general-sin-leyenda.jpg", caption: "Dashboard en móvil, sin la leyenda" }
            ]
          }
        ]
      },
      {
        numero: 9,
        titulo: "La cabecera superior (campana, menú “···”, interruptor “Visible”) no es fija y deja de estar accesible al hacer scroll, a diferencia de la barra de navegación inferior",
        heuristicaId: "H07",
        heuristicaNombre: "H7 — Flexibilidad y eficiencia de uso",
        severidad: "A revisar",
        clasificacion: "Responsive",
        viewport: "Tableta (Chrome real, ventana 768×1024)",
        descripcionHtml: "En tableta, la navegación principal se resuelve con una barra fija en la parte inferior de la pantalla (Dashboard, Horarios, Pacientes, Chat, Ingresos), que permanece siempre visible y accesible sin importar cuánto se haya scrolleado. La cabecera superior de cada pantalla, en cambio, no tiene ese mismo comportamiento: incluye el título de la sección, el interruptor “Visible”, la campana de notificaciones y el menú “···” (acceso a Reportes, Ajustes de agenda, Perfil, Ajustes e Idioma y moneda), y se desplaza fuera de la vista junto con el resto del contenido al hacer scroll hacia abajo. Esto se comprobó puntualmente en la pantalla “Perfil” (una de las más largas del portal): al bajar hasta la sección “Preferencias avanzadas”, la cabecera ya no es visible, y hace falta volver a subir hasta el principio para poder abrir el menú “···” o revisar las notificaciones. El resultado es una asimetría entre los dos mecanismos de navegación de la pantalla: uno (la barra inferior) siempre accesible, y el otro (la cabecera, con el menú de más opciones) solo accesible desde el principio de cada pantalla.",
        recomendacion: "Evaluar fijar la cabecera (o al menos la campana y el menú “···”) en la parte superior de la pantalla, igual que ya se hace con la barra de navegación inferior, para que las notificaciones y el resto de las opciones del menú “···” estén siempre accesibles sin necesidad de volver a subir hasta el principio de pantallas largas como “Perfil”.",
        evidencia: [
          { src: "capturas/caso-08/t18-perfil-scroll-header-no-accesible.jpg", caption: "Pantalla “Perfil” con scroll hacia abajo: la cabecera ya no está visible, solo la barra de navegación inferior" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Replica, sin variantes. Al bajar en “Perfil” hasta la sección “Vista en matching”, la cabecera ya no está visible y solo queda la barra de navegación inferior. En móvil, donde la pantalla es más angosta, este problema es aún más relevante, ya que hay menos espacio en general y perder el acceso rápido a la campana y al menú “···” se siente más limitante que en tableta o escritorio.",
            evidencia: [
              { src: "capturas/caso-08/m14-perfil-scroll-header-ausente.jpg", caption: "Pantalla “Perfil” con scroll, en móvil: cabecera ausente" }
            ]
          }
        ]
      },
      {
        numero: 10,
        titulo: "El enlace para compartir y recibir opiniones de pacientes, en “Perfil”, no lleva a ningún lugar donde se pueda dejar una opinión",
        heuristicaId: "H01",
        heuristicaNombre: "H1 — Visibilidad del estado del sistema",
        severidad: "Mayor",
        clasificacion: "Usabilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×737); verificado a pedido puntual del Evaluador UX, fuera de la secuencia habitual de pasos.",
        descripcionHtml: "En “Perfil”, el panel “Opiniones de pacientes” dice: “Las opiniones las dejan pacientes con al menos 2 sesiones realizadas en MotivarCare. Compartí este enlace para que puedan calificarte desde el portal paciente.”, junto con un campo de texto con una URL (por ejemplo <code>https://app.motivarcare.com/?dejar-opinion=cmuhkh9zk04h0pa0d5uois1j9</code>, con un identificador propio de la cuenta de prueba) y un botón “Copiar”. El botón “Copiar” en sí funciona correctamente (cambia a “Copiado” y copia el texto al portapapeles). El problema está en el destino: al abrir esa URL completa en una pestaña nueva del portal paciente, la aplicación ignora por completo el parámetro <code>?dejar-opinion=&lt;id&gt;</code> y muestra simplemente el Dashboard genérico del paciente que esté logueado en ese momento — no aparece ningún modal, formulario, pantalla o mensaje relacionado con dejar una opinión o calificación. Se inspeccionó la consola del navegador (sin errores ni mensajes) y el texto completo de la página (sin ninguna mención a “opinión” en ningún lado), lo que descarta que se trate de un mensaje de error visible o de una validación explícita: el parámetro simplemente no es leído ni utilizado por la aplicación en esta URL. El resultado práctico es que un profesional que comparte este enlace con sus pacientes, tal como la propia pantalla lo invita a hacer, les está enviando un enlace que no cumple ninguna función y los deja en su Dashboard habitual sin ninguna explicación. Relacionado también con H5 — Prevención de errores, ya que no hay ninguna validación ni mensaje que informe por qué el paciente no puede calificar.",
        recomendacion: "Implementar del lado del portal paciente la lectura del parámetro <code>dejar-opinion</code> para que, al abrir el enlace, se muestre explícitamente el flujo de calificación/opinión hacia el profesional identificado por ese id, incluyendo un mensaje claro si el paciente logueado no cumple los requisitos (por ejemplo, menos de 2 sesiones realizadas con ese profesional en particular). Como paso intermedio, considerar agregar al menos una validación que informe al paciente por qué no puede calificar, en vez de redirigirlo en silencio a su Dashboard habitual. Dado que se trata de una funcionalidad central para la reputación del profesional en el portal (que además se promociona activamente desde su propio Perfil), se sugiere priorizar este hallazgo.",
        evidencia: [
          { src: "capturas/caso-08/t20-perfil-opiniones-pacientes-link-panel.png", caption: "El panel “Opiniones de pacientes” en Perfil, con el enlace y el botón “Copiar”" },
          { src: "capturas/caso-08/t21-link-opiniones-lleva-a-dashboard-generico.jpg", caption: "El resultado de abrir ese enlace: el Dashboard genérico del portal paciente, sin ningún rastro de una pantalla para dejar una opinión" }
        ],
        verificaciones: [
          {
            viewport: "Móvil (390×844)",
            resultado: "replica",
            textoHtml: "Presente, sin repetir la prueba de navegación. El panel “Opiniones de pacientes” con el enlace y el botón “Copiar” está igual de presente en la versión móvil de “Perfil”. No se repitió la prueba de abrir el enlace en el portal paciente en esta pasada porque el problema ya confirmado (el parámetro “dejar-opinion” no es leído por la aplicación) es de lógica de la aplicación, no de presentación visual, y no depende del viewport desde el que se copia el enlace.",
            evidencia: [
              { src: "capturas/caso-08/m10-perfil-listos-bug-y-panel-opiniones.jpg", caption: "El panel “Opiniones de pacientes”, presente también en móvil" }
            ]
          }
        ]
      },
      {
        numero: 11,
        titulo: "Las pestañas de “Horarios” tienen nombres distintos en móvil que en escritorio y tableta",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "A revisar",
        clasificacion: "Otros",
        viewport: "Móvil (Chrome real, ventana 390×844)",
        descripcionHtml: "En escritorio y en tableta, la pantalla “Horarios” muestra dos pestañas rotuladas “Configurar horarios de trabajo” y “Disponibilidad configurada”. En móvil, la misma pantalla, con el mismo contenido y la misma función en cada pestaña, usa los rótulos “Plantilla” y “Publicados” — nombres completamente distintos para los mismos dos conceptos. Es esperable que el texto se acorte en pantallas chicas por una cuestión de espacio, pero acá no se trata de una versión abreviada del mismo texto, sino de palabras distintas que no comparten ninguna raíz con los rótulos de escritorio/tableta. Alguien que use el portal en varios dispositivos podría no reconocer que se trata de la misma sección.",
        recomendacion: "Unificar el rótulo de estas dos pestañas entre todos los tamaños de pantalla, usando una versión abreviada del mismo texto en vez de palabras distintas (por ejemplo, “Configurar” y “Disponibilidad”, o mantener “Plantilla” y “Publicados” pero también en escritorio y tableta, lo que decida el equipo de contenidos/diseño).",
        evidencia: [
          { src: "capturas/caso-08/m03-horarios-plantilla-sin-volver.jpg", caption: "Pestaña “Plantilla” en móvil, equivalente a “Configurar horarios de trabajo”" },
          { src: "capturas/caso-08/m04-horarios-publicados-con-volver.jpg", caption: "Pestaña “Publicados” en móvil, equivalente a “Disponibilidad configurada”" },
          { src: "capturas/caso-08/t03-horarios-configurar-sin-volver-accento.jpg", caption: "La misma pantalla en tableta, con los rótulos originales, para contrastar" }
        ],
        verificaciones: []
      },
      {
        numero: 12,
        titulo: "Los diálogos modales del portal no atrapan el foco del teclado: al presionar Tab, el foco escapa hacia contenido de fondo mientras el modal sigue abierto",
        heuristicaId: "H07",
        heuristicaNombre: "H7 — Flexibilidad y eficiencia de uso",
        severidad: "Mayor",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×900) — verificación específica de accesibilidad por teclado, a pedido del Evaluador UX; no se evaluó tableta ni móvil en esta pasada.",
        descripcionHtml: "Se verificó el comportamiento de teclado de los modales del Portal del Profesional en tres casos distintos: “Editar identidad profesional” y “Editar datos bancarios” (abiertos desde los botones “Editar” de “Perfil”) e “Idioma y moneda” (abierto desde el menú “···”). Los tres están correctamente marcados en el HTML como <code>&lt;section role=\"dialog\" aria-modal=\"true\"&gt;</code>, lo cual en principio le indica a la tecnología asistiva que el resto de la página debe considerarse inerte mientras el modal está abierto. Sin embargo, en los tres casos, al abrir el modal el foco del teclado no se traslada automáticamente hacia ningún elemento dentro de él (queda en el botón que lo disparó, o en <code>&lt;body&gt;</code> si el modal se abrió desde un menú que ya se había cerrado). Y, más importante: al presionar Tab una sola vez con el modal abierto, el foco se mueve a un elemento de la página de fondo, detrás del modal — se confirmó puntualmente que en “Editar identidad profesional” y en “Editar datos bancarios” el foco pasa al encabezado del acordeón “02 Datos bancarios” (visualmente detrás del velo oscuro del modal), y en “Idioma y moneda” pasa a un botón de la tarjeta “Vista en matching” (la calificación con estrellas). En ambos casos el modal permanece abierto y visible en primer plano mientras el anillo de foco aparece sobre un elemento oculto detrás de él. Esto significa que el modal no cumple la promesa de <code>aria-modal=\"true\"</code>: una persona que navegue solo con teclado puede seguir interactuando con el contenido de fondo (por ejemplo, expandir el acordeón “Datos bancarios” con Enter) sin haber cerrado el modal, y una persona usuaria de lector de pantalla puede terminar en un estado inconsistente entre lo que el modal declara (contenido de fondo inerte) y lo que realmente ocurre (contenido de fondo todavía operable). Para una persona vidente que navega con teclado, el resultado es además muy desorientador: el indicador de foco desaparece visualmente detrás del velo oscuro del modal.",
        recomendacion: "Implementar un focus trap real en el componente de diálogo modal que usa toda la aplicación (dado que se reprodujo en tres modales distintos, es muy probablemente un componente compartido): al abrirse, trasladar el foco al primer elemento interactivo del modal (o al propio contenedor del diálogo); mientras esté abierto, que Tab y Shift+Tab solo recorran los elementos dentro del modal, volviendo al primero al llegar al final y viceversa; y, al cerrarse, devolver el foco al elemento que lo abrió (ver también el Hallazgo 15, sobre el mismo problema de retorno de foco en el menú “···”). Priorizar esta corrección dado que afecta a todos los modales de edición del portal (al menos 8 solo en “Perfil”) y no a un caso aislado.",
        evidencia: [
          { src: "capturas/caso-08/a01-modal-editar-perfil-foco-escapa-a-fondo.jpg", caption: "Modal “Editar identidad profesional” abierto; tras un solo Tab, el anillo de foco aparece sobre “02 Datos bancarios”, detrás del velo del modal" }
        ],
        verificaciones: []
      },
      {
        numero: 13,
        titulo: "El modal “Idioma y moneda” no se cierra con la tecla Escape",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×900) — verificación específica de accesibilidad por teclado, a pedido del Evaluador UX; no se evaluó tableta ni móvil en esta pasada.",
        descripcionHtml: "A diferencia de los modales “Editar…” de la pantalla “Perfil” (que sí se cierran al presionar Escape), el modal “Idioma y moneda” permanece abierto al presionar Escape — se verificó por script que el elemento <code>[role=\"dialog\"]</code> sigue presente en el DOM después de la tecla. Este modal, además, contiene una lista larga de más de 15 monedas presentadas como botones individuales en orden secuencial (sin agrupación tipo listbox ni atajo de teclado), por lo que una persona navegando solo con teclado que quiera cerrar el modal sin elegir nada debe presionar Tab muchas veces hasta llegar al botón “×”, en lugar de poder cerrarlo con una sola tecla como es el estándar esperado para cualquier diálogo modal.",
        recomendacion: "Agregar el cierre con Escape a este modal, en línea con el resto de los modales del portal que sí lo implementan. De forma opcional, evaluar agrupar la lista de monedas con el patrón ARIA listbox/radiogroup y navegación por flechas, para que no haga falta recorrer con Tab, uno por uno, hasta 15 o más opciones.",
        evidencia: [
          { src: "capturas/caso-08/a02-modal-idioma-moneda-no-cierra-con-escape.jpg", caption: "El modal “Idioma y moneda”, todavía abierto después de presionar Escape" }
        ],
        verificaciones: []
      },
      {
        numero: 14,
        titulo: "La barra de navegación lateral no revela las etiquetas de texto al recibir el foco por teclado, solo al pasar el mouse",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares (principio “Contenido en hover o foco”, WCAG 1.4.13)",
        severidad: "A revisar",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×900) — verificación específica de accesibilidad por teclado, a pedido del Evaluador UX; no se evaluó tableta ni móvil en esta pasada.",
        descripcionHtml: "La barra de navegación lateral izquierda está colapsada por defecto, mostrando solo íconos; al pasar el mouse por encima, se expande y muestra la etiqueta de texto de cada sección (Dashboard, Horarios, Pacientes, Chat, Ingresos), tal como ya se había documentado como feedback positivo en la pasada de escritorio original. Al recorrer la misma barra con teclado (Tab), el anillo de foco aparece correctamente sobre cada ícono — son enlaces reales, alcanzables y con el texto igual de presente en el DOM (accesible para lectores de pantalla) — pero la barra no se expande para revelar la etiqueta de texto cuando el ícono recibe el foco, a diferencia de lo que ocurre con el mouse. El resultado es que una persona que navegue con teclado y pueda ver la pantalla (por ejemplo, alguien con una limitación motriz que no usa mouse pero sí ve el contenido) no tiene forma de saber a qué sección corresponde cada ícono sin adivinar por su forma, mientras que con mouse esa misma información aparece de inmediato.",
        recomendacion: "Hacer que la barra lateral se expanda también al recibir el foco por teclado (por ejemplo, escuchando el evento <code>:focus-within</code> además de <code>:hover</code> en CSS), para que el contenido revelado por hover se revele también por foco, en línea con el criterio de éxito 1.4.13 de las WCAG. Confirmar con el equipo de desarrollo/diseño la severidad definitiva de este hallazgo.",
        evidencia: [
          { src: "capturas/caso-08/a03-sidebar-foco-teclado-sin-etiqueta-zoom.png", caption: "Zoom de la barra lateral con el ícono “Ingresos” enfocado por teclado: se ve el anillo de foco, pero no la etiqueta de texto" }
        ],
        verificaciones: []
      },
      {
        numero: 15,
        titulo: "El menú “···” no devuelve el foco al botón que lo abrió al cerrarse, y la campana de notificaciones queda visualmente abierta aunque el foco se mueva a otro lado",
        heuristicaId: "H04",
        heuristicaNombre: "H4 — Consistencia y estándares",
        severidad: "Recomendación",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×900) — verificación específica de accesibilidad por teclado, a pedido del Evaluador UX; no se evaluó tableta ni móvil en esta pasada.",
        descripcionHtml: "Al abrir el menú “···” con Enter, Tab traslada correctamente el foco hacia el primer elemento del menú (“Reportes”), y Escape lo cierra correctamente. Sin embargo, una vez cerrado con Escape, el foco no vuelve al botón “···” que lo había abierto, sino que queda en <code>&lt;body&gt;</code>, obligando a la persona a retomar la navegación desde el principio de la página en vez de continuar desde donde estaba. Se observó un problema relacionado, aunque distinto, en la campana de notificaciones: su contenido (“Sin novedades por ahora.”) permanece visible en pantalla aun cuando el foco del teclado se traslada hacia otro elemento de la página; sí se cierra correctamente al presionar Escape estando enfocado dentro de él.",
        recomendacion: "Al cerrar el menú “···” (con Escape o al seleccionar una opción), devolver el foco al botón “···” que lo abrió. Revisar el comportamiento del popover de notificaciones para que se comporte de forma consistente con el resto de los overlays de la aplicación (por ejemplo, cerrándose también al mover el foco fuera de él, no solo con Escape).",
        evidencia: [

        ],
        verificaciones: []
      },
      {
        numero: 16,
        titulo: "Las pestañas “Próximas sesiones” / “Marcar realizadas” no implementan completamente el patrón ARIA de pestañas",
        heuristicaId: "H07",
        heuristicaNombre: "H7 — Flexibilidad y eficiencia de uso (patrón WAI-ARIA de pestañas)",
        severidad: "A revisar",
        clasificacion: "Accesibilidad",
        viewport: "Escritorio (Chrome real, ventana ~1568×900) — verificación específica de accesibilidad por teclado, a pedido del Evaluador UX; no se evaluó tableta ni móvil en esta pasada.",
        descripcionHtml: "Las dos pestañas del bloque “Sesiones” en el Dashboard (“Próximas sesiones” y “Marcar realizadas”) usan correctamente los atributos <code>role=\"tab\"</code> y <code>aria-selected</code> en cada botón. Sin embargo, se verificó por script que ningún elemento ancestro de ambas pestañas tiene <code>role=\"tablist\"</code> (se revisaron tres niveles de contenedores hacia arriba sin encontrarlo), y que, con una de las pestañas enfocada, la flecha derecha del teclado no cambia a la otra pestaña — no hay implementado un <code>tabindex</code> dinámico (roving tabindex) ni navegación por flechas, que es el patrón esperado para un grupo de pestañas según las WAI-ARIA Authoring Practices. En la práctica, ambas pestañas siguen siendo perfectamente alcanzables y operables con Tab y Enter/Espacio de forma individual, por lo que no se trata de un bloqueo funcional, sino de una implementación incompleta del patrón ARIA de pestañas, que podría confundir a personas usuarias de lectores de pantalla que esperan poder moverse entre pestañas con las flechas una vez que entran al grupo.",
        recomendacion: "Envolver ambos botones de pestaña en un contenedor con <code>role=\"tablist\"</code>, e implementar la navegación por flechas (izquierda/derecha) con <code>tabindex=\"0\"</code> solo en la pestaña activa y <code>tabindex=\"-1\"</code> en las demás, siguiendo el patrón estándar de pestañas de las WAI-ARIA Authoring Practices. Confirmar con el equipo de desarrollo la severidad definitiva de este hallazgo.",
        evidencia: [

        ],
        verificaciones: []
      }
    ]
  }
];
