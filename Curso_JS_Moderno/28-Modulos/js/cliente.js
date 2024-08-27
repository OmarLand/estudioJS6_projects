// Exportando variables

export const nombreCliente = 'Omar';
export const ahorro = 500;

// Exportando funciones
export function mostrarInformacion(nombre, ahorro){
    return `Clientes: ${nombre} - Ahorro: ${ahorro}`
}

export function tieneSaldo( ahorro ){
    if( ahorro > 0 ){
        console.log('Sí tiene saldo');
    } else {
        console.log('El cliente, no tiene saldo');
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Clientes: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}