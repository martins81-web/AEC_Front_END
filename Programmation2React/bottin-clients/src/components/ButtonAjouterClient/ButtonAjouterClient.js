import React from 'react';
import '../App/App.css';


export class ButtonAjouterClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }

        this.ShowForm=this.ShowForm.bind(this);
    }

    ShowForm(){
            this.props.onClick();
    }

    render() { 
        return (
            <div className="d-flex justify-content-start">
                <button onClick={this.ShowForm} type="" className={this.props.typeBtn}>{this.props.textBouton}</button>
            </div>
          );
    }
}
