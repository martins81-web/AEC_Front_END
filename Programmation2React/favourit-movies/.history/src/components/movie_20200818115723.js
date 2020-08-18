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
    console.log(this.props.allMovieData);
    return (
      <>
        <Col className="col-2 mb-2"> 
          <Link to={"Movies/" + this.props.title + "?id=" + this.props.id}>
              <Card className="h-100 bg-muted">
                  <Card.Body className='text-center'>
                      <h5>{this.props.title}</h5>
                  </Card.Body>
                  <Card.Img variant="top" src={this.props.allMovieData.picture} />
              </Card> 
          </Link>
        </Col>     
      </>
    );
  }
}