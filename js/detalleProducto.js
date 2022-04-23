let productoAMostrarDelStorage = JSON.parse(localStorage.getItem("productoAMostrar"));
document.getElementById("imgProducto").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("precioProducto").innerHTML = `${productoAMostrarDelStorage.precio} ARS`;
document.getElementById("nombreProducto").innerHTML = productoAMostrarDelStorage.titulo;
document.getElementById("botonAgregarAlCarrito").innerHTML = `<button type="button" onclick="agregarAlCarrito('${productoAMostrarDelStorage.titulo}')" class="btn btn-dark boton-compra">
    AGREGAR AL CARRITO 
</button>`;