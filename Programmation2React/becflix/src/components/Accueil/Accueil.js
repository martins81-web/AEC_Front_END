import React from 'react';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Image from 'react-bootstrap/Image';  
import {Catalogue} from "../Catalogue/Catalogue"
import logoBecFlix from '../../img/becflix.png';
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

    gestionConnexion(){
        let connected = this.state.connected;
        if(connected){
            return  <Catalogue/>;
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
