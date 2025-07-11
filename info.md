Proyecto Final – Tienda Juanjo Domínguez    -  Descripción General

Este proyecto consiste en una tienda web dedicada a la figura del guitarrista Juanjo Domínguez, desarrollada como ejercicio práctico para Talento Tech.

Incluye:

Visualización de productos desde APIs externas.

Funcionalidad de carrito de compras utilizando localStorage.

Diseño adaptado a diferentes resoluciones.


APIs Consumidas

1. DummyJSON API
URL Base:
https://dummyjson.com/products

Uso en el proyecto:
Se utiliza para cargar productos de tipo “Remate – Pertenencias de colección Juanjo Domínguez” en la página remate.html.
Se filtran productos por ID específico para personalizar la selección.
Estos productos pueden agregarse al carrito, respetando el stock único por producto.

Página donde se utiliza:

remate.html

js/remate.js


Funcionalidades Implementadas
✅ Carga de productos desde API dummyjson.
✅ Botón "Agregar al carrito" con localStorage.
✅ Página de carrito que recupera desde localStorage y permite:

Vaciar carrito.

Finalizar compra (redirección al home).
✅ Carga de discos desde API Discogs en discografía, formato solo visual.




Además: 

2. Discogs API
URL Base:
https://api.discogs.com/database/search



Uso en el proyecto:
Se utiliza para mostrar la discografía de Juanjo Domínguez en formato CD y Vinilo, cargando dinámicamente los datos desde Discogs.

Token:
Autenticación mediante token personal.

Página donde se utiliza:

discografia.html

js/discografia.js

Importante: En está versión la discografía no hay funcionalidad de carrito, solo visualización de discos.

