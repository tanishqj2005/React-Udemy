import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    // console.log('[cockpit.js] useEffect');
    // setTimeout(()=>{
    //   alert('Saved data to cloud!');
    // },1000)
    toggleBtnRef.current.click();
    // console.log(authContext.authenticated);
    return () => {
      console.log("cockpit.js cleanup work");
    };
  }, []);
  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button className={btnClass} onClick={props.hide}>
        Toggle Cockpit
      </button>
      {/* <AuthContext.Consumer> */}
           <button className={btnClass} onClick={authContext.login}>
          Login
        </button>
      {/* </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(Cockpit);
