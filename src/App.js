import React, { Component } from "react";
import { Button, message } from "antd";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Admin from "./pages/admin/admin";
import Login from "./pages/login/login";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
