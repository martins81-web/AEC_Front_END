import React from 'react';
import './App.css';
import {Menu} from './Menu'; 
import {Accueil} from './Accueil'; 
import {Return} from './Return'; 
import {Photos} from './Photos'; 
import {Carte} from './Carte'; 
import {Video} from './Video'; 

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
        <Route path="/AEC_Front_End/Programmation2React/hello-routers-world/build/" exact component={Accueil} /> 
        <Route path="/AEC_Front_End/Programmation2React/hello-routers-world/build/Accueil" component={Accueil} /> 
        <Route path="/AEC_Front_End/Programmation2React/hello-routers-world/build/Photos" component={Photos} /> 
        <Route path="/AEC_Front_End/Programmation2React/hello-routers-world/build/Video" component={Video} /> 
        <Route path="/AEC_Front_End/Programmation2React/hello-routers-world/build/Carte" component={Carte} />  
        </Switch>
        <Return/> 
      
    </Container>
  );}
}

export default App;
