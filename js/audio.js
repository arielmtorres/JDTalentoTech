// audio.js → Control de reproducción de audio por botón de parlante
document.addEventListener("DOMContentLoaded", () => {
  const btnMute = document.getElementById("btnMute");

  if (btnMute) {
    const audio = new Audio("./audio/inicio.mp3");
    audio.loop = true;

    let reproduciendo = false;

    btnMute.addEventListener("click", () => {
      if (reproduciendo) {
        audio.pause();
        btnMute.textContent = "🔇";
      } else {
        audio.play().catch(err => console.warn("El navegador bloqueó el autoplay:", err));
        btnMute.textContent = "🔉";
      }
      reproduciendo = !reproduciendo;
    });
  }
});
