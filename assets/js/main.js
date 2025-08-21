// FOC Agents - Main JS
(function() {
  // Smooth scroll for same-page anchor links
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    const id = target.getAttribute('href');
    if (!id || id === '#' || !document.querySelector(id)) return;
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Update current year in any element with data-year
  function updateYear() {
    const el = document.querySelector('[data-year]');
    if (el) el.textContent = new Date().getFullYear();
  }
  updateYear();
})();