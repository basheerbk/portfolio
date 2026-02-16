// ============================================
// PORTFOLIO - Muhammad Basheer
// Minimal JavaScript for smooth interactions
// ============================================

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Console message
const consoleColor = htmlElement.getAttribute('data-theme') === 'dark' ? '#e8e8e8' : '#2a2a2a';
console.log(`%c🔧 Muhammed Basheer`, `color: ${consoleColor}; font-size: 20px; font-weight: bold;`);
console.log('%cBuild. Break. Repeat.', 'color: #666; font-size: 14px; font-style: italic;');
console.log(`%cWelcome to basheer.diy 🚀`, `color: ${consoleColor}; font-size: 14px;`);

// Cursor Trail Effect
let lastParticleTime = 0;
const particleInterval = 50; // Create particle every 50ms

function createParticle(x, y) {
  const now = Date.now();

  // Throttle particle creation
  if (now - lastParticleTime < particleInterval) return;
  lastParticleTime = now;

  // Create particle
  const particle = document.createElement('div');
  particle.className = 'cursor-particle';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';

  // Random wiggle offset
  const wiggleX = (Math.random() - 0.5) * 20;
  const wiggleY = (Math.random() - 0.5) * 20;
  particle.style.setProperty('--tx', `${wiggleX}px`);
  particle.style.setProperty('--ty', `${wiggleY}px`);

  document.body.appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 800);
}

// Mouse event for desktop
document.addEventListener('mousemove', (e) => {
  createParticle(e.clientX, e.clientY);
});

// Touch events for mobile devices
document.addEventListener('touchmove', (e) => {
  if (window.innerWidth > 480) { // Only on tablets, not small phones
    const touch = e.touches[0];
    createParticle(touch.clientX, touch.clientY);
  }
}, { passive: true });
