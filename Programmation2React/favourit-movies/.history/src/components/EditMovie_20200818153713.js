import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"

export class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {
                  data: [] , 
                  setErrors : {}};

    this.handlePicture = this.handlePicture.bind(this);
  }

  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async componentDidMount() {
    try {
      await this.setState({movieID : this.props.location.search.substring(4,this.props.location.search.length)});
      await console.log(this.state.movieID);
      const response = await fetch("http://localhost:3001/movies/"+this.state.movieID);
      const reponseDeApi = await response.json();
      this.setState({ data: reponseDeApi });
      console.log(this.state.data);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  

  handlePicture(event){
    const pic = document.getElementById('movieBanner').value;
    this.setState( {picture : pic});
  }

  render() {
    return (
      <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nomPokemon">
                <Form.Label>Nom du Pokemon</Form.Label>
                <Form.Control type="text" defaultValue={this.state.donneesRecues.name}/> {/*/ Faire le test avec value*/}
              </Form.Group>
              <Form.Group controlId="photoPokemon">
                <Form.Label>URL d'une photo du Pokemon</Form.Label>
                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} defaultValue={this.state.donneesRecues.picture}/>
              </Form.Group>
              {this.state.donneesRecues.picture !== "" && <Image src={this.state.donneesRecues.picture} rounded width="125"/>}
              <Form.Group controlId="attaque1">
                <Form.Label>Nom de l'attaque 1</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 1" defaultValue={this.state.donneesRecues.abilities[0].name}/>
              </Form.Group>
              <Form.Group controlId="attaque2">
                <Form.Label>Nom de l'attaque 2</Form.Label>
                <Form.Control type="text" placeholder="Entrer le nom de l'attaque 2" defaultValue={this.state.donneesRecues.abilities[1].name }/>
              </Form.Group>

            <Button variant="primary" type="submit" onClick={this.handleEdit}>
                Enregistrer
            </Button>
            </Form>  
            </Col>    
          </Row>
          <p className="btn btn-danger mt-5" onClick={this.removePokemon}>Supprimer le Pokemon</p>
        </Container>
      </>
    );
  }
}