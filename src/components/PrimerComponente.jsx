import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';

function OrdenDeAlta(msj){
  return <h1>Bienvenido {msj.nombre}</h1>
}

export const PrimerComponente = () => {
  return (
    <>
    <OrdenDeAlta nombre="Netflox"/>
    </>
  )
}
