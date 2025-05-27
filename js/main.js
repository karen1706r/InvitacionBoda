document.addEventListener("DOMContentLoaded", function () {
  function updateCountdown() {
    const weddingDate = new Date("June 29, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown").innerHTML = `
        <div class="gran-dia">¡Es el gran <br> día!</div>
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
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: false,
  navigation: false,
  effect: "slide",
  speed: 800,
  observer: true,
  observeParents: true,
});


