let matriz = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];
//Punto 1.a
console.log("Número 3 en la matriz: ", matriz[0][2]); // 3
console.log("Número 5 en la matriz: ", matriz[1][1]); // 5
//Punto 1.b
document.write("\n Imprime el numero 3 y 5 \n <br>"+ matriz[0][2] + " <br>" + matriz[1][1] + "<br>");
//Punto 2
document.write("\n Matriz original:");
matriz.forEach(fila => {
    document.write(`<p>${fila.join(" ")}</p>`); 
});
//Punto 3
document.write("\n Matriz con múltiplos de 3 reemplazados:");
matriz.forEach(fila => {
    let nuevaFila = fila.map(num => num % 3 === 0 ? "m" : num); 
    document.write(`<p>${nuevaFila.join(" ")}</p>`);
});