const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors());

//importar conexion mongoDB
const archivoBD = require('./conexion')


//importacion de rutas usuario y modelo
const rutaUsuario = require('./rutas/usuario');
app.use('/api/usuario',rutaUsuario);

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}))

app.get('/', (req,res)=>{
res.end('bienvenidos al servidor backend node ')
})

//configurar server backend

app.listen(5000,()=>{
    console.log('el servidor esta corriendo correctamente')
})