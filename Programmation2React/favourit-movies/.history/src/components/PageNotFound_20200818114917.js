import React from 'react'

export class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <img src={require('../img/404.jpg')} alt='404' width="100%"/>
        );
    }
}
 
