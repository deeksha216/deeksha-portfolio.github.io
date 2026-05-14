// ==============================
// NAVBAR: scroll effect + hamburger
// ==============================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ==============================
// SMOOTH ACTIVE NAV LINKS
// ==============================
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      allNavLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav);

// ==============================
// SCROLL REVEAL ANIMATION
// ==============================
const revealEls = document.querySelectorAll(
  '.skill-category, .project-card, .cert-card, .about-card, .contact-item, .contact-form, .about-text'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// ==============================
// CONTACT FORM → MAILTO
// ==============================
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(
    `Hi Deeksha,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`
  );
  window.location.href = `mailto:deekshamoni216@gmail.com?subject=${subject}&body=${body}`;
});

// ==============================
// TYPING EFFECT (optional flair)
// ==============================
const roles = ['BCA AI Student', 'Python Developer', 'Web Developer', 'ML Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleEl = document.querySelector('.hero-role');

if (roleEl) {
  const originalText = roleEl.innerHTML;

  function typeRole() {
    const current = roles[roleIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    const display = current.substring(0, charIndex);
    roleEl.innerHTML = display + '<span class="cursor">|</span>';

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }
    setTimeout(typeRole, delay);
  }

  // Add cursor style
  const style = document.createElement('style');
  style.textContent = `.cursor { color: var(--accent2); animation: blink 0.7s step-end infinite; } @keyframes blink { 50% { opacity: 0; } }`;
  document.head.appendChild(style);

  setTimeout(typeRole, 1200);
}
