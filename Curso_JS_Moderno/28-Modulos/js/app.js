import miNuevaFuncion,{nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import { Empresa } from './empresa.js';

miNuevaFuncion();

console.log( nombreCliente, ahorro );

console.log( mostrarInformacion('nombre', 'ahorro') );
 
tieneSaldo(ahorro)

const cliente = new Cliente(nombreCliente, ahorro);

console.log( cliente.mostrarInformacion() );

const empresa = new Empresa('Còdido con Juan', 100, 'Aprendiendo en Linea');
console.log( empresa.mostrarInformacion() );
