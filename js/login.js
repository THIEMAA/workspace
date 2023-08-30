function login() {
   
    // Obtenemos los valores ingresados en los campos de usuario y contraseña
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Verificamos si alguno de los campos está vacío
    if (username === "" || password === "") {
        alert("Por favor, complete ambos campos."); // Si al menos uno de los campos está vacío, mostramos una alerta al usuario
        return; // Salimos de la función para no continuar con el proceso
    }
    
   
    
    // Guardamos la información de la sesión en el almacenamiento local
    // Establecemos la clave "isLoggedIn" con el valor "true"
    localStorage.setItem("isLoggedIn", "true");

    // Almacenamos el nombre de usuario
    localStorage.setItem("username", username);   
    
    // Redireccionamos a la portada
    window.location.href = "index.html";
}

