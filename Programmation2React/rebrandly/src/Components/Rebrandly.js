import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  

export class Rebrandly extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: 'https://' , urlShortened: '', error:false, value:'https://'}
        this.getUrl=this.getUrl.bind(this);
        this.handleUrlChange=this.handleUrlChange.bind(this);
        this.checkValidity=this.checkValidity.bind(this);
    }
    
    getUrl(){
        const apiKey = "eebefb2dbe8442d5befab99efb56486e";         
        const getData = async () => { 
           try{ 
              const response = await fetch('https://api.rebrandly.com/v1/links', { 
                 method:'POST', 
                 headers: { 
                                  'Content-Type': 'application/json', 
                                  'apikey': apiKey   
                                 }, 
        
                 body:JSON.stringify({destination:this.state.url}) 
               }); 
        
              if(response.ok){ 
                 const jsonResponse = await response.json(); 
                 console.log(jsonResponse);
                 this.setState({ urlShortened: jsonResponse.shortUrl }); 
                 return jsonResponse; 
        
              } 
              this.setState({ error: true }); 
              throw new Error('Request failed!'); 
           } 
        
           catch(error){ 
              console.log(error); 
           } 
        } 
        getData();
    }

    handleUrlChange(e){
        this.setState({ url: e.target.value }); 
    }

    checkValidity(){
        if(document.getElementById('inputUrl').checkValidity()===true)
        this.getUrl();
    }


    render() { 
        return (
            <>
          
        <form onSubmit={e =>{e.preventDefault()}} >
            <Container>
                <Row  className='text-center mt-5'>
                    <Col xl={{span: 6, offset: 3 }} lg={{span: 6, offset: 3 }} md={{span: 8, offset: 2 }} sm={{span: 10, offset: 1 }} xs="12" style={styleCol1}>
                        <h1><u>Rebrandly</u> URL shortener</h1>
                    </Col>
                </Row>
                <Row className='text-center' >
                    <Col xl={{span: 6, offset: 3 }} lg={{span: 6, offset: 3 }} md={{span: 8, offset: 2 }} sm={{span: 10, offset: 1 }} xs="12" style={styleCol2} 
                    className='p-5'>
                        
                        <Row className='mb-3'>
                            <Col>
                                <h1>Enter a URL</h1>
                            </Col>
                        </Row>
                        <Row className='mb-5'>
                            <Col >
                                <input id='inputUrl' style={inputStyle} type="url" name="url" onChange={this.handleUrlChange} 
                                size="30" defaultValue={this.state.value} pattern="(([\w]+:)?//)?(([\d\w]|%[a-fA-F\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?"
                                required />
                            </Col>
                        </Row >
                        <Row className='mb-3'>
                            <Col>
                                <button type='submit'  style={btnStyle} variant="outline-primary" onClick={this.checkValidity}>Shorten</button>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <div style={styledDiv}>
                                    <p>Your shortened url is:</p>
                                    <p>{this.state.urlShortened}</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </form>
        </>
        );
    }
}

const styleCol1={
    border: '1px dashed black ', 
    borderBottom: '0',
    paddingTop:'2rem'
}

const styleCol2={
    backgroundColor:'#0080FF',
    border: '1px dashed black ', 
    borderTop: '0'
}

const btnStyle={
    backgroundColor:'transparent',
    border: '1px solid black', 
    color: 'white',
    paddingTop: '0.425rem',
    paddingBottom: '0.425rem',
    paddingRight: '1.250rem',
    paddingLeft: '1.250rem',
}
 
const styledDiv={
    color: 'white',
    paddingTop: '0.625rem',
    paddingBottom: '1.625rem',
    paddingRight: '1.250rem',
    paddingLeft: '1.250rem',
    border: '2px solid white', 
}

const inputStyle={
    border: '1px solid black', 
    backgroundColor:'transparent',
    color: 'white',
}

