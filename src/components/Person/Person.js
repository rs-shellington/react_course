
import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {

    const style = {

        '@media (min-width:500px)' : {
            width:'400px',
        }

    }
    return( 
        <div className = 'Person' style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>  
            <input type='text' onChange={props.change} value={props.name}/>  
        </div>
    
    )
    }

export default Radium(person)