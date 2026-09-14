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

export const auditAreas = [
  {
    id: "landing",
    name: "Landing Page Pública",
    url: "https://www.motivarcare.com/",
    badge: "Adquisición & Confianza",
    description: "Primer pliegue de contacto con el paciente potencial. Evalúa la claridad de la propuesta de valor, la credibilidad médica inicial, la transparencia de costos y el llamado a la acción (CTA) para iniciar terapia.",
    score: 68,
    status: "Revisión Prioritaria",
    findingsCount: { critical: 1, major: 2, minor: 2 }
  },
  {
    id: "patient",
    name: "Experiencia del Paciente",
    url: "https://app.motivarcare.com/",
    badge: "Conversión & Retención",
    description: "Flujo integral del usuario desde el triaje o búsqueda de terapeuta, selección de horario, pasarela de pago, hasta la sala de espera virtual y la realización de la videoconsulta.",
    score: 59,
    status: "Acción Requerida",
    findingsCount: { critical: 2, major: 3, minor: 1 }
  },
  {
    id: "professional",
    name: "Portal del Profesional",
    url: "https://pro.motivarcare.com/",
    badge: "Operación & Eficiencia",
    description: "Entorno de gestión para los psicólogos: validación de matrícula/colegiatura, configuración de horarios y zonas horarias, historial de pacientes y sala de consulta clínica.",
    score: 64,
    status: "Estable con Mejoras",
    findingsCount: { critical: 0, major: 2, minor: 3 }
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

export const auditFindings = [
  {
    id: "MC-01",
    areaId: "landing",
    areaName: "Landing Page",
    heuristicId: "H06",
    heuristicName: "H6. Reconocimiento antes que recuerdo",
    severity: "critical",
    title: "Ausencia de sellos deontológicos y número de matrícula profesional visible en el primer pliegue",
    description: "La propuesta promete 'Terapia en línea, sin esperas', pero en el viewport inicial no se evidencia certificación de colegiación médica, aval ético ni sellos de confidencialidad de datos de salud.",
    businessImpact: "Eleva la tasa de rebote preventivo al generar desconfianza inmediata en usuarios que contratan terapia online por primera vez.",
    emotionalImpact: "El paciente duda de la legitimidad de los terapeutas y teme por la privacidad de su historial clínico.",
    recommendation: "Incorporar en el hero una franja de confianza institucional: '100% Psicólogos con matrícula verificada', iconos de seguridad médica y enlace a la política de secreto profesional.",
    effort: "Bajo (Quick Win)",
    roi: "Alto (+15% a +25% en clics al selector de terapeuta)"
  },
  {
    id: "MC-02",
    areaId: "landing",
    areaName: "Landing Page",
    heuristicId: "H06",
    heuristicName: "H6. Reconocimiento antes que recuerdo",
    severity: "major",
    title: "Falta de visualización transparente del rango de tarifas por sesión antes del registro",
    description: "El usuario debe avanzar hacia el flujo de la aplicación para conocer el valor monetario de una sesión, sin saber de antemano la moneda local o los métodos de pago aceptados.",
    businessImpact: "Abandono masivo en el primer formulario cuando el usuario descubre un precio no alineado a su presupuesto.",
    emotionalImpact: "Sensación de engaño o de pérdida de tiempo en una situación de necesidad psicológica.",
    recommendation: "Añadir una sección compacta de 'Tarifas Claras y Flexibles' en la landing indicando precio base por consulta y opciones de pack sin suscripciones forzadas.",
    effort: "Bajo (Quick Win)",
    roi: "Medio-Alto (Reduce tráfico no cualificado y aumenta conversión neta)"
  },
  {
    id: "MC-03",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    heuristicId: "H05",
    heuristicName: "H5. Prevención de errores",
    severity: "critical",
    title: "Ambigüedad en la sincronización de zonas horarias al agendar una cita transfronteriza",
    description: "Al seleccionar un turno con un profesional radicado en otro país de LATAM, la interfaz no recalca explícitamente si la hora mostrada corresponde al huso horario del paciente o del terapeuta.",
    businessImpact: "Incremento drástico de citas perdidas ('no-shows'), reprocesos de soporte y solicitudes de devolución de dinero.",
    emotionalImpact: "Desesperación del paciente al conectarse a una sesión vacía o recibir recordatorios en horarios desfasados.",
    recommendation: "Detectar automáticamente la zona horaria del navegador del paciente y mostrar con etiqueta destacada: 'Hora local en [Tu Ciudad]: 16:00 hs (GMT-3)'. Confirmar en el modal de reserva.",
    effort: "Medio (Frontend/Backend sync)",
    roi: "Crítico (Elimina cancelaciones no intencionales)"
  },
  {
    id: "MC-04",
    areaId: "patient",
    areaName: "Experiencia del Paciente",
    heuristicId: "H07",
    heuristicName: "H7. Flexibilidad y eficiencia de uso",
    severity: "major",
    title: "Sobrecarga de opciones en el catálogo de psicólogos sin triaje guiado",
    description: "El paciente es confrontado con una cuadrícula homogénea de más de 20 profesionales sin un filtro inicial que oriente según síntoma predominante (ej. ansiedad, duelo, pareja, insomnio).",
    businessImpact: "Parálisis por análisis que posterga la decisión de agendar la primera consulta.",
    emotionalImpact: "El usuario se siente abrumado al tener que leer biografías académicas densas para decidir quién puede ayudarle.",
    recommendation: "Implementar un asistente de matching empático en 3 preguntas cortas que sugiera los 3 perfiles más afines a la necesidad manifestada.",
    effort: "Medio (1 Sprint)",
    roi: "Muy Alto (+30% en conversión de búsqueda a reserva)"
  },
  {
    id: "MC-05",
    areaId: "professional",
    areaName: "Portal del Profesional",
    heuristicId: "H01",
    heuristicName: "H1. Visibilidad del estado del sistema",
    severity: "major",
    title: "Falta de notificación visual en tiempo real cuando el paciente ingresa a la sala de espera",
    description: "El terapeuta debe recargar manualmente o mantener la pestaña activa sin un indicador acústico o visual perimetral claro que avise que el paciente ya está esperando en la antesala virtual.",
    businessImpact: "Retrasos de 3 a 7 minutos en el inicio de la consulta, deteriorando la percepción de puntualidad y calidad del servicio.",
    emotionalImpact: "Estrés tanto para el profesional como para el paciente que espera frente a una pantalla negra.",
    recommendation: "Incorporar timbre sutil y notificación de escritorio en el navegador con cambio de estado visual del paciente a 'En sala de espera'.",
    effort: "Bajo-Medio (WebSockets / Push Notification)",
    roi: "Mejora directa de NPS del servicio y retención"
  },
  {
    id: "MC-06",
    areaId: "professional",
    areaName: "Portal del Profesional",
    heuristicId: "H03",
    heuristicName: "H3. Control y libertad del usuario",
    severity: "minor",
    title: "Dificultad para bloquear bloques de indisponibilidad imprevista en el calendario",
    description: "El psicólogo tiene que desmarcar franja por franja si surge una emergencia personal, sin opción de 'Bloquear día completo' con notificación automatizada de reprogramación.",
    businessImpact: "Riesgo de que un paciente reserve un turno en un horario que el terapeuta no podrá atender.",
    emotionalImpact: "Fricción operativa y desgaste administrativo en el profesional.",
    recommendation: "Agregar acción rápida de 'Bloqueo de Emergencia' con un clic y sugerencia guiada de turnos alternativos a pacientes afectados.",
    effort: "Bajo",
    roi: "Optimización del tiempo clínico de los profesionales"
  }
];
