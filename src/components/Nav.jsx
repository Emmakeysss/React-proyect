import { CardBwidget } from "./CardBwidget"

function OrdenDeAlta(msj){
    return <li className="btn btn-outline-dark">pelis de {msj.nombre}</li>
  }

  function OrdenDeAlta2(msj){
    return <li>{<CardBwidget/>}</li>
  }

export const Nav = () => {
  return (
    <>
   <ul>
    <OrdenDeAlta nombre="terror"/>
    <OrdenDeAlta nombre="accion"/>
    <OrdenDeAlta nombre="suspenso"/>
    <OrdenDeAlta nombre="kids"/>
    <OrdenDeAlta nombre="docus"/>
    <OrdenDeAlta2/>
    
   </ul>
   
    </>
  )
}
