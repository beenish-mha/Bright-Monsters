import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import AddChild from "./components/AddChild";
import MainPage from "./components/MainPage";
function App() {
  return (
    <Router>
      <div className="route">
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Login" exact component={Login} />
          <Route path="/AddChild" exact component={AddChild} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
