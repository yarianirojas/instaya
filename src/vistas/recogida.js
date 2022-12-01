import logo from "../img/Lg.jpg"
import '../css/Rec.css';
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import LogoyTitulo from "../components/logoytitulo";

const Recogida = () => {
  const [nombres, setNombres] = useState('');
  const [cedulas, setCedulas] = useState('');
  const [telefonos, setTelefonos] = useState('');
  const [correos, setCorreos] = useState('');
  const [direccions, setDireccions] = useState('');
  const [ciudads, setCiudads] = useState('');

  const [alto, setAlto] = useState('');
  const [largo, setLargo] = useState('');
  const [ancho, setAncho] = useState('');
  const [peso, setPeso] = useState('');
  const [fragil, setFragil] = useState('');
  const [franja, setFranja] = useState('');
  const [dia, setDia] = useState('');

  const [nombred, setNombred] = useState('');
  const [cedulad, setCedulad] = useState('');
  const [telefonod, setTelefonod] = useState('');
  const [direcciond, setDirecciond] = useState('');
  const [ciudadd, setCiudadd] = useState('');

  const solicitar = (e)=>{
    const objetoSolicitud = {
      "solicitante": {
        "nombre":nombres,
        "cedula":cedulas,
        "telefono":telefonos,
        "correo":correos,
        "direccion":direccions,
        "ciudad":ciudads
      },
      "destinatario": {
        "nombre":nombred,
        "cedula":cedulad,
        "telefono":telefonod,
        "direccion":direcciond,
        "ciudad":ciudadd
      },
      "alto": alto,
      "largo": largo,
      "ancho": ancho,
      "peso": peso,
      "fragil": fragil,
      "franja": franja,
      "dia": dia
    };
    console.log("solicitud", objetoSolicitud);
    e.preventDefault();
  }


  return (
    <div className="login-box">
      <LogoyTitulo titulo="Solicitud de Recogida"></LogoyTitulo>
      
      <form>
        <h2>Solicitante</h2>

        <div className="field">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre Completo de quien solicita"
          value={nombres} onChange={e => setNombres(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Cedula</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Cedula"
          value={cedulas} onChange={e => setCedulas(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Telefono"
          value={telefonos} onChange={e => setTelefonos(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Correo Electronico"
          value={correos} onChange={e => setCorreos(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Ingresar direccion de recogida"
          value={direccions} onChange={e => setDireccions(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ingresar la ciudad"
          value={ciudads} onChange={e => setCiudads(e.target.value)} />
        </div>

        <h2>Dimensiones</h2>

        <div className="field">
          <Form.Label>Alto</Form.Label>
          <Form.Control type="text" placeholder="Alto del articulo"
          value={alto} onChange={e => setAlto(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Largo</Form.Label>
          <Form.Control type="text" placeholder="Largo del articulo"
          value={largo} onChange={e => setLargo(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Ancho</Form.Label>
          <Form.Control type="text" placeholder="Ancho del articulo"
          value={ancho} onChange={e => setAncho(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Peso</Form.Label>
          <Form.Control type="text" placeholder="Peso del articulo"
          value={peso} onChange={e => setPeso(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Fragil</Form.Label>
          <select name="fragil">
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="field">
          <Form.Label>Franja Horaria de Recogida</Form.Label>
          <select name="hour">
            <option>08:00 - 12:00</option>
            <option>12:00 - 16:00</option>
            <option>16:00 - 20:00</option>
          </select>
        </div>
        <div className="field">
          <Form.Label>Día</Form.Label>
          <Form.Control type="date" placeholder="Dia de recogida"
          value={dia} onChange={e => setDia(e.target.value)} />
        </div>

        <h2>Destinatario</h2>

        <div className="field">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre Completo de quien recibe"
          value={nombred} onChange={e => setNombred(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Cedula</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Cedula"
          value={cedulad} onChange={e => setCedulad(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Ingresar Telefono"
          value={telefonod} onChange={e => setTelefonod(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Ingresar direccion de recogida"
          value={direcciond} onChange={e => setDirecciond(e.target.value)} />
        </div>
        <div className="field">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control type="text" placeholder="Ingresar la ciudad"
          value={ciudadd} onChange={e => setCiudadd(e.target.value)} />
        </div>



        <input type="submit" value="Enviar" onClick={(e)=>solicitar(e)} />


      </form>
    </div>

  );
}

export default Recogida