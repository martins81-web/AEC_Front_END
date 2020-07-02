import React from "react"; 

import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  


export class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className='no-gutters mx-0' style={rowStyle}>
                <Col xs xl='12'>
                    <h1>Vidéo: Bruce Peninsula</h1>
                </Col>
                <Col xs xl='12' className='text-center my-3'>
                    <div>
                        <iframe title='video' width="100%" height="500px" src="https://www.youtube.com/embed/KQeMUbcjjTM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
                    </div>
                </Col>
            </Row>
                   
                );
    }
}
 
const rowStyle={
    marginBottom:'2rem',
    color: 'white',
    backgroundColor: '#343a40',
    padding: '1rem'
}
