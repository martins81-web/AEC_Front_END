import React from 'react';
import '../Components/App.css';
import {StarWars} from './StarWars'
import Container from 'react-bootstrap/Container'; 

function App() {
  return (
    <Container fluid>
      <StarWars/>
    </Container>
  );
}

export default App;
