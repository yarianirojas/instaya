import { Link } from 'react-router-dom';
import '../css/log.css';
import logo from "../img/Lg.jpg";

const Login = () => {
    return (
        <div class="login-box">
        <img src={logo} class="avatar" alt="Avatar Image"/>
        <h1>Ingresa aqui</h1>
        <form>
         
          <label for="username">Usuario</label>
          <input type="text" placeholder="Ingresar Usuario"/>
          
          <label for="password">Contraseña</label>
          <input type="password" placeholder="Ingresar Contraseña"/>
          <input type="submit" value="Enviar"/>
          <a href="#">Olvido su contraseña?</a>
          <br/>
          <Link to="/Reg">Registrarse</Link>
        </form>
      </div>
    );
}

export default Login;