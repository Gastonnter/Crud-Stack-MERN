const express = require('express');
const app = express();

//importar conexion mongoDB

const archivoBD = require('./conexion')

//importacion de rutas usuario y modelo

const rutaUsuario = require('./rutas/usuario');
app.use('/api/usuario',rutaUsuario)


app.get('/', (req,res)=>{
res.end('bienvenidos al servidor backend node ')
})

//configurar server backend

app.listen(5000,()=>{
    console.log('el servidor esta corriendo correctamente')
})