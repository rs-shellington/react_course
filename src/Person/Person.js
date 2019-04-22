
import React from 'react';


const person = (props) => {
    return( 
        <div>
            <p>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>  
            <input type='text' onChange={props.change} value={props.name}/>  
        </div>
    
    )
    }

export default person