import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";

export class AjouterEtudiant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photo: "", setErrors : {}};

    this.handleAdd = this.handleAdd.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.addEtudiant = this.addEtudiant.bind(this);
  }

  async addEtudiant(prenom, nom, photo, adresse, codePostal, telephone, cours ) { 
    try{ 
      const response = await fetch('https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({
          firstName: prenom,  
          name: nom,
          picture: photo,
          address: adresse,
          postalCode: codePostal,
          telephone: telephone,
          course: cours
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        //toast.success("Ajout d'étudiant " + prenom +" " + nom);

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}

  handleAdd(event){
    event.preventDefault();
    
    const prenom = document.getElementById('prenomEtudiant').value;
    const nom = document.getElementById('nomEtudiant').value;
    const photo = document.getElementById('photoEtudiant').value;
    const adresseEtudiant = document.getElementById('adresseEtudiant').value;
    const codePostal = document.getElementById('codePostal').value;
    const telephone = document.getElementById('telephone').value;
    const cours = document.getElementById('cours').value;


    this.addEtudiant(prenom, nom, photo, adresseEtudiant, codePostal, telephone, cours);
  }

  handlePhoto(event){
    const photos = document.getElementById('photoEtudiant').value;
    this.setState( {photo : photos});
  }


  render() {
    console.log(this.props.history);
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
            <Form.Group controlId="prenomEtudiant">
                <Form.Label>Prénom de l'étudiant</Form.Label>
                <Form.Control type="text" placeholder="Entrer le prénom de l'étudiant" />
              </Form.Group>
              <Form.Group controlId="nomEtudiant">
                <Form.Label>Nom de l'étudiant</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'étudiant" />
              </Form.Group>
              <Form.Group controlId="photoEtudiant">
                <Form.Label>URL d'une photo de l'étudiant</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
              </Form.Group>
              {this.state.photo !== "" && <Image src={this.state.photo} rounded width="125"/>}
              <Form.Group controlId="adresseEtudiant">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="Entrer l'adresse de l'étudiant" />
              </Form.Group>
              <Form.Group controlId="codePostal">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="text" placeholder="Entrer le code postal" />
              </Form.Group>
              <Form.Group controlId="telephone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="text" placeholder="Entrer le téléphone" />
              </Form.Group>
              <Form.Group controlId="cours">
                <Form.Label>Cours</Form.Label>
                <Form.Control type="text" placeholder="Entrer le cours" />
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