import React from 'react';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Container from 'react-bootstrap/Container';  

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }
        this.handleConexion = this.handleConexion.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);  
        this.handleChangePassword = this.handleChangePassword.bind(this); 
    }

    handleConexion() {
        let email = this.state.email;
        let pass = this.state.password;
        
        if (email==='shany.carle@gmail.com' && pass==='patate'){
            const connected=true;
            this.props.onClick(connected);
        }
        
    }

    handleChangeEmail(e) { 
        const email = e.target.value;  
        this.setState({ email: email });
    }  

    handleChangePassword(e) { 
        const password = e.target.value;  
        this.setState({ password: password }); 
    } 


    render() { 
        return (  
            <Container>
                <Row className="mt-5">
                    <Col className="filter px-5 py-4" xs lg={{span: 6, offset: 3}}>
                        <h1 className="text-white ">Connexion</h1>
                            <form >
                                <div className="form-group mt-4">
                                    <label className="text-white" htmlFor="email">Courriel</label>
                                    <input onChange={this.handleChangeEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
                        
                                </div>
                                <div className="form-group ">
                                    <label className="text-white" htmlFor="password">Mot-de-passe</label>
                                    <input onChange={this.handleChangePassword} type="password" className="form-control" id="pass" placeholder="Password" name="password" />
                                </div>
                                <div className="d-flex justify-content-end py-3">
                                    <button type="" className="btn btn-primary" onClick={this.handleConexion}>Connexion</button>
                                </div>
                            </form>
                       
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
