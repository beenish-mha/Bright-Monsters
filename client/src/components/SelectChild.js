import React from "react";
import API from "../utils/Api";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";

class SelectChild extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: this.props.email,
    parentName: "",
    user: [],
  };

  componentDidMount() {
    API.getUserByEmail(this.state.email).then((res) => {
      console.log(res);
      this.setState({
        user: res.data.kids,
        parentName: res.data.name,
      });
      //console.log("Hello" + this.state.user[0].name);
    });
  }

  render() {
    let parent = this.state.user;
    return (
      <div>
        <h5>Hello {this.state.parentName}</h5> <br />
        <br />
        <p>Select your kids to check their tasks</p>
        <List component="nav" aria-label="secondary mailbox folders">
          {parent.map((parent) => (
            <ListItem button key={parent._id} className="table-active">
              <ListItemText primary={parent.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default SelectChild;
