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
  healthScoreGlobal: 62,
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
    findingsCount: { mayor: 1, menor: 4, recomendacion: 1 }
  },
  {
    id: "patient",
    name: "Experiencia del Paciente",
    url: "https://app.motivarcare.com/",
    badge: "Conversión & Retención",
    description: "Flujo integral del usuario desde el triaje o búsqueda de terapeuta, selección de horario, pasarela de pago, hasta la sala de espera virtual y la realización de la videoconsulta.",
    score: 59,
    status: "Revisión Prioritaria",
    findingsCount: { mayor: 3, menor: 1, recomendacion: 3 }
  },
  {
    id: "professional",
    name: "Portal del Profesional",
    url: "https://pro.motivarcare.com/",
    badge: "Operación & Eficiencia",
    description: "Entorno de gestión para los psicólogos: validación de matrícula/colegiatura, configuración de horarios y zonas horarias, historial de pacientes y sala de consulta clínica.",
    score: 64,
    status: "Pendiente de auditoría",
    findingsCount: { mayor: 0, menor: 0, recomendacion: 0 }
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
 * Severidades reales usadas en todo el proyecto: "Mayor", "Menor",
 * "Recomendación" (no existe una categoría "Crítico" en la metodología).
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
        severidad: "Menor",
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
        severidad: "Mayor",
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
        severidad: "Recomendación",
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
  }
];
