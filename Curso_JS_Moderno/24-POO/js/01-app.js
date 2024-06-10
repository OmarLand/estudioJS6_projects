class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} su saldo es de ${this.saldo}€`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

const pedro = new Cliente( 'Pedro', 1500 );
console.log( '=>',pedro.mostrarInformacion() );
console.log( '=>',Cliente.bienvenida() );
console.log( pedro );


const Cliente2 = class {
    constructor( nombre, saldo ){
        this.nombre = nombre;
        this.saldo  = saldo;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} su saldo es de ${this.saldo}€`
    }
}

const omar = new Cliente2( 'Omar', 2400 );
console.log('=>', omar.mostrarInformacion() );
console.log( omar );