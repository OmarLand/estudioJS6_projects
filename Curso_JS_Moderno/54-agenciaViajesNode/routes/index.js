import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Inicio')
})

router.get('/nosotros', (req, res)=> {
    res.send('Nosotros')
})

router.get('/contacto', (req, res) =>{
    res.send('Contacto')
})

export default router;