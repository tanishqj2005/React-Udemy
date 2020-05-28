import React from "react";
import "./Person.css";

const person = (props) => {
  const style = {
    '@media(min-width : 500px)':{
      width:'450px'
    }
  };
  return (
    <div style={style}>
      <p onClick={props.clicked}>
        I am a Person! My name is {props.name}. I am {props.age} years old!
      </p>
      <input type="text" onChange={props.changed}></input>
    </div >
  );
};

export default person;
