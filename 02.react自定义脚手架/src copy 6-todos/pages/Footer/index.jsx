import React, { Component } from "React";
import "./index.css";
import PropTypes from "prop-types";
export default class Footer extends Component {
  //数据限制
  static propTypes = {
    allCount: PropTypes.number.isRequired,
    completeCount: PropTypes.number.isRequired,
    checkAll: PropTypes.func.isRequired,
    delCompletedTodos:PropTypes.func.isRequired
  };
  handleChange = (e) => {
    this.props.checkAll(e.target.checked);
  };
  handleDel=()=>{
    if(window.confirm('你确定不是手抖吗')){
      //调用删除的方法
     this.props.delCompletedTodos()
    }
  }
  render() {
    const { completeCount, allCount } = this.props;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={!!allCount && allCount === completeCount}
            onChange={this.handleChange}
          />
        </label>
        <span>
          <span>已完成{completeCount}</span> / 全部{allCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleDel}>清除已完成任务</button>
      </div>
    );
  }
}
