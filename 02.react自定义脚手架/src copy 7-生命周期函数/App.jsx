import React,{Component} from 'react'
import ReactDOM from "react-dom";
import Child from "./Child"
export default class App extends Component{
  constructor(){
    super()
    console.log('constructor---1');
    
  }
  componentDidMount(){
    console.log('componentDidMount---2');
  }
  componentWillMount(){
    console.log('componentWillMount---3');
  }
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps---4');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate---5');
    
  }
  componentWillUpdate(){
    console.log('componentWillUpdate---6')
  }
  componentDidUpdate() {
    console.log(" componentDidUpdate---7");
  }
  componentWillUnmount(){
    console.log('componentWillUnmount---8');
    
  }
  render(){
    return(
      <div>
        <h3>生命周期函数</h3>
        <Child />
      </div>
    )
  }
}