import React from "react";
import API from "../utils/Api";

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
      console.log("hello" + this.state.user[0].name);
    });
  }

  render() {
    let parent = this.state.user;
    return (
      <div>
        <h5>Hello {this.state.parentName}</h5> <br />
        <br />
        <table>
          <tbody>
            {parent.map((parent) => (
              <tr key={parent._id} className="table-active">
                <td>{parent.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectChild;
