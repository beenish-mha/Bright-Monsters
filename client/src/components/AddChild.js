import React from "react";
import { TextField, Button } from "@material-ui/core";
import API from "../utils/Api";

class AddChild extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  submit = (event) => {
    event.preventDefault();

    API.saveUser({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        alert("Add kids");
      })
      .catch((err) => console.log(err));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.state.password);
    return (
      <div>
        <h6>Add Your Child</h6>
        <form
          onSubmit={this.submit}
          className="form"
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="standard-required"
              label="Your E-Mail"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              required
              id="standard-required"
              label="Child Full Name"
              value={this.state.childName}
              name="childName"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <TextField
              id="standard-required"
              label="child Age"
              value={this.state.childAge}
              name="childAge"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button className="btn">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddChild;
