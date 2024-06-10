class Cliente{

    #nombre;

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre} su saldo es de ${this.saldo}€`
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

const omar = new Cliente('Omar', 500);
console.log( omar.mostrarInformacion() );
console.log( 'Accediento al objeto directamente:', omar.nombre );