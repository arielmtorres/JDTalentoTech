// Código JavaScript para manejar el remate de productos
document.addEventListener("DOMContentLoaded", () => {
  // Si existe el contenedor de productos, cargamos remate
  const contenedor = document.getElementById("contenedor-productos");
  if (contenedor) {
    cargarProductosRemate(contenedor);
  }

  // Actualizar el contador siempre al cargar cualquier página
  actualizarContadorCarrito();
});

// Función para cargar productos de remate usando DummyJSON y agregar al HTML
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
          alert(`Agregaste al carrito: ${producto.title}`);
          actualizarContadorCarrito();
        });

        contenedor.appendChild(card);
      })
      .catch(err => console.error("Error al cargar producto:", err));
  });
}

// Función para agregar productos al carrito usando localStorage
function agregarAlCarrito(producto) {
  const key = "carrito_remate";
  let carrito = JSON.parse(localStorage.getItem(key)) || [];
  carrito.push(producto);
  localStorage.setItem(key, JSON.stringify(carrito));
}



// Función global para actualizar el contador del carrito en el menú
function actualizarContadorCarrito() {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    const carrito = JSON.parse(localStorage.getItem("carrito_remate")) || [];
    contador.textContent = carrito.length;
  }
}


