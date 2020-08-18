import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";

export class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {picture: "",
                  data: {title: '', year: "", picture: "", director: "", writers : ["","",""], stars : ["","",""]} , 
                  
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
            <Form>
                <Form.Group as={Row} controlId="movieID">   
                    <Form.Group as={Col} controlId="movieTitle">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.data.title} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="year">
                        <Form.Label>Movie's release year</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.data.year} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="director">
                        <Form.Label>Director's name</Form.Label>
                        <Form.Control type="text" defaultValue={this.state.data.director} />
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="movieBanner">
                    <Form.Label>URL of the movie's banner</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.data.picture} onBlur={this.handlePicture}/>
                    {this.state.picture !== "" && <Image src={this.state.picture} rounded />}
                </Form.Group>
               
                
                <Form.Label>Writers</Form.Label>
                <Form.Group as={Row} controlId="writers">
                    <Form.Group as={Col} controlId="writers1">
                        <Form.Control type="text"  defaultValue={this.state.data.writers[0].name} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="writers2">
                        <Form.Control type="text"  defaultValue={this.state.data.writers[1].name}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="writers3">
                        <Form.Control type="text" />
                    </Form.Group>
                </Form.Group>
                <Form.Label>Stars</Form.Label>
                <Form.Group as={Row} controlId="stars">
                    <Form.Group as={Col} controlId="stars1"> 
                        <Form.Control type="text" placeholder="Enter the star's name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="stars2">
                        <Form.Control type="text" placeholder="Enter the star's name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="stars3">
                        <Form.Control type="text" placeholder="Enter the star's name" />
                    </Form.Group>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.handleSave}>
                    Save
                </Button>
            </Form>
        </Container>
      </>
    );
  }
}