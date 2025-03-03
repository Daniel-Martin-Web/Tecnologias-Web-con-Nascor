function calcularMedia(notas) {
    let suma = notas.reduce((total, nota) => total + nota, 0);
    return (suma / notas.length).toFixed(2); // Redondea a 2 decimales
}

function obtenerCalificacion(media) {
    if (media < 5) return "Suspenso";
    if (media < 6) return "Suficiente";
    if (media < 7) return "Bien";
    if (media < 8) return "Notable";
    return "Sobresaliente";
}

function solicitarNotas() {
    let nombre = prompt("Inserta el nombre del alumno:");
    let notas = [];

    do {
        nombre = prompt("Inserta el nombre del alumno:");
        if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre) || !nombre.trim()) {
            alert("⚠️ Debes ingresar un nombre válido (solo letras y espacios).");
        }
    } while (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre) || !nombre.trim()); 

    for (let i = 1; i <= 5; i++) {
        let nota;
        do {
            nota = parseFloat(prompt(`Inserta la nota ${i}:`));
        } while (isNaN(nota) || nota < 0 || nota > 10); // Validación de entrada
        notas.push(nota);
    }


    let media = calcularMedia(notas);
    let calificacion = obtenerCalificacion(media);

    // Mostrar resultados en la página
    document.body.innerHTML = `
        <h2>Resultados del alumno</h2>
        <p><strong>Nombre del alumno:</strong> ${nombre}</p>
        ${notas.map((nota, i) => `<p><strong>Nota ${i + 1}:</strong> ${nota}</p>`).join('')}
        <p><strong>Media:</strong> ${media}</p>
        <p><strong>Nota final:</strong> ${calificacion}</p>
    `;
}

// Ejecutar el programa
solicitarNotas();
