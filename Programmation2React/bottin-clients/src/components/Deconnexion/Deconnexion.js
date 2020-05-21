import React from 'react';

 

export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleDeconexion = this.handleDeconexion.bind(this);
    }

    handleDeconexion(){
        this.props.onClick();
    }

    render() {
        return (
                <div className="d-flex justify-content-end">
                    <button onClick={this.handleDeconexion} type="" className="btn btn-danger " >Déconnexion</button>
                </div>
        );
    }
}

