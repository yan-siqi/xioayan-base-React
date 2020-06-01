import React, { Component,PureComponent } from "react";
//PureComponent是纯类组件,输入的内容一致,输出的内容一致
//类似于对state和props对数据进行前比较,之比较第一层数据
export default class Index extends PureComponent {
  state = {
    num: 1,
  };
/*   shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log(this.props, this.state); */
    //难度一级:要判断当前的状态和数据和之前的数据和状态是否是一样的
/* 
    if (this.state === nextState && this.props === nextProps) {
      return false;
    }
    return true;
  } */
  //难度二级:
 /*  const prevStateKeys=Object.keys(this.state);
  const nextStateKeys=Object.keys(nextState)
  //使用for循环去遍历数据==>性能比较好
  for(let i=0;i<nextStateKeys.length;i++){
    //获取属性名
    const nextStateKey=nextStateKeys[i]
    //判断属性名是否相等
    if(!this.state.hasOwnProperty(nextStateKey) || !this.state[nextStateKey]!==nextState[nextStateKey]){
      //如果说属性名和属性值实不相等的话 数据就会更新 返回true
      return true
    }
  }
  return false
} */
  update = () => {
    this.setState({
      num: this.state.num+1,
    });
  }
  render() {
    console.log("render()执行了....");

    return (
      <div>
        <button onClick={this.update}>更新一下吧</button>
      </div>
    );
  }
}
