import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
//import {Redirect} from "react-router-dom";
//import {API} from "../constantes";
//import {toast} from "react-toastify"

function EditEtudiant(props){
  const [donneesRecues , setDonneesRecues] = useState({name: '', picture:"", abilities : ["",""] });
  const [EtudiantID ] = useState(props.location.search.substring(4,props.location.search.length));
  const [photos , setPhotos] = useState("");
  
  useEffect(() => {
    getEtudiant();
  }); 


  async function getEtudiant() {
    try {
      
      const response = await fetch('https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants/' + EtudiantID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editEtudiant(prenom, nom, photo, adresse, ville, codePostal, telephone, cours ) { 
    try{ 
      const response = await fetch('https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants/' + EtudiantID, { 
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
            course: cours
          })  
      }); 
      if(response.ok){ 
        props.history.push("/Etudiant/dow?id="+EtudiantID);
        //toast.success("Modification " + nom);

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
    const adresse = document.getElementById('adresseEtudiant').value;
    const ville = document.getElementById('villeEtudiant').value;
    const codePostal = document.getElementById('codePostal').value;
    const telephone = document.getElementById('telephone').value;
    const cours = document.getElementById('cours').value;

    editEtudiant (prenom, nom, photo, adresse, ville, codePostal, telephone, cours );
  }

  function handlePhoto(event){
    const photos = document.getElementById('photoEtudiant').value;
    setPhotos(photos);
  }
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
            <Form.Group controlId="prenomEtudiant">
                <Form.Label>Prénom de l'étudiant</Form.Label>
                <Form.Control type="text" placeholder="Entrer le prénom de l'étudiant"  defaultValue={donneesRecues.firstName} required />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="nomEtudiant">
                <Form.Label>Nom de l'étudiant</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'étudiant"  defaultValue={donneesRecues.name} required />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="photoEtudiant">
                <Form.Label>URL d'une photo de l'étudiant</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto}  defaultValue={donneesRecues.picture} required/>
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>
              {photos !== "" && <Image src={photos} rounded width="125"/>}
              <Form.Group controlId="adresseEtudiant">
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="Entrer l'adresse de l'étudiant"  defaultValue={donneesRecues.address} required/>
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="villeEtudiant">
                <Form.Label>Ville</Form.Label>
                <Form.Control type="text" placeholder="Entrer la ville"  defaultValue={donneesRecues.ville} required/>
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="codePostal">
                <Form.Label>Code postal</Form.Label>
                <Form.Control type="text" placeholder="Entrer le code postal"  defaultValue={donneesRecues.postalCode} required/>
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="telephone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="text" placeholder="Entrer le téléphone"  defaultValue={donneesRecues.telephone} required/>
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="cours">
                <Form.Label>Cours</Form.Label>
                <Form.Control type="text" placeholder="Entrer le cours"  defaultValue={donneesRecues.course} required/>
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
        </Container>
      </>
    );
  }

  export default EditEtudiant;