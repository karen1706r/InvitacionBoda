document.addEventListener("DOMContentLoaded", function () {
  function updateCountdown() {
    const weddingDate = new Date("June 29, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = `
        <div class="gran-dia">¡Es el gran día! 🎉</div>
      `;

      document.querySelector(".countdown-container h2").style.display = "none";

      lanzarConfetti(); // 🎊 Activa la animación de confetti
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
  
  // 🎊 Generando confetti en caída animada
  function lanzarConfetti() {
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
      let confettiPiece = document.createElement("div");
      confettiPiece.classList.add("confetti");
      confettiPiece.style.setProperty("--hue", Math.random() * 360);
      confettiPiece.style.left = `${Math.random() * 100}vw`;
      confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;

      confettiContainer.appendChild(confettiPiece);
    }
  }
});


//Carrusel fotos
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const dots = document.querySelectorAll('.dot');

let index = 0;
let autoPlayInterval;

// Actualiza el carrusel
function updateCarousel() {
  carousel.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// Avanzar automáticamente cada 3 segundos
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
  }, 2000);
}

// Detener autoplay temporalmente al interactuar
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  setTimeout(startAutoPlay, 5000); // Reinicia después de 5s
}

// Eventos de los botones
prevButton.addEventListener('click', () => {
  stopAutoPlay();
  index = index > 0 ? index - 1 : images.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  stopAutoPlay();
  index = (index + 1) % images.length;
  updateCarousel();
});

// Eventos de los puntos
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    stopAutoPlay();
    index = i;
    updateCarousel();
  });
});

// Iniciar autoplay al cargar la página
startAutoPlay();

