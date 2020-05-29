import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Auxiliary";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      // <div className={classes.Person}>
      <Aux>
        {/* <AuthContext.Consumer> */}
          {
            this.context.authenticated ? <p> Authenticated </p> : <p>Please Login</p>
          }
        {/* </AuthContext.Consumer> */}
        {/* <React.Fragment> */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        {/* <input type="text" onChange={this.props.changed} value={this.props.name} ref={(inputEl) => {this.inputElement = inputEl}} /> */}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputElementRef}
        />
        {/* </React.Fragment> */}
      </Aux>
      // </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
