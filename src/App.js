
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes }
  from "react-router-dom"
import Login from './vistas/login';
import Registrar from './vistas/registrar';
import Inicio from './vistas/inicio';
import Gestionp from './vistas/gestionp';
import Recogida from './vistas/recogida';
import Navbar from './components/Navbar';
import NameFormWithFormValidation from './components/NameFormWithFormValidation';
import React from 'react';



function App() {

  return (
    <Router>
      <Navbar />
      <div>
        {/*  <h2>Validaci&oacute;n a nivel de formulario:</h2>
        <NameFormWithFormValidation />
      <br /> */}
        <Routes>
          <Route exact path="/" element={<Inicio />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route path="/reg" element={<Registrar />}></Route>
          <Route path="/gestion" element={<Gestionp />}></Route>
          <Route path="/recogida" element={<Recogida />}></Route>

        </Routes>
      </div>
    </Router>



  );
}

export default App;
