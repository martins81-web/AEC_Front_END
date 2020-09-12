import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useLocation } from 'react-router-dom' 

import { Accueil } from "./Accueil";
import { AjouterEtudiant } from "./AjouterEtudiant";
import {Menu} from './Menu'; 
import { Footer } from "./Footer";

import '../styles/navbar.sass';





function App() {
  let location = useLocation(); 
  console.log(location.pathname); 
  return (
  
   <div className='bg container-fluid'>
      <Menu/>
      <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Ajout" component={AjouterEtudiant} /> 
      </Switch>
      <Footer/>
  </div>
  );
}

export default App;
