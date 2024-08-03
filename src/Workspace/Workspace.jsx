import React, { useState } from "react"
import { canales as initialCanales } from "./canales"
import "./Workspace.css"
import Modal from "./ListaCanales/ModalCanal"
import { Link } from "react-router-dom"

const ListaCanales = () => {
  const [canales, setCanales] = useState(initialCanales)
  const [canalSeleccionado, setCanalSeleccionado] = useState(null)
  const [nuevoMensaje, setNuevoMensaje] = useState("")
  const [nuevoCanalNombre, setNuevoCanalNombre] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const generateId = () => Math.random().toString(36).substr(2, 9)


  const handleEnviarMensaje = () => {
    if (!nuevoMensaje) return
    const mensaje = {
      author: "Yo",
      text: nuevoMensaje,
      estado: "enviado",
      hour: "13:18",
      id: generateId(),
    }

    const nuevosCanales = canales.map(canal => {
      if (canal.id === canalSeleccionado) {
        return {
          ...canal,
          mensajes: [...canal.mensajes, mensaje],
        }
      }
      return canal
    })

    setCanales(nuevosCanales)
    setNuevoMensaje("")
  }

  const handleCrearCanal = (nombreCanal) => {
    if (!nombreCanal.trim()) return

    const nuevoCanal = {
      nombre: `# ${nombreCanal.trim()}`,
      thumbnail: "https://via.placeholder.com/50",
      id: generateId(),
      mensajes: [],
    }

    setCanales([...canales, nuevoCanal])
    setModalVisible(false)
    setNuevoCanalNombre("")
  }

  const canal = canales.find(canal => canal.id === canalSeleccionado)

  return (
    <div className="containerMensajes">
      <Link style={{textDecoration: "none" , color: "inherit"}} to={"/"}>
      <button className="buttonSalir">Salir</button>
      </Link>
      <div className="listaCanales">
        <h2 className="tittleCanal">Canales</h2>
        <div className="buttonCrearCanal">
        <button className="crearCanal" onClick={() => setModalVisible(true)}>Crear Canal</button>
        </div>
        <div className="canales">
        {canales.map(canal => (
          <div key={canal.id}>
            <button className="buttonCanal" onClick={() => setCanalSeleccionado(canal.id)}>
              {canal.nombre}
            </button>
          </div>
        ))}
          </div>
      </div>
      <section className="mensajes">
        {canalSeleccionado ? (
          canal ? (
            <>
              <h2 className="nombreCanal">{canal.nombre}</h2>
              <div className="listaMensajes">
                {canal.mensajes.length > 0 ? (
                  canal.mensajes.map(mensaje => (
                    <div className="mensaje" key={mensaje.id}  style={{
                      textAlign: mensaje.author === "Yo" ? "right" : "left",
                      backgroundColor: mensaje.author === "Yo" ? "#c9c9c9" : "#a4a4a4",
                      padding: "10px",
                      borderRadius: "10px",
                      margin: "10px 0",
                      alignSelf: mensaje.author === "Yo" ? "flex-end" : "flex-start",
                      maxWidth: "70%",
                      marginLeft: mensaje.author === "Yo" ? "auto" : "0",
                      color: "#000000"
                    }}>
                      <strong>{mensaje.author}</strong>
                      <p>{mensaje.text}</p>
                      <div className="estados">
                      <span>{mensaje.estado}</span>
                      <span>{mensaje.hour}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="noMensajes">No hay mensajes en este canal.</p>
                )}
              </div>
              <div className="formMensaje">
                <input type="text" value={nuevoMensaje} onChange={(e) => setNuevoMensaje(e.target.value)} placeholder="Escribe un mensaje" />
                <button onClick={handleEnviarMensaje}>Enviar</button>
              </div>
            </>
          ) : (
            <p>Canal no encontrado.</p>
          )
        ) : (
          <p className="seleccionarCanal">Selecciona un canal para ver los mensajes.</p>
        )}
      </section>
      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={handleCrearCanal}
      />
    </div>
  )
}

export default ListaCanales