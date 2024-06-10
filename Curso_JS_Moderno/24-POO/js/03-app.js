class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} su saldo es de ${this.saldo}€, contacto: ${this.telefono}, categoria: ${this.categoria}`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

// Herencia
class Empresa extends Cliente {
    constructor( nombre, saldo, telefono, categoria ){
        super(nombre, saldo);
        this.telefono  = telefono;
        this.categoria = categoria; 
    }
    static bienvenida(){
        return `Bienvenido al Cajero de Empresa.`
    }
}

const pedro = new Cliente( 'Pedro', 1500 );
const empresa = new Empresa('Landevops', 400, 12345678, 'Desarrollo Web');
console.log( empresa.mostrarInformacion() );

console.log( Cliente.bienvenida() );
console.log( Empresa.bienvenida() );