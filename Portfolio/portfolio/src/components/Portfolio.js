import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import FlipMove from 'react-flip-move';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';
import Eric from '../media/Eric.jpg';
import Footer from './Footer';
import { categories, competences, projects } from './mockData';
import Projects from './Projects';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: LOCALES.FRENCH,
                    categorie: 'HTML', 
                    navigation: this.props.navigation
        };
    }

    componentDidMount() {
       
    }

     calculate_age = () => {
        const birthDate = new Date(1981,3,31,0,24,0,0); 
        const difference = Date.now() - birthDate.getTime();
        const age = new Date(difference);
      
        return Math.abs(age.getUTCFullYear() - 1970);
      }

      
    renderNavBar =()=>{
        
      return (
/*         <NavBar onNavigationChange={(navigation)=>this.props.onNavigationChange(navigation)} navigation={this.props.navigation}/>
 */          <Container style={{padding:'0'}}>
             
                  <Navbar expand="lg" variant="dark" style={{backgroundColor: 'SteelBlue', border: '2px solid white', borderRadius: '25px'}}>
                      <Navbar.Brand href={"#Main/"}><h4 style={{color: '#48fb47', marginLeft: '50px'}}>{" <EricMartins "}</h4></Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                          <Nav.Link   href={"#/portfolio/presentation"}
                                      onClick={()=>{
                                        this.setState({navigation: 'presentation'}, this.props.onChange('presentation')); 
                                      }} 
                                      style={this.state.navigation==='presentation'? {fontWeight: 'bold', color: 'white'}:null}
                                      >
                                          <h5>{translate('PRESENTATION')}</h5>
                          </Nav.Link>
                          <Nav.Link   href={"#/portfolio/projects"}
                                      onClick={()=>{
                                        this.setState({navigation: 'projects'}, this.props.onChange('projects')); 
                                      }} 
                                      style={this.state.navigation==='projects'? {fontWeight: 'bold', color: 'white'}:null}
                                      >
                                          <h5>{translate('PROJECTS')}</h5>
                          </Nav.Link>
                          <Nav.Link   href={"#/portfolio/contact"}
                                      onClick={()=>{
                                        this.setState({navigation: 'contact'},this.props.onChange('contact')); 
                                      }}                                       
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
          
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '50px', borderRadius: '25px', marginTop: '25px',border: '2px solid white'}}>
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
                        <h4>Mes formations</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                    </Row>
                    <Row > 
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap'}}>
                        <ul>
                          <li>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <h6>Attestation d’études collégiales en Développement WEB</h6>
                              <p>Cégep Trois-Rivières, Trois-Rivières</p>
                            </div>
                          </li>
                          <li>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <h6>Attestation d’études collégiales en réseaux de télécommunication Internet</h6>
                              <p>Cégep de Saint-Laurent, Montréal</p>
                            </div>
                          </li>
                          <li>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <h6>Génie électronique et ordinateurs – automatisation</h6>
                              <p>Université de Porto, Portugal</p>
                              <span>*Évaluation comparative délivrée par le MICC :</span>
                              <ul>
                                <li>
                                  <span>Diplôme d’études collégiales en formation générale</span>
                                </li>
                                <li>
                                  <span>Études universitaires de premier cycle — une année complétée — secteur des sciences pures et appliquées</span>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                        
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
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '50px', borderRadius: '25px', marginTop: '25px',border: '2px solid white', minHeight: '600px'}}>
                  <Row className='mb-2'>
                        <Col xs="12" >
                            <h4 >Projets</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                    </Row>
                    <Row className='mb-3'> 
                        <Col xs={12} style={{display:'flex', flexWrap: 'wrap'}}>
                             {categories.map( item =>
                                <div key={"categories_"+item} >
                                    <Button   onClick={()=>this.setState({categorie: item})}
                                      style={{backgroundColor: 'LightSeaGreen', borderRadius: '15px', margin: '5px', border: 'none', 
                                      fontWeight: this.state.categorie === item? 'bold': 'normal',color: this.state.categorie === item? 'SteelBlue': 'white'}}>
                                      {item}
                                    </Button>
                                </div>
                                )}
                        </Col>
                    </Row>
                    <Row className='no-gutters p-0 m-0'>
                      <FlipMove style={{display: 'flex', flexWrap:'wrap'}}> 
                            {projects.map( projet => (projet.motcles.includes(this.state.categorie.toLowerCase()) )&&
                                  <Col  xl="3" lg="4" md="6" sm="6" xs="12" key={"projet"+projet.nom} className='mb-2 p-2'>
                                      <Projects src={projet.src} 
                                                description={projet.description} 
                                                nom={projet.nom} 
                                                website={projet.website} 
                                                github={projet.githubLink}
                                                language={this.state.language}
                                      />
                                  </Col>
                              )}
                        </FlipMove>
                    </Row>
                </Container>
        );
    }

    renderContact =()=>{
        return (
                <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '50px', borderRadius: '25px', marginTop: '25px',border: '2px solid white'}}>
                     <Row className='mb-3'>
                        <Col xs={12} >
                            <h4 >Contact</h4>
                            <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                      </Row>
                      <Row className='pl-sm-5'>
                        <Col xs={12} className='mb-3 contactFont' style={{display:'flex', flexWrap: 'wrap', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faEnvelope} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}} />
                            <a style={{color: 'white', alignSelf:'center'}} href={"mailto: ericmartins81@gmail.com"}> <span>ericmartins81@gmail.com</span></a>
                        </Col>
                   
                        <Col xs={12} className='mb-3 contactFont'  style={{display:'flex', flexWrap: 'wrap',alignItems:'center'}}>
                            <FontAwesomeIcon icon={faPhoneSquareAlt} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"tel:5144248691"}> <span>514-424-8691</span></a>                          
                        </Col>
                    
                        <Col xs={12} className='mb-3 contactFont'  style={{display:'flex', flexWrap: 'wrap',alignItems:'center'}}>

                            <FontAwesomeIcon icon={faLinkedin} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"https://www.linkedin.com/in/ericmartins81/"} target="_blank" rel="noreferrer" > <span>linkedin.com/in/ericmartins81/</span></a>                        
                        </Col>
                   
                        <Col xs={12} className='mb-3 contactFont'  style={{display:'flex', flexWrap: 'wrap', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faGithub} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"https://github.com/martins81-web"} target="_blank" rel="noreferrer" > <span>github.com/martins81-web</span></a>                        
                        </Col>
                    
                        <Col xs={12} className='mb-3 contactFont'  style={{display:'flex', flexWrap: 'wrap', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faFile} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <a style={{color: 'white'}} href={"https://drive.google.com/file/d/12fkbT1EypqqpDYhYUGr_d8HZf4XvNAxJ/view?usp=sharing"} target="_blank" rel="noreferrer" > <span>Voir mon CV</span></a>             
                        </Col>
                        <Col xs={12} className='mb-3 contactFont'  style={{display:'flex', flexWrap: 'wrap', alignItems:'center'}}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" color="LightSeaGreen" style={{marginRight: '15px'}}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <span>190, rue Sénécal, Saint-Jean-sur-Richelieu</span>
                              <span>J2W 1C8  - QC - Canada</span>
                            </div>
                        </Col>
                    </Row>
                </Container>


        );
    }

    renderFooter =()=>{
      return(
          <Container  style={{ backgroundColor: 'SteelBlue', color: 'white', padding: '20px', borderRadius: '25px', marginTop: '25px',border: '2px solid white'}}>
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
            
            <div style={{ position:'relative', padding:'25px', minHeight:'100vh'}} >
                          <FlipMove>
                            {this.renderNavBar()}
                            {this.state.navigation ==='presentation' ? this.renderPresentation(): null}
                            {this.state.navigation ==='projects' ? this.renderProjects(): null}
                            {this.state.navigation ==='contact' ? this.renderContact(): null}
                            <Footer/>      
                          </FlipMove>
             </div>
            
            </I18nProvider>
        );
    }
}

export default Portfolio;

