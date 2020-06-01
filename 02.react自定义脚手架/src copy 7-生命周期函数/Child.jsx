import React,{Component} from 'react'
import ReactDOM from 'react-dom'
export default class Child extends Component{
state={
    opacity:1
}
componentDidMount(){
    this.timeId=setInterval(()=>{
        let {opacity} =this.state
        opacity -=0.01;
        if(opacity<=0) opacity=1
        this.setState({
            opacity,
        })
    },100/6)
}
componentWillUnmount(){
    //清除定时器
    clearInterval(this.timeId)
}
goDie=()=>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
render(){
    const {opacity}=this.state
    return(
        <div>
            <p style={{opacity}}>react要是学不会</p>
            <button onClick={this.goDie}>就去撞墙</button>
        </div>
    )
}
}