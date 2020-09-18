import React from "react";
import {Card} from "react-bootstrap"
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import '../styles/dossierEtudiant.sass';
import {Suppression} from "./Suppression";

export class Etudiant extends React.Component {


  
  render() {
    return (
      <>
        <Col xl="4" lg="6" md="6" sm="12" className="my-4"> 
            
              <Card className="bg-muted h-100">
                <Card.Body >
                    <div>
                      <h4>{this.props.EtudiantData.firstName +" " + this.props.EtudiantData.name} </h4>
                    </div>
                    <div>
                      {this.props.EtudiantData.course} 
                    </div>
                </Card.Body>
                <Link className='border border' to={"Etudiant/"+ this.props.EtudiantData.name +"?id=" + this.props.id}>
                <div className='text-center'>
                  <img src={this.props.EtudiantData.picture} alt='photoEtudiant' className='img-fluid img-card' />
                </div>
                </Link>


                  <Link className='' to={"Etudiant/"+ this.props.EtudiantData.name +"?id=" + this.props.id}>
                              Visualiser
                  </Link>
                  <Link className='' to={"/Edit/"+ this.props.EtudiantData.name +"?id=" + this.props.id}>
                              Éditer
                  </Link>
                  <Suppression history={this.props.history} EtudiantID={this.props.id} />
              </Card> 
              
            </Col>     
          
      </>
    );
  }

}
