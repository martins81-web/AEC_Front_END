import React from 'react';
import '../App/App.css';

import {FormNouveauClient}  from './FormNouveauClient';
import {PreviewCard}  from './PreviewCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export class AjoutClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  prenom: "",
                        nom: "",
                        metier: "",
                        courriel: "",
                        telephone: "",
                        adresse: "",
                    }

        this.handleAnnuler=this.handleAnnuler.bind(this);
    }

    handleAnnuler(){
        this.props.onAnnuler(true);
    }


    render() { 
        return (
            <Container >
                <Row className="col-container-sameHeight">
                    <Col className="col-sameHeight d-flex justify-content-around flex-column" xs xl="9">
                        <h2>Nouveau Client</h2>
                        <FormNouveauClient  onAnnuler={this.handleAnnuler} 
                                            onChangePrenom={(prenom) => this.setState({prenom: prenom})}
                                            onChangeNom={(nom) => this.setState({nom: nom})}
                                            onChangeMetier={(metier) => this.setState({metier: metier})}
                                            onChangeAdresse={(adresse) => this.setState({adresse: adresse})}
                                            onChangeTelephone={(telephone) => this.setState({telephone: telephone})}
                                            onChangeCourriel={(courriel) => this.setState({courriel: courriel})}
                        />
                    </Col>
                    <Col className="col-sameHeight" xs xl="43" >
                        <Row className="d-flex justify-content-center">
                            <Col xl="12" lg="12" md="12" sm="12" xs="12" className="mb-3"> 
                            
                                <PreviewCard    prenom={this.state.prenom}
                                                nom={this.state.nom}
                                                metier={this.state.metier}
                                                adresse={this.state.adresse}
                                                telephone={this.state.telephone}
                                                courriel={this.state.courriel}
                                />
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Container>
          );
    }
}
