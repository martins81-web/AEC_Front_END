import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';
import ConstructionImage2 from '../media/construct.png';
import ConstructionImage from '../media/underConstruction.jpg';

const img={
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: LOCALES.FRENCH };
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

    render() {
        return (
            <I18nProvider locale={this.state.language}>
                <Navbar expand="lg" bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href={"#Main/"+this.state.language}>{"<EricMartins />"}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="">{translate('PRESENTATION')}</Nav.Link>
                        <Nav.Link href="">{translate('PROJECTS')}</Nav.Link>
                        <Nav.Link href="">{translate('CONTACT')}</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
               <div style={img}> 
                <Image src={this.state.language === LOCALES.ENGLISH ? ConstructionImage :ConstructionImage2}/>
            </div>
            </I18nProvider>

        );
    }
}

export default NavBar;