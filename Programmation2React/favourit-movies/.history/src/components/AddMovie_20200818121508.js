import React from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap"
import {Image} from "react-bootstrap"
import {toast} from "react-toastify"

export class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {picture: "", setErrors : {}};

    this.handleSave = this.handleSave.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }

  async saveMovie(title, year, picture, director, writers1, writers2, writers3, stars1, stars2, stars3) { 
    try{ 
        const newID = await this.getID();
        const response = await fetch('http://localhost:3001/movies/', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body:JSON.stringify({id : newID,
          title: title,
          year: year,
          picture: picture,
          director:director,
          writers: [
            {
              name: writers1
            },
            {
              name: writers2
            },
            {
              name: writers3
            }
          ],
          stars: [
            {
              name: stars1
            },
            {
              name: stars2
            },
            {
              name: stars3
            }
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

  //Retourne le prochain ID pour savoir où ajouter
  async getID() {
    try {
      let nextID = 0 
      const response = await fetch("http://localhost:3001/pokemons");
      const reponseDeApi = await response.json();
      for (let i=0;i<reponseDeApi.length;i++){
        if(reponseDeApi[i].id > nextID){
            nextID = reponseDeApi[i].id;
        }
      }   
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID+1;
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

    this.saveMovie(title, year, picture, director, writers1, writers2, writers3, stars1, stars2, stars3);
  }

  handlePicture(event){
    const pic = document.getElementById('movieBanner').value;
    this.setState( {picture : pic});
  }


  render() {
    return (
      <>
        <h3>Add new Movie</h3>
        <Form>
          <Form.Group controlId="movieTitle">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control type="text" placeholder="Enter the movie's title" />
          </Form.Group>
          <Form.Group controlId="movieBanner">
            <Form.Label>URL of the movie's banner</Form.Label>
            <Form.Control type="text" placeholder="Enter a valid url" onBlur={this.handlePicture}/>
          </Form.Group>
          {this.state.picture !== "" && <Image src={this.state.picture} rounded />}
          <Form.Group controlId="year">
            <Form.Label>Movie's release year</Form.Label>
            <Form.Control type="text" placeholder="Enter the year the movie was released" />
          </Form.Group>
          <Form.Group controlId="director">
            <Form.Label>Director's name</Form.Label>
            <Form.Control type="text" placeholder="Enter the director's name" />
          </Form.Group>
          <Form.Group controlId="writers1">
            <Form.Label>Writers</Form.Label>
            <Form.Control type="text" placeholder="Enter the writer's name" />
          </Form.Group>
          <Form.Group controlId="writers2">
            <Form.Control type="text" placeholder="Enter the writer's name" />
          </Form.Group>
          <Form.Group controlId="writers3">
            <Form.Control type="text" placeholder="Enter the writer's name" />
          </Form.Group>
          <Form.Group controlId="stars1">
            <Form.Label>Stars</Form.Label>
            <Form.Control type="text" placeholder="Enter the star's name" />
          </Form.Group>
          <Form.Group controlId="stars2">
            <Form.Control type="text" placeholder="Enter the star's name" />
          </Form.Group>
          <Form.Group controlId="stars3">
            <Form.Control type="text" placeholder="Enter the star's name" />
          </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSave}>
            Save
        </Button>
        </Form>
      </>
    );
  }
}