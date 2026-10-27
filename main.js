// ================= TYPEWRITER EFFECT =================
const words = [
  "amante de los animales",
  "amante de la naturaleza",
  "amante del deporte",
  "amante de los colores"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const targetElement = document.getElementById("typewriter-text");
const targetElementLight = document.getElementById("typewriter-text-light");

function typeEffect() {
  if (!targetElement) return;

  const currentWord = words[wordIndex];
  const currentSub = isDeleting 
    ? currentWord.substring(0, charIndex - 1) 
    : currentWord.substring(0, charIndex + 1);

  targetElement.textContent = currentSub;
  if (targetElementLight) {
    targetElementLight.textContent = currentSub;
  }

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  let typeSpeed = isDeleting ? 45 : 90;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ================= ANIMACIÓN FADE UP (INTERSECTION OBSERVER) =================
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-fade-up");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  animatedElements.forEach(el => observer.observe(el));
});

// ================= MÁSCARA HERO INTERACTIVA =================
const heroSection = document.getElementById('hero-section');
const heroReveal = document.getElementById('hero-reveal');

if (heroSection && heroReveal) {
  const radius = 240;
  heroReveal.style.setProperty('--reveal-radius', `${radius}px`);

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroReveal.style.setProperty('--reveal-x', `${x}px`);
    heroReveal.style.setProperty('--reveal-y', `${y}px`);
    heroReveal.classList.add('active');
  });

  heroSection.addEventListener('mouseleave', () => {
    heroReveal.classList.remove('active');
  });
}

// ================= SISTEMA DE PESTAÑAS =================
const tabButtons = document.querySelectorAll('.nav-tab-btn');
const tabViews = document.querySelectorAll('.tab-view');
const navLogo = document.getElementById('nav-logo');

function switchTab(targetId) {
  tabViews.forEach(view => {
    view.classList.toggle('active', view.id === targetId);
  });

  tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === targetId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetTab = btn.getAttribute('data-tab');
    switchTab(targetTab);
  });
});

if (navLogo) {
  navLogo.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('tab-sobremi');
  });
}

// ================= MENÚ HAMBURGUESA MÓVIL =================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}