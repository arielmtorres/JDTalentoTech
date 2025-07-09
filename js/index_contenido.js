function cargarComponente(ruta) {
  const main = document.querySelector("main");

  fetch(ruta)
    .then(res => res.text())
    .then(html => {
      main.innerHTML = html;

      if (ruta.includes("home.html")) {
        setTimeout(() => {
          // 🎵 Confirmar si el usuario desea escuchar música
          const deseaEscuchar = confirm("¿Desea escuchar 'Flores negras' por Juanjo Domínguez?");
          const audio = new Audio("./audio/inicio.mp3");
          audio.loop = true;

          if (deseaEscuchar) {
            audio.play().catch(err => {
              console.warn("🎵 Error al reproducir audio:", err);
            });
          }

          // 🔉 Botón flotante para silenciar o reanudar
          let muteBtn = document.getElementById("btnMute");

          if (!muteBtn) {
            muteBtn = document.createElement("button");
            muteBtn.id = "btnMute";
            muteBtn.textContent = "🔈";
            muteBtn.className = "btn-audio-flotante";
            document.body.appendChild(muteBtn);
          } else {
            muteBtn.textContent = "🔈";
          }

          muteBtn.onclick = () => {
            audio.muted = !audio.muted;
            muteBtn.textContent = audio.muted ? "🔇" : "🔈";
          };

        }, 300); // Esperamos que se renderice todo antes de manipular DOM
      }
    })
    .catch(err => {
      console.error("❌ Error al cargar componente:", err);
      main.innerHTML = "<p>Error al cargar el contenido.</p>";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarComponente("./componentes/home.html");
});



