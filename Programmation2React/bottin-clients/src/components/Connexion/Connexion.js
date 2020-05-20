import React from 'react';
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Container from 'react-bootstrap/Container';  

export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            password: ''
         }
         this.handleConexion = this.handleConexion.bind(this);
         this.handleChangePassword = this.handleChangePassword.bind(this); 
    }

    handleConexion() {
        let pass = this.state.password;
        if (pass==='Alibaba'){
            this.props.onConnexion();
        }  
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
                        <h2>Connexion au bottin de clients</h2>
                            <form >
                                <div className="form-group ">
                                    <input onChange={this.handleChangePassword} type="password" className="form-control" id="pass" placeholder="Code d'accès" name="password" />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="" className="btn btn-warning" onClick={this.handleConexion}>Connexion</button>
                                </div>
                            </form>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
