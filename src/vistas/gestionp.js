import logo from "../img/Lg.jpg"
import Listados from "../components/listado"
import Datos from "../components/datos"
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom"
import LogoyTitulo from "../components/logoytitulo";
const labels = [
  "ID",
  "No. Servicio",
  "Fecha",
  "Direccion destino",
  "Ciudad destino",
  "Estado"
]
function Example() {

  const [userApi, setUserApi] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3004/user')
      .then(response => response.json())
      .then(data => setUserApi(data));
  }, []);
  return (userApi)
}

const Gestionp = () => {
  return (
    <div class="login-box">

      <LogoyTitulo titulo="Gestión de Pedidos"></LogoyTitulo>
      <>

        <Listados datos={Example()} >listados</Listados>

        <div >
          <input type="submit" value="Solicitud Recogida" />
          <Link type="submit" value="Solicitud Recogida" to="/recogida" class="btn btn-primary" />
        </div>
      </>
    </div>
  )
}

export default Gestionp