//6 Operador &&
const user = true;
const isAdmin = false;

if (user && isAdmin) {
  console.log("Puede ingresar con el SUDO");
} else {
  console.log("Acceso denegado");
}