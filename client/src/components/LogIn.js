import React from "react";
import { TextField, Button } from "@material-ui/core";
import API from "../utils/Api";

class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  //   submit = (event) => {
  //     event.preventDefault();

  //     API.saveUser({
  //       name: this.state.name,
  //       email: this.state.email,
  //       password: this.state.password,
  //     })
  //       .then((response) => {
  //         alert("Add kids");
  //       })
  //       .catch((err) => console.log(err));
  //   };

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
        <h6>Log In</h6>
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
              label="E-Mail"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
            <br />
            <TextField
              required
              id="standard-password-input"
              label="Password"
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn">Enter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
