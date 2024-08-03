import React, { useState } from "react"
import "./ModalCanal.css"

const ModalCanal = ({ visible, onClose, onCreate }) => {
  const [nombreCanal, setNombreCanal] = useState('')

  const handleCrear = () => {    
    if (nombreCanal === ""){
      alert("Ingrese un nombre para el canal")  
    }
      else if(nombreCanal.length < 12){
    onCreate(nombreCanal)
    setNombreCanal("")}    
      else if (nombreCanal.length > 12){
        alert("El nombre del canal no debe superar los 15 caracteres")
        setNombreCanal("")}

}

  return (
    visible ? (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Crear Canal</h2>
          <input
            type="text"
            value={nombreCanal}
            onChange={(e) => setNombreCanal(e.target.value)}
            placeholder="Nombre del nuevo canal"
          />
          <div className="modal-buttons">
            <button onClick={handleCrear}>Crear</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
      </div>
    ) : null
  )
}

export default ModalCanal