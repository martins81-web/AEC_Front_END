// <!-- PageAlbum.js -->
// <!-- Techniques de programmation Web 2 -->
// <!-- Projet 1 par Eric Martins -->
// <!-- Crée le 2 juin 2020 -->
// <!-- Dernier mise à jour le 16 juin 2020 -->

import React from 'react';
import './App.css';
import Row  from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import { ListeChansons } from './ListeChansons';
import { Paroles } from './Paroles';
import arrow from '../img/back.svg'


export class PageAlbum extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {paroles:false, chanson: null, hovered:false};
    }

   
    render() { 
        if (this.state.paroles===false){
            return ( 
                <>
                <Row>
                    <Col xs lg="12">
                        <img onClick={()=>this.props.back(true)} className="img-fluid my-5"
                        src={arrow} alt='return' 
                        onMouseOut={() => this.setState({hovered: false})}
                        onMouseOver={() => this.setState({hovered: true})}
                        style={this.state.hovered ? styleHover : arrowStyle} title="Retourner au catalogue d'albums"/>
                    
                    </Col>
                </Row>
                <Row>
                    <Col  xl="4" lg="4" md="6" sm="12" >
                        <img    src={this.props.album.src} alt={this.props.album.alt} className="fluid" title={this.props.album.title+ " de " + this.props.album.artist} />
                    </Col>
                    
                    <Col xl="6" lg="6" md="6" sm="12" className="text-white d-flex align-items-begin flex-column justify-content-end">
                        <p style={color}>Album</p>
                        <h1><b>{this.props.album.title}</b></h1>
                        <p><span style={{fontWeight: 'lighter'}}>Par </span><b>{this.props.album.artist}</b></p>
                        <p className="mb-0"><span style={color}>{this.props.album.releaseYear} </span>{" · " +this.props.album.chansons.length} chansons</p>
                    </Col>
                </Row>
                <Row className="text-white mt-5 no-gutters">
                    <Col  xl="1" lg="1" md="1" sm="1" xs="1" className="text-center">
                        <p><b>#</b></p>
                    </Col>
                    <Col  xl="11" lg="11" md="11" sm="11">
                        <p style={color}><b>TITRE</b></p>
                    </Col>
                    {this.props.album.chansons.map((element,i) => 
                        <ListeChansons onClick={() => this.setState({paroles: true, chanson: this.props.album.chansons[i]})}
                        number={i+1} chanson={this.props.album.chansons[i].nom}  />
                     )} 
                </Row>
                </>
            );
        } else if (this.state.paroles===true){
            return ( 
                <>
                <Row>
                    <Col xl="12" lg="12" md="12" sm="12"  >
                        <img   onClick={() => this.setState({paroles: false})} className="img-fluid my-5"
                        src={arrow} alt='return'  
                        onMouseOut={() => this.setState({hovered: false})}
                        onMouseOver={() => this.setState({hovered: true})}
                        style={this.state.hovered ? styleHover : arrowStyle} title="Retourner à l'album"/>
                    </Col>
                </Row>
                <Row>
                    <Col  xl="4" lg="4" md="6" sm="12" >
                            <img onClick={() => this.setState({paroles: false})}
                            src={this.props.album.src} alt={this.props.album.alt} className="img-fluid" 
                            onMouseOut={() => this.setState({hovered: false})}
                            onMouseOver={() => this.setState({hovered: true})}
                            style={this.state.hovered ?  AlbumHover : null }
                            title={this.props.album.title+ " de " + this.props.album.artist}/>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="12"  className="text-white d-flex align-items-begin flex-column justify-content-end">
                            <p style={color}>Album</p>
                            <h1><b>{this.props.album.title}</b></h1>
                            <p style={color}>Chanson</p>
                            <h1><b>{this.state.chanson.nom}</b></h1>
                    </Col>
                </Row>
                <Row className="text-white mt-5 no-gutters">
                    <Col lg="12" >
                            <h1 style={color} className='mb-5'>Paroles</h1>
                    </Col>
                    <Col lg="12" >
                                <Paroles paroles={this.state.chanson.paroles}/>
                    </Col>
                </Row>
                </>
            );
        }
    }
}

/* Style */

const color={
    color: '#26b99a'
}

const arrowStyle={
    height: '64px', 
}

const styleHover={
    cursor: 'pointer',
    height: '64px'
}

const AlbumHover={
    cursor: 'pointer'
}



