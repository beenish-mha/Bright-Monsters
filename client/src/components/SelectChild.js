import React from "react";
import API from "../utils/Api";
import { Link } from "react-router-dom";

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
          {parent.map((kids) => (
            <ListItem button key={kids._id}>
              <Link
                to={{
                  pathname: "/Tasks",
                  aboutProps: {
                    name: kids.name,
                    age: kids.age,
                    email: this.state.email,
                  },
                }}
              >
                <ListItemText primary={kids.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default SelectChild;
