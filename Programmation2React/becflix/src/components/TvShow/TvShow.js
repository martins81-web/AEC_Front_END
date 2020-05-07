import React from 'react'; 
import Col from 'react-bootstrap/Col';





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
                                            title = {this.props.title}  
                                        />

                                        <div className="title hide" 
                                            onMouseEnter={this.handleEventOnHover} 
                                            onMouseLeave={this.handleEventOnHover} >
                                        {this.props.title}
                                        </div>
                                    </div>
                    </Col>      
            );
    } 
  
    handleEventOnHover(e){
        //remove from all elements
        this.removeFiltersEffects();
        //add filter-efects to this element    
        e.target.parentNode.classList.add("filtered");
        //show title
        e.target.parentNode.lastChild.classList.remove("hide");
    }

    handleEventOnOut(e){
        //remove from all elements
        this.removeFiltersEffects();
        //hide title
        e.target.parentNode.lastChild.classList.add("hide");
    }
    
    removeFiltersEffects(){
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
    }

};  
