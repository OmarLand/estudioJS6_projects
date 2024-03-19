//8 Detener la ejecucuón de un if con una función
const auth = true;
if (auth) {
  console.log( "Acceso permitido" );
}

function revisarPuntaje(calificacion) {
  const puntaje = calificacion;

  if (puntaje > 400) {
    console.log("Excelente");
    return;
  }
  if (puntaje > 300) {
    console.log("Buen puntaje... felicidades!");
    return;
  }
}