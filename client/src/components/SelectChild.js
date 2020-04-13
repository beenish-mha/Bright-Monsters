import React from "react";
import API from "../utils/Api";

class SelectChild extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: this.props.email,
    user: {},
  };

  componentDidMount() {
    API.getUserByEmail(this.state.email).then((res) => {
      console.log(res);
      this.setState({
        user: res.data,
      });
      console.log("hello" + this.state.user.kids[0].name);
    });
  }

  render() {
    return <h2>Select Child</h2>;
  }
}

export default SelectChild;
