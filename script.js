// ── Scroll Reveal ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Hamburger Menu ──
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
    });
  });
}



// ── Photo lightbox ──
const photos = document.querySelectorAll('.hero-image img, .photo-grid img, .photo-single img, .print img');

if (photos.length) {
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Expanded photo');
  box.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close photo">×</button><img alt="">';
  document.body.appendChild(box);

  const full = box.querySelector('img');
  const closeBtn = box.querySelector('.lightbox-close');
  let lastPhoto = null;
  let openedAt = 0;

  function openPhoto(img) {
    lastPhoto = img;
    full.src = img.currentSrc || img.src;
    full.alt = img.alt || '';
    box.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    openedAt = Date.now();
    closeBtn.focus();
  }

  function closePhoto() {
    box.classList.remove('is-open');
    full.removeAttribute('src');
    document.body.style.overflow = '';
    if (lastPhoto) lastPhoto.focus();
  }

  photos.forEach(img => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.addEventListener('click', () => openPhoto(img));
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPhoto(img);
      }
    });
  });

  closeBtn.addEventListener('click', event => {
    event.stopPropagation();
    closePhoto();
  });
  box.addEventListener('click', event => {
    if (Date.now() - openedAt < 400) return;
    if (event.target === box) closePhoto();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && box.classList.contains('is-open')) closePhoto();
  });
}

// ── Contact Form ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = 'Message Sent ✓';
  btn.style.background = '#2d7a4f';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}
