import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import "./NewWorkspace.css"

const NewWorkspace = ({añadirWorkspace}) => {
       const [nombre, setNombre]= useState("")
    const navigate= useNavigate()


    const handleCreateWorkspace = () => {
        if (!nombre) {             
            alert("Por favor, ingresa un nombre para el nuevo entorno.")}
            else if(nombre.length > 20){
              alert("El nombre excede el limite de caracteres")
        } else {
            añadirWorkspace(nombre)
            navigate("/")
        }
    };
  return (
    <div className='parentContainer'>      
    <h1 className='tittleNew'>Crea un nuevo entorno de trabajo</h1>
    <div className='new_workspace_container'>
    <div className='inputs'>
      <label for="entorno">Nombre de Nuevo Entorno</label>
        <input className='inputText' type="text" id='entorno' name='entorno' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>


    </div>        
    <div className='buttons'>
        <button className='buttonNew' onClick={handleCreateWorkspace}>Crear nuevo entorno</button>
        <button className='buttonNew' onClick={()=> navigate("/")}>Cancelar</button></div>
    </div>
  )
}


export default NewWorkspace