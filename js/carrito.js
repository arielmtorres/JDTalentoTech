document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-carrito");
  const acciones = document.getElementById("acciones-carrito");
  const totalCarrito = document.getElementById("total-carrito");

  function renderizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
    contenedor.innerHTML = "";

    if (!carrito.length) {
      contenedor.innerHTML = "<p>No hay productos en el carrito de remate.</p>";
      totalCarrito.textContent = "";
      actualizarContadorCarrito();
      return;
    }

    let total = 0;
    carrito.forEach((producto, index) => {
      const tarjeta = document.createElement("article");
      tarjeta.classList.add("item-disco");
      tarjeta.innerHTML = `
        <img src="${producto.images[0]}" alt="${producto.title}">
        <h3>${producto.title}</h3>
        <p>Precio: $${producto.price}</p>
        <button data-index="${index}">Eliminar</button>
      `;
      tarjeta.querySelector("button").addEventListener("click", () => {
        eliminarProducto(index);
      });
      contenedor.appendChild(tarjeta);
      total += producto.price;
    });

    totalCarrito.textContent = "Total: $" + total.toFixed(2);
    actualizarContadorCarrito();
  }

  function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito_remate", JSON.stringify(carrito));
    renderizarCarrito();
  }

  function vaciarCarrito() {
    localStorage.removeItem("carrito_remate");
    renderizarCarrito();
  }

  function finalizarCompra() {
    let carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
    if (carrito.length === 0) {
      alert("Seleccione un producto en el remate.");
      return;
    }
    alert("Gracias por apoyar el legado de Juanjo Domínguez 🙏");
    localStorage.removeItem("carrito_remate");
    window.location.href = "../index.html";
  }

  function renderizarBotones() {
    acciones.innerHTML = "";
    const btnVaciar = document.createElement("button");
    btnVaciar.textContent = "Vaciar carrito";
    btnVaciar.addEventListener("click", vaciarCarrito);
    const btnFinalizar = document.createElement("button");
    btnFinalizar.textContent = "Finalizar compra";
    btnFinalizar.addEventListener("click", finalizarCompra);
    acciones.appendChild(btnVaciar);
    acciones.appendChild(btnFinalizar);
  }

  function actualizarContadorCarrito() {
    const contadorIcono = document.getElementById("contador-carrito");
    if (contadorIcono) {
      const carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
      contadorIcono.textContent = carrito.length;
    }
  }

  renderizarCarrito();
  renderizarBotones();
});
