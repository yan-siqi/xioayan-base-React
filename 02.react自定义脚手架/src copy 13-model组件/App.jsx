import React, { Component } from "react";
import Model from "./pages/05-组件-model/index";
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
        <button onClick={this.isShow}>点击显示组件</button>
        <Model
          title={<p>app...</p>}
          content={<div>content...</div>}
          visible={this.state.visible}
          onCancel={this.isHidden}
        />
      </div>
    );
  }
}
