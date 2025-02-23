import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

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
    //console.log( viajes );
    

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = async (req, res)=> {
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });

    } catch (error) {
        console.log( error );
        
    }

}


// Muestra un viaje por su Slug
const paginaDetalleViaje = async (req, res) => {
    // console.log(req.params.viaje);
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug } });

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.error('>>>', error );
        
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}