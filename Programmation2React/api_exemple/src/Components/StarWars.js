import React from "react"; 
import {PersonnageV4} from './PersonnageV4'
import Row from 'react-bootstrap/Row'; 


export class StarWars extends React.Component { 

    constructor(props) { 
        super(props); 
        this.state = {data : [], count:0, notFound:0 }; 
    } 
    
     
    //Ajout de la gestion des erreurs (Try/Catch) 
    async componentDidMount(){ 
  
        //'get' count *nombre de personnages*
        try { 
            const response = await fetch('https://swapi.dev/api/people/'); 
            const json = await response.json(); 
            this.setState({ count: json['count'] }); 
           
            if (!response.ok) { 
                throw Error(response.statusText); 
            } 
            
        } catch (error) { 
                console.log(error); 
        }    



        //'get' personnages
        var i=0;
        while (i<=this.state.count+this.state.notFound){
            try { 
                i++;
                const response = await fetch('https://swapi.dev/api/people/'+i); 
                const json = await response.json(); 
            
                this.setState({ data: json });
                
                if(!(json['detail']==="Not found")){
                    person.push(json);
                } else if (json['detail']==="Not found"){
                    this.setState({ notFound: this.state.notFound+1 });
                }

                if (!response.ok) { 
                    throw Error(response.statusText); 
                } 
                
            } catch (error) { 
                    console.log(error); 
            }  
        }  
        
        
        
    } 
        

    render() { 
        Object.keys(person).map(key => ( 
            console.log(person[key])))
        return (<Row > {Object.keys(person).map(key => ( 
                    <PersonnageV4 key={key} personnage={person[key]} ></PersonnageV4>  
            ))}</Row>) 
    }
}


var person=[];