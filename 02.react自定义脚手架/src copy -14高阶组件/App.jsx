import React, { Component } from "react";
//import Model from "./pages/05-组件-model/index";
import Login from './pages/06高阶组件/Login'
import Register from './pages/06高阶组件/Register'
export default class App extends Component {
  state = {
    visible: false,
  };
  isShow = () => {
    this.setState({
      visible: true,
    });
  };
  isHidden = () => {
    this.setState({
      visible:false
    })
  };
  //ForWardRef = React.createRef();
  //遮罩层+主要内容(头部(标题+按钮)+内容+底部(取消和确定))的两个div
  render() {
    return (
      <div>
        <Login />
        <hr />
        <Register />
      </div>
    );
  }
}
