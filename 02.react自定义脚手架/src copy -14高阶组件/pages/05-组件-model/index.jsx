import React, { Component } from "react";
import PropsTypes from "prop-types";
import ReactDOM from 'react-dom'
import "./index.css";
export default class Model extends Component {
  static propsTypes = {
    title: PropsTypes.oneOfType([
        PropsTypes.string,
        PropsTypes.element//代表的是元素类型 
    ]).isRequired,
    content: PropsTypes.object.isRequired,
    visible: PropsTypes.bool.isRequired,
    onCancel: PropsTypes.func.isRequired,
    onOk: PropsTypes.func.isRequired,
  };
  static defaultValue = {
    //有点问题
    onCancel: () => {},
    onOk: () => {},
  };
  constructor(){
      //初始化dom容器
      super();
      this.div=document.createElement('div')
  }
  state = {
    //visible:true
  };
  componentDidMount(){
      document.body.appendChild(this.div)
  }
  componentWillMount(){
      //卸载组件
      this.div.remove()
  }
  render() {
    /*   const title = "标题啊";
    const content = (
      <div>
        <p>vvv</p>
        <p>vvv</p>
        <p>ff</p>
      </div> 
    ); */
    //通过props来接收外部的数据==>也必须哦通过外部的额值来决定显示隐藏
    const { title, content, visible, onCancel, onOk } = this.props;
    // const{visible}=this.state
    const Model=(
        <div className="model" style={{ display: visible ? "block" : "none" }}>
        <div className="model_wrap">
          <div className="header">
            <h3>标题</h3>
            <button onClick={onCancel}>x</button>
          </div>
          <div className="content">{content}</div>
          <div className="footer">
            <button onClick={onCancel}>取消</button>
            <button onClick={onOk}>确定</button>
          </div>
        </div>

        <div className="model_mask"></div>
      </div>
    )
    return ReactDOM.createPortal(Model ,this.div)
   
  }
}
// 总结:
/* 
ReactDOM.createPortal==>经常用户model组件
要渲染到那个容器中==>使用
==>将某个元素渲染到根节点root之外
具体:
在constructor中创建一个容器
最终将元素渲染到页面的div上
最后在componentDidMount(特点:页面渲染完成之后)中将div插入到页面中生效
==> document.body.appendChild(this.div)

***最终效果就是 创建的div级别和root根节点相同,甚至高

完事之后就是=>componentWillMount 在组件卸载的时候将div干掉 不然会出现 ,只要加上一个,就会在页面上渲染

*/

