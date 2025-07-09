document.addEventListener("DOMContentLoaded", function () {
  // Verificamos si estamos en compras.html (botón y contenedor existen)
  const cdsContainer = document.getElementById("cds");
  const vinilosContainer = document.getElementById("vinilos");
  const listaCarrito = document.getElementById("lista-carrito");
  const contador = document.getElementById("contador");
  const btnVaciar = document.getElementById("vaciar");
  const btnFinalizar = document.getElementById("finalizar");

  if (!cdsContainer || !vinilosContainer || !listaCarrito || !contador) {
    return; // Evitamos errores si este JS se carga en otra página
  }

  const token = "kiJohdJSkzxvdsbkvsMXAMzTzCYENNFDdRHncKel";
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Cargar discos desde la API
  function obtenerDiscos(formato, contenedor) {
    const url = `https://api.discogs.com/database/search?artist=Juanjo+Dominguez&type=release&format=${formato}&per_page=10&page=1&token=${token}`;

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        data.results.forEach(function (item) {
          fetch(`https://api.discogs.com/releases/${item.id}?token=${token}`)
            .then(function (res) {
              return res.json();
            })
            .then(function (disco) {
              if (!disco.lowest_price) return;

              const div = document.createElement("div");
              div.className = "item-disco";
              div.innerHTML = `
                <img src="${disco.images?.[0]?.uri || item.thumb}" alt="${disco.title}" width="150">
                <h3>${disco.title}</h3>
                <p><strong>Año:</strong> ${disco.year || "Desconocido"}</p>
                <p><strong>Precio:</strong> $${disco.lowest_price}</p>
                <button class="agregar">Agregar al carrito</button>
                <button class="temas">🎵 Ver temas</button>
              `;

              // Agregar al carrito
              div.querySelector(".agregar").addEventListener("click", function () {
                carrito.push({
                  titulo: disco.title,
                  precio: disco.lowest_price,
                });
                localStorage.setItem("carrito", JSON.stringify(carrito));
                actualizarCarrito();
              });

              // Ver lista de temas
              div.querySelector(".temas").addEventListener("click", function () {
                let temas = disco.tracklist?.map(function (t) {
                  return "🎶 " + t.title + " (" + t.duration + ")";
                }).join("\n") || "Sin datos disponibles";
                alert("Temas de \"" + disco.title + "\":\n\n" + temas);
              });

              contenedor.appendChild(div);
            });
        });
      })
      .catch(function (error) {
        console.error("Error al cargar discos:", error);
      });
  }

  // Mostrar los discos al cargar
  obtenerDiscos("CD", cdsContainer);
  obtenerDiscos("Vinyl", vinilosContainer);

  // Actualizar carrito
  function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(function (item, index) {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.titulo} - $${item.precio}
        <button class="eliminar" data-index="${index}">✕</button>
      `;
      listaCarrito.appendChild(li);
      total += item.precio;
    });

    contador.textContent = carrito.length;

    const totalElemento = document.createElement("li");
    totalElemento.innerHTML = "<strong>Total: $" + total.toFixed(2) + "</strong>";
    listaCarrito.appendChild(totalElemento);

    const botonesEliminar = document.querySelectorAll(".eliminar");
    botonesEliminar.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const index = parseInt(btn.getAttribute("data-index"));
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        actualizarCarrito();
      });
    });
  }

  // Vaciar carrito
  if (btnVaciar) {
    btnVaciar.addEventListener("click", function () {
      carrito = [];
      localStorage.removeItem("carrito");
      actualizarCarrito();
    });
  }

  // Finalizar compra
  if (btnFinalizar) {
    btnFinalizar.addEventListener("click", function () {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      const total = carrito.reduce(function (suma, item) {
        return suma + item.precio;
      }, 0);
      alert("¡Gracias por tu compra!\nTotal: $" + total.toFixed(2));
      carrito = [];
      localStorage.removeItem("carrito");
      actualizarCarrito();
    });
  }

  actualizarCarrito(); // Mostrar el contenido si hay algo en el carrito
});
