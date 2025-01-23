import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('inicio')
})

router.get('/nosotros', (req, res)=> {
    res.render('nosotros', {
    });
})

export default router;