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
    descripcion: "Cinco pantallas en escritorio y teléfono con el design system: el Inicio cuando la sesión está por empezar, el Inicio de alguien que todavía no tiene profesional y el paso de pago de la reserva."
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
- **Referencia de implementación:** la propuesta de landing (`web/public/landing/`) sirve como ejemplo concreto de cómo se aplican los tokens, las fuentes y los componentes en código.

## Referencias

Los hallazgos de la auditoría UX (`05-auditoria/bitacora-auditoria-ux/`) sobre la app del paciente sirven como referencia para la migración.

## Primer mockup (noviembre 2026)

Primera versión visual de la propuesta, con pocas pantallas, para validar el enfoque antes de pasar a Figma.

- **Dónde está:** el HTML está en `web/public/app-usuario/index.html` y se ve en el portal en `/app-usuario/index.html`. Usa las fuentes, el logo y el ícono de Maca de la propuesta de landing. Las capturas están en `mockups/`.
- **Pantallas:**
  1. Inicio en escritorio, con la sesión a punto de empezar (`mockups/01-inicio-escritorio.png`).
  2. Inicio en el teléfono, en el mismo estado (`mockups/02-inicio-telefono.png`).
  3. Inicio en el teléfono para alguien que todavía no tiene profesional (`mockups/03-inicio-sin-profesional-telefono.png`).
  4. Reserva en escritorio, paso 3: elegí cómo pagar (`mockups/04-reserva-pago-escritorio.png`).
  5. Reserva en el teléfono, paso 3 (`mockups/05-reserva-pago-telefono.png`).
- **Datos:** los profesionales, los precios y las fechas son ficticios, los mismos que usa la propuesta de landing.

### Decisiones que muestra

| Decisión | Qué resuelve de la auditoría (`05-auditoria`) |
|---|---|
| Una sola navegación de cinco destinos (Inicio, Sesiones, Mi profesional, Diario, Bienestar), con los mismos nombres en escritorio y teléfono, y con texto siempre visible | Dos Home y el selector "Inicio ML" (caso 03, H1); menús distintos según el tamaño (caso 03, "Más" / "Explorar"); etiquetas que solo aparecen con el mouse (caso 03, H14) |
| El Inicio muestra el próximo paso según el momento de la persona, con un solo botón amarillo | Carrusel que avanza solo (caso 03, H6); accesos rápidos duplicados (caso 03, H9 y H18); "Reservar" en tres colores (caso 03, H21 y H22; caso 04, H7) |
| "Cuenta" queda como botón de contorno junto a las notificaciones | "Cuenta" con el mismo estilo que el botón principal (caso 03, H21) |
| Maca tiene un lugar fijo: la barra lateral en escritorio y el encabezado en el teléfono, siempre con borde punteado | El tour con Maca inalcanzable en tablet y teléfono (caso 03, H17); "lo humano primero; la IA, en su lugar" |
| Las líneas de apoyo están siempre a mano en la barra lateral, sin alarmar | Página de líneas de apoyo sin estilo y con un número de EE. UU. primero (caso 03, H4) |
| El registro rápido del diario aclara que es privado salvo que se elija compartirlo | Privacidad preseleccionada en "compartida" (caso 05, H1) |
| El gráfico de la semana usa un solo color y los puntos están en su valor | Punto mal dibujado en "Evolución emocional" (caso 05, H2) |
| Para quien no tiene profesional, el Inicio muestra los cuatro pasos de la primera sesión y profesionales sugeridos, con el precio visible | Asignación de profesional poco clara (caso 04, H12); "sesión de prueba" que parece gratis (caso 03, H23) |
| La reserva es un recorrido de cuatro pasos. En el de pago, las opciones se comparan juntas, con precio por sesión, descuento y total en un único formato, y la aclaración "Es el monto exacto que vas a ver en el pago" | "Comprar" que lleva directo al paquete más caro (caso 04, H11); monto cobrado distinto del mostrado (caso 04, H1); formatos de moneda distintos (caso 04, H5) |
| La reserva se ve igual de clara en escritorio (página con resumen al costado) y en el teléfono (total y botón fijos abajo) | Ventanas del flujo de compra con patrones distintos (caso 04, H9 y H10) |

