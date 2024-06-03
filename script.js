let itemCounter = 0; // Contador para el ítem de cada producto
let cantidadTotal = 0; // Variable para almacenar la cantidad total de productos ingresados

function agregarProducto() {
    const categoria = document.getElementById("categoria").value;
    const producto = document.getElementById("producto").value;
    const precio = document.getElementById("precio").value;
    const fecha = document.getElementById("fecha").value;
    const cantidad = document.getElementById("cantidad").value;

    const tabla = document.getElementById("productosAgregados");
    const fila = document.createElement("tr");

    itemCounter++; // Incrementar el contador de ítems

    // Crear celdas para cada columna
    fila.innerHTML = `
        <td>${itemCounter}</td>
        <td>${categoria}</td>
        <td>${producto}</td>
        <td>${precio}</td>
        <td>${fecha}</td>
        <td>${cantidad}</td>
        <td><button onclick="venderProducto(this)">Vender</button></td>
    `;

    // Agregar fila a la tabla
    tabla.appendChild(fila);

    // Incrementar la cantidad total de productos ingresados
    cantidadTotal += parseInt(cantidad);

    // Actualizar el valor del textbox de cantidad ingresados
    document.getElementById("cantidadIngresados").value = cantidadTotal;
}

function venderProducto(boton) {
    // Obtener la fila correspondiente al producto
    const fila = boton.parentNode.parentNode;
    const cantidadVendida = parseInt(fila.querySelector("td:nth-child(6)").innerText); // La sexta celda contiene la cantidad

    // Si hay al menos un producto disponible
    if (cantidadVendida > 0) {
        // Disminuir la cantidad disponible
        fila.querySelector("td:nth-child(6)").innerText = cantidadVendida - 1;

        // Disminuir la cantidad total de productos ingresados
        cantidadTotal--;

        // Actualizar el valor del textbox de cantidad ingresados
        document.getElementById("cantidadIngresados").value = cantidadTotal;
    } else {
        alert("No hay suficientes productos para vender.");
    }
}

