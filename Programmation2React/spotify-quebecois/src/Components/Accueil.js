// <!-- Accueil.js -->
// <!-- Techniques de programmation Web 2 -->
// <!-- Projet 1 par Eric Martins -->
// <!-- Crée le 2 juin 2020 -->
// <!-- Dernier mise à jour le 16 juin 2020 -->

import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Dropdown from 'react-bootstrap/Dropdown'; 
import { Catalogue } from './Catalogue';
import { Connexion } from './Connexion';
import { Recherche } from './Recherche';
import darth from '../img/vader.jfif'

export class Accueil extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { connected: false,  recherche: '', hoveredReculer: false, hoveredAvancer: false, accueil:true, hoverDecon:false}
  
    }

    AfficheTitre(){
        if(this.state.accueil===true){
            return (
                    <Row style={rowTitre}>
                            <h1 style={styleTitre} >Albums</h1>
                    </Row>
                    )
        }
    }


    Recherche(){
        if (this.state.accueil===true){
            return (
                <Recherche  recherche={(recherche)=>this.setState({ recherche: recherche})}/> 
                    );
        }
    }

    header(){
        return (
            <Row className="d-flex mt-3">
                <Col xs lg="12" className="d-flex justify-content-between" >
                    <div>
                    {this.Recherche()}
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle style={styleButton} variant="secondary" id="dropdown-basic">
                            <img style={imageDisconnexion} className='img-fluid' src={darth} alt="imgProfil"></img>
                            <span style={userName}>Shany Carle</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={drpDmenu}>
                            <Dropdown.Item  onMouseOut={() => this.setState({hoverDecon: false})}
                                            onMouseOver={() => this.setState({hoverDecon: true})} 
                                            style={this.state.hoverDecon ? disconnexionHover : disconnexion}
                                            onClick={() => this.setState({ connected: false, pageAlbum: false })}>Déconnexion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
       )
    }

   

    Affichage(){
        if (this.state.connected){
        return ( <Container >
                    {this.header()}
                    {this.AfficheTitre()}
                    <Catalogue afficheAccueil={() => this.setState({accueil: true, recherche:""})} recherche={this.state.recherche} onClick={() => this.setState({ accueil: false})}/>
                </Container>
                );
        } else {
            return <Connexion handleConexion={(connecte) => this.setState({ connected: connecte })} />;
        }
    }

    render() { 
        return ( 
            this.Affichage()
         );
    }
}


/* Style */
const styleTitre = {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    color: '#26b99a',
    paddingLeft: '1rem'
};

const rowTitre = {
    borderBottom: '13px solid white',
    marginBottom: '2rem',
    marginTop: '2.5rem'
};
 
const styleButton ={
    color: 'white',
    backgroundColor: 'black',
    border:0,
    outline: 0,
    display: 'flex',
    alignItems: 'center', 
    borderRadius: '1.5rem',
    padding: '0.625rem'
}

const imageDisconnexion ={
    height: '30px',
    marginRight: '15px',
    borderRadius: '50%'
}

const userName ={
    marginRight: '10px'
}

const disconnexion ={
    backgroundColor: '#505050',
    color: 'white',
    textAlign: 'center'
}

const disconnexionHover={
    backgroundColor: '#303030',
    color: 'white',
    textAlign: 'center'
}

const drpDmenu={
    marginTop: '5px',
    backgroundColor:'#505050',
    padding: '0.2rem',
}



