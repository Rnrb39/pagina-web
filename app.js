// Lista de productos
const productos = [
  { id: 1, nombre: "Auriculares Inalámbricos", precio: 50, imagen: "assets/headphones-3683983_1280.jpg" },
  { id: 2, nombre: "Teclado Mecánico", precio: 80, imagen: "assets/keyboard-453795_1280.jpg" },
  { id: 3, nombre: "Mouse Gamer", precio: 40, imagen: "assets/mouse-5417888_1280.jpg" },
  { id: 4, nombre: "Cámara Web HD", precio: 60, imagen: "assets/web-cam-796227_1280.jpg" }
];

const listaProductos = document.getElementById("lista-productos");
const carrito = [];
const contadorCarrito = document.getElementById("contador-carrito");
const contenidoCarrito = document.getElementById("contenido-carrito");
const botonVaciar = document.getElementById("vaciar-carrito");

// Mostrar productos en la tienda
function cargarProductos() {
  productos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      listaProductos.appendChild(div);
  });
}

// Agregar productos al carrito
function agregarAlCarrito(id) {
  const producto = productos.find(prod => prod.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
  contenidoCarrito.innerHTML = "";
  carrito.forEach((prod, index) => {
      const div = document.createElement("div");
      div.classList.add("producto-carrito");
      div.innerHTML = `
          <p>${prod.nombre} - $${prod.precio}</p>
          <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
      `;
      contenidoCarrito.appendChild(div);
  });
  contadorCarrito.innerText = carrito.length;
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Vaciar carrito
botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
});

// Cargar productos al inicio
cargarProductos();
