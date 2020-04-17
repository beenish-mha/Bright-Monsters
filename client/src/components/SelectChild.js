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
    user: [{}],
  };

  componentDidMount() {
    API.getUserByEmail(this.state.email).then((res) => {
      console.log(res);
      this.setState({
        user: res.data.kids,
        parentName: res.data.Name,
      });
      //console.log("Hello selectChild  ", this.state.user[0].name);
    });
  }

  render() {
    let parent = this.state.user;
    let i = 1;

    return (
      <div>
        <h5>Hello {this.state.parentName}</h5> <br />
        <br />
        <p>Select your kids to check their tasks</p>
        <List component="nav" aria-label="secondary mailbox folders">
          {parent.map((kids) => (
            <div key={(i = i + 1)}>
              <ListItem button>
                <Link
                  to={{
                    pathname: "/Tasks",
                    aboutProps: {
                      name: kids.Name,
                      age: kids.age,
                      email: this.state.email,
                      kidId: kids._id,
                    },
                  }}
                >
                  <ListItemText primary={kids.Name} />
                </Link>
              </ListItem>
            </div>
          ))}
        </List>
      </div>
    );
  }
}

export default SelectChild;
