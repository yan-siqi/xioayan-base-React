import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Addcomment extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };
  state = {
    name: "",
    content: "",
  };
  hadleChange = (e) => {
    this.setState({
      name: e.target.vlaue.trim(),
      content: e.target.vlaue.trim(),
    });
  };
  render() {
    return (
      <form className="form-horizontal" className="col-md-4">
        <label>用户名</label>
        <input type="text" className="form-control" placeholder="用户名" />
        <div className="form-group">
          <label>评论内容</label>
          <textarea
            className="form-control"
            rows="6"
            placeholder="评论内容"
          ></textarea>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              type="button"
              className="btn btn-default pull-right"
              onClick={this.handleChange}
            >
              提交
            </button>
          </div>
        </div>
      </form>
    );
  }
}
