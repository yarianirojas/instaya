import { Link } from 'react-router-dom';
import fondo from '../img/fondo_inicio.jpg';

const Inicio = () => {
    return (
        <section>
        <div class="row no-gutters"> 
           
        </div>
        <div class="row no-gutters">
          <div class="col-lg-1 d-none d-lg-block border-right">
            <div class="d-flex">
              <ul class="list-unstyled aling-self-center mx-auto">
                </ul>

            </div>

          </div>
          <div class="col-lg-4 d-flex">
            <div class="container aling-self-center px-5 content">
              <h1 class="text-uppercase font-higth-bold">INSTA Ya</h1>
              <p class="lead-xl mb-4">Somos tu mejor opción</p>

              
              <Link to="/login" class="btn btn-primary">Ingresar</Link>

            </div>

          </div>
          <div class="col-lg-7">
           
          </div>
          <div class="col-lg-1 border-right d-none d-lg-block">
            <div class="d-flex h-100">
              <div class="aling-self-center mx-auto">
                <a href="#">
            <i class="icon ion-md-mail text-light lead-xl"></i>
          </a>
          </div>
          </div>
          </div>
          <div class="col-lg-8 d-none d-lg-block">
            <div class="d-flex h-100">
              <div class="aling-self-center px-5">
              </div>

            </div>

          </div>
                
             
            </div>            
    </section>
    
    );
}

export default Inicio