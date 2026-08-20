/* Care for Knowledge — Main JS */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile nav toggle ─────────────────────────────────────
  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    // Close on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // ── Scroll animation ─────────────────────────────────────
  const animEls = document.querySelectorAll('.animate');
  if (animEls.length) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    animEls.forEach(el => obs.observe(el));
  }

  // ── Stat counter ─────────────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObs = new IntersectionObserver((entries, observer) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = +el.getAttribute('data-count');
          let count = 0;
          const inc = target / 60;
          const tick = () => {
            count += inc;
            if (count < target) {
              el.textContent = Math.floor(count);
              requestAnimationFrame(tick);
            } else {
              el.textContent = target;
            }
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObs.observe(c));
  }

  // ── Email spam protection ─────────────────────────────────
  // Assembles the contact email client-side so crawlers can't harvest it
  const emailTargets = document.querySelectorAll('[data-email]');
  emailTargets.forEach(el => {
    const parts = el.getAttribute('data-email').split('|');
    if (parts.length === 2) {
      const address = parts[0] + '@' + parts[1];
      if (el.tagName === 'A') {
        el.href = 'mailto:' + address;
        el.textContent = address;
      } else {
        el.textContent = address;
      }
    }
  });

});
