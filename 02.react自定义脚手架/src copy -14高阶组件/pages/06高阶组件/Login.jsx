import React, { Component } from "react";
import withForm from "./withForm";

class Login extends Component {
  //一下是公共部分可以定义成高阶函数
  /* state={
        name:'',
        password:''
    }
  handleChange = (key) => {
   return(e)=>{
    this.setState({
        [key]: e.target.value.trim(),
      });
   }
  };
  handleSubmit = (e) => {
    e.preventDefault()//阻止浏览器的默认行为
  }; */
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <>
        <h3>登录界面</h3>
        <form onSubmit={handleSubmit}>
          用户名:
          <input type="text" onChange={handleChange("name")} />
          <br />
          密&nbsp;&nbsp;&nbsp;&nbsp;码:
          <input type="password" onChange={handleChange("password")} />
          <br />
          <button type="submit">登录</button>
        </form>
      </>
    );
  }
}
//可以调用高阶组件,返回新组件
const NewLogin = withForm(Login);
export default NewLogin;
