import React from "react";
class App extends React.Component {
  /* 
  笔记:
  es6的三大属性state状态
  作用:用来跟新用户界面
  使用:1.初始化状态
       2.读取状态
       3.更新状态
  */
/*   constructor() {
    super();
    this.state = {
      isLikeMe: false,
    };
  } */
  state={
    isLikeMe:false
  }
  //可以定义一个方法
  handleClick=()=> {
    const { isLikeMe } = this.state;
    //3.更新变化
    this.setState({//会出现问题  this是undefined  是es6严格模式
      // 将其他自定义函数的this指向组件实例对象
      // 使用箭头函数
      isLikeMe: !isLikeMe,
    });
    // console.log("被点击了");
  }
  render() {
    //2.读取数据
    const { isLikeMe } = this.state;
    //在  react中绑定事件中使用onXxx采用小驼峰命名法
    //return <h2 onClick={()=>{console.log("被点击了")}}>hello</h2>
    return (
      <h1 onClick={this.handleClick}>{isLikeMe ? "我喜欢你" : "你喜欢我"}</h1>
    ); //比较强
  }
}
export default App;
