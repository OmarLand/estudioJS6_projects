// Uso del metodo .filter()
const productos3 = [
    { nombre: "Altavoces", marca: "BOSE", precio: 85 },
    { nombre: "Teclado", marca: "logitech", precio: 25 },
    { nombre: "Mouse", marca: "Logitech", precio: 15 },
    { nombre: "Monitor 19i", marca: "BENQ", precio: 125 },
  ];
  
  resultado = productos3.filter((producto) => producto.marca == "BOSE");
  console.log( resultado );
  
  resultado = productos3.filter((producto) => producto.precio > 25);
  console.log( resultado );