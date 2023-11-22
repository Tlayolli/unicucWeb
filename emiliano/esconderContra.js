// boton para mostrar u ocultar la contraseña
function togglePassword() {
  const contrasenaInput = document.getElementById("contrasena");
  const botonContrasena = document.getElementById("botonContrasena");

  if (contrasenaInput.type === "password") {
    contrasenaInput.type = "text";
    botonContrasena.textContent = "Ocultar contraseña";
  } else {
    contrasenaInput.type = "password";
    botonContrasena.textContent = "Mostrar contraseña";
  }
}
