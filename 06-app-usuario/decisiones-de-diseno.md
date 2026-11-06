---
titulo: Decisiones de diseño de los mockups
estado: en-revision
resumen: "Las decisiones de diseño que valen para todas las familias de la propuesta, y qué hallazgo de la auditoría resuelve cada una."
---

# Decisiones de diseño de los mockups

Los mockups de todas las familias comparten el mismo design system, las mismas reglas de producto y estas decisiones. Cada una responde a un hallazgo de la auditoría UX (`05-auditoria`) o a un principio del design system (`04-design-system`).

- **Dónde están:** las pantallas de cada familia se ven en su página (por ejemplo, [la familia 1](/app-usuario/propuesta/relacion/)). Todas juntas, en tamaño real, en [el mockup completo](/app-usuario/index.html). Las capturas están en `06-app-usuario/mockups/`.
- **Tamaños:** escritorio de 1440 × 1024 y teléfono de 390 × 844, los marcos estándar de Figma.
- **Datos:** los profesionales, los precios y las fechas son ficticios, los mismos que usa la propuesta de landing.

## Decisiones comunes

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
| Cada opción de pago, el desglose y el total nombran al profesional, y el resumen arranca con "Reservás y pagás con". Antes de elegir profesional no se muestran paquetes, solo que cada profesional define su precio | Paquetes vendidos sin profesional definido y asignación automática al comprar (caso 03, H23; caso 04, H11 y H12); lineamiento "Precios y paquetes claros" del frente 06 |
| La reserva se ve igual de clara en escritorio (página con resumen al costado) y en el teléfono (total y botón fijos abajo) | Ventanas del flujo de compra con patrones distintos (caso 04, H9 y H10) |

## Las dos variantes de la familia 1

La familia 1 (la relación con el profesional) tiene dos variantes, que se diferencian sobre todo en dónde vive la conversación con el profesional.

| | Variante A · chat dentro de "Mi profesional" | Variante B · "Mensajes" en el centro |
|---|---|---|
| Navegación | Inicio, Sesiones, Mi profesional, Diario, Bienestar | Inicio, Mensajes, Sesiones, Diario, Bienestar |
| Dónde está el chat | Dentro de "Mi profesional", junto al perfil | Es un destino propio: una sola conversación, siempre con tu profesional |
| Perfil del profesional | Es la sección "Mi profesional" | Se abre desde la conversación (encabezado y panel lateral) |
| En el Inicio | Tarjeta "Tu profesional" con "Escribile" | Tarjeta con el último mensaje y un campo para responder |
| Referencia | Apps de salud con chat ligado a la ficha del profesional | Apps de terapia por mensajes, donde la conversación con el terapeuta es el centro del producto |

En las dos, el chat siempre es con el profesional asignado, nunca un chat independiente, y se diferencia claramente de Maca: Maca es el botón punteado de abajo a la derecha y no aparece en la pantalla de Mensajes.
