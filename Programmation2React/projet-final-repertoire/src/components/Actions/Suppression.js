// <!-- Suppression.js -->
// <!-- Techniques de programmation Web 2 --- Techniques d'intégration des interfaces Web 2 -->
// <!-- Projet Final par Eric Martins -->


import React from "react";

import {toast} from "react-toastify";
import {API} from "../../Api_constante";

export class Suppression extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = { }

    this.removeEtudiant = this.removeEtudiant.bind(this);

  }



  async removeEtudiant() { 
    try{ 
    
    const response = await fetch(API+ this.props.EtudiantID, { 
      method:'DELETE', 
    }); 

    if(response.ok){ 
      toast.error("Étudiant supprimé!");
      
      this.props.history.push("/RepertoireRefresh");

      return response; 
    } 
    throw new Error('Request failed!'); 
    } 
    catch(error){ 
        console.log(error); 
    } 
 
}


render() {
    
    return (
        <div className="links" onClick={this.removeEtudiant}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
       </svg> 
        <span> Supprimer</span></div>
    );
  }

}