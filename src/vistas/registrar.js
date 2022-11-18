import '../css/log2.css';
import logo from "../img/Lg.jpg"

const Registrar = () => {
    return (
        <div class="login-box">
        <img src={logo} class="avatar" alt="Avatar Image"/>
        <h1>Registrarse</h1>
        <h2>Usted debe registrarse para seguir teniendo acceso a los servicios que usa de InstaYa         
        </h2>
        <form>
          <label for="Nombre">Nombre</label>
          <input type="text" placeholder="Ingresar Nombre"/>
          <label for="Correo">Correo electronico</label>
          <input type="email" placeholder="Ingresar Correo"/>
           <label for="username">Usuario</label>
           <input type="text" placeholder="Ingresar Usuario"/>
           <label for="password">Contraseña</label>
           <input type="password" placeholder="Ingresar Contraseña"/>
          <input type="submit" value="Enviar"/>
        </form>
     </div>
    );
}

export default Registrar