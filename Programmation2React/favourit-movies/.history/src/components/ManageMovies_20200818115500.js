import React from "react";
import { Movie } from "./Movie";
import Row from 'react-bootstrap/Row';


export class ManageFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }

  //Ajout de la gestion des erreurs
  async componentDidMount() {
      try {
        const response = await fetch("http://localhost:3001/movies");
        const reponseDeApi = await response.json();
        this.setState({ donneesRecues: reponseDeApi });
        if (!response.ok) {
          //Permet d'attraper l'erreur 500 et l'erreur 400
          throw Error(response.statusText);
        }
      } catch (error) {
        //On gère l'erreur
        console.log(error);
      }
    }

  render() {
    return (
        <>
            <Row>
                {this.state.donneesRecues.map((key,i) => (
                <Movie title={key.title} toutLobjet={key} id={i+1}></Movie>
                ))}
            </Row>
        </>
    );
  }
}