import React from 'react';
import './App.css';
 


export class Paroles extends React.Component  {

    render() { 
        return ( 
            this.props.paroles
         );
    }
}

Paroles.defaultProps = { paroles: 'Paroles non disponibles' };  