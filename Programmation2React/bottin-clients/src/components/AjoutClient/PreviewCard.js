import React from 'react';
import Card  from 'react-bootstrap/Card'; 
import ListGroup from 'react-bootstrap/ListGroup'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem';   

import defaultClientImage from '../../img/default_Client_Image.jpg';
import defaultClientImageFille from '../../img/default_Client_Image_fille.jpg';

export class PreviewCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  image: defaultClientImage,
                        typeImg: "", 
                        hovered: false
                    };
        
        this.handleClick=this.handleClick.bind(this);
        
    }

    

    handleClick(){
        this.state.image === defaultClientImage ? this.setState({image: defaultClientImageFille}):this.setState({image: defaultClientImage});
        
        if (this.state.image === defaultClientImage){
            this.props.image(defaultClientImageFille); 
        } else{
            this.props.image(defaultClientImage); 
        }

     
        
    }

    render() {
        return (
            <Card className="bg-light">
                <Card.Img   onClick={this.handleClick} 
                            onMouseOver={() => this.setState({hovered: true})}
                            onMouseOut={() => this.setState({hovered: false})}
                            style={{cursor: `${this.state.hovered ? 'pointer' : null}`}}
                            title="Clique Moi!"
                            variant="top" src={this.state.image}   />
                            
                <Card.Body>
                    <Card.Title>{this.props.prenom +" "+this.props.nom}</Card.Title>
                    <Card.Text>{this.props.metier}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><b>Email:</b> <Card.Text><a href={"mailto:"+this.props.courriel}>{this.props.courriel}</a></Card.Text></ListGroupItem>
                    <ListGroupItem><b>Téléphone:</b> <Card.Text><a href={"tel:"+this.props.telephone}>{this.props.telephone}</a> </Card.Text></ListGroupItem>
                    <ListGroupItem><b>Adresse:</b> <Card.Text>{this.props.adresse}</Card.Text></ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}
