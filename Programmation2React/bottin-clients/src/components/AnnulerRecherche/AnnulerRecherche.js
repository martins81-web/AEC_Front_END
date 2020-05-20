import React from 'react';


export class AnnulerRecherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleReset=this.handleReset.bind(this);
    }
    render() { 
        return ( 
            <button type="reset" onClick={this.handleReset}  variant="outline-success" >Annuler Recherche</button>
         );
    }

    handleReset(){
        this.props.onAnnulerRecherche(false);
    }
}
 
