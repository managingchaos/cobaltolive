// Intersection Observer to reveal elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.25 });

// Reveal service blocks and intro line
document.querySelectorAll('.service-block, .intro-line, .fade-in-headline').forEach(el => {
  observer.observe(el);
});

// Hamburger menu toggle
const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuBtn.classList.remove('open');
    });
  });
}

// Logo animation on load
window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('header img');
  if (logo) {
    logo.style.opacity = '1';
    logo.style.animation = 'logo-bounce-in 0.6s ease-out 0.2s forwards';
  }
});