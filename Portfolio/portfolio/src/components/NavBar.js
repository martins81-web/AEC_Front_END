import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { navigation: this.props.navigation, language: LOCALES.FRENCH
    }
    }
    render() { 
       
            return(
                <I18nProvider locale={this.state.language} >                

<Container style={{padding:'0'}}>
             
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
        </I18nProvider>

                );
        }

}
export default Footer;