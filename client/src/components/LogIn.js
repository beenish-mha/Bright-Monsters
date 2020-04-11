import React from "react";
import { TextField, Button } from "@material-ui/core";
import API from "../utils/Api";

class LogIn extends React.Component {
  state = {
    email: "",
    password: "",
    user: {},
  };

  submit = (e) => {
    e.preventDefault();

    let searchedUser = this.state.email;

    API.getUserByEmail(searchedUser).then((res) => {
      console.log(res);
      this.setState({
        user: res.data,
      });
      //   .catch((error) => {
      //     console.log(error);
      //   });
      console.log("this is user" + this.state.user.name);
      if (this.state.user.password === this.state.password) {
        console.log("password match");
      } else {
        alert("please try your password again");
      }
    });
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
