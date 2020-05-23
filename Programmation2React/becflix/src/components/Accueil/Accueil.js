import React from 'react';
import '../App/App.css';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Image from 'react-bootstrap/Image'; 

import logoBecFlix from '../../img/becflix.png'; 
import bg from '../../img/bg.jpg'; 

import {Catalogue} from "../Catalogue/Catalogue"
import {Connexion} from '../Connexion/Connexion';
import {Deconnexion}  from '../Deconnexion/Deconnexion';

export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            connected: false
        }
        this.gestionConnexion = this.gestionConnexion.bind(this); 
        this.ChangeConexion = this.ChangeConexion.bind(this); 
    }

    componentDidMount(){
        document.body.style.backgroundImage= "url("+bg+")";
    }


    componentDidUpdate(){
        let connected = this.state.connected;
        if (connected){
            document.body.style.backgroundImage=null;
            document.body.style.backgroundColor='#303030';  
        } else{
            document.body.style.backgroundImage= "url("+bg+")";
        }
    }

    gestionConnexion(){
        let connected = this.state.connected;
        if(connected){
            return  <Catalogue/>
        }
        if(!connected){
            return <Connexion onClick={this.ChangeConexion}/>
            
        }
    }

    ChangeConexion(Newconnexion){
        this.setState({ connected: Newconnexion });
    }

    AfficheLogo(){
        return  <Col xs lg="6">  
                        <Image className="mt-2" src={logoBecFlix} alt="logoBecFlix" height="64" ></Image>
                </Col>        
    }

    AfficheButtonDeconnexion(){
        if(this.state.connected){
            return  <Deconnexion onClick={this.ChangeConexion}/>    
        } else {
            return  null;
        }
    }

    render() { 
        return (
                <Container fluid>
                <Row> 
                    {this.AfficheLogo()}
                    {this.AfficheButtonDeconnexion()}
                </Row>  
                    {this.gestionConnexion()}
                </Container>
                
          );
    }
}
