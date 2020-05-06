import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import {Catalogue} from "../Catalogue/Catalogue"
import logoBecFlix from '../../img/becflix.png';

function App() {
  return (
    <div className="">
      <Container fluid>
          <Row className="">  
            <Col xs lg="12">  
              <img src={logoBecFlix} alt="logoBecFlix" height="64" ></img>
            </Col>  
          </Row>  

          <Catalogue />
      </Container>
    </div>
  );
}

export default App;
