import React, { Component } from "react";
import withForm from './withForm'
@withForm('注册组件')
class Register extends Component {
   /*  state={
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
      const {handleChange,handleSubmit}=this.props
    return (
      <>
        
        <form onSubmit={handleSubmit}>
          用&nbsp;户&nbsp;&nbsp;名:
          <input type="text" onChange={handleChange('name')}/>
          <br />
          输入密码:
          <input type="password" onChange={handleChange('password')}/>
          <br />
          确认密码:
          <input type="password" onChange={handleChange('repassword')}/>
          <br />
          <button type="submit">确认注册</button>
        </form>
      </>
    );
  }
}
export default Register;
