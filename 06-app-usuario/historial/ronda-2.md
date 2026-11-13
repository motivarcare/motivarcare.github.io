---
titulo: "Ronda #2 de propuestas (sem. 09/11)"
estado: en-curso
ancho: completo
resumen: "Segunda ronda: un nuevo set de mockups que combina la familia 2 (foco en la agenda y la sesión) con la posibilidad de trabajar con más de un profesional en simultáneo."
---

# Ronda #2 de propuestas (sem. 09/11)

Segunda ronda de trabajo sobre el nuevo portal del paciente, en la semana del 9 de noviembre de 2026. El objetivo es un nuevo set de mockups que combina elementos de la **familia 2** (foco en la agenda y la sesión) con la posibilidad de **trabajar con más de un profesional en simultáneo**.

Cada mockup se hace en escritorio (1440 × 1024) y en teléfono (390 de ancho). Las pantallas se ven en tamaño real en [el mockup de la ronda](/app-usuario/ronda-2.html). Las capturas están en `06-app-usuario/mockups/ronda-2/`.

## Plan de la ronda

| # | Mockup | Estado |
|---|---|---|
| 1 | Inicio · profesional asignado, con turno para la próxima sesión | Segunda versión (escritorio y teléfono) |
| 2 | Inicio · profesional asignado, sin turnos reservados | Pendiente |
| 3 | Inicio · sin profesional asignado | Pendiente |
| 4 | Inicio · con más de un profesional asignado | Pendiente |

## Mockups

<div class="hechas">
<article class="hecha">
  <figure><img src="/img/app-usuario/ronda-2/01-inicio-con-turno-escritorio.jpg" alt="Inicio con profesional asignado y turno reservado, en escritorio" loading="lazy"><figcaption>Escritorio · 1440 × 1024</figcaption></figure>
  <figure class="tel"><img src="/img/app-usuario/ronda-2/01-inicio-con-turno-telefono.jpg" alt="Inicio con profesional asignado y turno reservado, en el teléfono" loading="lazy"><figcaption>Teléfono · 390 × 844</figcaption></figure>
  <div class="texto">
    <span class="chip-estado">Mockup 1 · segunda versión</span>
    <h3>Inicio · profesional asignado, con turno reservado</h3>
    <p>Toma como base el Inicio B3 de la <a href="/06-app-usuario/historial/ronda-1/">Ronda #1</a>. La sesión de hoy lleva "Entrar a la sesión" y "Reprogramar", y debajo vuelve la agenda de la semana. La tarjeta del profesional reúne:</p>
    <ul>
      <li>Avatar, nombre y "★ 4,9 · Argentina".</li>
      <li>Especialidades en pills, en una sola línea, y una línea con sus credenciales.</li>
      <li>El último mensaje sin leer, en una nota sutil, <strong>solo si hay uno</strong>.</li>
      <li>Sus sesiones: la última, la próxima y las disponibles.</li>
      <li>"Escribile" (botón de contorno, abre el chat) y "Ver perfil".</li>
    </ul>
    <p>Las sesiones disponibles pasan a la tarjeta del profesional. En "Entre sesiones", el registro del día usa el clima ("¿Cómo está tu día?") y lleva adentro el acceso al diario. En el teléfono, la pantalla se recorre con scroll: la sesión, la semana, el profesional y el registro del día.</p>
    <a class="boton-ver" href="/app-usuario/ronda-2.html#r2-1-escritorio">Ver en tamaño real →</a>
  </div>
</article>
</div>

### Detalle del mockup 1

