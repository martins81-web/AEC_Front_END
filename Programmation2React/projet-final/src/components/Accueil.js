// <!-- Accueil.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->


import React from "react";
import '../styles/accueil.sass';
import {Spring} from 'react-spring/renderprops';

export class Accueil extends React.Component {


  render() {
    return (
  <>
     
    <Spring from={{opacity:0}} to={{opacity:1}} config={{delay: 500, duration:700}}>
      {props =>( 
        <div style={props}>

          <div className='main-content '>
            <div className='portfolio'> 
                <div className='portfolio-item medium one'></div>
                <div className='portfolio-item large two'></div>
                <div className='portfolio-item medium three'></div>
                <div className='portfolio-item small four'></div>
                <div className='portfolio-item tall five'></div>
                <div className='portfolio-item wide six'></div>
            </div>
          </div>
        </div>
      )}
    </Spring> 


  </>
    );
  }
}