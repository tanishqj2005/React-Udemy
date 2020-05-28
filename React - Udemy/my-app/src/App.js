import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

class App extends Component {
  state = {
    persons: [
      { id: "fefwfw", name: "TJ", age: 18 },
      { id: "ccgrgrg", name: "PJ", age: 14 },
      { id: "ggtrgt", name: "PV", age: 18 },
      { id: "rfrf", name: "Parth", age: 22 },
    ],
    otherState: "Some other state",
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const state = this.state.showPersons;
    this.setState({
      showPersons: !state,
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color:"white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover':{
        backgroundColor:'blue'
      }
    };
    let classes = [];
    if (this.state.persons.length<=2){
      classes.push('red');
    }
    if (this.state.persons.length<=1){
      classes.push('bold');
    }
    classes = classes.join(' ');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div className="toggle">
          <div className="toggle">
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  clicked={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              );
            })
        
            }
          </div>
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'orange'
      }
    }
    return (
      <div className="App">
        <h1>Hi I am Tanishq Joshi</h1>
        <p className={classes}>I am in a React App</p>
        {/* <button style={style} className="btn" onClick={this.switchNameHandler.bind(this,'TanishqJoshi')}> */}
        <button
          style={style}
          className="btn"
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}
export default App;
