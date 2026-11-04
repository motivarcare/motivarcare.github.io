---
titulo: App del usuario
numero: "06"
estado: en-curso
resumen: "Migración de la app actual del portal del paciente a un nuevo portal para pacientes (usuarios), con el nuevo design system y los lineamientos de la landing page: diseño y desarrollo."
actualizado: 2026-11-04
proximos_pasos:
  - "Relevar las pantallas y funciones de la app actual del paciente, y el estado de su API."
  - "Decidir con el equipo el camino de la migración (sección \"Cómo migrar\")."
  - "Revisar el punto de partida (Inicio en tres momentos, pago de la reserva y las dos variantes de mensajería)."
  - "Elegir qué familias de la propuesta se desarrollan primero y armar sus mockups."
  - "Definir con el equipo: paquetes que se ofrecen, cómo se elige al profesional y si se mantiene el chat con el profesional."
  - "Sumar al design system los componentes nuevos de la app (navegación, tarjeta de sesión, opciones de pago, pasos, escala de ánimo)."
iniciativas:
  - titulo: Punto de partida del portal del paciente
    tipo: Mockup
    fecha: Noviembre 2026
    estado: en-revision
    descripcion: "Pantallas en escritorio y teléfono con el design system: el Inicio en tres momentos (usuario nuevo, con profesional pero sin sesiones, y con la sesión por empezar), el paso de pago de la reserva y dos variantes para la mensajería con el profesional."
    imagen: /img/app-usuario/mockup-inicio.jpg
    enlace: /app-usuario/index.html
    boton: Ver el mockup
  - titulo: Propuesta por familias
    tipo: Mockups
    fecha: Noviembre 2026
    estado: sin-iniciar
    descripcion: "Cuatro familias de propuestas para el Inicio y los flujos principales, cada una con un eje distinto de la experiencia: la sesión, el profesional, la conversación y el acompañamiento entre sesiones."
    imagen: /img/app-usuario/propuesta-familias.jpg
    enlace: /app-usuario/propuesta/
    boton: Ver las familias
---

# 06 · App del usuario

