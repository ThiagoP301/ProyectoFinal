import React, { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './Home/Home'
import Workspace from './Workspace/Workspace'
import NewWorkspace from './NewWorkspace/NewWorkspace'
import { obtenerWorkspace } from './fetching/WorkspaceFetching'

function App() {

  const [listaWorkspace, setListaWorkspace]= useState([])
 const [isLoading, setIsLoading]= useState(true)

    useEffect(()=>{
        setTimeout(() => {
            obtenerWorkspace()
 .then(
    (workspaces)=>{
        console.log("workspace", workspaces)
        setListaWorkspace(workspaces)
        setIsLoading(false)
    }
 )
        }, 500)

    },[]
)
const añadirWorkspace=(nombre)=>{
const nuevoWorkspace={
    thumbnail: "https://holatelcel.com/wp-content/uploads/2021/03/whatsapp-foto-perfil.jpg",
    nombre: nombre,
    id: listaWorkspace.length + 1,
}
setListaWorkspace([...listaWorkspace, nuevoWorkspace])
}

  return (
<Routes>
<Route path='/' element={<Home listaWorkspace={listaWorkspace} isLoading={isLoading} añadirWorkspace={añadirWorkspace} />} />
      <Route path='/workspace/:id_workspace/canal/:id_canal/mensajes/:id_mensajes' element={<Workspace/>}/>
      <Route path='/workspacenew' element={<NewWorkspace añadirWorkspace={añadirWorkspace} />} />
</Routes>
  )
}

export default App
