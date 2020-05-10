import React from 'react'; 
import Col from 'react-bootstrap/Col';
import play from "../../img/play.png";

export class TvShow extends React.Component {  
    state={
        hover:false,
        hoverplay:false
    }

    render() {  

            return ( 
                    <Col xs lg="2"> 
                        <div id="container-tvShow" className={ 'container-tvShow ' +  (this.state.hover ? 'filtered' : null) }>
                            {/* Image tv-show */}           
                            <img id="imgShow"
                                onMouseOver={ () => this.setState( {hover: true} ) } 
                                onMouseOut= { () => this.setState( {hover: false} ) }  
                                className="img-fluid" 
                                src={this.props.src} 
                                alt = {this.props.alt}
                                //title = {this.props.title}  
                            />
                            
                            {/* Show title onMouseOver */}
                            <div 
                                className={ this.state.hover ? 'title' : 'title hide' } 
                                onMouseOver={() => this.setState( {hover: true} )} 
                                onMouseOut= { () => this.setState( {hover: false} ) }  >
                                {this.props.title}
                            </div>    

                            {/* Show play onMouseOver */}
                            <img  
                                className={ 'img-fluid play ' + (this.state.hover ? ( this.state.hoverplay ? 'hover-play' : null) :  'hide') }
                                onMouseOver={() => {
                                    this.setState( {hover: true} );
                                    this.setState( {hoverplay: true} ); 
                                }}
                                onMouseOut={() => {
                                    this.setState( {hover: false} );
                                    this.setState( {hoverplay: false} ); 
                                }}
                                src={play} 
                                alt ="play"
                                //title="Play"
                                width="35px"
                                height="35px"
                            /> 
                                        
                        </div>
                    </Col>      
                    );
            } 
}