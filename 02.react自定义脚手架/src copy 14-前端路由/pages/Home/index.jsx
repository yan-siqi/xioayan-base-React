import React, { Component } from "react";
import { NavLink, Route, Redirect, Switch } from "react-router-dom";
import Message from "../Messages/index";
import News from "../News/index";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <NavLink to="/home/news" className="list-group-item">
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/message"
                className="list-group-item"
                aria-current="page"
              >
                Message
              </NavLink>
            </li>
          </ul>
          <div>
            <div>
              <Switch>
                <Route path="/home/message" component={Message} />
                <Route path="/home/news" component={News} />
                <Redirect to="/home/news" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
