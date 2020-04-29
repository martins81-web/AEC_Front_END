import React from 'react';
import logo from "../../img/logo.svg";
import './App.css';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import {TvShow} from "../TvShow/TvShow"
import {Catalogue} from "../Catalogue/Catalogue"
import logoBecFlix from '../../img/becflix.PNG';

function App() {
  return (
    <div className="">
      <Container fluid>
          <Row className="">  
            <Col xs lg="12">  
              <img src={logoBecFlix} alt="logoBecFlix face" height="64" ></img>
            </Col>  
          </Row>  

          <Catalogue />
      </Container>
    </div>
  );
}

export default App;
