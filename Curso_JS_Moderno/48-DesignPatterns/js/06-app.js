// Mixin Patterns

class Persona{
    constructor( nombre, email ){
        this.nombre = nombre;
        this.email  = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`Nombre Persona: ${this.nombre} Email: ${this.email}`);       
    },
    mostrarNombre(){
        console.log( `Mi nombre es: ${this.nombre}` );
    }
}

// Añadir funcionesPersona a la clase de Persona
Object.assign( Persona.prototype, funcionesPersona );

const cliente = new Persona('Omar','correo@dominio.com');
console.log( cliente );

cliente.mostrarInformacion();