// <!-- Recherche.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->

import React from 'react';
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
                        <FormControl  onChange={this.handleChange} type="text" placeholder="Rechercher" />
                    </Form>
            );
    }
}