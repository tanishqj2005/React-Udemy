import React from 'react';
import './Person.css'

const person = (props) => {
    // console.log(props.children);
    return(
    // <p>I am a Person! My name is {props.name}. I am {Math.floor(Math.random()*30)} years old!</p>
    <div className='Person'>
        <p onClick={props.click}>I am a Person! My name is {props.name}. I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type='text' onChange={props.changed} value={props.name}></input>
    </div>
    
    )
}

export default person;