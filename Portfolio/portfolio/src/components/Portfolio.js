import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import FlipMove from 'react-flip-move';
import Particles from 'react-particles-js';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';
import alteredCarbon from '../media/alteredCarbon.JPG';
import bottin from '../media/bottin.JPG';
import destination from '../media/destination.JPG';
import Eric from '../media/Eric.jpg';
import etudiants from '../media/etudiants.JPG';
import formulaire from '../media/formulaire.JPG';
import hanSolo from '../media/hanSolo.JPG';
import netflix from '../media/netflix.JPG';
import norris from '../media/norris.JPG';
import photociti from '../media/photociti.JPG';
import portugal from '../media/portugal.JPG';
import rebrandly from '../media/rebrandly.JPG';
import spotify from '../media/spotify.JPG';
import witcher from '../media/witcher.jpg';
import wolf from '../media/wolf.JPG';
import zelda from '../media/zelda.JPG';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: LOCALES.FRENCH,
                    navigation: 'presentation',
                    categorie: 'HTML', 
        };
    }

    async componentDidMount() {
        try {
          await this.setState({language2 : this.props.location.pathname.substring(this.props.location.pathname.length-5,this.props.location.pathname.length)});
          await console.log(this.state.language2);
          }
         catch (error) {
          console.log(error);
        }
        if(this.state.language2 ==='en-us'){
            this.setState({
                language: LOCALES.ENGLISH 
            })
        } else{
            this.setState({
                language: LOCALES.FRENCH 
            })
        }
      }
     calculate_age = () => {
        const birthDate = new Date(1981,3,31,0,24,0,0); 
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
      
        return Math.abs(age.getUTCFullYear() - 1970);
      }

    renderNavBar =()=>{
        
        return (
          
            <Container style={{padding:'0'}}>
               
                    <Navbar expand="lg" variant="dark" style={{backgroundColor: 'SteelBlue', border: '2px solid white', borderRadius: '25px'}}>
                        <Navbar.Brand href={"#Main/"+this.state.language}><h4 style={{color: '#48fb47', marginLeft: '50px'}}>{" <EricMartins "}</h4></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link   onClick={()=>this.setState({navigation:'presentation'})} 
                                        style={this.state.navigation==='presentation'? {fontWeight: 'bold', color: 'white'}:null}
                                        >
                                            <h5>{translate('PRESENTATION')}</h5>
                            </Nav.Link>
                            <Nav.Link   onClick={()=>this.setState({navigation:'projects'})} 
                                        style={this.state.navigation==='projects'? {fontWeight: 'bold', color: 'white'}:null}
                                        >
                                            <h5>{translate('PROJECTS')}</h5>
                            </Nav.Link>
                            <Nav.Link   onClick={()=>this.setState({navigation:'contact'})} 
                                        style={this.state.navigation==='contact'? {fontWeight: 'bold', color: 'white'}:null}
                                        >
                                            <h5>{translate('CONTACT')}</h5>
                            </Nav.Link>
                          <Navbar.Brand><h4 style={{color: '#48fb47', marginRight: '50px'}}>{" />"}</h4></Navbar.Brand>

                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                  
                </Container>
       
    );


}

    renderPresentation =()=>{

        return (
          
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '50px', borderRadius: '25px', marginTop: '50px',border: '2px solid white'}}>
                    <Row className='mb-2'>
                        <Col xs="12" >
                            <h4 >À propos de moi</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                    </Row>
                    <Row> 
                        <Col   xl="3" lg="4" md="5" sm="12" xs="12" style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                                <Image src={Eric} alt="profilePic" style={{borderRadius: '25px'}}/>
                        </Col> 
                        <Col xl="8" lg="7" md="7" sm="12" xs="12" 
                            style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flexWrap: 'wrap'}} 
                            className='mt-4'>
                            <p>Bonjour, je m'appelle Eric Martins, j'ai {this.calculate_age()} ans, si vous vous trouvez sur ma page ce n'est sûrement pas par hasard.</p>   
                            <p>Je suis un Développeur Front-End junior en formation au Cégep Trois Rivières, mais ça n'a pas été toujours le cas, j'ai travaillé longtemps comme rédacteur web, je n'était pas prédestiné à faire cela.</p>
                            
                            
                        </Col>
                        <Col xl="11" lg="11" md="12" sm="12" xs="12"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flexWrap: 'wrap'}} className='mt-md-4'>
                            <p>J'ai donc décidé de me reconvertir au milieu de l'informatique et réorienter ma carrière vers le développement web, cela m'amène maintenant à l'étape de recherche d'opportunités en développement de sites et d'applications web.
                                Je suis fortement intéressé par le développement en langage JavaScript et ses frameworks.</p>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col xs="12" >
                        <h4>Mes compétences</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                    </Row>
                    <Row > 
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap'}}>
                             {competences.map( item => 
                                <div key={"competences_"+item} style={{backgroundColor: 'LightSeaGreen', margin:'10px', padding:'5px 10px 5px 10px', borderRadius: '15px'}}>
                                    <span>{item}</span>    
                                </div>
                                )}
                        </Col>
                    </Row>
                </Container>
           
        );


    }

    renderProjects =()=>{

        return (
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '50px', borderRadius: '25px', marginTop: '50px',border: '2px solid white', minHeight: '600px'}}>
                  <Row className='mb-2'>
                        <Col xs="12" >
                            <h4 >Projets</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                    </Row>
                    <Row className='mb-5'> 
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap'}}>
                             {categories.map( item =>
                                <div key={"categories_"+item} >
                                    <Button   onClick={()=>this.setState({categorie: item})}
                                      style={{backgroundColor: 'LightSeaGreen', borderRadius: '15px', margin: '5px', border: 'none', fontWeight: this.state.categorie === item? 'bold': 'normal' }}>
                                      {item}
                                    </Button>
                                </div>
                                )}
                        </Col>
                    </Row>
                    <Row className='no-gutters'>
                      <FlipMove style={{display: 'flex', flexWrap:'wrap'}}> 
                            {projets.map( item => (item.motcles.includes(this.state.categorie.toLowerCase()) )&&
                                <Col  xl="3" lg="4" md="6" sm="6" xs="12" key={"projet"+item.nom} >
                                    <div style={{backgroundColor: 'LightSeaGreen', borderRadius: '15px', padding: '5px 0px 5px 0px', 
                                    height: '250px', margin: '10px'}}>
                                        <span>{item.nom} </span>
                                        <Image src={item.src} style={{width: '100%', height: '60%'}}/>
                                        <span> {item.description} </span>    
                                    </div>
                                  </Col>
                              )}
                        </FlipMove>
                    </Row>
                </Container>
        );
    }

    renderContact =()=>{
        return (
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '50px', borderRadius: '25px', marginTop: '50px',border: '2px solid white'}}>
                     <Row className='mb-2'>
                        <Col xs="12" >
                            <h4 >Contact</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                    </Row>
                    <Row  className='mb-4'> 
                        <Col xs={12}  style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faEnvelope} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}} />
                            <a style={{color: 'white', alignSelf:'center'}} href={"mailto: ericmartins81@gmail.com"}> <h5>ericmartins81@gmail.com</h5></a>
                        </Col>
                    </Row>
                    <Row  className='mb-4'>
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"tel:5144248691"}> <h5>514-424-8691</h5></a>                          
                        </Col>
                    </Row>
                    <Row  className='mb-4'>
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faLinkedin} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"https://www.linkedin.com/in/ericmartins81/"} target="_blank" rel="noreferrer" > <h5>linkedin.com/in/ericmartins81/</h5></a>                        
                        </Col>
                    </Row>
                    <Row  className='mb-4'>
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faGithub} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"https://github.com/martins81-web"} target="_blank" rel="noreferrer" > <h5>github.com/martins81-web</h5></a>                        
                        </Col>
                    </Row>
                    <Row  className='mb-4'>
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faFile} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"https://drive.google.com/file/d/1p_bwFoFqyIzo00vZRiRollL9lic3YtDL/view?usp=sharing"} target="_blank" rel="noreferrer" > <h5>Voir mon CV</h5></a>             
                        </Col>
                    </Row>
                </Container>


        );
    }

    renderFooter =()=>{
        return(
            <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '20px', borderRadius: '25px', marginTop: '50px',border: '2px solid white'}}>
                    <Row>
                        <Col xs={12} style={{display:'flex', justifyContent: 'center', alignContent: 'center'}}>
                            <div>Copyright © Eric Martins 2020</div>
                        </Col>
                    </Row>
                    
                </Container>);
    }

    render() {
        return (
            <I18nProvider locale={this.state.language} >
                <Particles  style={particles}
                            params={particlesParametres1} />
                            
                <div style={{minHeight: '100vh', position:'relative',  padding: '30px'}} >
                   <FlipMove> 
                        {this.renderNavBar()}
                        {this.state.navigation ==='presentation' ? this.renderPresentation(): null}
                        {this.state.navigation ==='projects' ? this.renderProjects(): null}
                        {this.state.navigation ==='contact' ? this.renderContact(): null}
                        {this.renderFooter()}
                   </FlipMove> 
                </div>
            </I18nProvider>
        );
    }
}

