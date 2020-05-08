import React from 'react'; 
import Col from 'react-bootstrap/Col';
import play from "../../img/play.png";

export class TvShow extends React.Component {  
    render() {  
            return ( 
                    <Col xs lg="2"> <div id="cont" className="cont">
                                        
                                        <img id="imgShow"
                                            onMouseEnter={this.handleEventOnHover} 
                                            onMouseLeave={this.handleEventOnOut} 
                                            className="img-fluid" 
                                            src={this.props.src} 
                                            alt = {this.props.alt}
                                            //title = {this.props.title}  
                                        />

                                       
                                        <div className="title hide" onMouseEnter={this.handleEventOnHover} onMouseLeave={this.handleEventOnHover} >
                                            {this.props.title}
                                        </div>   

                                        <img  
                                            className="play hide img-fluid" 
                                            onMouseEnter={this.handleEventOnHover} 
                                            onMouseLeave={this.handleEventOnHover}
                                            onMouseOver={this.handlePlayOnHover} 
                                            onMouseOut={this.handlePlayOnOut} 
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

    handlePlayOnHover(e){
        e.target.classList.add("play-hover");
    }

    handlePlayOnOut(e){
        e.target.classList.remove("play-hover");
    }
  
    handleEventOnHover(e){
        removeAll();

        //add filter-efects to this element    
        e.target.parentNode.classList.add("filtered");
        //show play
        var matches = e.target.parentNode.getElementsByClassName('play');
        for (let i=0; i<matches.length; i++) {
            matches[i].classList.remove('hide');
        }
        //show title
        matches = e.target.parentNode.getElementsByClassName('title');
        for (let i=0; i<matches.length; i++) {
            matches[i].classList.remove('hide');
        }
    }

    handleEventOnOut(e){
        removeAll();
    }
   

};  


function removeAll(){
    //remove all filters-efects from all elements not moused triggered before     
    var matches = document.getElementsByClassName('filtered');
    for (let i=0; i<matches.length; i++) {
        matches[i].classList.remove('filtered');
    }
    //remove all titles from all elements not moused triggered before   
    matches = document.getElementsByClassName('title');
    for (let i=0; i<matches.length; i++) {
        matches[i].classList.add('hide');
    }
    //remove all play buttons elements not moused triggered before  
    matches = document.getElementsByClassName('play');
    for (let i=0; i<matches.length; i++) {
        matches[i].classList.add('hide');
    }
}
