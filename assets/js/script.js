const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    e.target.classList.toggle('visible', e.isIntersecting);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, [data-reveal]').forEach(el => observer.observe(el));
