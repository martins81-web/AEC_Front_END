import React from 'react';
import '../App/App.css';
import {Client} from '../Client/Client'
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col'; 
import {Deconnexion}  from '../Deconnexion/Deconnexion';
import {Recherche}  from '../Recherche/Recherche';


const tabClients = [ 
    { 
        src : require("../../img/Photos clients/Alexandre_Gagnon.jpeg"), 
        alt: "Alexandre_Gagnon", 
        title: "Alexandre Gagnon",
        prenom: "Alexandre",
        nom: "Gagnon",
        metier: "Opérateur de plieuse",
        email: "Alexandre_Gagnon@gmail.com",
        telephone: "(514) 000-0001",
        adresse: "91970 Lila Stravenue"
    }, 
    {   
        src : require("../../img/Photos clients/Camille_Pelletier.jpeg"), 
        alt: "Camille_Pelletier", 
        title: "Camille Pelletier",
        prenom: "Camille",
        nom: "Pelletier",
        metier: "Préposée au poste d’accueil",
        email: "Camille_Pelletier@gmail.com",
        telephone: "(514) 000-0002",
        adresse: "80155 Minerva Crescent"
    } ,
    {   
        src :require("../../img/Photos clients/Catherine_Gagne.jpeg"),
        alt:"Catherine_Gagné" ,
        title:"Catherine Gagné",
        prenom: "Catherine",
        nom: "Gagné",
        metier: "Assembleusede matériel mécanique",
        email: "Catherine_Gagne@gmail.com",
        telephone: "(514) 000-0003",
        adresse: "50811 Marks Gardens" 
    } ,
    {   
        src:require("../../img/Photos clients/David_Tremblay.jpeg"),
        alt:"David_Tremblay" ,
        title:"David Tremblay",
        prenom: "David",
        nom: "Tremblay",
        metier: "Préparateur de commandes postales",
        email: "David_Tremblay@gmail.com",
        telephone: "(514) 000-0004",
        adresse: "33376 Hyman Unions"  
    } ,
    {   
        src: require("../../img/Photos clients/Gabrielle_Roy.jpeg"), 
        alt:"Gabrielle_Roy" ,
        title:"Gabrielle Roy",
        prenom: "Gabrielle",
        nom: "Roy",
        metier: "Préposée au service alimentaire",
        email: "Gabrielle_Roy@gmail.com",
        telephone: "(514) 000-0005",
        adresse: "74303 Hildegard Radial"  
    } ,
    {   
        src:require("../../img/Photos clients/Jessica_Lavoie.jpeg"),
        alt:"Jessica_Lavoie",
        title:"Jessica Lavoie",
        prenom: "Jessica",
        nom: "Lavoie",
        metier: "Aide-éducatrice",
        email: "Jessica_Lavoie@gmail.com",
        telephone: "(514) 000-0006",
        adresse: "708 Schultz" 
    } ,
    {   
        src:require("../../img/Photos clients/Jonathan_Gauthier.jpeg"),
        alt:"Jonathan_Gauthier",
        title:"Jonathan Gauthier",
        prenom: "Jonathan",
        nom: "Gauthier",
        metier: "Patrouilleur de parcs de stationnement",
        email: "Jonathan_Gauthier@gmail.com",
        telephone: "(514) 000-0007",
        adresse: "0668 Breitenberg Parks" 
    } ,
    {   
        src:require("../../img/Photos clients/Mathieu_Ouellet.jpeg"),
        alt:"Mathieu_Ouellet",
        title:"Mathieu Ouellet",
        prenom: "Mathieu",
        nom: "Ouellet",
        metier: "Assistant-céramiste mouleur",
        email: "Mathieu_Ouellet@gmail.com",
        telephone: "(514) 000-0008",
        adresse: "1363 Hamill Views " 
    } ,
    {   
        src:require("../../img/Photos clients/Stephanie_Cote.jpeg"),
        alt:"Stéphanie_Côté",
        title:"Stéphanie Côté",
        prenom: "Stéphanie",
        nom: "Côté",
        metier: "Aide dans un salon de coiffure",
        email: "Stephanie_Cote@gmail.com",
        telephone: "(514) 000-0009",
        adresse: "0600 Muller Well" 
    } ,
    {   
        src:require("../../img/Photos clients/Vanessa_Fortin.jpeg"),
        alt:"Vanessa_Fortin",
        title:"Vanessa Fortin",
        prenom: "Vanessa",
        nom: "Fortin",
        metier: "Assistante en loisirs",
        email: "Vanessa_Fortin@gmail.com",
        telephone: "(514) 000-0010",
        adresse: "986 Clyde Spur" 
    } ,
    {   
        src:require("../../img/Photos clients/Emilie_Morin.jpeg"),
        alt:"Émilie_Morin",
        title:"Émilie Morin",
        prenom: "Émilie",
        nom: "Morin",
        metier: "Brigadière",
        email: "Emilie_Morin@gmail.com",
        telephone: "(514) 000-0011",
        adresse: "46375 Lloyd Meadows" 
    } ,
    {   
        src:require("../../img/Photos clients/Maxime_Bouchard.jpeg"),
        alt:"Maxime_Bouchard",
        title:"Maxime Bouchard",
        prenom: "Maxime",
        nom: "Bouchard",
        metier: "Assembleur de composants électroniques",
        email: "Maxime_Bouchard@gmail.com",
        telephone: "(514) 000-0012",
        adresse: "404 Mohr Heights" 
    } 
] 


export class Bottin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  recherche: "" , 
                    }
        this.Header = this.Header.bind(this); 
        this.handleDeconnexion =this.handleDeconnexion.bind(this); 
        this.ActiveRecherche =this.ActiveRecherche.bind(this); 
        this.Recherche =this.Recherche.bind(this); 
        this.AfficherClients =this.AfficherClients.bind(this); 
        this.IncludesString =this.AfficherClients.bind(this); 
    }
    
   

    AfficherClients() { 
        return (<Row>
                    {tabClients.map((element,i) =>  element.title.toLowerCase().includes(this.state.recherche.toLowerCase())   &&
                        <Client key={"client" + i} 
                                src={element.src} 
                                alt={element.alt} 
                                title={element.title} 
                                prenom={element.prenom}
                                nom={element.nom}
                                metier={element.metier}
                                email={element.email}
                                telephone={element.telephone}
                                adresse={element.adresse}>
                        </Client> )}
                </Row>
                )
    }   

    Header(){
        return (
                <Row>
                    <Col xs lg="4"><h1>Bottin des clients</h1></Col>
                    <Col xs lg="4"> {this.Recherche()}</Col>
                    <Col xs lg="4"> {this.AfficheButtonDeconnexion()}</Col>
                </Row>
                )
    }

    Recherche(){
        return (
          <Recherche onBtnClick={this.ActiveRecherche}/>    
        );
    }



    ActiveRecherche(NouvelleRecherche){
        this.setState({ recherche: NouvelleRecherche.trim() });
    }

    
    AfficheButtonDeconnexion(){
        return  <Deconnexion onClick={this.handleDeconnexion}/>      
    }
    
    handleDeconnexion(){
        this.props.onDeconnexion();
    }

    render() { 
        return (    <>
                    {this.Header()}
                    {this.AfficherClients()}
                    </>
                );
    }

}



