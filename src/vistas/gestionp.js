import logo from "../img/Lg.jpg"

const Gestionp = () => {
    return (
<div class="login-box">
        <img src={logo} class="avatar" alt="Avatar Image"/>
        <h1>Gestion de Pedidos</h1>
        <form>
            <div>
          <section class="sctHistorial">
            <div class="cntTable">
            <table cellspacing="13">
              <tr>
                <th>No. Servicio</th>
                <th>Fecha</th>
                <th>Dir. Destino</th>
                <th>Ciud. Destino</th>
                <th>Estado</th>
                
              </tr>
              <tr>
                <td align="left">0000001</td>
                <td align="left">11/10/2021</td>
                <td align="left">Cr. 54 No. 22-44</td>
                <td align="left">Cúcuta</td>
                <td align="left">Cumplido</td>
              </tr>
              <tr>
                <td align="left">0000002</td>
                <td align="left">12/11/2021</td>
                <td align="left">Cr. 33 No. 33-21</td>
                <td align="left">Calí</td>
                <td align="left">Cumplido</td>
              </tr>
              <tr>
                <td align="left">0000003</td>
                <td align="left">01/02/2022</td>
                <td align="left">Cll. 22 No. 21-22</td>
                <td align="left">Bogotá</td>
                <td align="left">Cancelado</td>
              </tr>
              <tr>
                <td align="left">0000003</td>
                <td align="left">01/11/2022</td>
                <td align="left">Dig. 33 No. 11-02</td>
                <td align="left">Bogotá</td>
                <td align="left">Guardado</td>
              </tr>
            </table>
            </div>
          </section>
          
          <input type="submit" value="Solicitud Recogida"/>
        </div>
        </form>
       
      </div>
      

    )
}

export default Gestionp