Diseño y desarrollo del nuevo portal para pacientes (usuarios). El punto de partida es **migrar la app actual del portal del paciente** ([app.motivarcare.com](https://app.motivarcare.com/)) al nuevo portal. Incluye flujos, wireframes, pantallas, prototipos e implementación.

## Por qué migrar

La app actual funciona, pero lo que encontró la auditoría UX (`05-auditoria`) no se resuelve con ajustes sueltos. Hay cinco razones para migrar:

1. **Los problemas son de estructura, no de detalle.** La auditoría registró dos Home distintas y un selector "Inicio ML" (caso 03, H1), menús que cambian según el tamaño de pantalla (caso 03), etiquetas que solo aparecen al pasar el mouse (caso 03, H14) y un mismo botón "Reservar" en tres colores (caso 03, H21 y H22). Son decisiones de arquitectura de la información y de navegación: corregirlas pantalla por pantalla deja el problema de fondo.
2. **Hay fallas que afectan la confianza.** Los más graves tocan el dinero y la privacidad: un monto cobrado distinto del mostrado (caso 04, H1), un "Comprar" que lleva directo al paquete más caro (caso 04, H11), un profesional asignado sin que la persona lo elija (caso 04, H12) y un diario con la privacidad preseleccionada en "compartida" (caso 05, H1). En salud mental, la confianza es la condición para que alguien empiece y siga un tratamiento.
3. **La app no tiene un sistema detrás.** Las pantallas se hicieron íntegramente con IA y sin un design system, así que cada una resolvió los colores, los botones y los textos a su manera. La interfaz actual usa otra identidad (violeta `#5F44EB`, Inter y Plus Jakarta Sans), distinta de la que se definió para MotivarCare.
4. **La marca ya cambió en otros frentes.** El design system (`04-design-system`) y la propuesta de landing (`08-landing-page`) definen una identidad nueva. Si la app no la adopta, la persona pasa de una landing cálida y en voseo a una app con otra paleta, otros textos y otro trato.
5. **Es la base para el portal del profesional.** El portal del profesional (`07-app-profesional`) se va a migrar con el mismo sistema. Lo que se defina acá (navegación, tarjetas de sesión, agenda, pagos) se reutiliza allá.

## Cómo migrar

### Tres caminos posibles

| | **A · Migración directa** | **B · Reimplementación del frontend** | **C · Reimplementación completa** |
|---|---|---|---|
| **Qué es** | Se mantiene la app actual (React, servida desde Railway) y se le aplica el design system pantalla por pantalla: colores, tipografías, componentes y textos. | Se construye un frontend nuevo sobre la API y los datos actuales. Las pantallas y los flujos se rediseñan, y el backend se mantiene. | Se rehace todo: el frontend, la API y el modelo de datos. |
| **Ventajas** | Es lo más rápido para cambiar el aspecto. Tiene menos riesgo técnico y no toca los datos ni los pagos. | Permite corregir la estructura (navegación, flujos y estados) y usar el design system desde el origen. Los datos, los pagos y las cuentas siguen donde están. Se puede hacer por partes. | Es libertad total. Permite corregir reglas de negocio que hoy están en el backend (por ejemplo, cómo se asignan los profesionales o cómo se cobran los paquetes). |
| **Desventajas** | Hereda los problemas de estructura que marcó la auditoría. El resultado tiene la cara nueva y la lógica vieja. Es probable que cada pantalla necesite más trabajo del previsto, porque el código no se pensó con componentes compartidos. | Requiere conocer bien la API actual y lo que ya hace. Si la API tiene huecos, hay que completarlos. Durante un tiempo conviven dos frontends. | Es el camino más largo, caro y riesgoso: implica migrar datos de pacientes, historiales y pagos. Durante el desarrollo, la app actual sigue con sus problemas. |
| **Cuándo conviene** | Si el objetivo inmediato es solo unificar la marca. | Si la API actual es razonable y el problema está en la experiencia. | Si el backend tiene problemas graves que impiden las reglas del producto. |

### Recomendación preliminar

**Camino B, por partes.** Por lo que vimos en la auditoría, los problemas principales están en la experiencia (navegación, flujos, textos y estados) y en algunas reglas que se ven en la interfaz, más que en la infraestructura. Un frontend nuevo permite construir con el design system desde el principio, sin pagar el costo de rehacer datos y pagos.

La migración se haría por flujos, en el orden en que la auditoría marcó mayor riesgo para la persona:

1. **Reserva y pago**, porque toca la confianza y el dinero (caso 04).
2. **Inicio y navegación**, porque son la estructura de todo lo demás (caso 03).
3. **Diario y bienestar**, por la privacidad (caso 05).
4. **Cuenta y datos personales** (caso 06).
5. **Registro e ingreso** (caso 02).

Esta recomendación es provisoria: depende de lo que muestre el relevamiento de la API. Si el relevamiento encuentra que reglas como "nada se paga sin un profesional definido" no se pueden cumplir con el backend actual, hay que revisar el camino.

### Lo que falta saber para decidir

- Qué pantallas y funciones tiene hoy la app, y cuáles se usan.
- Qué hace la API actual, cómo está documentada y quién la mantiene.
- Con qué servicios se integra para el pago, la videollamada, los correos y las notificaciones.
- Cómo se manejan hoy los paquetes, las asignaciones de profesional y los cambios.
- Si hay plazos o restricciones del negocio, como una fecha de lanzamiento o campañas.

### El papel del design system

El design system (`04-design-system`) es la **fuente única** de las decisiones visuales y de los componentes. En la migración cumple tres funciones:

1. **Define antes de construir.** Si la app necesita un componente que el design system todavía no tiene (navegación, tarjeta de sesión, opciones de pago, pasos, escala de ánimo), se define ahí primero y después se usa en la app. Así el portal del profesional y la landing lo reciben igual.
2. **Se traduce a código.** Los tokens (color, tipografía, radios, sombras y movimiento) se publican en un archivo reutilizable (CSS y JSON) que usa el frontend nuevo. La propuesta de landing (`web/public/landing/`) es el ejemplo concreto de cómo se aplican.
3. **Lleva los principios.** "Calma antes que estímulo", "lo humano primero" y "sólido es lo que existe; punteado es lo provisorio" se aplican a cada pantalla, no solo a los colores.

### Lineamientos que se mantienen en toda la migración

- **Criterios de la landing** (`08-landing-page/README.md`, sección "Criterios"), aplicados a la app:
  1. **Credibilidad antes que promesa:** datos verificables del servicio (matrícula verificada, duración de las sesiones, precios claros, sin suscripción) en lugar de afirmaciones que no se pueden respaldar.
  2. **Hablarle a quien busca ayuda, no a "un usuario":** textos que invitan y no asustan, sin lenguaje interno o técnico.
  3. **Lo humano primero; la IA, en su lugar:** Maca se presenta como apoyo, con un límite claro respecto de la terapia ("sólido = humano; punteado = IA").
  4. **Seguridad sin alarmar:** la información sobre crisis está siempre a mano, sin dominar la experiencia. Dentro de la app puede tener más presencia que en la landing.
  5. **Un solo tratamiento: voseo** rioplatense amable ("Reservá", "Contanos").
  6. **Calma visual:** fondo crema, un solo acento amarillo por bloque, pocas animaciones, nada de emojis, y estado final sin animaciones con "reducir movimiento".
- **Regla de producto: nada se paga sin un profesional definido.** Las sesiones y los paquetes siempre están vinculados a un profesional. El portal nunca debe dar la sensación de vender paquetes por sí solos: en todo flujo de compra, la persona tiene que ver con claridad a qué profesional le está pagando antes de pagar. Por eso no hay botones de "Comprar sesiones" o "Ver paquetes" sueltos, cada opción de pago nombra al profesional ("4 sesiones con Valeria"), el resumen dice "Reservás y pagás con" y las sesiones disponibles se muestran siempre junto al nombre del profesional.
- **Cambio de profesional: solo a pedido, lo hace el backoffice.** La persona no puede cambiar de profesional por su cuenta: lo pide desde el portal y el equipo de MotivarCare hace el cambio. Las sesiones que le queden de un paquete no se pueden usar con otro profesional ni transferir, así que el pedido tiene que avisarlo con claridad antes de enviarse, con el saldo que se pierde. Los textos del portal dicen "Pedir un cambio de profesional", nunca "Cambiar de profesional".
- **Hallazgos de la auditoría:** los casos de la app del paciente (`05-auditoria/bitacora-auditoria-ux/`, casos 02 a 06 y 10) son la lista de lo que el portal nuevo tiene que resolver.

## Qué hacen otras plataformas

Antes de armar la propuesta, revisamos cómo resuelven la pantalla principal del paciente cuatro plataformas de terapia online: qué muestran, alrededor de qué organizan la experiencia, cuántos componentes usan y cómo hablan. Cada una tiene su análisis completo, con capturas y una comparación con nuestro mockup.

| Plataforma | Mercado y modelo | Eje de la pantalla principal | Fortalezas | Debilidades | Análisis |
|---|---|---|---|---|---|
| **BetterHelp** | EE. UU. y otros países · suscripción semanal | **La conversación con el terapeuta** (la pestaña "Therapy" es el chat) | Pocos componentes. Un aviso de sesión con un único botón. Tono cálido que acompaña ("Find a comfy seat and settle in"). Diario privado por defecto. Siempre ofrece una salida ("Request another time slot"). | No tiene una Home que resuma. La información del sistema se pierde entre los mensajes. Muchas notificaciones, y recordatorios por SMS que dicen "therapy". | [Ver el análisis](/06-app-usuario/investigacion/res-betterhelp/) |
| **Mindly** | Europa del Este y Latinoamérica · sesión suelta o planes desde 4 sesiones, en dólares o euros | **La agenda** ("Mis sesiones") | Es el competidor más directo. Une el pedido de la persona con el profesional ("Encaja con tu solicitud"). Agrupa los horarios por franja y aclara la zona horaria. Permite la reserva semanal o única. Manda tres recordatorios. | Pone el estado de la suscripción primero. No saluda ni acompaña. Usa recursos de presión comercial ("Súper especialista", "5 sesiones reservadas en 3 días"). No tiene herramientas entre sesiones. | [Ver el análisis](/06-app-usuario/investigacion/res-mindlyspace/) |
| **Clearly** | España, Reino Unido e Irlanda · cada profesional define su precio | **Los terapeutas** ("Mis terapeutas", una tarjeta por cada uno) | La tarjeta reúne a la persona, los datos para confiar y la próxima sesión. Propone la siguiente reserva. La ayuda humana tiene nombre y está siempre a mano. Pregunta el presupuesto en el cuestionario. | Mezcla usted y tú. Repite el precio en el Inicio. Reseñas con quejas por cobros poco claros. La videollamada es externa (Google Meet). | [Ver el análisis](/06-app-usuario/investigacion/res-clearly/) |
| **Talkspace** | EE. UU. · seguro médico o suscripción | **El equipo de apoyo** (una Home con saludo, profesionales y recursos) | Es el más parecido a nuestro Inicio. Saluda ("We're so glad you're here"). Profesional y sesión en la misma tarjeta. Preguntas para preparar la sesión. Tono que normaliza lo clínico. Plan B técnico en la videollamada. | Ofrece sumar servicios desde el Inicio (aunque con buen tono). El contenido del destino "Journey" no queda claro a simple vista. Solo funciona en EE. UU. | [Ver el análisis](/06-app-usuario/investigacion/res-talkspace/) |

**Lo que se repite en las cuatro:** la sesión que está por empezar va arriba, con un solo botón fuerte. La zona horaria se aclara siempre. La navegación tiene cuatro o cinco destinos, con texto visible. Ninguna, salvo Talkspace, saluda ni acompaña entre sesiones desde la pantalla principal, y ahí está la oportunidad de MotivarCare.

**Lo que cambia es el eje.** Cada plataforma organiza la experiencia alrededor de algo distinto: la sesión (Mindly), el profesional (Clearly y Talkspace), la conversación (BetterHelp) o el proceso entre sesiones (Talkspace con "Journey" y BetterHelp con "Wellness"). Esos cuatro ejes dan origen a las familias de la propuesta.

## Propuesta (versión preliminar)

### Punto de partida

El primer mockup (noviembre de 2026) ya está armado y sirve de base para todas las familias. Muestra el Inicio en tres momentos (usuario nuevo, con profesional y sin sesiones, y con la sesión por empezar), el paso de pago de la reserva y dos variantes para la mensajería con el profesional.

- **Dónde está:** el HTML está en `web/public/app-usuario/index.html` y se ve en el portal en [/app-usuario/index.html](/app-usuario/index.html). Las capturas están en `mockups/`.
- **Tamaños:** escritorio de 1440 × 1024 y teléfono de 390 × 844, los marcos estándar de Figma.
- **Datos:** los profesionales, los precios y las fechas son ficticios, los mismos que usa la propuesta de landing.

### Cuatro familias

Cada familia toma uno de los ejes que encontramos en la investigación y lo lleva al Inicio, a la navegación y a los flujos principales. No son productos distintos: todas usan el mismo design system, cumplen las mismas reglas de producto y resuelven los mismos hallazgos de la auditoría. Lo que cambia es **qué se pone en primer plano**. Sirven para comparar enfoques con el equipo antes de elegir uno o combinarlos.

| Familia | Eje | Pregunta que responde el Inicio | Inspiración | Base en el punto de partida | Mockups |
|---|---|---|---|---|---|
| **1 · La sesión, en su momento** | La sesión: antes, durante y después | "¿Qué tengo que hacer ahora?" | Mindly (agenda), BetterHelp (aviso de sesión) y Talkspace (sala de espera) | El Inicio en tres momentos | [Ver la familia](/app-usuario/propuesta/sesion/) |
| **2 · Tu profesional, en el centro** | La persona que te atiende | "¿Con quién estoy haciendo terapia?" | Clearly (mis terapeutas) y Talkspace (equipo de apoyo) | La variante A: "Mi profesional" | [Ver la familia](/app-usuario/propuesta/profesional/) |
| **3 · La conversación como hilo** | El intercambio con el profesional entre sesiones | "¿Qué me dijo y qué le quiero contar?" | BetterHelp (la pestaña "Therapy") | La variante B: "Mensajes" en el centro | [Ver la familia](/app-usuario/propuesta/conversacion/) |
| **4 · Acompañamiento entre sesiones** | El proceso de la persona: ánimo, diario y avances | "¿Cómo vengo y cómo me preparo?" | Talkspace ("Journey" y las preguntas antes de la sesión) y BetterHelp ("Wellness") | La escala de ánimo y el diario privado del Inicio | [Ver la familia](/app-usuario/propuesta/acompanamiento/) |

**Familia 1 · La sesión, en su momento.** El Inicio cambia según dónde esté la persona respecto de su próxima sesión: falta mucho, falta poco, está por empezar o acaba de terminar. Antes de la sesión prepara (probar la cámara, un consejo para encontrar un lugar tranquilo). Durante la espera ofrece un plan B técnico. Después propone la siguiente reserva con el mismo profesional. Incluye la agenda con horarios agrupados por franja, la reserva semanal o única y los recordatorios discretos.

**Familia 2 · Tu profesional, en el centro.** La tarjeta del profesional es la pieza principal: foto, nombre, matrícula verificada, enfoque y, adentro, la próxima sesión y las sesiones disponibles con esa persona. Explica por qué se eligió a ese profesional ("Encaja con lo que contaste") y deja a mano el pedido de cambio, que hace el equipo de MotivarCare. Está preparada para el caso de un paciente con más de un servicio (por ejemplo, terapia individual y de pareja).

**Familia 3 · La conversación como hilo.** La conversación con el profesional es el centro del producto: el último mensaje en el Inicio, un destino "Mensajes" propio y, dentro del hilo, las sesiones, los ejercicios y las entradas del diario compartidas. Los avisos del sistema viven en la conversación, con su hora. Se cuida el límite: "Este chat no es para urgencias", las líneas de apoyo a mano y Maca fuera de esta pantalla. Solo tiene sentido si el equipo decide mantener el chat.

**Familia 4 · Acompañamiento entre sesiones.** El Inicio pone en primer plano el proceso: el ánimo de hoy, la evolución de la semana, preguntas para llevar a la próxima sesión ("¿Qué te gustaría contarle hoy a Valeria?") y ejercicios cortos. Une el Diario y Bienestar en un solo destino, como hace Talkspace con "Journey". Todo es privado por defecto y se comparte con el profesional por decisión explícita. Maca acompaña con su borde punteado, sin reemplazar al profesional.

### Flujos comunes a todas las familias

Algunos flujos no dependen del eje y se diseñan una sola vez:

- **Primeros pasos:** el cuestionario (con una pregunta de presupuesto en rangos), los profesionales sugeridos con su compatibilidad y la primera reserva.
- **Reserva y pago:** el recorrido de cuatro pasos del punto de partida, con el monto exacto y el profesional nombrado en cada opción.
- **Pedido de cambio de profesional:** con un motivo para elegir y el aviso del saldo que se pierde.
- **Líneas de apoyo y Maca:** siempre en el mismo lugar.

### Decisiones del punto de partida

Estas decisiones valen para todas las familias:

| Decisión | Qué resuelve de la auditoría (`05-auditoria`) |
|---|---|
| Una sola navegación de cinco destinos, con los mismos nombres en escritorio y teléfono, y con texto siempre visible | Dos Home y el selector "Inicio ML" (caso 03, H1); menús distintos según el tamaño (caso 03, "Más" / "Explorar"); etiquetas que solo aparecen con el mouse (caso 03, H14) |
| El Inicio muestra el próximo paso según el momento de la persona, con un solo botón amarillo | Carrusel que avanza solo (caso 03, H6); accesos rápidos duplicados (caso 03, H9 y H18); "Reservar" en tres colores (caso 03, H21 y H22; caso 04, H7) |
| "Cuenta" queda como botón de contorno junto a las notificaciones | "Cuenta" con el mismo estilo que el botón principal (caso 03, H21) |
| Maca va abajo a la derecha, como en la landing y como cualquier chat: píldora "Hablar con Maca" en escritorio y círculo sobre la barra inferior en el teléfono, siempre con borde punteado. El contenido deja libre esa esquina, y Maca no aparece en la reserva ni durante la videollamada | El tour con Maca inalcanzable en tablet y teléfono (caso 03, H17); "lo humano primero; la IA, en su lugar" |
| Las líneas de apoyo están siempre a mano en la barra lateral, sin alarmar | Página de líneas de apoyo sin estilo y con un número de EE. UU. primero (caso 03, H4) |
| El registro rápido del diario aclara que es privado salvo que se elija compartirlo | Privacidad preseleccionada en "compartida" (caso 05, H1) |
| La escala de ánimo va de "Muy mal" en bosque casi negro (`#1E4033`) a "Muy bien" en un verde vivo (`#4FA86A`), con "Regular" en amarillo (`#F5C33B`) en el medio. "Mal" usa `#2F6B51` y "Bien", un verde lima vivo (`#A9CF54`). Cada opción es un círculo con una línea de boca que va de la tristeza a la sonrisa, sin ojos para que no parezca un emoji. La boca va en crema al 50 % sobre los verdes oscuros y en bosque al 45 % sobre los colores claros, para que se funda con el círculo. El verde vivo y el verde lima vivo todavía no están en el design system | Lectura intuitiva del estado de ánimo: lo mejor, más luminoso |
| El gráfico de la semana usa un solo color y los puntos están en su valor | Punto mal dibujado en "Evolución emocional" (caso 05, H2) |
| El Inicio cambia en tres momentos: sin profesional (los cuatro pasos de la primera sesión y sugeridos con su compatibilidad), con profesional y sin sesiones (sus próximos horarios libres y "Reservar sesión"), y con la sesión por empezar ("Entrar a la sesión") | Home larga e igual para todos (caso 03, H9) |
| Para quien no tiene profesional, el precio está visible desde el inicio y no se habla de "sesión de prueba". Una tarjeta acompaña a quien hace terapia por primera vez | "Sesión de prueba" que parece gratis (caso 03, H23); criterio "hablarle a quien busca ayuda" |
| Con profesional asignado, el Inicio dice cuándo se eligió y ofrece "Pedir un cambio de profesional". El cambio no es automático: lo hace el equipo de MotivarCare a pedido de la persona. La asignación nunca es automática ni silenciosa | Profesional asignado sin que la persona lo elija (caso 04, H12) |
| Los horarios libres van con borde punteado y los estados vacíos (por ejemplo, el gráfico antes del primer registro) también: "punteado = lo pendiente" | Principio del design system |
| La reserva es un recorrido de cuatro pasos. En el de pago, las opciones se comparan juntas, con precio por sesión, descuento y total en un único formato, y la aclaración "Es el monto exacto que vas a ver en el pago" | "Comprar" que lleva directo al paquete más caro (caso 04, H11); monto cobrado distinto del mostrado (caso 04, H1); formatos de moneda distintos (caso 04, H5) |
| Cada opción de pago, el desglose y el total nombran al profesional, y el resumen arranca con "Reservás y pagás con". Antes de elegir profesional no se muestran paquetes, solo que cada profesional define su precio | Paquetes vendidos sin profesional definido y asignación automática al comprar (caso 03, H23; caso 04, H11 y H12); regla de producto de la sección "Cómo migrar" |
| La reserva se ve igual de clara en escritorio (página con resumen al costado) y en el teléfono (total y botón fijos abajo) | Ventanas del flujo de compra con patrones distintos (caso 04, H9 y H10) |

### Pantallas del punto de partida

**Variante A** (el chat con el profesional dentro de "Mi profesional"):

1. Inicio en escritorio de un usuario nuevo, sin profesional ni sesiones (`mockups/01-nuevo-escritorio.png`).
2. El mismo Inicio en el teléfono (`mockups/02-nuevo-telefono.png`).
3. Inicio en escritorio con profesional asignado y sin sesiones reservadas (`mockups/03-asignado-escritorio.png`).
4. El mismo Inicio en el teléfono (`mockups/04-asignado-telefono.png`).
5. Inicio en escritorio con la sesión a punto de empezar (`mockups/05-sesion-escritorio.png`).
6. El mismo Inicio en el teléfono (`mockups/06-sesion-telefono.png`).
7. Reserva en escritorio, paso 3: elegí cómo pagar (`mockups/07-reserva-escritorio.png`).
8. Reserva en el teléfono, paso 3 (`mockups/08-reserva-telefono.png`).

**Variante B** ("Mensajes" en el centro):

1. Mensajes en escritorio (`mockups/b1-mensajes-escritorio.png`): la conversación con el encabezado del profesional ("Suele responder en el día, de lunes a viernes") y "Reservar sesión", los ejercicios y las entradas del diario compartidas como tarjetas dentro del hilo, el aviso de la sesión de hoy con borde punteado, y el campo para escribir con adjuntos y mensaje de voz. Debajo, "Este chat no es para urgencias", con el enlace a las líneas de apoyo. Al costado, el perfil, la próxima sesión con las sesiones disponibles con Valeria, lo compartido en el chat y "Pedir un cambio de profesional".
2. Mensajes en el teléfono (`mockups/b2-mensajes-telefono.png`).
3. Inicio en escritorio con el último mensaje destacado (`mockups/b3-inicio-escritorio.png`).
4. Inicio en el teléfono con el último mensaje destacado (`mockups/b4-inicio-telefono.png`).

| | Variante A · chat dentro de "Mi profesional" | Variante B · "Mensajes" en el centro |
|---|---|---|
| Navegación | Inicio, Sesiones, Mi profesional, Diario, Bienestar | Inicio, Mensajes, Sesiones, Diario, Bienestar |
| Dónde está el chat | Dentro de "Mi profesional", junto al perfil | Es un destino propio: una sola conversación, siempre con tu profesional |
| Perfil del profesional | Es la sección "Mi profesional" | Se abre desde la conversación (encabezado y panel lateral) |
| En el Inicio | Tarjeta "Tu profesional" con "Escribile" | Tarjeta con el último mensaje y un campo para responder |
| Referencia | Apps de salud con chat ligado a la ficha del profesional | Apps de terapia por mensajes, donde la conversación con el terapeuta es el centro del producto |

En las dos, el chat siempre es con el profesional asignado, nunca un chat independiente, y se diferencia claramente de Maca: Maca es el botón punteado de abajo a la derecha y no aparece en la pantalla de Mensajes. La variante A es la semilla de la familia 2 y la variante B, de la familia 3.
