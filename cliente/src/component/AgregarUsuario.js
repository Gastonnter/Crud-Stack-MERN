import React, { useState } from "react"
import uniquid from 'uniqid'
import axios from 'axios'

function  AgregarUsuario () {

    
    //Hooks
    const [nombre,setNombre]= useState('');
    const [email,setEmail]= useState('');
    const [telefono,setTelefono]= useState('');

  function agregarUsuario(){
    let usuario ={
      nombre:nombre,
      email:email,
      telefono:telefono,
      idUsuario : uniquid() 
    }
    console.log(usuario)

    axios.post('/api/usuario/agregarusuario', usuario)
    .then(res =>{
      alert(res.data)
    })
    .then(err =>{console.log(err)})
  
  }

     return (
      <div className="container">
        <div className="row">
            <h2 className="mt-4"> Crear Nuevo Usuario</h2>
        </div>
         <div className="row">
           <div className="col-sm-6 offset-3">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" name="nombre" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">telefono</label>
              <input type="text" name="telefono" className="form-control"value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>

              <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
            </div>
           </div>
       </div>
      </div> 
     )
};

export default AgregarUsuario