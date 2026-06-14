/* FileCura auto-play slideshow — cross-fade, dots, pause on hover */
(function () {
  function initSlideshow(root) {
    var imgs = Array.prototype.slice.call(root.querySelectorAll('img'));
    if (imgs.length < 2) return;
    var dotsWrap = root.parentElement.querySelector('[data-fc-dots]');
    var dots = [];
    var i = 0, timer = null;
    var INTERVAL = 3600;

    if (dotsWrap) {
      imgs.forEach(function (_, idx) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Show FileCura screenshot ' + (idx + 1));
        b.addEventListener('click', function () { go(idx); restart(); });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function go(n) {
      imgs[i].classList.remove('is-active');
      if (dots[i]) dots[i].classList.remove('is-active');
      i = (n + imgs.length) % imgs.length;
      imgs[i].classList.add('is-active');
      if (dots[i]) dots[i].classList.add('is-active');
    }
    function next() { go(i + 1); }
    function start() {
      if (timer) return;
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      // Auto-play regardless, but a touch slower under reduced motion
      timer = setInterval(next, reduce ? INTERVAL + 1200 : INTERVAL);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function restart() { stop(); start(); }

    go(0);
    start();

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    // Pause when tab/section is offscreen to save work
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { e.isIntersecting ? (timer || start()) : stop(); });
      }, { threshold: 0.15 });
      io.observe(root);
    }
  }

  function boot() {
    document.querySelectorAll('[data-fc-slides]').forEach(initSlideshow);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else { boot(); }
})();
