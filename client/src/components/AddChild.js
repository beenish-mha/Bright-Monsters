import React from "react";
import { TextField } from "@material-ui/core";
import API from "../utils/Api";

class AddChild extends React.Component {
  state = {
    childName: "",
    email: this.props.email,
    userId: this.props.userId,
    childAge: "",
  };

  submit = (event) => {
    event.preventDefault();
    if (this.state.childName === "") {
      alert("enter your child's name");
    }

    API.newUserKid({
      Name: this.state.childName,
      email: this.state.email,
      userId: this.state.userId,
      age: this.state.childAge,
    })
      .then((response) => {
        window.location.reload(true);
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
