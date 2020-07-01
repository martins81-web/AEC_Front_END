import React from "react"; 

import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Image from 'react-bootstrap/Image';  

import SB1 from '../img/SB1.jpg'
import SB2 from '../img/SB2.jpg'
import SB3 from '../img/SB3.jpg'
import SB4 from '../img/SB4.jpg'

import Shipwrecks1 from '../img/Shipwrecks1.jpg'
import Shipwrecks2 from '../img/Shipwrecks2.jpg'
import Shipwrecks3 from '../img/Shipwrecks3.jpg'
import Shipwrecks4 from '../img/Shipwrecks4.jpg'

import BruceNPark1 from '../img/BruceNPark1.jpg'
import BruceNPark2 from '../img/BruceNPark2.jpg'
import BruceNPark3 from '../img/BruceNPark3.jpg'
import BruceNPark4 from '../img/BruceNPark4.jpg'

import LittleCove1 from '../img/LittleCove1.jpg'
import LittleCove2 from '../img/LittleCove2.jpg'
import LittleCove3 from '../img/LittleCove3.jpg'
import LittleCove4 from '../img/LittleCove4.jpg'

export class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
                    <Row className='no-gutters' style={rowStyle}>
                        <Col xs xl='12'>
                            <h1>Sauble Beach</h1>
                        </Col>
                        <Col xs xl='3'>
                            <Image src={SB1} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={SB2} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={SB3} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={SB4} fluid />
                        </Col>
                    </Row>
                    <Row className='no-gutters' style={rowStyle}>
                        <Col xs xl='12'>
                            <h1>Shipwrecks in Tobermory</h1>
                        </Col>
                        <Col xs xl='3'>
                            <Image src={Shipwrecks1} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={Shipwrecks2} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={Shipwrecks3} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={Shipwrecks4} fluid />
                        </Col>
                    </Row>
                    <Row className='no-gutters' style={rowStyle}>
                        <Col xs xl='12'>
                            <h1>Bruce Peninsula National Park</h1>
                        </Col>
                        <Col xs xl='3'>
                            <Image src={BruceNPark1} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={BruceNPark2} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={BruceNPark3} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={BruceNPark4} fluid />
                        </Col>
                    </Row>
                    <Row className='no-gutters' style={rowStyle}>
                        <Col xs xl='12'>
                            <h1>Little Cove Provincial Park</h1>
                        </Col>
                        <Col xs xl='3'>
                            <Image src={LittleCove1} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={LittleCove2} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={LittleCove3} fluid />
                        </Col>
                        <Col xs xl='3'>
                            <Image src={LittleCove4} fluid />
                        </Col>
                    </Row>
                
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