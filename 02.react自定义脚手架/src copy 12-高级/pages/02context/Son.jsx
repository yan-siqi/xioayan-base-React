import React, { Component } from "react";
import PersonContext from "./context";

export default class Son extends Component {
    static contextType=PersonContext
    handleChange=()=>{
        console.log(this.context);
        
    }
  render() {
    return (
      <>
        <h2 onChange={this.handleChange}>儿子</h2>
        <PersonContext.Consumer>
          {(person) => {
            //传递函数,内部调用,将接受到的数据掺入到函数中
            const { name, age } = person;
            return (
              <ul>
                <li>姓名:{name}</li>
                <li>年龄:{age}</li>
              </ul>
            );
          }}
        </PersonContext.Consumer>
      </>
    );
  }
}
