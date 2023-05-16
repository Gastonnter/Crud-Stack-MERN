import React from "react"

function  AgregarUsuario () {

  function agregarUsuario(){
    
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
              <input type="text" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">telefono</label>
              <input type="text" className="form-control"></input>

              <button onClick={agregarUsuario} className="btn btn-succes">Guardar Usuario</button>
            </div>
           </div>
       </div>
      </div> 
     )
};

export default AgregarUsuario