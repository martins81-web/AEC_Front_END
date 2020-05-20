import React from 'react';
import '../App/App.css';
import Col from 'react-bootstrap/Col';  
import Card  from 'react-bootstrap/Card'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem'; 



export class Client extends React.Component {
    render() { 
        return ( 
            <Col xs lg="2" className="mb-3"> 
                <Card className="h-100 bg-light" style={{ width: '19rem' }}>
                    <Card.Img variant="top" src={this.props.src} />
                    <Card.Body >
                        <Card.Title >{this.props.prenom+" "+this.props.nom}</Card.Title>
                        <Card.Text >{this.props.metier}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>Email:</b> <Card.Text><a href={"mailto:"+this.props.email}>{this.props.email}</a></Card.Text></ListGroupItem>
                        <ListGroupItem><b>Téléphone:</b> <Card.Text><a href={"tel:"+this.props.telephone}>{this.props.telephone}</a> </Card.Text></ListGroupItem>
                        <ListGroupItem><b>Adresse:</b> <Card.Text>{this.props.adresse}</Card.Text></ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
         );
    }
}
 
