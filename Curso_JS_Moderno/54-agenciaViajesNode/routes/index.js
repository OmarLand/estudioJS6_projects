import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from "../controllers/paginas.Controller.js";
import { guardarTestimonial } from "../controllers/testimonialControler.js";


const router = express.Router();

router.get('/', paginaInicio );

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;