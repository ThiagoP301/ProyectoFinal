import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./Home.css"






const Home = ({listaWorkspace, isLoading,}) => {
const navigate= useNavigate()
const workspaceId =useParams()

return ( 
    <div className='container'>
<h1 className='tittle'>Bienvenido a Slack</h1>
<h2 className='tittleEntorno'>Entornos de trabajo</h2>
    <div className='containerWorkspace'>    
    {isLoading ? <h2>Cargando espacios de trabajo...</h2>:
        listaWorkspace.map(work =>{
            return(
                
            <div className='workspace' key={work.id}>
                <img className='imgWorkspace' src={work.thumbnail}alt="" />
                <span className='nombreWorkspace'>{work.nombre}</span>
                <Link to={`/workspace/${work.id}/canal/1/mensajes/1`}>
                <button className='buttonWorkspace'>Entrar</button>
                </Link>
            </div>
            )
        }

    )

    }
    </div>
        <button className='newWorkspace' onClick={() => {navigate("/workspacenew")}}>Crear entorno</button>



</div>



  )
}

export default Home