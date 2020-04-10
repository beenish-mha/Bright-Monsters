import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginSignin from "./components/LoginSignin";
import AddChild from "./components/AddChild";
import MainPage from "./components/MainPage";
function App() {
  return (
    <Router>
      <div className="route">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/LoginSignin" exact component={LoginSignin} />
          <Route path="/AddChild" exact component={AddChild} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
