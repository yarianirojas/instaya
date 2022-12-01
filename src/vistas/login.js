import { Link } from 'react-router-dom';
import '../css/log.css';
import logo from "../img/Lg.jpg";
import { Button, Form } from "react-bootstrap";
import { useState } from 'react';
import LogoyTitulo from '../components/logoytitulo';

const Login = () => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const autenticar = (e) => {
    const objetoUsuario = {
      "usuario": usuario,
      "password": password
    };
    console.log("usuario a autenticar", objetoUsuario);
    e.preventDefault();
  }


  return (
    <div className="login-box">
      <LogoyTitulo titulo="Ingresa Aquí"></LogoyTitulo>
      <form>

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
        <input type="submit" value="Enviar" onClick={(e) => autenticar(e)} />

        <a href="#">Olvido su contraseña?</a>
        <br />
        <Link to="/Reg">Registrarse</Link>
      </form>
    </div>
  );
}

export default Login;