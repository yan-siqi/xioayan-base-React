import React, { Component } from 'react'
//import FragementDemo from './pages/01fragement'
import Father from './pages/02context/Father'
import PersonContext from './pages/02context/context'
//import Index from './pages/03性能优化/index'
import ForWardRef from './pages/04forward/index'
export default class App extends Component {
  state={
    person:{
      name:'xiaoyan',
      age:18
    }
  }
  ForWardRef=React.createRef()
  componentDidMount(){
    
  }
  render() {
    return (
      <>
      <ForWardRef person={this.state.person} ref={this.ForWardRef}>
        <h3>你好的</h3>
       </ForWardRef> 
      </>
    )
  }
}
