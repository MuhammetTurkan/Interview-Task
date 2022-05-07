import React from "react";
import Register from "../src/pages/register";
import Login from "../src/pages/login";
import Home from "../src/pages/home";
import UserHome from "../src/pages/userHome";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/userHome" component={UserHome} exact />
      </Switch>
    </div>
  );
}

export default App;
