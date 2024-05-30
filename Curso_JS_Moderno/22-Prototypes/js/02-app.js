
function Personal( nombre, puesto, costeHN ) {
    this.nombre  = nombre,
    this.puesto  = puesto,
    this.costeHN = costeHN
} 

const trabajador = new Personal('Omar', 'CEO', 45.5)


function formatearPersonal(personal){   
    const {nombre, puesto, costeHN} = personal;
    return `El trabajador es ${nombre} con cargo de ${puesto} y su coste hora normal es de ${costeHN}`   
}

console.log( formatearPersonal(trabajador) );



function Empresa( nombre, patrimonio, categoria ) {
    this.nombre     = nombre,
    this.patrimonio = patrimonio,
    this.categoria  = categoria
} 

function formateandoEmpresa( empresa ){
    const { nombre, patrimonio, categoria } = empresa;
    return `La empresa se llama ${nombre} su patrimonio tiene un total de ${patrimonio} actualmente y es de categoría de ${categoria}`
}

const empresita = new Empresa( 'Programando con Omar', 75000, 'Systema Developers' );

console.log( formateandoEmpresa(empresita) )

