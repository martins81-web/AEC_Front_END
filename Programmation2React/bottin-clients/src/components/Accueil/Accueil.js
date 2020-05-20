import React from 'react';
import '../App/App.css';
import Container from 'react-bootstrap/Container';  

import {Bottin} from '../Bottin/Bottin';
import {Connexion} from '../Connexion/Connexion';

export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { connected: false }
        this.gestionConnexion = this.gestionConnexion.bind(this); 
        this.ChangeConexion = this.ChangeConexion.bind(this); 
    }

    gestionConnexion(){
        let connected = this.state.connected;
        if(connected){
            return  (<>
                        <Bottin onDeconnexion={this.ChangeConexion}/>
                    </>
                   );
        }
        if(!connected){
            return <Connexion onConnexion={this.ChangeConexion}/>
        }
    }

    ChangeConexion(){
        this.setState({ connected: !this.state.connected });
    }

    render() { 
        return (
                <Container fluid>
                    {this.gestionConnexion()}
                </Container>  
          );
    }
}
