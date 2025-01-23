// const express = require('express');
import express from "express";
import router from "./routes/index.js";

const app = express();

// Definimos el puerto:
const port = process.env.PORT || 4000;

// Habilitar PUG
app.set('view engine', 'pug');

// Definir la carpeta publica
app.use( express.static('public') );

// Agrega Router
app.use( '/', router )

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto: ${port}`);
    
})