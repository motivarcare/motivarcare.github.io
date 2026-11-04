---
titulo: App del usuario
numero: "06"
estado: en-curso
resumen: "Migración de la app actual del portal del paciente a un nuevo portal para pacientes (usuarios), con el nuevo design system y los lineamientos de la landing page: diseño y desarrollo."
actualizado: 2026-11-04
proximos_pasos:
  - "Relevar las pantallas y funciones de la app actual del paciente."
  - "Definir el alcance y el plan de la migración."
  - "Llevar los criterios de la landing page al contexto de la app y sumar al design system los componentes que falten."
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
