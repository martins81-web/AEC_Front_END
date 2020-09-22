import React from "react";
import  Etudiant  from "./Etudiant";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {API} from "../Api_constante";
import { Recherche } from './Recherche';

export class Repertoire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donneesRecues: [], recherche: ""};

  }

    
  async componentDidMount(){
      try {
        const response = await fetch(API);
        const reponseDeApi = await response.json();
        this.setState({donneesRecues:reponseDeApi});
        if (!response.ok) {
          throw Error(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }

  
    render()
  {

    return (
      <>
      <Container className='p-4 d-flex justify-content-around'>   
      <div><h2>Répertoire</h2></div>
      <div><Recherche  recherche={(recherche)=>this.setState({ recherche: recherche})}/> </div>
         
      </Container>
      <Container>
        <Row>
          
          {this.state.donneesRecues.map((key, i) => ( (key.name.toLowerCase().includes(this.state.recherche.toLowerCase()) ||  key.firstName.toLowerCase().includes(this.state.recherche.toLowerCase()) || key.course.toLowerCase().includes(this.state.recherche.toLowerCase())  ) &&
          <Etudiant history={this.props.history} key={i} EtudiantData={key} id={key._id}></Etudiant>
        ))}
        </Row>
      </Container>
      </>
    );
  }
  }
  
  export default Repertoire;