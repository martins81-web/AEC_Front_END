import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
//import { ManageFilms } from "./ManageFilms";
import { PageNotFound } from "./PageNotFound";
//import { FilmComplet } from "./FilmComplet";
// import { ButtonAddMovie } from "./ButtonAddMovie";
// import { AddMovie } from "./AddMovie";

import { useLocation } from 'react-router-dom' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  let location = useLocation(); 
  console.log(location.pathname); 
  return (
    <> 
    <Container fluid>
      <Row>
        <Col xs xl="12" className="d-flex justify-content-between align-items-center">
          <div><h1>My favourite movies</h1></div>
      {/* <div>{location.pathname !== "/AddMovie" && <ButtonAddMovie/>} </div> */}
          
        </Col>
      </Row>
        
    
      <Switch>
          <Route path="/" exact component={ManageFilms} />
          <Route path="/Movies/:id" component={FilmComplet} />
          {/* <Route path="/AddMovie" component={AddMovie} /> */}
          <Route component={PageNotFound} />
      </Switch>
    </Container>
    </> 
  );
 
}

export default App;
