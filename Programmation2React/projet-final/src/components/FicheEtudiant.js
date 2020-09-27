// <!-- FicheEtudiant.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->

import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from "react-bootstrap";
import {Suppression} from "./Actions/Suppression";
import {Edition} from "./Actions/Edition";

import { Link } from "react-router-dom";
import {API} from "../Api_constante";

export class FicheEtudiant extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {donneesRecues:'', }


  }


  async componentDidMount() {
    try {
      await this.setState({EtudiantID : this.props.location.search.substring(4,this.props.location.search.length)});
      const response = await fetch( API + this.state.EtudiantID);
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }




render() {
    return (<div className='fiche'>
        <Container fluid className='p-4 text-center titreDossier'>   
        <h3>Dossier personnel de <u>{this.state.donneesRecues.firstName + " " + this.state.donneesRecues.name}</u></h3> 
        <p>Vous pouvez consulter ou modifier les renseignements personnels suivants. <br></br>Vous pouvez aussi supprimer le dossier.</p>
        </Container>
        <Container className='mb-5'>       
                <Row>
                    <Col xl="3" lg="3" md="12" sm="12" className='mb-3'>
                        <Card>
                            <Card.Body>
                            <Card.Title className='border-bottom border-dark'>ACTIONS</Card.Title>
                            
                            <div className="d-flex flex-column align-items-start">
                            <Edition EtudiantData={this.state.donneesRecues} id={this.state.EtudiantID} />
                            <Suppression history={this.props.history} EtudiantID={this.state.EtudiantID} />
                            <Link className='links' to={"/Repertoire"}>
                              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                              </svg> Retour au Répertoire
                            </Link>
                            </div>  
                            
                            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="12" className='mb-3'>
                    <Card>
                        <Card.Body>
                            <Card.Title><h1>{this.state.donneesRecues.firstName + " " + this.state.donneesRecues.name}</h1> </Card.Title>
                            <Card.Text>
                                <b>Adresse:</b> {this.state.donneesRecues.address}
                                <br></br>
                                <b>Ville:</b> {this.state.donneesRecues.ville}
                                <br></br>
                                <b>Code Postal:</b> {this.state.donneesRecues.postalCode} 
                                <br></br>
                                <b>Téléphone:</b> {this.state.donneesRecues.telephone}
                                <br></br>
                                <b>Email:</b> {this.state.donneesRecues.email}
                                <br></br>
                                <b>Cours:</b> {this.state.donneesRecues.course}
                               
                            </Card.Text>
                        </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Informations détaillés de l'étudiant</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl="3" lg="3" md="6" sm="12">
                        <Card border='danger'>
                            <Card.Img variant="top" src={this.state.donneesRecues.picture}  />
                        </Card>
                    </Col>
                </Row>  
            </Container>
            </div>
    );
  }

}