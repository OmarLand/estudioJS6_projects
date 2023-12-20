let nombre = "Omar"
let apellido = "Landaeta"
let edad = 34;

localStorage.setItem( "nombre", nombre );
localStorage.setItem( "apellido", apellido );
localStorage.setItem( "edad", edad );

console.log( localStorage.getItem( "nombre" ) );
console.log( localStorage.getItem( "apellido" ) );
console.log( localStorage.getItem( "edad" ) );

localStorage.removeItem("edad")
localStorage.setItem("edad", 45)

console.log( localStorage.getItem( "nombre" ) );
console.log( localStorage.getItem( "apellido" ) );
console.log( localStorage.getItem( "edad" ) );
