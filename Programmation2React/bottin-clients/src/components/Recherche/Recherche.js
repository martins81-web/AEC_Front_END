import React from 'react';
import Form from 'react-bootstrap/Form';  
import FormControl from 'react-bootstrap/FormControl';  
 

export class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stringRecherche: "", };
        
        this.handleRechercheChange = this.handleRechercheChange.bind(this);
        this.handleRecherche = this.handleRecherche.bind(this); 
        this.handleKeyPress = this.handleKeyPress.bind(this); 
        this.handleReset = this.handleReset.bind(this); 
    }

    handleRechercheChange(e){
        const search = e.target.value;
        this.setState({stringRecherche: search});
    
    }

    handleRecherche() { 
        this.props.onBtnClick(this.state.stringRecherche);
    }

    handleKeyPress(target) {
        if(target.charCode===13){
            this.handleRecherche();
        } 
    }

    handleReset() {
        const search="";
        this.props.onBtnClick(search);
    }


    render() {
        return (
                <div className="d-flex justify-content-center mt-3">
                    <Form ref="formRecherche" inline onSubmit={e => { e.preventDefault(); }}>
                        <FormControl id="inputRecherche"onKeyPress={this.handleKeyPress} onChange={this.handleRechercheChange} type="text" placeholder="Recherche" />
                        <button type="button" id="recherche" onClick={this.handleRecherche} variant="outline-success" className="mx-sm-2">Recherche</button>
                        <button type="reset" onClick={this.handleReset} id="recherche" variant="outline-success" >Annuler Recherche</button>
                    </Form>
                </div>
        );
    }
}