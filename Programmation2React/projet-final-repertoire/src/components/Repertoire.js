import React from "react";
import { Etudiant } from "./Etudiant";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export class Repertoire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {donneesRecues: []};

  }

    
  async componentDidMount(){
      try {
        const response = await fetch("https://crudcrud.com/api/b179fdcd82d74cbe8773f514846405a3/etudiants");
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
      
      <Container>
        <Row>
          {this.state.donneesRecues.map((key, i) => (
          <Etudiant history={this.props.history} key={i} EtudiantData={key} id={key._id}></Etudiant>
        ))}
        </Row>
      </Container>
    );
  }
  }
  
  export default Repertoire;