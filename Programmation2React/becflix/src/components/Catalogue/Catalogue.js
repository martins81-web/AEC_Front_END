import React from 'react'; 
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';
import {Categorie} from "../Categorie/Categorie"


export class Catalogue  extends React.Component {  

    
    render() {  
       return ( 
        <div> 
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
            <Categorie />
        </div>          
        );  

    }  

};  