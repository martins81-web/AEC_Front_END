import React from "react";
import { Form } from "react-bootstrap";
import {Button} from "react-bootstrap"
import {Image} from "react-bootstrap"
import {Redirect} from "react-router-dom"
import {toast} from "react-toastify"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export class EditMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {picture: "", setErrors : {}};

    this.handleSave = this.handleSave.bind(this);
    this.handlePicture = this.handlePicture.bind(this);
  }

  async saveMovie(nom,photo,attaque1, attaque2) { 
    try{ 
      const response = await fetch('http://localhost:3001/movies/', { 
        method:'POST', 
        headers: {'Content-Type': 'application/json'  }, 
        body:JSON.stringify({id : title,
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
        toast.success("Ajout du Pokémon " + nom);

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
        <Container>
            <Form>
                <Form.Group as={Row} controlId="movieID">   
                    <Form.Group as={Col} controlId="movieTitle">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter the movie's title" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="year">
                        <Form.Label>Movie's release year</Form.Label>
                        <Form.Control type="text" placeholder="Enter the year the movie was released" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="director">
                        <Form.Label>Director's name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the director's name" />
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId="movieBanner">
                    <Form.Label>URL of the movie's banner</Form.Label>
                    <Form.Control type="text" placeholder="Enter a valid url" onBlur={this.handlePicture}/>
                </Form.Group>
                {this.state.picture !== "" && <Image src={this.state.picture} rounded />}
                
                <Form.Label>Writers</Form.Label>
                <Form.Group as={Row} controlId="writers">
                    <Form.Group as={Col} controlId="writers1">
                        <Form.Control type="text" placeholder="Enter the writer's name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="writers2">
                        <Form.Control type="text" placeholder="Enter the writer's name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="writers3">
                        <Form.Control type="text" placeholder="Enter the writer's name" />
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