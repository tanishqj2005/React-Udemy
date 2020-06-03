import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Tanishq Joshi",
        adress: {
          street: "Thane",
          zip: "409312",
          country: "India",
        },
        email: "test@gmail.com",
        phone: "9999999999",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders", order)
      .then((response) => this.setState({ loading: false }))
      .catch((error) => this.setState({ loading: false }));

    this.props.history.push('/');
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your Email" />
        <input type="text" name="street" placeholder="Enter your Street" />
        <input
          type="text"
          name="postal"
          placeholder="Enter your Postal Code."
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER NOW
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data:</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
