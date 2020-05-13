import React from 'react';
import Col from 'react-bootstrap/Col';  
 

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleDeconexion = this.handleDeconexion.bind(this);
    }

    handleDeconexion(){
        const connected=false;
        this.props.onClick(connected);
    }

    render() {
        return (
            <Col xs lg="6">  
                <div className="d-flex justify-content-end">
                    <button onClick={this.handleDeconexion} type="" className="btn btn-danger mt-3" >Déconnexion</button>
                </div>
            </Col>  
        );
    }
}

