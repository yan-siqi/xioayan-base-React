import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import "./index.css";
export default class List extends Component {
  state = {
    isFirstView: true,
    isLoading: false,
    users: null,
    error: null,
  };
  componentDidMount() {
    //在发送请求之前
    PubSub.subscribe("SEARCHNAME", (msg, searchName) => {
      this.setState({
        isFirstView: false,
        isLoading: true,
      });
      axios
        .get("http://localhost:9527/api/search/users", {
          params: {
            q: searchName,
          },
        })
        .then((response) => {
          console.log("请求成功", response);
          this.setState({
            users: response.data.items.map((user) => {
              return {
                login: user.login,
                avatar_url: user.avatar_url,
                html_url: user.html_url,
                id: user.id,
              };
            }),
            isLoading: false,
          });
        })
        .catch((err) => {
          console.log("不好意思请求失败");
          this.setState({
            users: null,
            err: "网络问题",
            isLoading: false,
          });
        });
    });
  }
  componentWillUnmount() {
    PubSub.unsubscribe("SEARCHNAME");
  }
  render() {
    const { isFirstView, isLoading, users, error } = this.state;
    if (isFirstView) {
      return <h1>Enter Name To Search</h1>;
    }
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    if (users) {
      return (
        <div className="card" key>
          {users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank">
                  <img src={user.avatar_url} style={{ width: 100 }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return <h1>{error}</h1>;
  }
}
