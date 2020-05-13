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
                    <Col className="bg-dark py-3" xs lg={{span: 6, offset: 3}}>
                        <form >
                            <div className="form-group">
                                <label className="text-white" htmlFor="email">Email address</label>
                                <input onChange={this.handleChangeEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" />
                    
                            </div>
                            <div className="form-group">
                                <label className="text-white" htmlFor="password">Password</label>
                                <input onChange={this.handleChangePassword} type="password" className="form-control" id="pass" placeholder="Password" name="password" />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="" className="btn btn-primary" onClick={this.handleConexion}>Connexion</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
