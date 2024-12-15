// Class Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email  = email;
    }
}

const persona = new Persona ('Omar', 'Correo@correo.com');

console.log( persona );
