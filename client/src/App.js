import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignin from "./components/LoginSignin";
import AddChildSelectChild from "./components/AddChildSelectChild.js";
import MainPage from "./components/MainPage";
import Tasks from "./components/Tasks";

function App() {
  return (
    <Router>
      <div className="route">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/LoginSignin" exact component={LoginSignin} />
          <Route path="/Tasks" exact component={Tasks} />
          <Route
            path="/AddChildSelectChild"
            exact
            component={AddChildSelectChild}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
