import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import '../styles/formAjout.sass';
import {toast} from "react-toastify";
import {API} from "../Api_constante";

export class AjouterEtudiant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addEtudiant = this.addEtudiant.bind(this);
  }

  async addEtudiant(prenom, nom, photo, adresse, ville, codePostal, telephone, cours, email ) { 
    try{ 
      const response = await fetch( API , { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          firstName: prenom,  
          name: nom,
          picture: photo,
          address: adresse,
          ville: ville,
          postalCode: codePostal,
          telephone: telephone,
          course: cours,
          email: email
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/Repertoire");
        toast.success("Ajout d'étudiant!");

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

formIsValid(prenomEtudiant,nomEtudiant,photoEtudiant,adresseEtudiant, villeEtudiant,codePostal,telephone,cours,email){
  const _errors = {};
  if(!prenomEtudiant) _errors.prenomEtudiant = "Le prénom est obligatoire";
  if(!nomEtudiant) _errors.nomEtudiant = "Le nom est obligatoire";
  if(!photoEtudiant) _errors.photoEtudiant = "La photo est obligatoire";
  if(!adresseEtudiant) _errors.adresseEtudiant = "L'adresse est obligatoire";
  if(!villeEtudiant) _errors.villeEtudiant = "La ville est obligatoire";
  if(!email) _errors.email = "L'email' est obligatoire";
  if(!codePostal) _errors.codePostal = "Le code postal est obligatoire";
  if(!telephone) _errors.telephone = "Le telephone est obligatoire";
  if(!cours) _errors.cours = "Le cours est obligatoire";

  this.setState({setErrors : _errors});
  return Object.keys(_errors).length === 0;
}


  handleAdd(event){
    event.preventDefault();
    
    const prenom = document.getElementById('prenomEtudiant').value;
    const nom = document.getElementById('nomEtudiant').value;
    const photo = document.getElementById('photoEtudiant').value;
    const adresseEtudiant = document.getElementById('adresseEtudiant').value;
    const villeEtudiant = document.getElementById('villeEtudiant').value;
    const codePostal = document.getElementById('codePostal').value;
    const telephone = document.getElementById('telephone').value;
    const cours = document.getElementById('cours').value;
    const email = document.getElementById('email').value;

    if(!this.formIsValid(prenom,nom,photo,adresseEtudiant, villeEtudiant,codePostal,telephone,cours,email)) return;

      this.addEtudiant(prenom, nom, photo, adresseEtudiant, villeEtudiant, codePostal, telephone, cours,email);
    
  }

  handlePhoto(event){
    const photo = document.getElementById('photoEtudiant').value;
    this.setState( {photo : photo});
  }


  render() {
    console.log(this.props.history);
    return (
      <>
      <Container className='p-4 text-center'>   
        <h2>Ajout d'un nouveau étudiant</h2> 
      </Container>
      <Container className='pb-4'>
        <Row>
          <Col>
            <Form>
            <Form.Label><h4>Identification</h4></Form.Label>
              <Form.Group as={Row} controlId="prenom+nom" className='border border-black py-3'>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenomEtudiant">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le prénom de l'étudiant" isInvalid={!!this.state.setErrors.prenomEtudiant} required />
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.prenomEtudiant}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomEtudiant">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom de l'étudiant" isInvalid={!!this.state.setErrors.nomEtudiant} required />
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.nomEtudiant}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <Form.Label className='mt-4'><h4>Photo</h4></Form.Label>
              <Form.Group as={Row} controlId="photo" className='border border-black py-3'>
                
                
                    <Form.Group  as={Col} xl="9" lg="9" md="12" sm="12" xs="12" controlId="photoEtudiant">
                      <Form.Label>URL d'une photo de l'étudiant</Form.Label>
                      <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} isInvalid={!!this.state.setErrors.photoEtudiant} required/>
                      <Form.Control.Feedback type='invalid'>
                        {this.state.setErrors.photoEtudiant}
                      </Form.Control.Feedback>
                    </Form.Group>
                
                <Col as={Col} xl="3" lg="3" md="6" sm="12" xs="12" className='text-center'> 
                    <div>
                      {this.state.photo !== "" && <Image src={this.state.photo} rounded height='200'/>}
                    </div>
                </Col> 

              </Form.Group>
              <Form.Label className='mt-4'><h4>Formation</h4></Form.Label>
              <Form.Group as={Row} controlId="" className='border border-black py-3'>
                <Form.Group as={Col} xl="12" lg="12" md="12" sm="12" xs="12" controlId="cours">
                        <Form.Label>Cours</Form.Label>
                        <Form.Control type="text" placeholder="Entrer le cours" isInvalid={!!this.state.setErrors.cours}  required/>
                        <Form.Control.Feedback type='invalid'>
                          {this.state.setErrors.cours}
                        </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>

              <Form.Label className='mt-4'><h4>Contact</h4></Form.Label>
              <Form.Group as={Row} controlId="add" className='border border-black py-3'>
              <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="adresseEtudiant">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control type="text" placeholder="Entrer l'adresse de l'étudiant" isInvalid={!!this.state.setErrors.adresseEtudiant} required/>
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.adresseEtudiant}
                  </Form.Control.Feedback>
              </Form.Group>
              

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="villeEtudiant">
                  <Form.Label>Ville</Form.Label>
                  <Form.Control type="text" placeholder="Entrer la ville" isInvalid={!!this.state.setErrors.villeEtudiant} required/>
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.villeEtudiant}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="codePostal">
                  <Form.Label>Code postal</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le code postal" isInvalid={!!this.state.setErrors.codePostal}  required/>
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.codePostal}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le téléphone" isInvalid={!!this.state.setErrors.telephone}  required/>
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.telephone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Entrer l'email" isInvalid={!!this.state.setErrors.email}  required/>
                  <Form.Control.Feedback type='invalid'>
                    {this.state.setErrors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>

              
            

            <Button variant="primary" type="submit" onClick={this.handleAdd}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }
}