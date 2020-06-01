import React, { Component } from "react";
import ReactDOM from "react-dom";
import Addcomment from "./pages/Addcomment/index.jsx";
import CommentList from "./pages/CommentList/index";
class App extends Component {
  state = {
    comments: [
      { id: 1, name: "小闫", content: "react小白" },
      { id: 2, name: "小红", content: "react大白" },
    ],
  };
  id = 3;
  addComment = (name, content) => {
    const { comments } = this.state;
    console.log(comments)
    this.setState({
      comments: [{ id: this.id++, name, content }, ...comments],
    });
  };
  uppdateComment=(name,content)=>{
    const {comments}=this.state;
    this.setState({
      comments:comments.map((comment)=>{
        if()
      })
    })
  }
  render() {
    return (
      <div className="container">
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <Addcomment addComment={this.addComment} />
        <CommentList />
      </div>
    );
  }
}
export default App;
