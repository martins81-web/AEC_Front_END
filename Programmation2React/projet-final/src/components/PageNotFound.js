import React from 'react'

export class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <img src={require('../images/404.png')} alt='404' width="100%"/>
        );
    }
}
 
