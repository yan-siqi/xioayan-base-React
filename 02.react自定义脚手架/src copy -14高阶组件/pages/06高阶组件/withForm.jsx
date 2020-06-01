/* 自定义高阶组件 */
import React, { Component } from 'react'

export default function withForm (WrappedComponent) {
 return class extends Component{
     static displayName=`Form(${WrappedComponent.displayName|| WrappedComponent.name||'Component'})`
    handleChange=(key)=>{
        return (e)=>{
            this.setState({
                [key]:e.target.value.trim()
            })
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault()

    }
    render(){
        return(
            <WrappedComponent handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        )
    }
    }
}