export default NavBar;


const competences = [ 'HTML5','CSS3/SASS ', 'BootStrap', 'javaScript', 'jQuery' ,"typeScript",'React-js', 'Angular', 'Vue', '...' ]

const categories = ['HTML', 'BootStrap','CSS', 'SASS', 'React', 'jQuery' , "javaScript", "SQL", "PWA", "API", 'CRUD' ]

const particles ={
    backgroundColor: 'LightSeaGreen',
    position: 'fixed',
    top:0,
    right:0,
    bottom:0,
    left:0,
}
/* Mock projets */
const projets = [
{
  src : hanSolo, 
  nom: "Han Solo",
  description: <p>Projet realisé avec HTML et CSS</p>,
  motcles: ['html', 'css']
},
{
  src : witcher, 
  nom: "The Witcher 3",
  description: <p>Pour ce projet Bootstrap, HTML et CSS on été utilisés. </p>,
  motcles: ['html', 'css', 'bootstrap']
},
{
  src : alteredCarbon, 
  nom: "Altered Carbon",
  description: <p>Projet utilisant Media Queries et Parallax</p>,
  motcles: ['html', 'css',  'media queries', 'parallax', 'bootstrap']
},
{
  src : netflix, 
  nom: "Séries Netflix",
  description: <p>Projet utilisant NavBar et carousel</p>,
  motcles: ['html', 'css', 'navbar', 'carousel']
},
{
  src : portugal, 
  nom: "Visitez le Portugal",
  description: <p>Projet sur le Portugal</p>,
  motcles: ['html', 'css', 'NavBar', 'carousel','modal', 'parallax', 'bootstrap', 'pwa']
},
{
  src : formulaire, 
  nom: "L'avenir de la race humaine",
  description: <p>Ce projet englobe la création et vérifications d'un formulaire</p>,
  motcles: ['html', 'css', 'forms','paypal', 'bootstrap']
},
{
  src : zelda, 
  nom: "La légende de zelda",
  description: <p>Google charts, tri et recherche de tableaux</p>,
  motcles: ['html', 'css', 'bootstrap', 'sorting', 'search']
},
{
  src : wolf, 
  nom: "The Wolf of Wall Street",
  description: <p>Animations javaScript</p>,
  motcles: ['html', 'css', 'javascript', 'animations']
},
{
  src : photociti, 
  nom: "Photociti",
  description: <p>Créez votre mot Photociti en 3 étapes rapides</p>,
  motcles: ['html', 'css', 'javascript', 'jquery', 'programmation']
},
{
  src : bottin, 
  nom: "Bottin des clients",
  description: <p>Application React pour un bottin des clients, en utilisant des donnés mock</p>,
  motcles: ['bootstrap', 'javascript', 'react', 'programmation']
},
{
  src : spotify, 
  nom: "Spotify Québécois",
  description: <p>Application React - clone spotify</p>,
  motcles: ['bootstrap', 'javascript', 'react', 'programmation']
},
{
  src : norris, 
  nom: "Chuck Norris Jokes",
  description: <p>Application React qui fait des raquêtes à un API en utilisant deux paramètres</p>,
  motcles: ['bootstrap', 'javascript', 'react', 'programmation', 'api']
},
{
  src : rebrandly, 
  nom: "Rebrandly URL shortener",
  description: <p>Application React qui fait des raccourcis d'URL</p>,
  motcles: ['bootstrap', 'javascript', 'react', 'programmation', 'api']
},
{
  src : destination, 
  nom: "Destination Vacances",
  description: <p>Application React sur la péninsulte Bruce en Ontario</p>,
  motcles: ['bootstrap', 'javascript', 'react', 'programmation', 'router']
},
{
  src : etudiants, 
  nom: "Répertoire des Étudiants",
  description: <p>Application React d'un répertoire d'etudiants</p>,
  motcles: ['bootstrap', 'javascript', 'react', 'programmation', 'router','crud', 'api', 'sass', 'pwa' ]
},
]


const particlesParametres1 = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": false,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false,
  
}