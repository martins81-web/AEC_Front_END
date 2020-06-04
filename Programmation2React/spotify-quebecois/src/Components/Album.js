import React from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';  
import { Icon } from 'react-icons-kit';
import {ic_play_circle_outline} from 'react-icons-kit/md/ic_play_circle_outline'

export class Album extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {hovered: false, playHovered:false };
        this.handleOnClick=this.handleOnClick.bind(this);
      }

    handleOnClick(){
        this.props.pageAlbum(true);
        this.props.onClick(true);
    }

    render() { 
        return ( 
            <Col style={this.state.hovered ? styleColHover : styleCol } xl="4" lg="4" md="6" sm="12" xs="12" className="mb-5 center-block d-flex justify-content-center flex-column p-3"> 
             <div className="p-0 mb-0 container" >

                    <img fluid src={this.props.src} alt={this.props.alt} className='image' 
                    onMouseOut={() => this.setState({hovered: false})}
                    onMouseOver={() => this.setState({hovered: true})}  
                    onClick={()=>this.handleOnClick()}
                    style={this.state.hovered ? styleHoverImg : null}
                    />
                    <div  className={this.state.hovered ? "middle" : 'hide' }   
                        onMouseOut={() => this.setState({hovered: false})}
                        onMouseOver={() => this.setState({hovered: true})}  >
                        <Icon icon={ic_play_circle_outline} size={this.state.playHovered ? 110 : 100} 
                        style={this.state.playHovered ? {color:'white', cursor:'pointer',filter: 'drop-shadow(10px 10px 10px black)'} : {color:'#ECF0F1',filter: 'drop-shadow(10px 10px 10px black)'}}
                        onMouseOut={() => this.setState({playHovered: false})}
                        onMouseOver={() => this.setState({playHovered: true})} 
                        onClick={()=>this.handleOnClick()}/>
                    </div>
                  
            </div>
            <p className="mt-2 mb-1" ><b>{this.props.title}</b></p>
            <p>{this.props.artist}</p>
            
            </Col>
         );
    }
}



const styleHoverImg={
    filter: 'drop-shadow(8px 8px 10px black) grayscale(50%)',
    cursor: 'pointer',
}

const styleCol={
    color:'white'
}

const styleColHover={
    backgroundColor: '#26b99a',
    color:'black',
}

