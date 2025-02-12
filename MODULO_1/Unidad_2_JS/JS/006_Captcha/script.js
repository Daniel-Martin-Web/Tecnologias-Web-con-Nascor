document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let captcha = parseInt(document.getElementById("captcha").value);

    if (captcha === 14) { // 5 + 9 = 14
        alert("¡Login exitoso! Bienvenido " + username);
        
    } else {
        alert("Error: Respuesta incorrecta. Inténtalo de nuevo.");
        window.location.reload(); 
    }
});
