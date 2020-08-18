import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify";

export class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = {picture: "",
                  data: {title: '', year: "", picture: "", director: "", writers : ["","",""], stars : ["","",""]} , 
                  
                  setErrors : {}};

    this.handlePicture = this.handlePicture.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  handleSave(event){
    event.preventDefault();
    
    const title = document.getElementById('movieTitle').value;
    const picture = document.getElementById('movieBanner').value;
    const director = document.getElementById('director').value;
    const year = document.getElementById('year').value;
    const writers1 = document.getElementById('writers1').value;
    const writers2 = document.getElementById('writers2').value;
    const writers3 = document.getElementById('writers3').value;
    const stars1 = document.getElementById('stars1').value;
    const stars2 = document.getElementById('stars2').value;
    const stars3 = document.getElementById('stars3').value;

    if(!this.formIsValid(title,picture,director,year,writers1,stars1)) return;

    this.editMovie(title, year, picture, director, writers1, writers2, writers3, stars1, stars2, stars3);
  }

  formIsValid(title,picture,director,year,writers1,stars1){
    const _errors = {};
    if(!title) _errors.title = "The title is required";
    if(!picture) _errors.picture = "Movie URL banner is required";
    if(!director) _errors.director = "The director's name is required";
    if(!year) _errors.year = "The release year of the movie is required";
    if(!writers1) _errors.writer1 = "You have to enter at least one writer";
    if(!stars1) _errors.stars1 = "You have to enter at least one movie star";

    this.setState({setErrors : _errors});
    return Object.keys(_errors).length === 0;
  }

  async editMovie(title, year, picture, director, writers1, writers2, writers3, stars1, stars2, stars3) { 
    try{ 
        const response = await fetch('http://localhost:3001/movies/', { 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'}, 
        body:JSON.stringify({id : this.state.movieID,
          title: title,
          year: year,
          picture: picture,
          director:director,
          writers: [
             writers1, writers2,writers3
          ],
          stars: [
            stars1,stars2,stars3
          ]
        }) 
      }); 
      if(response.ok){ 
        const jsonResponse = await response.json(); 
        this.props.history.push("/");
        toast.success(title + " added to my favourite movies!");

        return jsonResponse; 
      } 
      throw new Error('Request failed!'); 
  } 
   catch(error){ 
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
                        <Form.Control type="text"  defaultValue={this.state.data.writers[0]} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="writers2">
                        <Form.Control type="text"  defaultValue={ this.state.data.writers[1] }/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="writers3">
                        <Form.Control type="text" defaultValue={ this.state.data.writers[2]} />
                    </Form.Group>
                </Form.Group>
                <Form.Label>Stars</Form.Label>
                <Form.Group as={Row} controlId="stars">
                    <Form.Group as={Col} controlId="stars1"> 
                        <Form.Control type="text" defaultValue={ this.state.data.stars[0]}  />
                    </Form.Group>
                    <Form.Group as={Col} controlId="stars2" >
                        <Form.Control type="text" defaultValue={ this.state.data.stars[1]}  />
                    </Form.Group>
                    <Form.Group as={Col} controlId="stars3">
                        <Form.Control type="text" defaultValue={ this.state.data.stars[2]}  />
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