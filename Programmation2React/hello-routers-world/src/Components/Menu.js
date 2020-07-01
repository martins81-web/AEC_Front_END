import React from "react"; 
import {Nav,Navbar} from "react-bootstrap" 
import {NavLink} from 'react-router-dom' 
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import {Link} from 'react-router-dom' 

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
                <Link exact to="/AEC_Front_End/Programmation2React/hello-routers-world/build/Accueil"><Navbar.Brand ><h3>Destination Vacances</h3></Navbar.Brand> </Link>
                        <Nav> 
                            <NavLink to="/AEC_Front_End/Programmation2React/hello-routers-world/build/Accueil" style={link} activeStyle={activeStyle}>Accueil</NavLink> 
                            <NavLink to="/AEC_Front_End/Programmation2React/hello-routers-world/build/Photos" style={link} activeStyle={activeStyle}>Photos</NavLink> 
                            <NavLink to="/AEC_Front_End/Programmation2React/hello-routers-world/build/Video" style={link} activeStyle={activeStyle}>Video</NavLink> 
                            <NavLink to="/AEC_Front_End/Programmation2React/hello-routers-world/build/Carte" style={link} activeStyle={activeStyle}>Carte</NavLink> 
                        </Nav> 
                </Navbar> 
                <br /> 
            </Col>
        </Row> ); 

} 
}

