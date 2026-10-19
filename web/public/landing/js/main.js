/* MotivarCare · Landing pública (propuesta). Comportamiento mínimo, sin dependencias. */
(function () {
  'use strict';
  var reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Con movimiento reducido, las animaciones SVG (<animate>) quedan quietas */
  if (reducir) {
    document.querySelectorAll('.ilus-sitio svg').forEach(function (svg) { if (svg.pauseAnimations) svg.pauseAnimations(); });
  }

  /* Borde del encabezado al hacer scroll */
  var encabezado = document.getElementById('encabezado');
  var alScroll = function () { encabezado.classList.toggle('con-borde', window.scrollY > 8); };
  window.addEventListener('scroll', alScroll, { passive: true });
  alScroll();

  /* Menú en pantallas chicas */
  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu-movil');
  if (boton && menu) {
    var cerrar = function () { menu.classList.remove('abierto'); boton.setAttribute('aria-expanded', 'false'); boton.setAttribute('aria-label', 'Abrir menú'); };
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', String(abierto));
      boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });
  }

  /* Sin animaciones: se muestra todo en su estado final */
  if (reducir || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.aparece').forEach(function (el) { el.classList.add('visible'); });
    document.querySelectorAll('.chat-animado .msg').forEach(function (el) { el.classList.add('mostrar'); });
    document.querySelectorAll('.ficha-revision').forEach(function (el) { el.classList.add('lista'); });
    document.querySelectorAll('svg animate').forEach(function (a) { a.remove(); });
    return;
  }

  /* Entrada suave de cada bloque, una sola vez */
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); observador.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  document.querySelectorAll('.aparece').forEach(function (el) { observador.observe(el); });

  /* Ficha de revisión: el último paso se revisa, se completa y aparece el sello */
  document.querySelectorAll('.ficha-revision').forEach(function (ficha) {
    var obs = new IntersectionObserver(function (entradas) {
      if (!entradas[0].isIntersecting) return;
      obs.disconnect();
      setTimeout(function () { ficha.classList.add('revisando'); }, 800);
      setTimeout(function () { ficha.classList.add('lista'); }, 3200);
    }, { threshold: 0.5 });
    obs.observe(ficha);
  });

  /* Chat de ejemplo: los mensajes aparecen de a uno, con "escribiendo…" antes del último */
  document.querySelectorAll('.chat-animado').forEach(function (chat) {
    var items = Array.prototype.slice.call(chat.querySelectorAll('.msg, .escribiendo'));
    var obs = new IntersectionObserver(function (entradas) {
      if (!entradas[0].isIntersecting) return;
      obs.disconnect();
      var t = 300;
      items.forEach(function (el, i) {
        var esEscribiendo = el.classList.contains('escribiendo');
        setTimeout(function () { el.classList.add('mostrar'); }, t);
        if (esEscribiendo) {
          t += 1400;
          setTimeout(function () { el.classList.remove('mostrar'); }, t);
        } else {
          t += 700;
        }
      });
    }, { threshold: 0.4 });
    obs.observe(chat);
  });
})();
