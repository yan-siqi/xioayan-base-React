import React from "react";
import Child from "./pages/Child";
class App extends React.Component {
state={
  person:{
    name:'xiaoyan',
    age:'2',
    sex:'nv'
  }
};
updatePerson=(person)=>{
  this.setState({
    person
  })
}

  // 组件内部返回要渲染的虚拟DOM对象 --> 通过render方法返回
  render() {
const {person}=this.state
    return(

      <div>
        <h1>App..</h1>
      <Child {...person} updatePerson={this.updatePerson}></Child>
      </div>
    )
  }
}

export default App;
