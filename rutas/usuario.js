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


const ModeloUsuario = mongoose.model('usuario', eschemaUsuario)



router.get('/ejemplo', (req,res) => {
    res.end('Saludo Carga desde Ruta Ejemplo')
})

router.post('/agregarusuario',(req,res)=>{
    const nuevoUsuario = new ModeloUsuario({
        nombre : req.body.nombre ,
        email : req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario
    })
     nuevoUsuario.save(function(err){
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.status(500).send(err)
        }
    })
})


module.exports= router
