import React, { Component } from 'react'
//import FragementDemo from './pages/01fragement'
import Father from '../src/pages/02context/Father'
import PersonContext from './pages/context/context'
export default class App extends Component {
  state={
    person:{
      name:'xiaoyan',
      age:18
    }
  }
  render() {
    return (
      <>
      <PersonContext.Provider value={this.state.person}>
      <Father />
      </PersonContext.Provider>
        
      </>
    )
  }
}
