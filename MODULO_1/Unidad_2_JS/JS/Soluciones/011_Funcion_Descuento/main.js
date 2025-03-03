function calculaDescuento(precio, descuento){
    let cantidadDescontar = precio * descuento / 100;
    let cantidadPagar = precio - cantidadDescontar;
    return cantidadPagar;
}

let precio = parseInt(prompt("Introduce el precio del producto"));
let descuento = parseInt(prompt("Introduce el descuento"));

let precioFinal = calculaDescuento(precio, descuento);

document.write(`
    El precio final del producto después de aplicar un descuento del ${descuento}% es: ${precioFinal} euros.
    `);