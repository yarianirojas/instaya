
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom"
import Login from './vistas/login';
import Registrar from './vistas/registrar';
import Inicio from './vistas/inicio';
import Gestionp from './vistas/gestionp';
import Recogida from './vistas/recogida';



function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/reg">Registrar</Link></li>
          <li><Link to="/gestion">Gestionp</Link></li>
          <li><Link to="/recogida">Recogida</Link></li>

        </ul>
      
      
        <Routes>
          <Route exact path="/" element={<Inicio/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="/reg" element={<Registrar/>}></Route>
          <Route path="/gestion" element={<Gestionp/>}></Route>
          <Route path="/recogida" element={<Recogida/>}></Route>
          
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
