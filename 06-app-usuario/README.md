---
titulo: App del usuario
numero: "06"
estado: en-curso
resumen: "Migración de la app actual del portal del paciente a un nuevo portal para pacientes (usuarios), con el nuevo design system y los lineamientos de la landing page: diseño y desarrollo."
actualizado: 2026-11-04
proximos_pasos:
  - "Relevar las pantallas y funciones de la app actual del paciente."
  - "Definir el alcance y el plan de la migración."
  - "Revisar el primer mockup (Inicio y paso de pago de la reserva)."
  - "Definir con el equipo: paquetes que se ofrecen, cómo se elige al profesional y si se mantiene el chat con el profesional."
  - "Sumar al design system los componentes nuevos de la app (navegación, tarjeta de sesión, opciones de pago, pasos)."
iniciativas:
  - titulo: Primer mockup del portal del paciente
    tipo: Mockup
    fecha: Noviembre 2026
    estado: en-revision
    descripcion: "Pantallas en escritorio y teléfono con el design system: el Inicio en tres momentos (usuario nuevo, con profesional pero sin sesiones, y con la sesión por empezar), el paso de pago de la reserva y dos variantes para la mensajería con el profesional."
    imagen: /img/app-usuario/mockup-inicio.jpg
    enlace: /app-usuario/index.html
    boton: Ver el mockup
---

# 06 · App del usuario

