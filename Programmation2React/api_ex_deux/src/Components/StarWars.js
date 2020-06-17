import React from 'react';
import './App.css';


export class StarWarsApi extends React.Component {
    constructor(props) { 
        super(props); 
        this.state = {data : [], parametre:'', count:0, input:'', resultat:[] }; 
        this.handleChange=this.handleChange.bind(this);
        this.getCount=this.getCount.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.chercheApi=this.chercheApi.bind(this);
    } 

    async componentDidMount(){ 
        
        try { 
            const response = await fetch('https://swapi.dev/api/'); 
            const json = await response.json(); 
            
            this.setState({ data: json }); 
            this.getCount(json['people']);
            this.setState({ parametre: json['people'] });
        
            if (!response.ok) { 
                throw Error(response.statusText); 
            } 
            
        } catch (error) { 
                console.log(error); 
        }    
        
    }

    handleChange(e){
        this.setState({ parametre: e.target.value }); 
        this.getCount(e.target.value);
    }

    async getCount(e){
        try { 
            const response = await fetch(e); 
            const json = await response.json(); 
            this.setState({ count: json['count'] }); 
           
            if (!response.ok) { 
                throw Error(response.statusText); 
            } 
            
        } catch (error) { 
                console.log(error); 
        }    
    }s

    handleInputChange(e){
        this.setState({input:e.target.value})
    }


    async chercheApi(){
        try { 
           const response = await fetch(this.state.parametre+this.state.input); 
           const json = await response.json(); 
           this.setState({ resultat: json }); 
           
           if (!response.ok) { 
                 throw Error(response.statusText); 
          } 
            
        } catch (error) { 
                 console.log(error); 
        }    

    }

    print(){
        return ( <div> 
            <ul> 
                {Object.keys(this.state.resultat).map(key => ( 
                <li key={key}>{key} : {this.state.resultat[key]}</li> 
                ))} 
            </ul> 
        </div> 
    ); 
    }

    render() { 
        return ( 
            <>
                <form onSubmit={e => {e.preventDefault()}}>
                    <select  onChange={this.handleChange}>
                        {Object.keys(this.state.data).map(key => ( 
                            <option key={key} value={this.state.data[key]}>{key}</option>
                        ))} 
                    </select>
                    <input type="number"  min="1" max={this.state.count} onChange={this.handleInputChange}/>
                    <button type="" className="btn btn-primary" onClick={this.chercheApi}>Cherche Api</button>
                </form>
               {this.print()}
            </>
        )
    }
   
}
 
