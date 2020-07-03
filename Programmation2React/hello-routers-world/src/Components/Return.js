import React from "react"; 
import {Link} from 'react-router-dom' 
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  

 
export class Return extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { return (
                <Row>
                    <Col>
                        <Link exact to="/Accueil" className="btn btn-primary mb-3"> 
                            Retour à l'accueil 
                        </Link> 
                    </Col>
                </Row>
        ); 
    }
}
