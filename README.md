# 🎸 Proyecto Final – Tienda Juanjo Domínguez

**Descripción general**  
Este proyecto es una tienda web dedicada al gran guitarrista argentino **Juanjo Domínguez**, desarrollada como ejercicio práctico para **Talento Tech**.

Combina el consumo de APIs externas con funcionalidades de carrito, adaptabilidad responsive y un enfoque temático único que homenajea su legado musical.

---

## 📦 Funcionalidades principales

- ✅ Carga de productos desde la API [DummyJSON](https://dummyjson.com/products).
- ✅ Visualización dinámica de discos desde la API [Discogs](https://api.discogs.com).
- ✅ Carrito de compras funcional utilizando `localStorage`.
- ✅ Diseño adaptable (responsive) para distintos dispositivos.
- ✅ Navegación fluida entre secciones como *Inicio*, *Remate*, *Discografía* y *Carrito*.

---

## 🛍️ Remate – Pertenencias de colección

Sección que simula la venta de objetos personales relacionados a Juanjo Domínguez.

- **API utilizada**: [DummyJSON](https://dummyjson.com/products)
- **Página**: `remate.html`
- **JS**: `js/remate.js`

### 🔧 Detalles técnicos:

- Se filtran productos por ID específico.
- Los productos muestran información personalizada.
- Cada artículo respeta el stock único (no se puede comprar más de uno).
- Funcionalidad de agregar al carrito con persistencia en `localStorage`.

---

## 💿 Discografía – CD y Vinilo

Sección que muestra la discografía disponible de Juanjo Domínguez, dividida en formatos.

- **API utilizada**: [Discogs](https://api.discogs.com/database/search)
- **Autenticación**: Mediante token personal.
- **Página**: `discografia.html`
- **JS**: `js/discografia.js`

### 📌 Nota:
> En esta versión, la discografía es **solo visual**, sin integración con el carrito,
 ya que la API a consumir con carrito era de Dummy Json. 
---

## 🛒 Carrito de compras

- Recupera productos desde `localStorage`.
- Permite:
  - Ver resumen de compra.
  - Vaciar carrito.
  - Finalizar compra (redirige al inicio).

---

## 📱 Diseño responsive

El sitio está diseñado para adaptarse correctamente a:

- Pantallas de escritorio
- Tablets
- Dispositivos móviles

---

## 🔧 Tecnologías utilizadas

- HTML, CSS, JavaScript
- APIs REST (DummyJSON, Discogs)
- `localStorage` para persistencia del carrito

---

## 📂 Estructura principal del proyecto

```plaintext
.
├── index.html
├── remate.html
├── discografia.html
├── carrito.html
├── js/
│   ├── remate.js
│   ├── discografia.js
│   └── carrito.js
├── css/
│   └── estilos.css
└── assets/
    └── img/
```

---

## 📝 Créditos

Proyecto desarrollado por **Ariel Torres** como trabajo final del curso *Talento Tech* .

Inspirado en la vida y obra del maestro **Juanjo Domínguez**.
