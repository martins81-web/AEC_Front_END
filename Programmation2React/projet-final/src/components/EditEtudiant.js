// <!-- EditEtudiant.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->

import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import {API} from "../Api_constante";
import { Link } from "react-router-dom";

function EditEtudiant(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", abilities : ["",""] });
  const [EtudiantID ] = useState(props.location.search.substring(4,props.location.search.length));
  const [photos , setPhotos] = useState("");
  const [Errors , setErrors] = useState("");

  useEffect(() => {
    getEtudiant();
  },[]); 


  async function getEtudiant() {
    try {
      const response = await fetch( API + EtudiantID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      handlePhoto();
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editEtudiant(prenom, nom, photo, adresse, ville, codePostal, telephone, cours, email ) { 
    try{ 
      const response = await fetch( API + EtudiantID, { 
        method:'PUT', 
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
        props.history.push("/Etudiant/"+ nom +"?id="+EtudiantID);
        toast.info("Étudiant modifié!!");

        return response; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
      console.log(error); 
   } 
}



  function handleEdit(event){
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

    if(!formIsValid(prenom,nom,photo,adresseEtudiant, villeEtudiant,codePostal,telephone,cours,email)) return;

    editEtudiant (prenom, nom, photo, adresseEtudiant, villeEtudiant, codePostal, telephone, cours,email );
  }

  function handlePhoto(event){
    const photos = document.getElementById('photoEtudiant').value;
    setPhotos(photos);
  }

  function formIsValid(prenomEtudiant,nomEtudiant,photoEtudiant,adresseEtudiant, villeEtudiant,codePostal,telephone,cours,email){
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
  
    setErrors(_errors);
    if (Object.keys(_errors).length !== 0)
      {toast.error("Remplissez tout les champs!!!")}

    return Object.keys(_errors).length === 0;
  }

  async function suppression(){
    try{ 
      const response = await fetch(API+ EtudiantID, { 
        method:'DELETE', 
      }); 
  
      if(response.ok){ 
        props.history.push("/Repertoire");
        toast.error("Étudiant supprimé!");
       
  
        return response; 
      } 
      throw new Error('Request failed!'); 
      } 
      catch(error){ 
          console.log(error); 
      } 
  }

    return (
      <>
      <Container className='p-4 text-center'>   
        <h2>Modifier les informations de l'etudiant</h2> 
      </Container>
      <Container className='pb-4'>
        <Row>
          <Col>
            <Form>
            <Form.Label><h4>Identification</h4></Form.Label>
              <Form.Group as={Row} controlId="prenom+nom" className='border border-black py-3'>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="prenomEtudiant">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le prénom de l'étudiant"  defaultValue={donneesRecues.firstName} isInvalid={!!Errors.prenomEtudiant} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.prenomEtudiant} 
                    

                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="nomEtudiant">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le nom de l'étudiant" defaultValue={donneesRecues.name}  isInvalid={!!Errors.nomEtudiant} required />
                  <Form.Control.Feedback type='invalid'>
                    {Errors.nomEtudiant}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
              <Form.Label className='mt-4'><h4>Photo</h4></Form.Label>
              <Form.Group as={Row} controlId="photo" className='border border-black py-3'>
                
                
                    <Form.Group  as={Col} xl="9" lg="9" md="12" sm="12" xs="12" controlId="photoEtudiant">
                      <Form.Label>URL d'une photo de l'étudiant</Form.Label>
                      <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} isInvalid={!!Errors.photoEtudiant}  defaultValue={donneesRecues.picture} required/>
                      <Form.Control.Feedback type='invalid'>
                        {Errors.photoEtudiant}
                      </Form.Control.Feedback>
                    </Form.Group>
                
                <Col as={Col} xl="3" lg="3" md="6" sm="12" xs="12" className='text-center'> 
                    <div>
                      {photos !== "" && <Image src={photos} rounded height='200'/>}
                    </div>
                </Col> 

              </Form.Group>
              <Form.Label className='mt-4'><h4>Formation</h4></Form.Label>
              <Form.Group as={Row} controlId="" className='border border-black py-3'>
                <Form.Group as={Col} xl="12" lg="12" md="12" sm="12" xs="12" controlId="cours">
                        <Form.Label>Cours</Form.Label>
                        <Form.Control type="text" placeholder="Entrer le cours"  isInvalid={!!Errors.cours}  defaultValue={donneesRecues.course} required/>
                        <Form.Control.Feedback type='invalid'>
                          {Errors.cours}
                        </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>

              <Form.Label className='mt-4'><h4>Contact</h4></Form.Label>
              <Form.Group as={Row} controlId="add" className='border border-black py-3'>
              <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="adresseEtudiant">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control type="text" placeholder="Entrer l'adresse de l'étudiant" isInvalid={!!Errors.adresseEtudiant}  defaultValue={donneesRecues.address} required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.adresseEtudiant}
                  </Form.Control.Feedback>
              </Form.Group>

                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="villeEtudiant">
                  <Form.Label>Ville</Form.Label>
                  <Form.Control type="text" placeholder="Entrer la ville" isInvalid={!!Errors.villeEtudiant}  defaultValue={donneesRecues.ville} required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.villeEtudiant}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="codePostal">
                  <Form.Label>Code postal</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le code postal" isInvalid={!!Errors.codePostal}  defaultValue={donneesRecues.postalCode}  required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.codePostal}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="telephone">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control type="text" placeholder="Entrer le téléphone" isInvalid={!!Errors.telephone}  defaultValue={donneesRecues.telephone} required/>
                  <Form.Control.Feedback type='invalid'>
                   {Errors.telephone}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xl="6" lg="6" md="12" sm="12" xs="12" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Entrer l'email" isInvalid={!!Errors.email} defaultValue={donneesRecues.email}  required/>
                  <Form.Control.Feedback type='invalid'>
                    {Errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
            <Row>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <Button variant="primary" type="submit" onClick={handleEdit}>
                    Enregistrer
                </Button>
            </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <Link className='links m-2 p-2' to={"/Etudiant/"+ donneesRecues.name +"?id="+EtudiantID}>
                                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                                  </svg> Retour au dossier de {donneesRecues.firstName + " " + donneesRecues.name}
                </Link>
              </Col>
              <Col xl="4" lg="4" md="4" sm="12" xs="12" className='text-right'>
                <Button variant="danger" type="submit" onClick={suppression}>
                    Supprimer
                </Button>
              </Col>
            </Row>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }

  export default EditEtudiant;