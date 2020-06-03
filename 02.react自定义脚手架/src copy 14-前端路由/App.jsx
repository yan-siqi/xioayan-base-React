import React, { Component } from "react";
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>Vue Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item" to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
/* 
<div>
                  <h2>Home组件内容</h2>
                  <div>
                    <ul className="nav nav-tabs">
                      <li>
                        <a href="/home/news">News</a>
                      </li>
                      <li>
                        <a
                          href="/home/message"
                          className="myActive"
                          aria-current="page"
                        >
                          Message
                        </a>
                      </li>
                    </ul>
                    <div>
                      <div>
                        <ul>
                          <li>
                            <a href="/home/message/1">message001</a>{" "}
                            &nbsp;&nbsp;
                            <button>push</button> &nbsp;
                            <button>replace</button>
                          </li>
                          <li>
                            <a href="/home/message/2">message002</a>{" "}
                            &nbsp;&nbsp;<button>push</button> &nbsp;
                            <button>replace</button>
                          </li>
                          <li>
                            <a href="/home/message/4">message004</a>{" "}
                            &nbsp;&nbsp;<button>push</button> &nbsp;
                            <button>replace</button>
                          </li>
                        </ul>
                        <button>前进</button>
                        <button>后退</button>
                      </div>
                    </div>
                  </div>
                </div> */
