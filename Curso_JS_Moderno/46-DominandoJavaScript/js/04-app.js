// Implicit Binding:

const usuario = {
    nombre : 'Omar',
    edad   : 25,
    informacion() {
        console.log(`Mi nombre es: ${this.nombre} y mi edad es ${this.edad}`);
        
    },
    mascota: {
        nombre : 'Pelusa',
        edad   : 10,
        informacion(){
            console.log(`Me llamo ${this.nombre} y tengo ${this.edad} de edad...`);
            
        }
    }

        

}


usuario.informacion();
usuario.mascota.informacion();