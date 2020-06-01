import React, { Component } from "React";
import "./index.css";
import PropTypes from "prop-types";
import Model from '../05-组件-model/index'
export default class Item extends Component {
  //对数据对象进行限制
  static propTypes = {
    todo: PropTypes.object.isRequired,
    updateTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };
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
      visible: false,
    });
  };
  handleChange = (e) => {
    const { updateTodo, todo } = this.props;
    updateTodo(todo.id, e.target.checked);
  };
  state = { display: "none" };
  handleEnter = () => {
    this.setState({
      display: "block",
    });
  };
  handleLeave = () => {
    this.setState({
      display: "none",
    });
  };
  handleDel = () => {
    const { id } = this.props.todo;
    /* if(window.confirm('你确定不是手抖吗')){
     this.props.delTodo(id) */
    this.props.delTodo(id);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { name, isCompleted } = this.props.todo;
    return (
      <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <label>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={isCompleted}
          />
          <span>{name}</span>
        </label>
        {/* 写笔记啊 */}
        <button
          className="btn btn-danger"
          style={{ display: this.state.display }}
          onClick={this.isShow}
        >
          删除
        </button>
        <Model
              title={<p>app...</p>}
              content={<div>content...</div>}
              visible={this.state.visible}
              onCancel={this.isHidden}
              onOk={this.handleDel}
            />
      </li>
    );
  }
}
