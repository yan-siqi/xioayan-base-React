import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "../Detail";
/* 
笔记:路由跳转的两种方式
*/
export default class Message extends Component {
  //使用编程式导航
  push = () => {
    this.props.history.push("/home/message/3", { name: "xiaoyan" });
  };
  replace = () => {
    this.props.history.replace("/home/message/2");
  };
  goForward = () => {
    this.props.history.goForward(); //不传递参数
  };
  goBack = () => {
    this.props.history.goBack(); //不需要传递参数
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/message/1">msg1</Link>
          </li>
          <li>
            <Link to="/home/message/2">msg2</Link>
          </li>
          <li>
            <Link to="/home/message/3">msg3</Link>
          </li>
        </ul>
        <button onClick={this.push}>添加</button>
        <button onClick={this.replace}>替换</button>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <Route path="/home/message/:id" component={Detail}/>
      </div>
    );
  }
}
