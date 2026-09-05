// ============================================================
// Menu mobile (burger)
// ============================================================
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

navToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Ferme le menu mobile après un clic sur un lien
primaryNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    primaryNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// Accordéon des prestations
// ============================================================
document.querySelectorAll('.service-toggle').forEach((toggle) => {
  const card = toggle.closest('.is-expandable');
  const details = card.querySelector('.service-details');

  toggle.addEventListener('click', () => {
    const isOpen = card.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    details.style.maxHeight = isOpen ? `${details.scrollHeight}px` : null;
  });
});

// ============================================================
// Année automatique dans le footer
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// Formulaire de contact -> ouverture du client mail (mailto)
// Aucune donnée n'est envoyée à un serveur : tout reste dans le navigateur.
// ============================================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const subject = contactForm.subject.value.trim() || 'Demande de contact - site web';
  const message = contactForm.message.value.trim();

  const body = `Nom / Société : ${name}\nEmail : ${email}\n\n${message}`;

  const destinataire = 'ymanizan@gmail.com';

  const mailtoLink = `mailto:${destinataire}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
});
