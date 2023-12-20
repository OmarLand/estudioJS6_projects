
//console.log("Hola salgo primero!!!");

//setTimeout( () =>{
//  console.log("Salgo despues de 2 segundos");
//},2000 )

//console.log( "Uso del Map" );

let arreglos = [1,2,3,4,5];

let product = arreglos.map( ( numero ) => {
  return numero * 2;
} )

// console.log( product );


//console.log( "uso del filter" );

let nombres = ["Omar", "Luis", "Omaira", "Liomarys", "Omarilys", "Pruebas"]

let nombresFiltrados = nombres.filter( ( nombre ) =>{
  return nombre.length <= 8 ;
} );

// console.log( `El nombre filtrado es el: ${nombresFiltrados}` );

// console.log("Gestionando un archivo .Json");

// Convirtiendo un objeto a JSON usamos JSON.stringify(value)

// const coche = {
//   marca : "Audi",
//   anio  : 2012,
//   color : "Gris",
//   precio: 120500
// }

// console.log( "El coche como objeto: ", coche );

// const cocheJson = JSON.stringify(coche);

// console.log( "El coche como un JSON: ", cocheJson );


// Convirtiendo un JSON a un objeto usamos JSON.parse(value)

const cocheJson = `{
  "marca"  :"Audi",
  "anio"   :2012,
  "color"  :"Gris",
  "precio" :120500
}`;

//console.log("Este es el JSON recibido... ", cocheJson);

const jsonRecibidoObjeto = JSON.parse(cocheJson);
//console.log("El JSON convertido a Objeto: ", jsonRecibidoObjeto);

// Gestionando el valor de NEW para objetos con tipo:

function Animal(tipo, nombre, edad) {
  this.tipo   = tipo;
  this.nombre = nombre;
  this.edad   = edad;
}

let pelusa = new Animal("Perro","Pelusa",10);
let balto = new Animal("Oso", "Balto", 5);

//console.log( "Pelusa ", pelusa );
//console.log( "Balto: ", balto );

// Uso del Async y el Await
let nombre = null;

function actualizarNombre(){
  console.log("Actualizacion de nombre empieza.");

  return new Promise( resolve =>{

    setTimeout(() => {
      console.log("Actualización completada!");
      resolve('Omar')
    }, 2000);
    
  }

  )
}


async function saludar(){
  nombre = await actualizarNombre();
  console.log("Actualización Finalizada!");
  console.log("Hola me llamo:", nombre)
}


saludar();