Diseño y desarrollo del nuevo portal para pacientes (usuarios). El punto de partida es **migrar la app actual del portal del paciente** ([app.motivarcare.com](https://app.motivarcare.com/)) al nuevo portal. Incluye flujos, wireframes, pantallas, prototipos e implementación.

## Lineamientos de la migración

La migración no es una copia de la app actual: el nuevo portal se arma con el lenguaje visual y los criterios ya definidos.

- **Design system** (`04-design-system/README.md`): color, tipografía, logo, fotografía, patrones, iconografía, formas y elevación, componentes y movimiento. Si la app necesita un componente que el design system todavía no tiene, se define ahí primero y después se usa en la app.
- **Lineamientos de la landing page** (`08-landing-page/README.md`, sección "Criterios"), aplicados a la app:
  1. **Credibilidad antes que promesa:** datos verificables del servicio (matrícula verificada, duración de las sesiones, precios claros, sin suscripción) en lugar de afirmaciones que no se pueden respaldar.
  2. **Hablarle a quien busca ayuda, no a "un usuario":** textos que invitan y no asustan, sin lenguaje interno o técnico.
  3. **Lo humano primero; la IA, en su lugar:** Maca se presenta como apoyo, con un límite claro respecto de la terapia ("sólido = humano; punteado = IA").
  4. **Seguridad sin alarmar:** la información sobre crisis está siempre a mano, sin dominar la experiencia. Dentro de la app puede tener más presencia que en la landing.
  5. **Un solo tratamiento: voseo** rioplatense amable ("Reservá", "Contanos").
  6. **Calma visual:** fondo crema, un solo acento amarillo por bloque, pocas animaciones, nada de emojis, y estado final sin animaciones con "reducir movimiento".
- **Regla de producto: nada se paga sin un profesional definido.** Las sesiones y los paquetes siempre están vinculados a un profesional. El portal nunca debe dar la sensación de vender paquetes por sí solos: en todo flujo de compra, la persona tiene que ver con claridad a qué profesional le está pagando antes de pagar. Por eso no hay botones de "Comprar sesiones" o "Ver paquetes" sueltos, cada opción de pago nombra al profesional ("4 sesiones con Valeria"), el resumen dice "Reservás y pagás con" y las sesiones disponibles se muestran siempre junto al nombre del profesional.
- **Cambio de profesional: solo a pedido, lo hace el backoffice.** La persona no puede cambiar de profesional por su cuenta: lo pide desde el portal y el equipo de MotivarCare hace el cambio. Las sesiones que le queden de un paquete no se pueden usar con otro profesional ni transferir, así que el pedido tiene que avisarlo con claridad antes de enviarse, con el saldo que se pierde. Los textos del portal dicen "Pedir un cambio de profesional", nunca "Cambiar de profesional".
- **Referencia de implementación:** la propuesta de landing (`web/public/landing/`) sirve como ejemplo concreto de cómo se aplican los tokens, las fuentes y los componentes en código.

## Referencias

Los hallazgos de la auditoría UX (`05-auditoria/bitacora-auditoria-ux/`) sobre la app del paciente sirven como referencia para la migración.

## Primer mockup (noviembre 2026)

Primera versión visual de la propuesta, con pocas pantallas, para validar el enfoque antes de pasar a Figma.

- **Dónde está:** el HTML está en `web/public/app-usuario/index.html` y se ve en el portal en `/app-usuario/index.html`. Usa las fuentes, el logo y el ícono de Maca de la propuesta de landing. Las capturas están en `mockups/`.
- **Pantallas de la variante A** (el chat con el profesional dentro de "Mi profesional"):
  1. Inicio en escritorio de un usuario nuevo, sin profesional ni sesiones (`mockups/01-nuevo-escritorio.png`).
  2. El mismo Inicio en el teléfono (`mockups/02-nuevo-telefono.png`).
  3. Inicio en escritorio con profesional asignado y sin sesiones reservadas (`mockups/03-asignado-escritorio.png`).
  4. El mismo Inicio en el teléfono (`mockups/04-asignado-telefono.png`).
  5. Inicio en escritorio con la sesión a punto de empezar (`mockups/05-sesion-escritorio.png`).
  6. El mismo Inicio en el teléfono (`mockups/06-sesion-telefono.png`).
  7. Reserva en escritorio, paso 3: elegí cómo pagar (`mockups/07-reserva-escritorio.png`).
  8. Reserva en el teléfono, paso 3 (`mockups/08-reserva-telefono.png`).
- **Tamaños:** escritorio de 1440 × 1024 y teléfono de 390 × 844, los marcos estándar de Figma.
- **Datos:** los profesionales, los precios y las fechas son ficticios, los mismos que usa la propuesta de landing.

### Decisiones que muestra

| Decisión | Qué resuelve de la auditoría (`05-auditoria`) |
|---|---|
| Una sola navegación de cinco destinos (Inicio, Sesiones, Mi profesional, Diario, Bienestar), con los mismos nombres en escritorio y teléfono, y con texto siempre visible | Dos Home y el selector "Inicio ML" (caso 03, H1); menús distintos según el tamaño (caso 03, "Más" / "Explorar"); etiquetas que solo aparecen con el mouse (caso 03, H14) |
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
| Cada opción de pago, el desglose y el total nombran al profesional, y el resumen arranca con "Reservás y pagás con". Antes de elegir profesional no se muestran paquetes, solo que cada profesional define su precio | Paquetes vendidos sin profesional definido y asignación automática al comprar (caso 03, H23; caso 04, H11 y H12); regla de producto de la sección "Lineamientos de la migración" |
| La reserva se ve igual de clara en escritorio (página con resumen al costado) y en el teléfono (total y botón fijos abajo) | Ventanas del flujo de compra con patrones distintos (caso 04, H9 y H10) |

### Dos variantes para la mensajería con el profesional

| | Variante A · chat dentro de "Mi profesional" | Variante B · "Mensajes" en el centro |
|---|---|---|
| Navegación | Inicio, Sesiones, Mi profesional, Diario, Bienestar | Inicio, Mensajes, Sesiones, Diario, Bienestar |
| Dónde está el chat | Dentro de "Mi profesional", junto al perfil | Es un destino propio: una sola conversación, siempre con tu profesional |
| Perfil del profesional | Es la sección "Mi profesional" | Se abre desde la conversación (encabezado y panel lateral) |
| En el Inicio | Tarjeta "Tu profesional" con "Escribile" | Tarjeta con el último mensaje y un campo para responder |
| Referencia | Apps de salud con chat ligado a la ficha del profesional | Apps de terapia por mensajes, donde la conversación con el terapeuta es el centro del producto |

En las dos, el chat siempre es con el profesional asignado, nunca un chat independiente, y se diferencia claramente de Maca: Maca es el botón punteado de abajo a la derecha y no aparece en la pantalla de Mensajes.

**Pantallas de la variante B:**

1. Mensajes en escritorio (`mockups/b1-mensajes-escritorio.png`): la conversación con el encabezado del profesional ("Suele responder en el día, de lunes a viernes") y "Reservar sesión", los ejercicios y las entradas del diario compartidas como tarjetas dentro del hilo, el aviso de la sesión de hoy con borde punteado, y el campo para escribir con adjuntos y mensaje de voz. Debajo, "Este chat no es para urgencias", con el enlace a las líneas de apoyo. Al costado, el perfil, la próxima sesión con las sesiones disponibles con Valeria, lo compartido en el chat y "Pedir un cambio de profesional".
2. Mensajes en el teléfono (`mockups/b2-mensajes-telefono.png`).
3. Inicio en escritorio con el último mensaje destacado (`mockups/b3-inicio-escritorio.png`).
4. Inicio en el teléfono con el último mensaje destacado (`mockups/b4-inicio-telefono.png`).
