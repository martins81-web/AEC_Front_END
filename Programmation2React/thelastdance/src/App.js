import React from 'react';
import './App.css';
import logoNetflix from './Img/logo netflix.png';
import imgMJ from './Img/MJ.jpg';
import imgSK from './Img/SK.jpg';
import imgTK from './Img/TK.jpg';
import imgDR from './Img/DR.jpg';
import imgSP from './Img/SP.jpg';

const joueurs = ['Michael Jordan', 'Steve Kerr', 'Toni Kukoč', 'Dennis Rodman', 'Scottie Pippen'];
const PhotosJoueurs= [imgMJ,imgSK,imgTK,imgDR,imgSP];
let random= Math.floor(Math.random() * 5); 

const photo = (  
  <img 
    id='photo'  
    src={PhotosJoueurs[random]}
    alt={joueurs[random]}       
    height={350} />  
); 

const partants = joueurs.map((joueur,i) => <li key={'joueur'+i}>{joueur}</li>);
const partantsAffiches = joueurs.map((joueur,i) => joueurs[random] !== joueur && <li key={'joueur'+i}> {joueur}</li> );

const liste4Partants = (
<div id="liste4Partants">
  <h3>Le 4 partants affichés</h3>
  <ul>{partantsAffiches}</ul>
</div>
);

const liste5Partants = (
  <div id="liste5Partants">
      <h3>Le 5 partants</h3>
      <ul id='liste5Partants'>{partants}</ul>
  </div>
); 

var nomJoueurAffiche= joueurs[random];
var nomJoueur=<h2 id='nomJoueur'>{nomJoueurAffiche}</h2>;

function App() {
  const texteAfficher=(<h1>THE LAST DANCE</h1>);
  
  return (
    <div className="App">
      {texteAfficher}
      <p>Une production de</p>
      <img src={logoNetflix} alt="logo" height="150px" />
      <p>Mettant en vedette</p>
      {nomJoueur}     
      {photo}
      {liste5Partants}
      {liste4Partants}
      <button id='button' onClick={changeJoeur} type="button">Changer le joueur</button> 
    </div>
  );
}


function changeJoeur(){
  document.getElementById("liste4Partants").style.display = "none"; 
  let imgJ = document.getElementById("photo"); 
  let nomJ = document.getElementById("nomJoueur"); 
  let norepeat=random;
  random= Math.floor(Math.random() * 5);
  while(norepeat===random){
    random= Math.floor(Math.random() * 5);
  }
  imgJ.setAttribute("src",PhotosJoueurs[random]); 
  nomJ.innerHTML = joueurs[random]; 
}

export default App;

