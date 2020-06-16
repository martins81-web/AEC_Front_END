// <!-- Recherche.js -->
// <!-- Techniques de programmation Web 2 -->
// <!-- Projet 1 par Eric Martins -->
// <!-- Crée le 2 juin 2020 -->
// <!-- Dernier mise à jour le 16 juin 2020 -->

import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';  
import FormControl from 'react-bootstrap/FormControl';  


export class Recherche extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {};
        
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.recherche(e.target.value);
    }


    render() { 
        return ( 
                
                    <Form  className="form-group has-search" inline onSubmit={e => {e.preventDefault()}}>
                        <span className="fa fa-search form-control-feedback"></span>
                        <FormControl style={inputStyle} onChange={this.handleChange} type="text" placeholder="Rechercher" />
                    </Form>
            );
    }
}


/* Style */
const inputStyle={
    borderRadius: '1.5rem',
    padding: '0.625rem',
    paddingLeft: '2.0rem'
}