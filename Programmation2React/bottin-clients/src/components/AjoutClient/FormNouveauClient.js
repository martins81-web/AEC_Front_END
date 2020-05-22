import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';  
import FormControl from 'react-bootstrap/FormControl';
 

export class FormNouveauClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.handleAnnuler=this.handleAnnuler.bind(this);
    }

    handleAnnuler(){
        this.props.onAnnuler(true);
    }


    render() {
        return (<>
                <Form id="" className="mx-2" onSubmit={e => {e.preventDefault()}}>
                            <Form.Group as={Row} controlId="formID">
                                <Form.Group as={Col}  xl="12" lg="12" md="12" sm="12" xs="12">
                                    <Row>
                                        <Form.Label column xl="2" style={{fontSize: 'auto'}}>Prénom:</Form.Label>
                                        <Col xl="10">
                                            <FormControl ref="prenom" id="prenom" onChange={()=>{this.props.onChangePrenom(this.refs.prenom.value)}} type="text" placeholder="Prénom" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col}  xl="12" lg="12" md="12" sm="12" xs="12">
                                    <Row>
                                        <Form.Label column xl="2">Nom:</Form.Label>
                                        <Col xl="10">
                                            <FormControl ref="nom"  id="nom" onChange={()=>{this.props.onChangeNom(this.refs.nom.value)}} type="text" placeholder="Nom" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                
                
                                <Form.Group as={Col}  xl="12" lg="12" md="12" sm="12" xs="12">
                                    <Row>
                                        <Form.Label column xl="2">Courriel:</Form.Label>
                                        <Col xl="10">
                                            <FormControl ref="courriel"  id="courriel" onChange={()=>{this.props.onChangeCourriel(this.refs.courriel.value)}} type="email" placeholder="Courriel" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col}  xl="12" lg="12" md="12" sm="12" xs="12">
                                    <Row>
                                        <Form.Label column xl="2">Téléphone:</Form.Label>
                                        <Col xl="10">
                                            <FormControl ref="telephone" id="telephone" onChange={()=>{this.props.onChangeTelephone(this.refs.telephone.value)}} type="tel" placeholder="Téléphone" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                        
                                <Form.Group as={Col}  xl="12" lg="12" md="12" sm="12" xs="12">
                                    <Row>
                                        <Form.Label column xl="2">Adresse:</Form.Label>
                                        <Col xl="10">
                                            <FormControl ref="adresse"  id="adresse" onChange={()=>{this.props.onChangeAdresse(this.refs.adresse.value)}} type="text" placeholder="Adresse" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col}  xl="12" lg="12" md="12" sm="12" xs="12">
                                    <Row>
                                        <Form.Label column xl="2">Métier:</Form.Label>
                                        <Col xl="10">
                                            <FormControl ref="metier" id="metier" onChange={()=>{this.props.onChangeMetier(this.refs.metier.value)}} type="text" placeholder="Métier" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form.Group>           
            </Form>  
            <div className="d-flex justify-content-end" controlId="formButtons">
                <button onClick="" type="" className="btn btn-primary mr-2" >Ajouter client</button>
                <button onClick={this.handleAnnuler} type="" className="btn btn-danger" >Annuler</button>
            </div>
            </>
        );
    }
}