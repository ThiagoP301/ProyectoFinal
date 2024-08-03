import React from 'react'

export const MensajeForm= ({enviarMensaje}) => {
    const handleSubmitMensajeForm= (e) =>{
      e.preventDefault()
      const nuevoMensaje= e.target.mensaje.value
      enviarMensaje(nuevoMensaje)
      e.target.reset()
    }
  
  
    return (
      <div>
        <form onSubmit={handleSubmitMensajeForm}>
          <div className='form'>
            <input className= "formMensaje"id="mensaje" name="mensaje"type="text"/>
            <input  type="submit"/>
          </div>
        </form>
      </div>
    )
  }