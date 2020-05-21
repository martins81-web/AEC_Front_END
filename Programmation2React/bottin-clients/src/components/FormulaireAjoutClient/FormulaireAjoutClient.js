import React from 'react';
import '../App/App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';  
import FormControl from 'react-bootstrap/FormControl';  

export class FormulaireAjoutClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.handleAnnuler=this.handleAnnuler.bind(this);
    }

    handleAnnuler(){
        this.props.onAnnuler(true);
    }


    render() { 
        return (
            <>
                <h2>Nouveau Client</h2>
                    <Form id="" className="mx-2" onSubmit={e => {e.preventDefault()}}>
                            <Form.Group as={Row} controlId="formID">
                                <Form.Group as={Col}  xl="3" lg="3" md="6" sm="12" xs="12">
                                    <Form.Label>Prénom:</Form.Label>
                                    <FormControl id="prenom"  type="text" placeholder="Prénom" />
                                </Form.Group>
                                <Form.Group as={Col}  xl="3" lg="3" md="6" sm="12" xs="12">
                                    <Form.Label>Nom:</Form.Label>
                                    <FormControl id="nom"  type="text" placeholder="Nom" />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formMetier">
                                <Form.Group as={Col}  xl="3" lg="3" md="6" sm="12" xs="12">
                                    <Form.Label>Métier:</Form.Label>
                                    <FormControl id="metier"  type="text" placeholder="Métier" />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formContact">
                                <Form.Group as={Col}  xl="3" lg="3" md="6" sm="12" xs="12">
                                    <Form.Label>Courriel</Form.Label>
                                    <FormControl id="email"  type="email" placeholder="E-mail" />
                                </Form.Group>
                                <Form.Group as={Col}  xl="3" lg="3" md="6" sm="12" xs="12">
                                    <Form.Label>Téléphone:</Form.Label>
                                    <FormControl id="telephone"  type="tel" placeholder="Téléphone" />
                                </Form.Group>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formAdresse">
                                <Form.Group as={Col}  xl="3" lg="3" md="6" sm="12" xs="12">
                                    <Form.Label>Adresse:</Form.Label>
                                    <FormControl id="adresse"  type="text" placeholder="Adresse" />
                                </Form.Group>
                            </Form.Group>
                      
                        <Row>
                            <Col xl="6" lg="6" md="12" sm="12" xs="12" className="d-flex justify-content-end">
                                <button onClick="" type="" className="btn btn-primary mr-2" >Ajouter client</button>
                                <button onClick={this.handleAnnuler} type="" className="btn btn-danger" >Annuler</button>
                            </Col>
                        </Row>
                    </Form>   
            </>
          );
    }
}
