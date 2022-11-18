import logo from "../img/Lg.jpg"
import '../css/Rec.css';

const Recogida =()=>{
    return(
        <div class="login-box">
        <img src={logo} class="avatar" alt="Avatar Image"/>
        <h1>Solicitud de Recogida</h1>
        
        <form>
          <h2>Solicitante</h2>

          <div class="field">
          <label for="nombre">Nombre</label>
          <input type="text" placeholder="Nombre Completo de quien solicita"/>
          </div>
          <div class="field">
          <label for="cedula">Cedula</label>
          <input type="text" placeholder="Ingresar No: de Cedula"/>
          </div>
          <div class="field">
            <label for="telefono">Teléfono</label>
            <input type="text" placeholder="Ingresar No. de Telefono"/>
            </div>
            <div class="field">
              <label for="correo">Coreo</label>
              <input type="text" placeholder="Ingresar Correo Electronico"/>
            </div>
            <div class="field">
              <label for="dirección">Dirección</label>
              <input type="text" placeholder="Ingresar Dirección de Recogida"/>
            </div>
            <div class="field">
              <label for="ciudad">Ciudad</label>
              <input type="text" placeholder="Ingresar la ciudad"/>
            </div>
            
            <h2>Dimensiones</h2>

            <div class="field">
              <label for="alto">Alto</label>
              <input type="text" placeholder="Ingresar el Alto"/>
            </div>
            <div class="field">
              <label for="largo">Largo</label>
              <input type="text" placeholder="Ingresar el Largo"/>
            </div>
            <div class="field">
              <label for="ancho">Ancho</label>
              <input type="text" placeholder="Ingresar el Ancho"/>
            </div>
            <div class="field">
              <label for="peso">Peso</label>
              <input type="text" placeholder="Ingresar el Peso"/>
            </div>  
            <div class="field">
              <label for="fragil">Fragil</label>
               <select name="fragil">
                <option value="Si">Si</option>
                <option value="No">No</option>
               </select>
            </div>                
            <div class="field">
              <label for="franja">Franja horaria Recogida</label>
               <select name="hour">
                <option>08:00 - 12:00</option>
                <option>12:00 - 16:00</option>
                <option>16:00 - 20:00</option>
               </select>
              </div>
              <div class="field">
                <label for="dia">Dia</label>
                <input type="date" placeholder="Ingresar dia de Recogida"/>
              </div> 
             
              <h2>Destinatario</h2>

              <div class="field">
                <label for="nombre">Nombre</label>
                <input type="text" placeholder="Nombre Completo de quien solicita"/>
                </div>
                <div class="field">
                <label for="cedula">Cedula</label>
                <input type="text" placeholder="Ingresar No: de Cedula"/>
                </div>
                  <div class="field">
                  <label for="telefono">Teléfono</label>
                  <input type="text" placeholder="Ingresar No. de Telefono"/>
                  </div>
                  <div class="field">
                    <label for="dirección">Dirección</label>
                    <input type="text" placeholder="Ingresar Dirección de Recogida"/>
                  </div>
                  <div class="field">
                    <label for="ciudad">Ciudad</label>
                    <input type="text" placeholder="Ingresar la ciudad"/>
                  </div>
            


          <input type="submit" value="Enviar"/>
        
         
        </form>
      </div>
      
    );
}

export default Recogida