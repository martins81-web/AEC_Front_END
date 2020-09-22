// <!-- Footer.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->

import React from 'react';
import '../styles/footer.sass';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export  function Footer() {
 
  return (
    <footer>
    <Container fluid className='footer' >
        <Row >
          <Col  xl="12" lg="12" md="12" sm="12">
            <p className="m-0 text-center text-white">Copyright &copy; Eric Martins 2020</p>
          </Col>
        </Row>
    </Container>
    </footer>
  );
}


