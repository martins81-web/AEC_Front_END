import React from 'react';
import './App.css'; 
import Col from 'react-bootstrap/Col';  


export class ListeChansons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { style:list}
    }
    render() { 
        return (<>
                    <Col  xl="1" lg="1" md="1" sm="1" xs="1" onClick={()=> this.props.onClick(true)} style={this.state.style} className="text-center"
                        onMouseOut={() => this.setState({style: list})}
                        onMouseOver={() => this.setState({style: listHover})}>
                        <div style={{color:'#26b99a'}} >
                            {this.props.number}
                        </div>
                    </Col>
                    <Col  xl="11" lg="11" md="11" sm="11" xs="11" onClick={()=> this.props.onClick(true)} style={this.state.style}
                        onMouseOut={() => this.setState({style: list})}
                        onMouseOver={() => this.setState({style: listHover})}>
                        <div >
                            {this.props.chanson}
                        </div>
                    </Col>
                </>
            )
     }
}


const list = {
    borderTop: '1px solid #505050',
    paddingTop: '0.875rem',
    paddingBottom: '0.875rem',
   
};

const listHover = {
    borderTop: '1px solid #505050',
    paddingTop: '0.875rem',
    paddingBottom: '0.875rem',
    backgroundColor: '#505050',
    cursor: 'pointer'
};

