
function agregarTarea() {
    let input = document.getElementById("tareaInput");
    let tareaTexto = input.value.trim();

    if (tareaTexto === "") {
        alert("⚠️ Escribe una tarea antes de agregarla.");
        return;
    }

    let lista = document.getElementById("listaTareas");

    // Crear nuevo elemento de lista
    let li = document.createElement("li");
    li.innerHTML = `${tareaTexto} <button class="eliminar" onclick="eliminarTarea(this)">X</button>`;

    lista.appendChild(li);
    input.value = ""; // Limpiar el input
}

function eliminarTarea(elemento) {
    elemento.parentElement.remove();
}
