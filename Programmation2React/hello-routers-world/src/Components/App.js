import React from 'react';
import './App.css';
import {Menu} from './Menu'; 
import {Accueil} from './Accueil'; 
import {Return} from './Return'; 
import {Photos} from './Photos'; 
import {Carte} from './Carte'; 
import {Video} from './Video'; 

import {Route} from 'react-router-dom' 

import Container from 'react-bootstrap/Container';  

import bg from '../img/bg.png'

export class App extends React.Component {

  componentDidMount(){
    document.body.style.backgroundImage= "url("+bg+")";
}

render() {   return (
    <Container  > 
      
    
        <Menu/>
      
        <Route path="/" exact component={Accueil} /> 
        <Route path="/Accueil" component={Accueil} /> 
        <Route path="/Photos" component={Photos} /> 
        <Route path="/Video" component={Video} /> 
        <Route path="/Carte" component={Carte} />  
    
        <Return/> 
      
    </Container>
  );}
}

export default App;
