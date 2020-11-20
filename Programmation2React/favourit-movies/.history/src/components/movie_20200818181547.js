import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap"
import Col from 'react-bootstrap/Col';

export class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

  render() {
    console.log(this.props.movieData);
    return (
      <>
        <Col className="col-2 mb-2"> 
          
              <Card className="h-100 bg-muted">
                  <Card.Body className='text-center'>
                    <Link to={"Movies/" + this.props.movieData.title + "?id=" + this.props.movieData.id}>
                      <h5>{this.props.movieData.title}</h5>
                    </Link>
                      <h6>{this.props.movieData.director}</h6>
                      <h6>{this.props.movieData.year}</h6>
                  </Card.Body>
                  <Link to={"Movies/" + this.props.movieData.title + "?id=" + this.props.movieData.id}>
                    <Card.Img variant="top" src={this.props.movieData.picture} />
                  </Link>
              </Card> 
          
        </Col>     
      </>
    );
  }
}