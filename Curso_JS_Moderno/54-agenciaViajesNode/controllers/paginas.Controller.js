import { Viaje } from '../models/Viaje.js'

const paginaInicio = ( req,res ) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res)=> {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async(req, res)=> {

    //Consultar la DB
    const viajes = await Viaje.findAll();
    console.log( viajes );
    

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimoniales =  (req, res)=> {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}