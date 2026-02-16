(function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // close on link click (mobile)
    nav.addEventListener('click', (e) => {
      const t = e.target;
      if (t && t.tagName === 'A'){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('[data-scroll]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('#')) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null, '', href);
    });
  });

  // Show success message if redirected with ?sent=1
  const params = new URLSearchParams(location.search);
  if (params.get('sent') === '1'){
    const box = document.getElementById('formSuccess');
    if (box) box.hidden = false;
  }
})();
