---
titulo: App del usuario
numero: "06"
estado: en-curso
resumen: "Migración de la app actual del portal del paciente a un nuevo portal para pacientes (usuarios), con el nuevo design system y los lineamientos de la landing page: diseño y desarrollo."
actualizado: 2026-11-04
ancho: completo
proximos_pasos:
  - "Relevar las pantallas y funciones de la app actual del paciente, y el estado de su API."
  - "Decidir con el equipo el camino de la migración (sección \"Cómo migrar\")."
  - "Revisar los mockups hechos de las familias 1, 2 y 3."
  - "Elegir qué familias se desarrollan primero y completar sus pantallas."
  - "Definir con el equipo: paquetes que se ofrecen, cómo se elige al profesional y si se mantiene el chat con el profesional."
  - "Sumar al design system los componentes nuevos de la app (navegación, tarjeta de sesión, opciones de pago, pasos, escala de ánimo)."
tarjetas:
  - titulo: "1 · La sesión, en su momento"
    etiqueta: "Eje: la sesión"
    frase: "¿Qué tengo que hacer ahora? El Inicio cambia según el momento: prepara antes, acompaña la espera y propone la siguiente reserva."
    imagen: /img/app-usuario/familia-sesion.jpg
    enlace: /app-usuario/propuesta/sesion/
    boton: Ver la familia
  - titulo: "2 · Tu profesional, en el centro"
    etiqueta: "Eje: la persona que te atiende"
    frase: "¿Con quién estoy haciendo terapia? La tarjeta del profesional reúne quién es, por qué se eligió y la próxima sesión."
    imagen: /img/app-usuario/familia-profesional.jpg
    enlace: /app-usuario/propuesta/profesional/
    boton: Ver la familia
  - titulo: "3 · La conversación como hilo"
    etiqueta: "Eje: el intercambio entre sesiones"
    frase: "¿Qué me dijo y qué le quiero contar? La conversación con el profesional es el centro, con un límite claro para las urgencias."
    imagen: /img/app-usuario/familia-conversacion.jpg
    enlace: /app-usuario/propuesta/conversacion/
    boton: Ver la familia
  - titulo: "4 · Acompañamiento entre sesiones"
    etiqueta: "Eje: el proceso de la persona"
    frase: "¿Cómo vengo y cómo me preparo? El ánimo, la evolución y las preguntas para la próxima sesión, todo privado por defecto."
    imagen: /img/app-usuario/familia-acompanamiento.jpg
    enlace: /app-usuario/propuesta/acompanamiento/
    boton: Ver la familia
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

## Lineamientos que se mantienen en toda la migración

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

## El papel del design system

El design system (`04-design-system`) es la **fuente única** de las decisiones visuales y de los componentes. En la migración cumple tres funciones:

1. **Define antes de construir.** Si la app necesita un componente que el design system todavía no tiene (navegación, tarjeta de sesión, opciones de pago, pasos, escala de ánimo), se define ahí primero y después se usa en la app. Así el portal del profesional y la landing lo reciben igual.
2. **Se traduce a código.** Los tokens (color, tipografía, radios, sombras y movimiento) se publican en un archivo reutilizable (CSS y JSON) que usa el frontend nuevo. La propuesta de landing (`web/public/landing/`) es el ejemplo concreto de cómo se aplican.
3. **Lleva los principios.** "Calma antes que estímulo", "lo humano primero" y "sólido es lo que existe; punteado es lo provisorio" se aplican a cada pantalla, no solo a los colores.

## Qué hacen otras plataformas

La propuesta se apoya en un relevamiento de cómo resuelven la pantalla principal del paciente cuatro plataformas de terapia online. El relevamiento, con la tabla comparativa y un análisis por plataforma, está en el frente [01 · Investigación](/01-investigacion/):

- [BetterHelp](/01-investigacion/competencia/res-betterhelp/): la conversación con el terapeuta como pantalla principal.
- [Mindly](/01-investigacion/competencia/res-mindlyspace/): la agenda de sesiones como pantalla principal.
- [Clearly](/01-investigacion/competencia/res-clearly/): una tarjeta por terapeuta, con la próxima sesión adentro.
- [Talkspace](/01-investigacion/competencia/res-talkspace/): una Home con saludo, equipo de apoyo y recursos.

Cada plataforma organiza la experiencia alrededor de un eje distinto, y esos cuatro ejes dan origen a las familias de la propuesta.

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

## Propuesta: cuatro familias

Versión preliminar, noviembre de 2026. Cada familia toma uno de los ejes que encontramos al revisar otras plataformas y lo lleva al Inicio, a la navegación y a los flujos principales. No son productos distintos: todas usan el mismo design system, cumplen las mismas reglas de producto y resuelven los mismos hallazgos de la auditoría. Lo que cambia es **qué se pone en primer plano**. Sirven para comparar enfoques con el equipo antes de elegir uno o combinarlos.

La página de cada familia explica su enfoque y muestra sus mockups: los que ya están hechos y los que faltan.

<div data-tarjetas></div>

### Flujos comunes a todas las familias

Algunos flujos no dependen del eje y se diseñan una sola vez:

- **Primeros pasos:** el cuestionario (con una pregunta de presupuesto en rangos), los profesionales sugeridos con su compatibilidad y la primera reserva.
- **Reserva y pago:** un recorrido de cuatro pasos, con el monto exacto y el profesional nombrado en cada opción.
- **Pedido de cambio de profesional:** con un motivo para elegir y el aviso del saldo que se pierde.
- **Líneas de apoyo y Maca:** siempre en el mismo lugar.

Las decisiones de diseño que comparten todas las familias, y qué hallazgo de la auditoría resuelve cada una, están en `06-app-usuario/decisiones-de-diseno.md`.
