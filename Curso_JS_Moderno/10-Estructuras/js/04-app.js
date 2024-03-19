// 4 Mayor o Igual y else if
const money = 1000;
const totalToPay = 500;
const tarjeta = false;

if (totalToPay <= money) {
  console.log("Lo puedo Pagar");
} else if (tarjeta) {
  console.log("Lo puego comprar porque tengo tarjeta");
} else {
  console.log("Fondos insuficientes");
}
