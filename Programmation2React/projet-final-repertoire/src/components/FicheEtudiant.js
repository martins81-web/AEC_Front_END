import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from "react-bootstrap";
import {Suppression} from "./Suppression";
import { Link } from "react-router-dom";

export class FicheEtudiant extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {donneesRecues:'', }


  }


  async componentDidMount() {
    try {
      await this.setState({EtudiantID : this.props.location.search.substring(4,this.props.location.search.length)});
      const response = await fetch('https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants/' + this.state.EtudiantID);
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
    return (<>
        <Container fluid className='p-4 text-center titreDossier'>   
        <h3>Dossier personnel de <u>{this.state.donneesRecues.firstName + " " + this.state.donneesRecues.name}</u></h3> 
        <p>Vous pouvez consulter ou modifier les renseignements personnels suivants. <br></br>Vous pouvez aussi supprimer le dossier.</p>
        </Container>
        <Container className='mb-5'>       
                <Row>
                    <Col xl="3" lg="3" md="4" sm="12">
                        <Card>
                            <Card.Body>
                            <Card.Title className=''>ACTIONS</Card.Title>
                            
                            <div className="d-flex flex-column align-items-start links">
                            <Link className='' to={"/Edit/"+ this.state.donneesRecues.name +"?id=" + this.state.EtudiantID}>
                              Éditer
                            </Link>
                                <Suppression history={this.props.history} EtudiantID={this.state.EtudiantID} />
                            <Link className='' to={"/Repertoire"}>
                              Retour au Répertoire
                            </Link>
                            </div>  
                            
                            
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl="6" lg="6" md="4" sm="12">
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
                                <b>Cours:</b> {this.state.donneesRecues.course}
                            </Card.Text>
                        </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Informations détaillés de l'étudiant</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl="3" lg="3" md="4" sm="12">
                        <Card border='danger'>
                            <Card.Img variant="top" src={this.state.donneesRecues.picture}  />
                        </Card>
                    </Col>
                </Row>  
            </Container>
            </>
    );
  }

}