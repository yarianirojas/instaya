import { useState } from 'react';
import '../css/log2.css';
import logo from "../img/Lg.jpg"
import { Button, Form } from "react-bootstrap";
import LogoyTitulo from '../components/logoytitulo';

const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  
  const registrar = (e) => {
    const objetoUsuario = {
      "nombre": nombre,
      "correo": correo,
      "usuario": usuario,
      "password": password
    };
    console.log("usuario a registrar", objetoUsuario);
    e.preventDefault();
  }


  return (
    <div className="login-box">
      <LogoyTitulo titulo="Registrarse"></LogoyTitulo>
      <h6 >Usted debe registrarse para seguir teniendo acceso a los servicios que usa de InstaYa
      </h6>
      <form>
      <Form.Label>Nombre</Form.Label>
      <Form.Control type="text"
          placeholder="Ingresar Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)} />
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="text"
          placeholder="Ingresar Nombre"
          value={correo}
          onChange={e => setCorreo(e.target.value)} />
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text"
          placeholder="Ingresar Usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)} />
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password"
          placeholder="Ingresar Password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <input type="submit" value="Registrar" onClick={(e) => registrar(e)} />
      </form>
    </div>
  );
}

export default Registrar