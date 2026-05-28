const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const warnings = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailIn = email.value.trim();
  const passwordIn = password.value.trim();

  if (!isValidEmail(emailIn)) {
    showWarning("El email no es válido");
    return;
  }

  if (passwordIn.length < 8) {
    showWarning("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  if (emailIn === "juan.perez@gmail.com") { //para iniciar sesion en cliente
    redirectTo("/tienda/vista_cliente_2"); 
  } else if (emailIn === "seba.g@gmail.com") {  //para iniciar sesion en cliente
    redirectTo("/tienda/sesion_iniciada_exito_cliente");
  } else if (emailIn === "asdf123@gmail.com") {  //para iniciar sesion en cliente
    redirectTo("/tienda/sesion_iniciada_exito_cliente");
  } else {
    redirectTo("/tienda/IniciarSesion");
    showSuccessMessage("Enviado");
  }
});

function isValidEmail(emailIn) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return emailRegex.test(emailIn);
}

function showWarning(message) {
  warnings.innerHTML = message;
}

function showSuccessMessage(message) {
  warnings.innerHTML = message;
}

function redirectTo(url) {
  window.location.href = url;
}