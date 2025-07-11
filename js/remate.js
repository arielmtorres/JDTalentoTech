document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos");
  if (contenedor) {
    cargarProductosRemate(contenedor);
  }
  actualizarContadorCarrito();
});

function cargarProductosRemate(contenedor) {
  const productosIDs = [11, 12, 13, 14, 43, 47, 95];
  contenedor.innerHTML = "";

  productosIDs.forEach(id => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(producto => {
        const card = document.createElement("article");
        card.classList.add("item-disco");
        card.innerHTML = `
          <img src="${producto.images[0]}" alt="${producto.title}">
          <h3>${producto.title}</h3>
          <p><strong>Remate:</strong> $${producto.price}</p>
          <button>Agregar al carrito</button>
        `;

        const btn = card.querySelector("button");
        btn.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });

        contenedor.appendChild(card);
      });
  });
}

function agregarAlCarrito(producto) {
  let carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
  const existe = carrito.some(item => item.id === producto.id);
  if (!existe) {
    carrito.push(producto);
    localStorage.setItem("carrito_remate", JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert(`Agregaste al carrito: ${producto.title}`);
  } else {
    alert("Ya agregaste este producto al carrito.");
  }
}

function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    const carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
    contador.textContent = carrito.length;
  }
}
