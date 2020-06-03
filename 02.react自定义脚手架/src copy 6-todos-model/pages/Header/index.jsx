import React, { Component } from "React";
import "./index.css";
import PropTypes from 'prop-types'
export default class Header extends Component {
  //对接收的数据进行限制
static propTypes={
  addTodo:PropTypes.func.isRequired
}
  //要进行数据的收集==>使用受控组件
  state = {
    name: "",
  };
  //定义handleChage方法
  handleChange = (e) => {
    this.setState({
      name: e.target.value.trim()
    })
  };
  //按enter键显示数据
  handleKeyup=(e)=>{
    //console.log(e.keyCode);
    const {name}=this.state
    //当建码是13并且输入的内容不为空时才允许添加
    if(e.keyCode===13 && name){
    this.props.addTodo(name)
    this.setState({
      name:''
    })
    }
  }
  render() {
    const{name}=this.state
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyup}
          value={name}
        />
      </div>
    );
  }
}
