import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
            return(
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '20px', borderRadius: '25px', marginTop: '25px',border: '2px solid white'}}>
                  <Row>
                      <Col xs={12} style={{display:'flex', justifyContent: 'center', alignContent: 'center'}}>
                          <div>Copyright © Eric Martins 2020</div>
                      </Col>
                  </Row>
                  
              </Container>);
        }

}
export default Footer;