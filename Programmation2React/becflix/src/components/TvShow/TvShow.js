import React from 'react'; 
import Col from 'react-bootstrap/Col';




export class TvShow extends React.Component {  

    render() {  
            return ( 
                    <Col xs lg="2"> <div>
                                        <img onMouseOver={this.handleEventOnHover}  onMouseLeave={this.handleEventOnLeave} className="img-fluid" 
                                        src={this.props.src} 
                                        alt = {this.props.alt}
                                        title = {this.props.title}  
                                        />
                                    </div>
                    </Col>      
                
            );
    }  

    // handleEventOnHover(e){
    //     //filter
    //     e.target.style.filter="sepia(100%)"; 

    //     //zoom
    //     e.target.style.transition= "transform .6s"; 
    //     e.target.style.transform= "scale(1.228)";
    // }

    // handleEventOnLeave(e){
    //     //filter
    //     e.target.style.filter="sepia(0%)";

    //     //zoom
    //     e.target.style.transform= "scale(1)";
    // }

    handleEventOnHover(e){
        e.target.parentNode.className="filtered";
    }

    handleEventOnLeave(e){
        e.target.parentNode.className="";
    }
 
 
};  
