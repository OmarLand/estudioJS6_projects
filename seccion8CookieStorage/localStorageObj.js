const portatil = {
    marca     : "acer",
    medida    : 15,
    precio    : 450,
    procesador: "core i5 11"
}

const portatilString = JSON.stringify(portatil);
console.log( portatilString );
localStorage.setItem("portatil", portatilString);

let portatilStorage = localStorage.getItem("portatil");
portatilStorage = JSON.parse( portatilStorage );
portatilStorage.precio = 355;

portatilStorage = JSON.stringify( portatilStorage );
localStorage.setItem("portatil", portatilStorage)

console.log( portatilStorage )