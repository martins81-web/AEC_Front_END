import React from "react";
import '../styles/suppression.sass';

export class Suppression extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau abilities, on l'initialise à un tableau vide pour débuter.
    this.state = { }

    this.removeEtudiant = this.removeEtudiant.bind(this);

  }



  async removeEtudiant() { 
    try{ 
    
    const response = await fetch('https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants/' + this.props.EtudiantID, { 
      method:'DELETE', 
    }); 

    if(response.ok){ 
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
        <div className="links" onClick={this.removeEtudiant}>Supprimer</div>
    );
  }

}