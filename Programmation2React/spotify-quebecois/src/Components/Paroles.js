// <!-- Paroles.js -->
// <!-- Techniques de programmation Web 2 -->
// <!-- Projet 1 par Eric Martins -->
// <!-- Crée le 2 juin 2020 -->
// <!-- Dernier mise à jour le 16 juin 2020 -->


import React from 'react';
import './App.css';
 
export class Paroles extends React.Component  {

    render() { 
        return ( 
            this.props.paroles
         );
    }
}



/* Props par défaut */
Paroles.defaultProps = { paroles: 'Paroles non disponibles' };  