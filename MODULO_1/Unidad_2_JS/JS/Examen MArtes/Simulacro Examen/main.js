document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    let estudios = document.getElementById("estudios").value;

    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let mes = hoy.getMonth() - fechaNacimiento.getMonth();
    let dia = hoy.getDate() - fechaNacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }

    let infoUsuario = document.getElementById("infoUsuario");

    if (edad < 18) {
        infoUsuario.innerHTML = `<p style="color:red; font-weight: bold;"> Debes ser mayor de edad.</p>`;
    } else {
        infoUsuario.innerHTML = `
        <h2> Datos introducidos en el Formulario: </h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento.toLocaleDateString()}</p>
            <p><strong>Estudios:</strong> ${estudios}</p>
            <p><strong>Edad:</strong> ${edad} años</p>
        `;
    }
});