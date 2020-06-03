import React, { Component } from "React";
import Item from "../Item";
import PropTypes from 'prop-types'
import "./index.css";
export default class List extends Component {
  //对数据进行数据类型限制
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo:PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
  };
  render() {
    const { todos,updateTodo,delTodo } = this.props;
    return (
      <ul className="todo-main">
        {/* 对数据进行遍历 */}
        {todos.map((todo) => {
          return <Item key={todo.id} todo={todo} updateTodo={updateTodo} delTodo={delTodo}/>;
        })}
      </ul>
    );
  }
}
