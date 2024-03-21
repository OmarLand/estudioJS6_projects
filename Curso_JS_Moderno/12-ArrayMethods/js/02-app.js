// Uso del método .findIndex()

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

const productos1 = [
  { nombre: "Altavoces", marca: "BOSE", precio: 85 },
  { nombre: "Teclado", marca: "logitech", precio: 25 },
  { nombre: "Mouse", marca: "Logitech", precio: 15 },
  { nombre: "Monitor 19i", marca: "BENQ", precio: 125 },
];

// Una forma de buscar el indice
const checkMonth = meses.forEach((mes, index) => {
  if (mes === "Marzo") {
    console.log(`El mes de ${mes}, su indice es: ${index}`);
  }
});

// Usamos el metodo .findIndex() para ubicar el indice;
const index = meses.findIndex((mes) => mes === "Marzo");
console.log(`Usando findIndex: ${index}`);