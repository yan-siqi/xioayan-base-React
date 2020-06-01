import React, { Component } from "react";
//工厂函数组件
//    {props.children}直接作为参数传进来但是只要向组件标签中添加数据
// class类 是this.state.person来使用
//ref:不太重要
export default  function ForWardRef(props) {
    console.log(props);  
  return <div>ForWardRef
      {props.children}
  </div>;
}
