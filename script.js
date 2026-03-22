// Highlight menu item on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.sidebar ul li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});


const cvBtn = document.getElementById('cv-btn');
const cvMenu = document.getElementById('cv-menu');

cvBtn.addEventListener('click', () => {
  if (cvMenu.classList.contains('hidden')) {
    cvMenu.classList.remove('hidden');
    cvMenu.classList.add('visible');
  } else {
    cvMenu.classList.remove('visible');
    cvMenu.classList.add('hidden');
  }
});



const phrases = [
  "Hola, soy Margarita! Bienvenid@ a mi porfolio"
];

const typingElement = document.querySelector(".typing");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2000; // Pausa al terminar frase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);
