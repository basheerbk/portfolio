// ============================================
// UNDER CONSTRUCTION - JAVASCRIPT
// Scramble text effect and animations
// ============================================

// Scramble text effect
const scrambleText = document.getElementById('scrambleText');
const originalText = 'building something new';
const chars = 'abcdefghijklmnopqrstuvwxyz';

function scramble() {
  const textArray = originalText.split('');
  let iterations = 0;

  const interval = setInterval(() => {
    scrambleText.textContent = textArray
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < iterations) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    iterations += 1 / 3;

    if (iterations >= originalText.length) {
      clearInterval(interval);
      scrambleText.textContent = originalText;
    }
  }, 30);
}

// Start scramble effect after page load
window.addEventListener('load', () => {
  setTimeout(scramble, 1000);
});

// Re-scramble on hover
scrambleText.addEventListener('mouseenter', scramble);

// Random grid animation speed variation
const body = document.body;
setInterval(() => {
  const speed = 15 + Math.random() * 10;
  body.style.setProperty('--grid-speed', `${speed}s`);
}, 10000);

// Interactive Circuit
let circuitOn = false;
const switchElement = document.getElementById('switch');
const switchLine = document.getElementById('switchLine');
const bulbGlass = document.getElementById('bulbGlass');
const bulbGlow = document.getElementById('bulbGlow');
const filament = document.getElementById('filament');
const wires = document.querySelectorAll('.wire');
const electrons = [
  document.getElementById('electron1'),
  document.getElementById('electron2'),
  document.getElementById('electron3')
];

switchElement.addEventListener('click', () => {
  circuitOn = !circuitOn;

  if (circuitOn) {
    // Close switch
    switchLine.classList.add('closed');
    switchLine.classList.remove('open');

    // Turn on bulb
    bulbGlass.classList.add('on');
    bulbGlow.classList.add('on');
    filament.classList.add('on');

    // Activate wires
    wires.forEach(wire => wire.classList.add('active'));

    // Start electron flow
    electrons.forEach((electron, index) => {
      electron.setAttribute('opacity', '1');
      const anim = electron.querySelector('animateMotion');
      anim.beginElement();
    });
  } else {
    // Open switch
    switchLine.classList.remove('closed');
    switchLine.classList.add('open');

    // Turn off bulb
    bulbGlass.classList.remove('on');
    bulbGlow.classList.remove('on');
    filament.classList.remove('on');

    // Deactivate wires
    wires.forEach(wire => wire.classList.remove('active'));

    // Stop electron flow
    electrons.forEach(electron => {
      electron.setAttribute('opacity', '0');
    });
  }
});

// Console message
console.log('%c🔧 basheer.diy', 'color: #00ff88; font-size: 20px; font-weight: bold;');
console.log('%cCurrently under construction...', 'color: #808080; font-size: 14px;');
console.log('%cBuilding something new 🚀', 'color: #00ff88; font-size: 14px;');
console.log('%c💡 Try clicking the circuit switch!', 'color: #00ff88; font-size: 12px;');
