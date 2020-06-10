import React from "react"; 
import Col from 'react-bootstrap/Col'; 
import Card  from 'react-bootstrap/Card'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem'; 
// import chewie from '../img/Chewbacca_TLJ.png'


export class PersonnageV4 extends React.Component { 


render() { 
return ( 
        <Col xl="2" lg="3" md="4" sm="6" xs="12" className=' p-2'>
            <Card className="h-100 bg-light">
                {/* <Card.Img variant="top" src={chewie} /> */}
                <ListGroup className="list-group-flush">
                    {Object.keys(this.props.personnage).map(key => ( 
                    <ListGroupItem key={key}> <b>{key}: </b> 
                            {this.props.personnage[key]}
                    </ListGroupItem>  
                    ))} 
                </ListGroup>
            </Card>
        </Col>
    
        ); 
    } 
} 