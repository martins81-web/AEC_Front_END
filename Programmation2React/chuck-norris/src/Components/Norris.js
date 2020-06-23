import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Card from 'react-bootstrap/Card';  
import Image from 'react-bootstrap/Image'; 
import chuck from '../img/chuck-norris.jpg'

export class Norris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {categories : [], joke:[], category: 'animal', name: '' ,showJoke:false}; 

        this.searchJoke=this.searchJoke.bind(this);
        this.handleCategoryChange=this.handleCategoryChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
    }

    async componentDidMount(){ 
        
        try { 
            const response = await fetch('https://api.chucknorris.io/jokes/categories'); 
            const json = await response.json(); 
            console.log(json);
            this.setState({ categories: json }); 
            if (!response.ok) { 
                throw Error(response.statusText); 
            } 
            
        } catch (error) { 
                console.log(error); 
        }    
        
    }

    async searchJoke(){
        
        try { 
            const response = await fetch("https://api.chucknorris.io/jokes/random?category="+this.state.category+this.state.name)
            const json = await response.json(); 
            console.log(json);
            this.setState({ joke: json }); 
            this.setState({ showJoke: true }); 
            if (!response.ok) { 
                throw Error(response.statusText); 
            } 
            
        } catch (error) { 
                console.log(error); 
        }    
        
    }

    handleCategoryChange(e){
        this.setState({ category: e.target.value }); 
    }

    handleNameChange(e){
        if (e.target.value!==''){
            this.setState({ name: '&name='+e.target.value }); 
        }else{
            this.setState({ name: '' });   
        }
    }

    showJoke(){
        if(this.state.showJoke)
        return <>
                    <Card >
                        <Card.Body style={joke}>
                            <Card.Text className='text-center'>
                                {this.state.joke.value}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
    }

    render() { 
        return (<Container >
                <Row>
                    <Col xs='12' sm='12' md='12' lg="12" xl='12' className='text-center my-4'>
                        <Image src='https://fontmeme.com/permalink/200623/1f8144fe42413d4eaeed6efb8e8970a6.png' alt="lethal-weapon-font" />                
                    </Col>
                    <Col xs='12' sm='12' md='12' lg="12" xl='12' className='text-center mt-2 mb-3'>
                        <Image src={chuck} rounded />
                    </Col>
                    <Col xs='12' sm='12' md='12' lg="12" xl='12' className='text-center'>
                        <div>
                        <b>Category</b>: <select className='mr-5' onChange={this.handleCategoryChange}>
                            
                                {Object.keys(this.state.categories).map(key => ( 
                                    <option key={key} value={this.state.categories[key]}>{this.state.categories[key]}</option>
                                ))} 
                            </select> 
                            <label for="customName" className='mr-2'><b>Custom Name:</b> </label>
                            <input type="text" id='customName' maxLength="30" onChange={this.handleNameChange}/>
                            <button type="" className="btn btn-outline-dark btn-sm ml-2" onClick={this.searchJoke}>Show joke</button>
                        </div>
                    </Col>
            
                    <Col xs='12' sm='12' md='12' lg="12" xl='12'>
                    {this.showJoke()}
                    </Col>
                </Row>
            </Container>
            );
    }
}
 
const joke={
    color: 'white',
    backgroundColor: 'black'
}