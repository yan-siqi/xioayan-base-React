import React, { Component } from "react";
import PropTypes from "prop-types"; //对props进行检查
export default class Child extends Component {
  static propTyes = {
    name: PropTypes.string.isRequired, //isReaquure是默认必须要传的
    age: PropTypes.number,
    sex: PropTypes.string,
    updatePerson:PropTypes.func.isRequired
  };
  static defaultProps={
    age:18,
    sex:'nan'
  }
  update=()=>{
    this.props.updatePerson({
      name:'jack',
      age:20,
      sex:'nan'
    })
  };
  // 组件内部返回要渲染的虚拟DOM对象 --> 通过render方法返回
  render() {
    const { name, age, sex } = this.props;
    return (
      <div>
        <h1 onClick={this.updatePerson}>child..</h1>
        <ul>
          <li>姓名:{name}</li>
          <li>年龄:{age}</li>
          <li>性别:{sex}</li>
        </ul>
      </div>
    );
  }
}


