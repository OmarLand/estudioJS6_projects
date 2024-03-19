// 5 Switch multiples condiciones:

const metodoDePago = "efectivo";

switch (metodoDePago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;

  case "efectivo":
    console.log("Pagaste con efectivo");
    break;

  case "cheque":
    console.log("Pagaste con un cheque");
    break;
  default:
  console.log("Metodo de pago no valido");
}