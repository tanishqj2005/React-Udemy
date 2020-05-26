import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { name: "TJ", age: 18 },
      { name: "PJ", age: 14 },
      { name: "PV", age: 18 },
    ],
    otherState: "Some other state"
  }

  switchNameHandler = (newName)=>{
    this.setState({
      persons: [
        { name: newName, age: 18 },
        { name: "PJ", age: 14 },
        { name: "PV", age: 180 },
      ],
      otherState: "Some other state"
    })
  }

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { name: 'TJ', age: 18 },
        { name: event.target.value, age: 14 },
        { name: "PV", age: 1800 },
      ],
      otherState: "Some other state"
    })
  }


  render(){
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };
    return (
    <div className="App">
      <h1>Hi I am Tanishq Joshi</h1>
      <p>I am in a React App</p>
      <button style={style} className="btn" onClick={this.switchNameHandler.bind(this,'TanishqJoshi')}>
        {/* above is old syntax */}
        Switch Name
      </button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        changed = {this.nameChangedHandler}
        age={this.state.persons[1].age}
        click = {()=> this.switchNameHandler('JoshiTanishq!!!')}
        // above is new syntax 
      >
        My Hobbies: Swimming
      </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
  );
    }
  // return React.createElement('div',{className:'App'},React.createElement('h1','','Hi I am Tanishq Joshi'))
};
export default App;
// Restrictions in JS:
//Cant use class as keyword
