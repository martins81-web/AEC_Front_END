// <!-- Connexion.js -->
// <!-- Techniques de programmation Web 2 -->
// <!-- Projet 1 par Eric Martins -->
// <!-- Crée le 2 juin 2020 -->
// <!-- Dernier mise à jour le 16 juin 2020 -->


import React from 'react';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Container from 'react-bootstrap/Container';  

import logoSpotify from '../img/Spotify_Logo_RGB_White.png'

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: '',
            email:''
         }
         this.handleConnexion = this.handleConnexion.bind(this);
         this.handlePassword = this.handlePassword.bind(this); 
         this.handleEmail = this.handleEmail.bind(this); 
    }

    handleConnexion() {
        if (this.state.email ==='shany.carle@gmail.com' && this.state.password==='patate'){
            this.props.handleConexion(true);
        }  
    }

    handlePassword(e) {
        this.setState({ password: e.target.value }); 
    } 

    handleEmail(e) { 
        this.setState({ email: e.target.value });
    }  

    render() { 
        return (  
            <Container fluid>
                <Row className="d-flex justify-content-center text-center mt-5"  >
                    <Col xl="3" lg="3" md="6" sm="8" xs="10">
                            <img src={logoSpotify} alt="logo" height="45px" className="my-5"/> 
                            <h1 className="text-white mb-5">De la musique pour tous.</h1>
                            <form >
                                <div className="form-group ">
                                    <input style={styleInputCourriel} 
                                    onChange={this.handleEmail}  type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email ou nom d'utilisateur : shany.carle@gmail.com" name="email"/>
                                </div>
                                <div className="form-group mb-5">
                                    <input style={styleInputPassword} 
                                    onChange={this.handlePassword} type="password" className="form-control" id="pass" placeholder="Mot de passe : patate" name="password" />
                                </div>
                                <div className="py-3 ">
                                    <button style={styleButton} type="" className="btn btn-light btn-lg btn-block" onClick={this.handleConnexion}>SE CONNECTER</button>
                                </div>
                            </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}


/* Style */
const styleButton = {
    borderRadius: '1.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    backgroundColor: '#26b99a',
    border:0
};

const styleInputCourriel = {
    color: 'white',
    backgroundColor: '#383838',
    border: 0,  
};

const styleInputPassword = {
    color: 'white',
    backgroundColor: '#282828',
    border: 0
};



 