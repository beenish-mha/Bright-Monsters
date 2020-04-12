import React from "react";
import { TextField, Button } from "@material-ui/core";
import API from "../utils/Api";

class AddChild extends React.Component {
  state = {
    childName: "",
    email: "",
    childAge: "",
  };

  submit = (event) => {
    event.preventDefault();

    API.updateUserByEmail({
      kids: this.state.childName,
      email: this.state.email,
      childAge: this.state.childAge,
    })
      .then((response) => {
        alert("child added give them assignment");
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