Toma como base el Inicio B3 de la [Ronda #1](/06-app-usuario/historial/ronda-1/) (variante B, con "Mensajes" en la navegación), en escritorio, y su par B4 en el teléfono. La tarjeta de la sesión, con "Entrar a la sesión", sigue igual. Lo que cambia es **la tarjeta del profesional**, a la derecha, que ahora reúne todo lo que la persona necesita saber de quien la atiende:

- **Avatar, nombre y un resumen de la calificación y el país:** "★ 4,9 · Argentina".
- **Especialidades en pills, en una sola línea:** se muestran las que entran; si la última no entra completa, se corta con "…" (en el mockup, "Terapia cognitivo-cond…"), y las demás quedan para el perfil.
- **Una línea con sus credenciales:** "Psicóloga clínica (UBA) · Matrícula verificada · 9 años de experiencia", con el ícono del escudo.
- **El último mensaje sin leer**, en una nota sutil (círculo amarillo suave con la "i" y el texto: "Te escribió ayer: …"). **Solo aparece si hay un mensaje sin leer**; si no, la tarjeta pasa directo a las sesiones.
- **Las sesiones con ese profesional:** la última, la próxima (destacada en menta) y las disponibles del paquete ("3 de 4", con los puntos del design system).
- **"Escribile"** (botón de contorno, que abre el chat) y **"Ver perfil"** (enlace). Escribirle no compite con la sesión: el amarillo queda reservado para "Entrar a la sesión", el único botón principal de la pantalla.

Otros cambios respecto del B3:

- En la tarjeta de la sesión, **"Reprogramar"** reemplaza a "Ver detalle", y "Probar cámara" queda como enlace.
- Debajo de la sesión vuelve **la agenda de la semana** de la familia 3 (Ronda #1), con un solo profesional: la sesión de hoy con su foto, los ejercicios y el diario de cada día, y "Ver el mes" para abrir el mes completo (con "+ Reservar" en el próximo horario libre). En el teléfono es una versión compacta: cada día lleva la foto de Valeria si hay sesión o un punto si hay ejercicios.

- La tarjeta de sesiones disponibles, que iba aparte, ahora es parte de la tarjeta del profesional: las sesiones siempre se muestran junto a su nombre.
- "Entre sesiones" pasa a la columna de la izquierda, debajo de la sesión, con el registro del ánimo y el ejercicio sugerido. El gráfico "Tu semana" queda en el Diario, para que la pantalla no crezca de más y Maca tenga libre su esquina.
- En el teléfono no entra todo en una pantalla de 844 px, así que el mockup muestra el recorrido completo con scroll: la sesión (sin repetir los datos de la profesional, que están en su tarjeta), la tarjeta del profesional con los mismos apartados que en escritorio y el registro del ánimo. La barra de navegación y Maca quedan fijas abajo.

### Cambios de la segunda versión (13/11)

- El mensaje sin leer pasa de un bloque destacado a una nota sutil, como en las propuestas anteriores.
- "Escribile" deja de ser un botón verde y pasa a botón de contorno; "Ver perfil" queda como enlace.
- "Reprogramar" reemplaza a "Ver detalle" en la tarjeta de la sesión.
- Vuelve la agenda de la semana debajo de la sesión.

### Ajustes del 13/11: datos del profesional coherentes

- **Una sola profesión, igual en todas las tarjetas.** La profesión ("Psicóloga clínica") es la misma en la tarjeta de la sesión, en las credenciales y en el perfil. Las especialidades van solo en las pills, nunca en la línea de la profesión. Antes, la tarjeta de la sesión decía "Psicóloga clínica · Ansiedad y estrés", y no coincidía con la tarjeta del profesional.
- **Las credenciales empiezan por la profesión:** "Psicóloga clínica (UBA) · Matrícula verificada · 9 años de experiencia".
- **Pills en una sola línea**, con el corte "…" en la última que no entra completa.

### Ajustes del 13/11: "¿Cómo está tu día?"

- El registro rápido del ánimo ("¿Cómo estás hoy?", con caras) se reemplaza por **"¿Cómo está tu día?"**, la alternativa del clima explorada en la [Ronda #1](/06-app-usuario/historial/ronda-1/#materiales-complementarios): Tormenta, Lluvia, Nublado, Algo de sol y Despejado, con íconos de línea sobre círculos crema y el sol en amarillo. Le saca peso a la pregunta: el día está nublado, no la persona.
- **"Ir al diario" pasa adentro de la tarjeta**, junto al título, en lugar de ir al lado del título "Entre sesiones".
- En el Inicio no hay ninguna opción elegida: es el registro de hoy, todavía sin hacer.
