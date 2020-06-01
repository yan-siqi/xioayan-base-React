import React, { Component } from "React";
import "./index.css";
import PropTypes from "prop-types";
export default class Item extends Component {
  //对数据对象进行限制
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
  };
  handleChange = (e) => {
    const { updateTodo, todo } = this.props;
    updateTodo(todo.id, e.target.checked);
  };
  state={display:'none'}
  handleEnter=()=>{
    this.setState({
      display:'block'
    })
  }  
  handleLeave=()=>{
    this.setState({
      display:'none'
    })
  }
 handleDel=()=>{
   const {id} =this.props.todo
   if(window.confirm('你确定不是手抖吗')){
     this.props.delTodo(id)
   }
 }
  render() {
    const { name,isCompleted} = this.props.todo;
    return (
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <label>
          <input type="checkbox" onChange={this.handleChange} checked={isCompleted}/>
          <span>{name}</span>
        </label>
        {/* 写笔记啊 */}
        <button className="btn btn-danger" style={{ display:this.state.display }} onClick={this.handleDel}>
          删除
        </button>
      </li>
    );
  }
}
