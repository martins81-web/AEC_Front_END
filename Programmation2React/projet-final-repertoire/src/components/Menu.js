import React from "react"; 
import {Nav,Navbar} from "react-bootstrap" 
import {NavLink} from 'react-router-dom' 

import {Link} from 'react-router-dom' 
import '../styles/navbar.sass';
import {Spring} from 'react-spring/renderprops';


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
return ( 
        

                <Navbar className='color-nav' expand='md'> 
                <Link exact='true' to="/Accueil"><Navbar.Brand >
                    <Spring from={{marginLeft:-1000} } to={{ marginLeft:0}} config={{delay: 500, duration:700}}>
                    {props =>( 
                        <div className='title' style={props}>
                        
                        <h1>projet<span>final</span> - Répertoire des étudiants</h1>
                        
                        </div>
                    )}
                    </Spring></Navbar.Brand> </Link>
                
                <Nav className="ml-auto"> 
                    <NavLink to="/Accueil" style={link} activeStyle={activeStyle}>Accueil</NavLink>      
                    <NavLink to="/Ajout" style={link} activeStyle={activeStyle}>Ajouter Étudiant</NavLink> 
                </Nav> 
        
                </Navbar>      
          
       
                );
                    }
}