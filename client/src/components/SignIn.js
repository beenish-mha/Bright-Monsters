import React from "react";
import { TextField, Button } from "@material-ui/core";
import API from "../utils/Api";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    email: "",
    password: "",
    userId: "",
  };

  submit = (event) => {
    event.preventDefault();

    API.saveUser({
      Name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        //window.location.reload();
        console.log("after sign in", response.data._id);
        this.props.history.push("/AddChildSelectChild", {
          email: this.state.email,
          userId: response.data._id,
        });
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
        <h6>Sign In</h6>
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
            <button className="btn">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
