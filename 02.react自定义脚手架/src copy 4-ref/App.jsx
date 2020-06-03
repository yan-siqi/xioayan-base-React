import React from "react";

class App extends React.Component {
  inputRef=React.createRef()
handleClick=()=>{
const value=this.inputRef.current.value.trim()
alert(value)
}
handleBlur=(e)=>{
  alert(e.target.value.trim())
}
  render() {

    return(
      <div>
        <input type="text" placeholder="请输入内容" ref={this.inputRef}/>
        <button onClick={this.handleClick}>点击提示数</button>
        <input type="text" placeholder="失去焦点" onBlur={this.handleBlur}/>
      </div>
    )
  }
}

export default App;
