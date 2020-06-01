import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import Model from '../05-组件-model/index'
export default class Footer extends Component {
  //数据限制
  static propTypes = {
    allCount: PropTypes.number.isRequired,
    completeCount: PropTypes.number.isRequired,
    checkAll: PropTypes.func.isRequired,
    delCompletedTodos:PropTypes.func.isRequired,
  };
  state={
   visible:false 
  }
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
    this.props.checkAll(e.target.checked);
  };
  handleDel=()=>{
  /*   if(window.confirm('你确定不是手抖吗')){
      //调用删除的方法
     this.props.delCompletedTodos()
    } */
   /* this.props.isShow() */
   this.props.delCompletedTodos()
   this.setState({
    visible: false,
  });
  }
  render() {
    const { completeCount, allCount,todos,isShow } = this.props;
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
        <button className="btn btn-danger"onClick={this.isShow}>清除已完成任务</button>
        <Model
              title={<p>app...</p>}
              content={<div>content...</div>}
              visible={this.state.visible}
              onCancel={this.isHidden}
              onOk={this.handleDel}
            />
      </div>
    );
  }
}
