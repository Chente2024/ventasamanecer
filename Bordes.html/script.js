let slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].style.display = 'none'; // Oculta la actual
  current = (current + 1) % slides.length; // Avanza
  slides[current].style.display = 'block'; // Muestra la nueva
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos


