import React from 'react'; 
import Row from 'react-bootstrap/Row';  
import {TvShow} from "../TvShow/TvShow"

const tabSuspense = [ 
    { 
        src : require("../../img/Suspense/lesinvincibles.jpg"), 
        alt: "Les invincibles", 
        title: "Les Invincibles"  
    }, 
    {   
        src : require("../../img/Suspense/serienoire.jpg"), 
        alt: "Série noire", 
        title: "Série noire" 
    } ,
    {   
        src :require("../../img/Suspense/19-2.jpg"),
        alt:"19-2" ,
        title:"19-2" 
    } ,
    {   
        src:require("../../img/Suspense/district31.jpg"),
        alt:"district31" ,
        title:"District 31"  
    } ,
    {   
        src: require("../../img/Suspense/fugueuse.jpg"), 
        alt:"Fugueuse" ,
        title:"Fugueuse"  
    } ,
    {   
        src:require("../../img/Suspense/unite9.jpg"),
        alt:"Unite 9",
        title:"Unite 9" 
    } 
    ] 

const tabHumour = [ 
        { 
            src: require("../../img/Humour/lanceEtCompte.jpg"),
            alt:"Lance et Compte" ,
            title:"Lance et Compte" 
        }, 
        {   
            src:require("../../img/Humour/lapetitevie.jpg"),
            alt:"La Petite Vie" ,
            title:"La Petite Vie"  
        } ,
        {   
            src:require("../../img/Humour/lesbeauxmalaises.jpg"),
            alt:"Les Beaux Malaises" ,
            title:"Les Beaux Malaises"  
        } ,
        {   
            src:require("../../img/Humour/lesbougon.jpg"),
            alt:"Les Bougon" ,
            title:"Les Bougon"  
        } ,
        {   
            src:require("../../img/Humour/lesboys.jpg"),
            alt:"Les Boys" ,
            title:"Les Boys"  
        } ,
        {   
            src: require("../../img/Humour/minuitlesoir.jpg"),
            alt:"Minuit le Soir",
            title:"Minuit le Soir"
        } 
        ] 

const tabSerieAmericaines = [ 
            { 
                src:require("../../img/Series americaines/betterCallSaul.jpg"),
                alt:"Better Call Saul" ,
                title:"Better Call Saul"  
            }, 
            {   
                src:require("../../img/Series americaines/breakingbad.jpg"),
                alt:"Breaking Bad",
                title:"Breaking Bad"  
            } ,
            {   
                src:require("../../img/Series americaines/dexter.jpg"),
                alt:"Dexter",
                title:"Dexter"
            } ,
            {   
                src:require("../../img/Series americaines/got.jpg"),
                alt:"Got" ,
                title:"Got" 
            } ,
            {   
                src:require("../../img/Series americaines/mandalorian.jpg"),
                alt:"Mandalorian", 
                title:"The Mandalorian"   
            } ,
            {   
                src:require("../../img/Series americaines/vikings.jpg"),
                alt:"Vikings" ,
                title:"Vikings" 
            } 
            ] 

            

export class Categorie extends React.Component {  
    render() {  
       return   (   <>
                    {this.AfficherTitreCategorie()}
                    {this.AfficherSeriesCategorie()}
                    </>
                )
     } 

    AfficherTitreCategorie() {
        return  <Row className="mt-4">  
                    <h1 className="text-white ml-3">{this.props.categorie}</h1>
                </Row>  
    }

    AfficherSeriesCategorie() { 
        if(this.props.categorie === "Suspense") {      
            return ( <Row>{tabSuspense.map((element,i) => <TvShow key={"suspense" + i} src={element.src} alt={element.alt} title={element.title} ></TvShow> )}</Row>)
        }else if(this.props.categorie==="Humour"){
            return ( <Row>{tabHumour.map((element,i) => <TvShow key={"humour" + i} src={element.src} alt={element.alt} title={element.title} ></TvShow> )}</Row>)
        }else if(this.props.categorie==="Séries américaines"){
            return ( <Row>{tabSerieAmericaines.map((element,i) => <TvShow key={"seriesAmericaines" + i} src={element.src} alt={element.alt} title={element.title} ></TvShow> )}</Row>)
        }
    }     
};  

Categorie.defaultProps = { categorie: 'Suspense'};  