const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = [...document.querySelectorAll('.nav-links a')];

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) {
      menuToggle.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) lucide.createIcons();
    }
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

document.getElementById('year').textContent = new Date().getFullYear();
if (window.lucide) lucide.createIcons();
