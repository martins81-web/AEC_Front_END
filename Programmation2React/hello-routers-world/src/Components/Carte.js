import React from "react"; 
import MapContainer from './MapContainer'

import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  

export class Carte extends React.Component {
     

    render() { 
        
        return (<>
                    <Row className='no-gutters' style={rowStyle}> 
                        <Col xs xl='12' className='px-5'>
                            <h1>Carte google</h1>
                        </Col>     

                    </Row>
        
                    <MapContainer />  
                    
                 </>
            );
    }
}


const rowStyle={
    marginBottom:'2rem',
    color: 'white',
    backgroundColor: '#343a40',
    padding: '1rem'

}