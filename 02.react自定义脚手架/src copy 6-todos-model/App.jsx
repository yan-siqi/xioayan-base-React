//主组件
import React, { Component } from "React";
import List from "./pages/List";
import Header from "./pages/Header/index";
import Footer from "./pages/Footer/index";
//import Model from "./pages/05-组件-model/index";
//它引入样式文件
import "./App.css";
//定义类组件
class App extends Component {
  //首先要初始化状态数据
  state = {
    todos: [
      { id: 1, name: "吃饭", isCompleted: false },
      { id: 2, name: "睡觉", isCompleted: false },
      //{ visible: false },//设置当前不显示
    ],
  };

  id = 3;
  //状态数据在哪,更新状态的方法定义在哪'
  addTodo = (name) => {
    const { todos } = this.state;
    this.setState({
      todos: [{ id: this.id++, name, isCompleted: false }, ...todos],
    });
  };
  //定义更新的额方法]
  updateTodo = (id, isCompleted) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            name: todo.name,
            isCompleted,
            visible: false,
          };
        }
        return todo;
      }),
    });
  };
  //判断是全选还是全不选
  checkAll = (isCheckAll) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        //跟新所有值
        return {
          id: todo.id,
          name: todo.name,
          isCompleted: isCheckAll,
        };
      }),
    });
  };
  delCompletedTodos = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.isCompleted;
      }),
    });
  };
  //删除指定id的数据
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  };
  render() {
    //读取状态数据
    const { todos } = this.state;
    //定义总数
    const allCount = todos.length;
    //定义已完成的数量'
    const completeCount = todos.reduce((p, c) => {
      console.log(c);

      return p + (c.isCompleted ? 1 : 0); //返回值中 如果是完成的就+1 否则的话 就+0
    }, 0);
    console.log(completeCount);

    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            delTodo={this.delTodo}
            isShow={this.isShow}
          />
          <Footer
            todos={todos}
            allCount={allCount}
            completeCount={completeCount}
            checkAll={this.checkAll}
            delCompletedTodos={this.delCompletedTodos}
            isShow={this.isShow}
          ></Footer>
        </div>
      </div>
    );
  }
}
//向外部暴露一个组件'
export default App;
