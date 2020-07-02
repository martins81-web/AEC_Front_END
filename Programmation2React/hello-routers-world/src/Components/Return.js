import React from "react"; 
import {Link} from 'react-router-dom' 


 
export class Return extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { return (
        
                    <Link exact to="AEC_Front_End/Programmation2React/hello-routers-world/build/Accueil" className="btn btn-primary mb-3"> 
                        Retour à l'accueil 
                    </Link> 
        ); 
    }
}
