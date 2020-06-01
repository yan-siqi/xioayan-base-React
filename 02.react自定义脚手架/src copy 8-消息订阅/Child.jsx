import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class Child extends Component {
  componentDidMount() {
    //子组件订阅消息
    PubSub.subscribe("RECEIVE_DATA", (msg, data) => {
      console.log("儿子接受到数据", msg, data);
    });
  }
  componentWillUnmount() {
    //取消订阅
    PubSub.unsubscribe("RECEIVE_DATA");
  }
  render() {
    return <div>儿子.....</div>;
  }
}
