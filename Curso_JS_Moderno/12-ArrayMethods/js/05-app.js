// Uso del .find()
const productos4 = [
    { nombre: "Altavoces", marca: "BOSE", precio: 85 },
    { nombre: "Teclado", marca: "logitech", precio: 25 },
    { nombre: "Mouse", marca: "Logitech", precio: 15 },
    { nombre: "Monitor 19i", marca: "BENQ", precio: 125 },
  ];
  
  //const buscar = productos4.find( producto => producto.nombre =='Teclado' )
  const buscar1 = productos4.find((producto) => producto.precio > 25);
  console.log("Filter: >", buscar1);