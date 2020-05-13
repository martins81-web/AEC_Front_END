import React from 'react'; 
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import play from "../../img/play.png";


export class TvShow extends React.Component {  
    constructor(props) {
        super(props);
     
        this.state={
            hover:false,
            hoverplay:false
        }
      }
    
    

    render() {  
        return ( 
            <Col xs lg="2"> 
                <div className={ 'container-tvShow ' +  (this.state.hover ? 'filtered' : null) }>
                    {/* Image tv-show */}           
                    <Image id="imgShow"
                        fluid
                        onMouseOver={ () => this.setState( {hover: true} ) } 
                        onMouseOut= { () => this.setState( {hover: false} ) }  
                        src={this.props.src} 
                        alt={this.props.alt}
                        //title={this.props.title}  
                    />
                    
                    {/* Show title onMouseOver */}
                    <div 
                        className={ this.state.hover ? 'title' : 'hide' } 
                        onMouseOver={() => this.setState( {hover: true} )} 
                        onMouseOut= { () => this.setState( {hover: false} ) }  >
                        {this.props.title}
                    </div>    

                    {/* Show play onMouseOver */}
                    <Image  
                        fluid
                        className={ this.state.hover ? ( this.state.hoverplay ? 'play hover-play' : 'play') :  'hide' }
                        onMouseOver={() => {
                            this.setState( {hover: true} );
                            this.setState( {hoverplay: true} ); 
                        }}
                        onMouseOut={() => {
                            this.setState( {hover: false} );
                            this.setState( {hoverplay: false} ); 
                        }}
                        src={play} 
                        alt="play"
                        //title="Play"
                        width="35px"
                        height="35px"
                    />                             
                </div>
            </Col>      
        );
    } 
}