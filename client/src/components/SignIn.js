import React from "react";
import { TextField, Button } from "@material-ui/core";

class SignIn extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
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
        <h6>Sign In</h6>
        <form className="form" noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="standard-required"
              label="Full Name"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
            <br />
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
            <Button variant="contained">Save</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
