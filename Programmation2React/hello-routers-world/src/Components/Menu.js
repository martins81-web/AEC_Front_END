import React from "react"; 
import {Nav,Navbar} from "react-bootstrap" 
import {NavLink} from 'react-router-dom' 
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  

export class Menu extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {  }
    }
render() { 
const activeStyle = {fontWeight: "bold",color: "red"};
const link ={
    paddingRight: '2rem',
    paddingLeft: '2rem',
}
return ( <Row className='no-gutters mt-3'> 
            <Col> 
                <Navbar bg="dark" variant="dark"> 
                    <Navbar.Brand href="/Accueil"><h3>Destination Vacances</h3></Navbar.Brand> 
                        <Nav> 
                            <NavLink to="/Accueil" style={link} activeStyle={activeStyle}>Accueil</NavLink> 
                            <NavLink to="/Photos" style={link} activeStyle={activeStyle}>Photos</NavLink> 
                            <NavLink to="/Video" style={link} activeStyle={activeStyle}>Video</NavLink> 
                            <NavLink to="/Carte" style={link} activeStyle={activeStyle}>Carte</NavLink> 
                        </Nav> 
                </Navbar> 
                <br /> 
            </Col>
        </Row> ); 

} 
}

