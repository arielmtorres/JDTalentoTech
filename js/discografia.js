document.addEventListener("DOMContentLoaded", () => {
  const token = "kiJohdJSkzxvdsbkvsMXAMzTzCYENNFDdRHncKel";
  const contenedor = document.getElementById("contenedor-discos");

  const formatos = ["CD", "Vinyl"];

  formatos.forEach(formato => {
    const url = `https://api.discogs.com/database/search?artist=Juanjo+Dominguez&type=release&format=${formato}&per_page=5&page=1&token=${token}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (!data.results) {
          console.warn("No se encontraron discos", formato);
          return;
        }

        data.results.forEach(item => {
          const card = document.createElement("article");
          card.classList.add("item-disco");

          card.innerHTML = `
            
             <h3>${item.title}</h3>
             <img src="${item.cover_image}" alt="${item.title}">
             <p>${item.format.join(", ")}</p>
          `;

          contenedor.appendChild(card);
        });
      })
      .catch(err => console.error("Error al cargar discografía:", err));
  });
});
