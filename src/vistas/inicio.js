import { Link } from 'react-router-dom';
import fondo from '../img/fondo_inicio.jpg';

const Inicio = () => {
    return (
        <section>
        <div class="row no-gutters"> 
            <div class="col-lg-1 border-right">
                <div class="d-flex">
                    <div class="aling-self-center mx-auto">
                    </div>
                </div>
            </div>
            <div class="col-lg-11">
              <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand text-light px-5" href="#"> <span class="font-weight-bold"></span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    
                    </li>
                    <li class="nav-item">
                    
                    </li>
                    <li class="nav-item">
                     
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-light  lead-xl" href="#"><i class="icon ion-md-menu"></i></a>
                    </li>

                  </ul>
                  
                </div>
              </nav>

            </div>
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