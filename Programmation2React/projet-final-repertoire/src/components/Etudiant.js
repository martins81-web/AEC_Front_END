import React from "react";
import {Card} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import '../styles/dossierEtudiant.sass';

import {Visualisation} from "./Actions/Visualisation";
import {Suppression} from "./Actions/Suppression";
import {Edition} from "./Actions/Edition";

export class Etudiant extends React.Component {


  
  render() {
    return (
      <>
        <Col xl="4" lg="6" md="6" sm="12" className="my-4"> 
            
              <Card className="h-100 card-rep ">
                <Card.Body className='bgheader '>
                    <Container fluid>
                      <Row className='no-gutters '>
                        <Col xs lg="8" >
                          <h4>{this.props.EtudiantData.firstName +" " + this.props.EtudiantData.name} </h4>
                          {this.props.EtudiantData.course} 
                        </Col>
                        <Col xs lg="4" className='text-right' >
                          <svg width="4em" height="4em" viewBox="0 0 16 16" className="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                            <path fillRule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                          </svg>
                        </Col>
                      </Row>
                    </Container>
                    <div>
                    </div>
                </Card.Body>
                <Link className='border-top border-bottom' to={"Etudiant/"+ this.props.EtudiantData.name +"?id=" + this.props.id} title='Visualiser le dossier de l´etudiant'>
                <div className='text-center img-contour m-xl-3 m-lg-3 m-md-3 m-sm-2 m-4'>
                  <img src={this.props.EtudiantData.picture} alt='photoEtudiant' className='img-fluid img-card ' />
                </div>
                </Link>

                <div className='my-1  d-flex justify-content-around'>
                    <Visualisation EtudiantData={this.props.EtudiantData} id={this.props.id}/>
                    <Edition EtudiantData={this.props.EtudiantData} id={this.props.id}/>
                    <Suppression className='links' history={this.props.history} EtudiantID={this.props.id} />
                  </div>
              </Card> 
              
            </Col>     
          
      </>
    );
  }

}
