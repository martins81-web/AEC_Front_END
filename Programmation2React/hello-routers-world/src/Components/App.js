import React from 'react';
import './App.css';
import {Menu} from './Menu'; 
import {Accueil} from './Accueil'; 
import {Return} from './Return'; 
import {Photos} from './Photos'; 
import {Carte} from './Carte'; 
import {Video} from './Video'; 
import {PageNotFound} from './PageNotFound'; 

import {Route} from 'react-router-dom' 
import {Switch} from 'react-router-dom' 

import Container from 'react-bootstrap/Container';  

import bg from '../img/bg.png'

export class App extends React.Component {

  componentDidMount(){
    document.body.style.backgroundImage= "url("+bg+")";
}

render() {   return (
    <Container  > 
      
    
        <Menu/>
        <Switch>
          <Route path="/" exact component={Accueil} /> 
          <Route path="/Accueil" component={Accueil} /> 
          <Route path="/Photos" component={Photos} /> 
          <Route path="/Video" component={Video} /> 
          <Route path="/Carte" component={Carte} />  
          <Route component={PageNotFound}/>
        </Switch>
        <Return/> 
      
    </Container>
  );}
}

export default App;
