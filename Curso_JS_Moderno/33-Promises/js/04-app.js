const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado: ${pais}`);
    }, 3000);
})

nuevoPais('Alemania')
    .then( res => {
        console.log( res );
        console.log( paises );
        return nuevoPais('Venezuela')
    })
    .then( res => {
        console.log(res);
        console.log(paises);
        return nuevoPais('España')
    })
    .then( res => {
        console.log(res);
        console.log(paises);
        return nuevoPais('Francia')
    })
    .then( res => {
        console.log(res);
        console.log(paises);
        //return nuevoPais('Francia')
    })