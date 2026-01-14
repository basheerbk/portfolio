// ============================================
// PORTFOLIO - Muhammad Basheer
// Minimal JavaScript for smooth interactions
// ============================================

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
console.log('%c🔧 Muhammed Basheer', 'color: #2a2a2a; font-size: 20px; font-weight: bold;');
console.log('%cBuild. Break. Repeat.', 'color: #666; font-size: 14px; font-style: italic;');
console.log('%cWelcome to basheer.diy 🚀', 'color: #2a2a2a; font-size: 14px;');
