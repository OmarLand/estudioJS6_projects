const obtenerNombre = info => ({
    mostrarNombre(){
        console.log( `Nombre: ${info.nombre}` );
        
    }
})

const guardarEmail = info =>({
    agregarEmail(email) {
        console.log(`Guardando el email en: ${info.nombre}`);
        info.email = email;
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
        
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log( `Empresa: ${info.empresa}` );
        
    }    
})

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log( `Empresa: ${info.puesto}` );
        
    }    
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente  = Cliente('Omar', 'c@c.com', 'Landatech');
cliente.mostrarNombre();
cliente.agregarEmail('Cliente@xac.com')
cliente.mostrarEmail()

const empleado = Empleado('Delphy', null, 'Administrativa');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@dominio.es')
empleado.mostrarEmail()