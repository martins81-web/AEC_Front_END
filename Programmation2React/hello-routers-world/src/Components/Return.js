import React from "react"; 
import {Link} from 'react-router-dom' 


 
export class Return extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { return (
        
                    <Link exact to="/Accueil" className="btn btn-primary mb-3"> 
                        Retour à l'accueil 
                    </Link> 
        ); 
    }
}
