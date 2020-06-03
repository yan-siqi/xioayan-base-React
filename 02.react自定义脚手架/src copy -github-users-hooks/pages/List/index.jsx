import React, { useState,useEffect } from "react";
import PubSub from "pubsub-js";
import axios from "axios";
import "./index.css";
export default function List() {
  /*  state = {
    isFirstView: true,//初始化显示
    isLoading: false,//正在加载中
    users: null,//代表请求成功的数据
    error: null,//请求失败
  }; */
  const [isFirstView, setIsFirstView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    //在发送请求之前
    PubSub.subscribe("SEARCHNAME", (msg, searchName) => {
      setIsFirstView(false);
      setIsLoading(true),
        axios
          .get("http://localhost:9527/api/search/users", {
            params: {
              q: searchName,
            },
          })
          .then((response) => {
            const data = response.data.items.map((user) => {
              return {
                login: user.login,
                avatar_url: user.avatar_url,
                html_url: user.html_url,
                id: user.id,
              };
            });
            setUsers(data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log("不好意思请求失败");
            setUsers(null);
            setError("不好意思网络问题");
            setIsLoading(false);
          });
    });
    return () => {
      PubSub.unsubscribe("SEARCHNAME");
    };
  }, []);
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
