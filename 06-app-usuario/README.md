---
titulo: App del usuario
numero: "06"
estado: en-curso
resumen: "Migración de la app actual del portal del paciente a un nuevo portal para pacientes (usuarios), con el nuevo design system y los lineamientos de la landing page."
actualizado: 2026-11-04
ancho: completo
materiales: false
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

Diseño del nuevo portal para pacientes (usuarios). El punto de partida es **migrar la app actual del portal del paciente** ([app.motivarcare.com](https://app.motivarcare.com/)) al nuevo portal. El trabajo parte de la investigación del frente `01-investigacion` y aplica las definiciones y los hallazgos que surgieron al diseñar la nueva landing page (`08-landing-page`), documentados en el nuevo design system de MotivarCare (`04-design-system`). Con esa base se analizan alternativas, organizadas en familias de propuestas, cada una con sus mockups, prototipos y diseños finales.

![El Inicio actual del portal del paciente, con un carrusel violeta, accesos en tarjetas de varios colores y una barra lateral de íconos](/img/app-usuario/portal-actual-inicio.jpg)

<p class="pie">El Inicio actual del portal del paciente, relevado en la auditoría UX (septiembre de 2026).</p>

## Lineamientos que se mantienen en toda la migración

- **Una sola identidad, coherente en todo el producto.** El nuevo design system le da a la app la misma voz visual que la landing: colores, tipografías, formas y componentes pensados para la calma, la cercanía y la confianza, que son los valores del producto. Cada pantalla se arma con las mismas piezas, así que la experiencia se siente igual de un extremo al otro.
- **La interfaz acompaña, no protagoniza.** Lo importante es la terapia y la relación con el profesional. Cada pantalla muestra solo lo necesario para el paso que la persona tiene por delante (reservar, prepararse, entrar a la sesión), sin elementos que compitan por su atención ni información repetida.
- **Criterios de la landing** (`08-landing-page/README.md`, sección "Criterios"), aplicados a la app:
  1. **Credibilidad antes que promesa:** datos verificables del servicio (matrícula verificada, duración de las sesiones, precios claros, sin suscripción) en lugar de afirmaciones que no se pueden respaldar.
  2. **Hablarle a quien busca ayuda, no a "un usuario":** textos que invitan y no asustan, sin lenguaje interno o técnico.
  3. **Lo humano primero; la IA, en su lugar:** Maca se presenta como apoyo, con un límite claro respecto de la terapia ("sólido = humano; punteado = IA").
  4. **Seguridad sin alarmar:** la información sobre crisis está siempre a mano, sin dominar la experiencia. Dentro de la app puede tener más presencia que en la landing.
  5. **Un solo tratamiento: voseo** rioplatense amable ("Reservá", "Contanos").
  6. **Calma visual:** fondo crema, un solo acento amarillo por bloque, pocas animaciones, nada de emojis, y estado final sin animaciones con "reducir movimiento".
- **Regla de producto: nada se paga sin un profesional definido.** Las sesiones y los paquetes siempre están vinculados a un profesional. El portal nunca debe dar la sensación de vender paquetes por sí solos: en todo flujo de compra, la persona tiene que ver con claridad a qué profesional le está pagando antes de pagar. Por eso no hay botones de "Comprar sesiones" o "Ver paquetes" sueltos, cada opción de pago nombra al profesional ("4 sesiones con Valeria"), el resumen dice "Reservás y pagás con" y las sesiones disponibles se muestran siempre junto al nombre del profesional.
- **Hallazgos de la auditoría:** los casos de la app del paciente (`05-auditoria/bitacora-auditoria-ux/`, casos 02 a 06 y 10) son la lista de lo que el portal nuevo tiene que resolver.

## Por qué migrar

La migración es una oportunidad para que el portal del paciente esté a la altura de lo que MotivarCare ofrece y de la identidad que ya se definió en otros frentes. Estas son las razones principales:

1. **Llevar los lineamientos a la experiencia diaria.** El objetivo es un portal ordenado y sin redundancias, donde la persona encuentre enseguida lo que necesita para coordinar y vivir sus sesiones, con calma y con confianza. La interfaz queda en segundo plano para que el centro sea la terapia.
2. **Simplificar la estructura.** Hoy conviven dos Inicios, los menús cambian según el tamaño de la pantalla y hay accesos que se repiten. Una sola estructura, igual en todos los dispositivos, hace que la persona se oriente sin esfuerzo.
3. **Reforzar la confianza en los momentos clave.** La auditoría marcó algunos puntos sensibles, como que el monto que se cobra coincida siempre con el que se muestra, que la persona elija a su profesional y que el diario sea privado por defecto. Cuidarlos desde el diseño es clave en salud mental, donde la confianza es la condición para empezar y sostener un tratamiento.
4. **Construir sobre un sistema común.** Las pantallas actuales se armaron sin un design system compartido y con otra identidad (violeta, Inter y Plus Jakarta Sans). Pasar al sistema de MotivarCare da coherencia y hace más simple mantener y sumar funciones.
5. **Acompañar el cambio de marca.** La landing ya usa la identidad nueva. Si el portal la adopta, la persona encuentra el mismo tono, la misma paleta y el mismo trato desde que conoce MotivarCare hasta que hace su sesión.
6. **Preparar el portal del profesional.** El portal del profesional (`07-app-profesional`) se va a migrar con el mismo sistema, así que lo que se defina acá se reutiliza allá.

El detalle de los hallazgos está en el frente `05-auditoria`.

## El papel del design system

![Lámina del design system: la paleta de verdes con el acento amarillo, las tipografías Fraunces y Manrope, una tarjeta de sesión, botones, estados y el botón punteado de Maca](/img/app-usuario/design-system.jpg)

<p class="pie">Algunas piezas del design system (frente 04) aplicadas al portal del paciente.</p>

El design system (`04-design-system`) es la **fuente única** de las decisiones visuales y de los componentes. En la migración cumple tres funciones:

1. **Define antes de construir.** Si la app necesita un componente que el design system todavía no tiene (navegación, tarjeta de sesión, opciones de pago, pasos, escala de ánimo), se define ahí primero y después se usa en la app. Así el portal del profesional y la landing lo reciben igual.
2. **Se traduce a código.** Los tokens (color, tipografía, radios, sombras y movimiento) se publican en un archivo reutilizable (CSS y JSON) que usa el frontend nuevo. La propuesta de landing (`web/public/landing/`) es el ejemplo concreto de cómo se aplican.
3. **Lleva los principios.** "Calma antes que estímulo", "lo humano primero" y "sólido es lo que existe; punteado es lo provisorio" se aplican a cada pantalla, no solo a los colores.

## Qué hacen otras plataformas

![Las cuatro plataformas relevadas: BetterHelp, Mindly, Clearly y Talkspace, cada una con una captura de su pantalla principal y su eje](/img/app-usuario/otras-plataformas.jpg)

La propuesta se apoya en un relevamiento de cómo resuelven la pantalla principal del paciente cuatro plataformas de terapia online. El relevamiento, con la tabla comparativa y un análisis por plataforma, está en el frente [01 · Investigación](/01-investigacion/):

- [BetterHelp](/01-investigacion/competencia/res-betterhelp/): la conversación con el terapeuta como pantalla principal.
- [Mindly](/01-investigacion/competencia/res-mindlyspace/): la agenda de sesiones como pantalla principal.
- [Clearly](/01-investigacion/competencia/res-clearly/): una tarjeta por terapeuta, con la próxima sesión adentro.
- [Talkspace](/01-investigacion/competencia/res-talkspace/): una Home con saludo, equipo de apoyo y recursos.

Cada plataforma organiza la experiencia alrededor de un eje distinto, y esos cuatro ejes dan origen a las familias de la propuesta.

## Cómo migrar

![Diagrama de los tres caminos: A, migración directa, que repinta la interfaz y mantiene la API y los datos; B, reimplementación del frontend, con una interfaz nueva sobre los datos actuales y la API en revisión según la propuesta de diseño (recomendación preliminar); y C, reimplementación completa, que rehace todo](/img/app-usuario/caminos-migracion.jpg)

### Tres caminos posibles

| | **A · Migración directa** | **B · Reimplementación del frontend** | **C · Reimplementación completa** |
|---|---|---|---|
| **Qué es** | Se mantiene la app actual (React, servida desde Railway) y se le aplica el design system pantalla por pantalla: colores, tipografías, componentes y textos. | Se construye un frontend nuevo sobre la API y los datos actuales. Las pantallas y los flujos se rediseñan. En principio, la API y las reglas del producto no se modifican, pero eso depende de la propuesta de diseño que se acuerde: puede requerir ajustes. | Se rehace todo: el frontend, la API y el modelo de datos. |
| **Ventajas** | Es lo más rápido para cambiar el aspecto. Tiene menos riesgo técnico y no toca los datos ni los pagos. | Permite corregir la estructura (navegación, flujos y estados) y usar el design system desde el origen. Los datos, los pagos y las cuentas siguen donde están. Se puede hacer por partes. | Es libertad total. Permite corregir reglas de negocio que hoy están en el backend (por ejemplo, cómo se asignan los profesionales o cómo se cobran los paquetes). |
| **Desventajas** | Hereda los problemas de estructura que marcó la auditoría. El resultado tiene la cara nueva y la lógica vieja. Es probable que cada pantalla necesite más trabajo del previsto, porque el código no se pensó con componentes compartidos. | Requiere conocer bien la API actual y lo que ya hace. Si la API tiene huecos, hay que completarlos. Durante un tiempo conviven dos frontends. | Es el camino más largo, caro y riesgoso: implica migrar datos de pacientes, historiales y pagos. Durante el desarrollo, la app actual sigue con sus problemas. |
| **Cuándo conviene** | Si el objetivo inmediato es solo unificar la marca. | Si la API actual es razonable y el problema está en la experiencia. | Si el backend tiene problemas graves que impiden las reglas del producto. |

### Recomendación preliminar

**Camino B, por partes.** Por lo que vimos en la auditoría, los problemas principales están en la experiencia (navegación, flujos, textos y estados) y en algunas reglas que se ven en la interfaz, más que en la infraestructura. Un frontend nuevo permite construir con el design system desde el principio, sin pagar el costo de rehacer datos y pagos.

La migración se haría por flujos. Empieza por la estructura y por lo esencial para tomar una sesión, y deja para el final las funciones secundarias:

1. **Inicio y navegación**, porque son la estructura de todo lo demás (caso 03).
2. **Reserva y pago**, porque tocan la confianza y el dinero (caso 04).
3. **Registro e ingreso** (caso 02).
4. **Cuenta y datos personales** (caso 06).
5. **Diario y bienestar**, que son funciones secundarias (caso 05).

Esta recomendación es provisoria: depende de lo que muestre el relevamiento de la API. Si el relevamiento encuentra que reglas como "nada se paga sin un profesional definido" no se pueden cumplir con el backend actual, hay que revisar el camino.

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
