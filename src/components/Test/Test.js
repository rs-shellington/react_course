import React, { Component } from 'react';
import './Test.css'

class Test extends Component {

    render() {
        return(
            <div>
            <p>Test</p>
            <p>Right! {this.props.name}</p>
            
            
            </div>
        );  
    }

}

export default Test;