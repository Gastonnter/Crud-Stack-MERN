const express = require('express')
const router = express.Router();

const mongoose = require ('mongoose');

const eschema = mongoose.Schema

const eschemaUsuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String,
})


const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario)

module.exports= router


router.get('/ejemplo', (req,res) => {
    res.end('Saludo Carga desde Ruta Ejemplo')
})