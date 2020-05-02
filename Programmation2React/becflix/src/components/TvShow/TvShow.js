import React from 'react'; 
import beauxMalaises from '../../img/beauxMalaises.jpg'; 
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';


var image  = (  
    <img className="img-fluid"
      src={beauxMalaises}
      alt="beauxMalaises"      
      title="Les beaux malaises" />  
  ); 

export class TvShow extends React.Component {  

    render() {  

       return ( 
                <Col  lg="2"> {image}  </Col>       
            );  
    }  
};  
