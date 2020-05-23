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

/* Crée la liste de joueurs MAP a faire afficher */ 
const partants = joueurs.map((joueur,i) => <li key={'joueur'+i}>{joueur}</li>);
/* Crée la liste de joueurs && a faire afficher */ 
const partantsAffiches = joueurs.map((joueur,i) => joueurs[random] !== joueur && <li key={'joueur'+i}> {joueur}</li> );

/* Crée l'element de joueurs a affiché */ 
const liste4Partants = (
<div id="liste4Partants">
  <h3>Le 4 partants affichés</h3>
  <ul>{partantsAffiches}</ul>
</div>
);

/* Crée l'element de joueurs a affiché' */ 
const liste5Partants = (
  <div id="liste5Partants">
      <h3>Le 5 partants</h3>
      <ul id='liste5Partants'>{partants}</ul>
  </div>
); 

/* nom du joeur random */ 
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
  /* Force le changement de joueur, no repeat */ 
  let norepeat=random;
  random= Math.floor(Math.random() * 5);
  while(norepeat===random){
    random= Math.floor(Math.random() * 5);
  }
  /* Change la src de l'image pour le joueurs choisi aléatoirement */ 
  imgJ.setAttribute("src",PhotosJoueurs[random]); 
  /* Change le nom du joueur choisi aléatoirement */ 
  nomJ.innerHTML = joueurs[random]; 
}

export default App;