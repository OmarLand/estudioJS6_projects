// const express = require('express');
import express from "express";
import 'dotenv/config'
import router from "./routes/index.js";
import db from "./config/db.js";

console.log( '=>', process.env.DATABASE );


const app = express();

// Conectar la DB
db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log('No se pudo conectar a la DB') )
    

// Definimos el puerto:
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) =>{
    const year = new Date();

    res.locals.actualYear  = year.getFullYear();
    res.locals.nombresitio = 'Agencia de Viajes';
    return next();
})

// Agregar Body Parsel para leer los datos del form
app.use(express.urlencoded({extended:true}));

// Definir la carpeta publica
app.use( express.static('public') );

// Agrega Router
app.use( '/', router )

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto: ${port}`);
    
})