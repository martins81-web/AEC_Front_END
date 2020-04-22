import React from 'react';
import './App.css';
import logoNetflix from './Img/logo netflix.png';
import imgMJ from './Img/MJ.jpg';
import imgCB from './Img/CB.jpg';
import imgLB from './Img/LB.jpg';
import imgSP from './Img/SP.jpg';
import imgMagic from './Img/Magic.jpg';

const joueurs = ['Michael Jordan', 'Larry Bird', 'Charles Barkley', 'Magic Johnson', 'Scottie Pippen'];
let random= Math.floor(Math.random() * 5); 
const PhotosJoueurs= [imgMJ,imgLB,imgCB,imgMagic,imgSP];

const partants = joueurs.map(element => <li>{element}</li>);
const partantsAffiches =joueurs.map(element => joueurs[random] !== element && <li> {element}</li> );

const photo = (  
  <img   
    src={PhotosJoueurs[random]}
    alt={joueurs[random]}   
    height={350} />  
); 

var nomJoueurAffiche= joueurs[random];

function App() {
  var texteAfficher=(<h1>THE LAST DANCE</h1>);
  return (
    <div className="App">
      {texteAfficher}
      <p>Une production de</p>
      <img src={logoNetflix} alt="logo" height="150px" />
      <p>Mettant en vedette</p>
      <h2>{nomJoueurAffiche}</h2>
      {photo}
      
      <h3>Le 5 partants</h3>
      <ul>{partants}</ul>
      
      <h3>Le 4 partants affichés</h3>
      <ul>{partantsAffiches}</ul>
    </div>
  );
}

export default App;
