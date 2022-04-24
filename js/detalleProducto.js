let productoAMostrarDelStorage = JSON.parse(localStorage.getItem("productoAMostrar"));
document.getElementById("imgProducto").innerHTML = `<img src="../assets/${productoAMostrarDelStorage.imagen}.jpg" class="mx-auto d-block w-100" alt="${productoAMostrarDelStorage.titulo}">`;
document.getElementById("precioProducto").innerHTML = `${productoAMostrarDelStorage.precio} ARS`;
document.getElementById("nombreProducto").innerHTML = productoAMostrarDelStorage.titulo;
document.getElementById("inputCantidad").innerHTML = `<input class="my-2" value="1" min="1" id="cantidad-${productoAMostrarDelStorage.id}" type="number" placeholder="cantidad">`
document.getElementById("botonAgregarAlCarrito").innerHTML = `<button type="button" onclick="agregarAlCarrito('${productoAMostrarDelStorage.titulo}')" class="btn btn-dark boton-compra">
    AGREGAR AL CARRITO 
</button>`;
document.getElementById("botonEliminar").innerHTML= `<button type="button" onclick="eliminar('${productoAMostrarDelStorage.titulo}')" class="btn btn-danger boton-compra">
ELIMINAR
</button>`