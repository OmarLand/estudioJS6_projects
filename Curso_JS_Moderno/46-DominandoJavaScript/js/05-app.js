// Explicit binding:

function persona(ele1, ele2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${ele1} y ${ele2}`);   
}

const informacion = {
    nombre : 'Juan'
}

const musicaFavoritoa = ['Heavy Metal', 'Blues'];

persona.call( informacion, musicaFavoritoa[0], musicaFavoritoa[1] );

persona.apply(informacion, musicaFavoritoa);

const nuevaFb = persona.bind(informacion, musicaFavoritoa[0], musicaFavoritoa[1]);
nuevaFb();