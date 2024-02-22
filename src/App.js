//import logo from './logo.svg';
//import './App.css';

import React, {Fragment} from 'react';
import Header from './componentes/layout/Header';
import Navigation from './componentes/layout/Navigation';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Alumnos from './componentes/alumnos/Alumnos';
import Calificaciones from './componentes/calificaciones/Calificaciones';
import Carreras from './componentes/carreras/Carreras';

function App (){
  return (
    
    <Router>
      <Fragment>

    <Header/>

<div class="grid contenedor contenido-principal">
  
  <Navigation/>

  <main class="caja-contenido col-9">


    <Routes>
      <Route path='/Alumnos' element = {<Alumnos/>} />
      <Route path='/Carreras' element = {<Carreras/>} />
      <Route path='/calificaciones' element = {<Calificaciones/>} />
    </Routes>

  </main>
  

</div>

    </Fragment>
    </Router>
    
    
  );
}

export default App;
