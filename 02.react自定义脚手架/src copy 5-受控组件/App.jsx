import React from "react";

class App extends React.Component {
state={
  userName:'',
  password:''
};
login=(e)=>{
  e.preventDefault();
  const {userName,password}=this.state;
  this.setState({
    userName:'',
    password:''
  })
};
/* hadleUsernameChange=(e)=>{
const userName=e.target.value.trim()
this.setState({
  userName
})
};
hadlePasswordChange=(e)=>{
  const password=e.target.value.trim()
  this.setState({
    password
  })
} */
//封装函数,实现函数的复用==>使用高阶函数
hadleChange=(key)=>{
  //返回一个新的函数(事件的回调函数)
  return (e)=>{
    this.setState({
      [key]:e.target.value.trim()
    })
  }
}
  render() {
const {userName,password}=this.state
    return(
     <form onSubmit={this.login}>
       用户名:<input type="text" onChange={this.hadleChange('userName')} value={userName} />
       密码:<input type='password' onChange={this.hadleChange('password')} value={password}/>
       <button type="submit">请登录</button>
     </form>
    )
  }
}

export default App;
