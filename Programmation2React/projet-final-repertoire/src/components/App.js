// <!-- App.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->

import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useLocation } from 'react-router-dom' 
import { Redirect } from "react-router-dom";

import { Accueil } from "./Accueil";
import { AjouterEtudiant } from "./AjouterEtudiant";
import {Menu} from './Menu'; 
import {Repertoire} from './Repertoire.js'; 
import { Footer } from "./Footer";
import {FicheEtudiant}  from "./FicheEtudiant";
import EditEtudiant from "./EditEtudiant.js"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/navbar.sass';


function App() {
  let location = useLocation(); 
  console.log(location.pathname); 
  return (<div className='rep'>
    
    <Menu/>
   <div className='bg container-fluid m-0 p-0'>
      
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Switch>
          <Redirect exact from="/" to="/Accueil" />
          <Redirect exact from="/RepertoireRefresh" to="/Repertoire" />
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Ajout" component={AjouterEtudiant} /> 
          <Route path="/Repertoire" component={Repertoire} /> 
          <Route path="/Etudiant/:id" component={FicheEtudiant} />
          <Route path="/Edit/:id" component={EditEtudiant} />
      </Switch>
      <Footer/>
  </div>
  </div>
  );
}

export default App;
