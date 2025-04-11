let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const totalSpan = document.getElementById('total');
    lista.innerHTML = '';

    let total = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
        total += item.precio;
    });

    totalSpan.textContent = `$${total.toLocaleString()}`;
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function procesarPago(event) {
    event.preventDefault();
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    carrito = [];
    actualizarCarrito();
    document.getElementById('mensaje-pago').textContent = '✅ Pago procesado con éxito. ¡Gracias por tu compra!';
}
