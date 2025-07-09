Este proyecto es una página web desarrollada en HTML, CSS y JavaScript, dedicada al gran guitarrista argentino Juanjo Domínguez, donde se presenta su historia, discografía, material audiovisual y un formulario de contacto. Además, incluye una sección interactiva de compras conectada a una API externa.

🔗 Integración con API - Discografía Dinámica
La sección de compras del sitio se conecta con la API pública de Discogs, una plataforma internacional especializada en la catalogación de música.


Se utiliza para consultar automáticamente los lanzamientos musicales de Juanjo Domínguez, filtrando por formato (CD o vinilo) y obteniendo en tiempo real:

📀 Título del disco

📅 Año de publicación

💵 Precio más bajo disponible

🎼 Lista de temas

🖼️ Imagen de portada


  El archivo compras_api.js realiza consultas a la API de Discogs utilizando fetch() con un token de autenticación. Los resultados se cargan dinámicamente en el sitio para que el usuario pueda:

    Ver discos disponibles

    Consultar detalles y temas

    Agregar discos a un carrito de compras simulado con localStorage


📄 Estructura del Sitio
Sitio de tipo one-page con navegación por anclas (#id), dividido en:

Encabezado (<header>)

Título y menú de navegación fijo.

Inicio (#inicio)

Biografía breve y foto destacada.

Discografía / Compras (compras.html)

Conectada a la API de Discogs para mostrar discos reales.

Carrito funcional con botones y confirmaciones.

Video (#video)

Reproductor embebido desde YouTube.

Consultas (#consultas)

Formulario de contacto básico.

Footer (<footer>)

Créditos y navegación secundaria.


🎨 Estilos (CSS)

Uso de variables CSS (:root) para colores y tipografías.

Diseño responsive con media queries.

Distribución por Flexbox y Grid.

Efectos suaves de hover en botones y sombras en tarjetas.

Carrito con estilo fijo y destacado, ajustable por z-index.



🛠️ Tecnologías utilizadas

HTML5, CSS3

JavaScript nativo (fetch, localStorage)

Google Fonts

API de Discogs

Responsive Design (Flexbox, Grid, Media Queries)


📁 Archivos principales

index.html: estructura base del sitio.

compras.html: sección de discografía dinámica.

style.css: estilos personalizados y organizados.

compras_api.js: integración con la API y lógica del carrito.


👤 Autor del sitio

Torres Ariel Mauricio
Proyecto académico realizado en el marco de Talento Tech - Front End JS
C25013
Docentes : Gabriel Munoz / Belén Romero   
