# day03

## 前天复习

- state定义在哪个组件?
  - props:是状态提升=>如果是单个组件的话就定义在组件内部,如果是多个组件公用一个,就定义在公共的父组件中
  - pubSub:状态定义在要显示数据的组件中
- 跟新数据的注意事项?
  - vue更新:可以在原数据上尽心修改(可以监视数据的变化)  因此==>可以使用push/splice..方法
  - react更新:如果想要数据更新必须使用this.setState()更新用户界面
    - 此时要注意,更新的数据是一份全新的数据 ==>故不可以出现在原来数据上进行修改的方法
- 生命周期函数(面试)
  - 初始化
    - constructor
    - componentWillMount
    - render
    - componentDidMount *****重要:用来发送请求、设置定时器、绑定原生DOM事件等一次性任务
  - 更新
    - componentWillReceiveProps ==>父组件更新,子组件内部触发==>(5)
    - shouldComponentUpdate ==>组件内部调用this.setState()==>(4) ***重要:做性能优化
    - componentWillUpdate ==>组件内部调用thisforceUpdate()==>(3)
    - render
    - componentDidUpdate
  - 卸载
    - componentWillUnmount ==>给componentDidMount做收尾工作,防止内存泄漏 ***重要
- 消息订阅/发布机制
  - 用于兄弟/祖孙之间通信
  - 订阅:接收消息的一方:`PubSub.subscribe('msg', (msg, data) => {})`
  - 发布:发送数据的一方:`PubSub.publish('msg', data)`
  - 取消订阅:`PubSub.unsubscribe('msg')`

## fragment(文档碎片)

- 是用来充当根标签,但是不会生成dom元素
- 可以使用一组空标签==><></>
- 需要引入:`import React, { Component, Fragment } from "react";`

## context

- 适用于祖孙组件之间通信
- 使用方式:
  - 1.创建context.js文件(便于任意组件都可以使用)
    - `React.createContext(defaultValue)`
    - 其中默认值在没有定义provider组件,才可以生效
  - 2.上层组件使用provider来向后代组件提供的数据
    - `<Provider value={数据}> 子组件 </Provider>`
  - 3.后代组件接收上层组件提供的数据
    - 适用于接收到数据直接渲染
      - `<xxx.Consumer>{(数据) => { 使用 return 要渲染的虚拟DOM对象 }}</xxx.Consumer>`
    - 适用于接收到数据之后还进行其他操作
      - `static contextType = context;`
      - `this.context 去使用`

## 性能优化

- 只有数据跟新之后==>数据重新渲染
- 数据是啥数据?
  - ==>state和props
- 如何判断数据更新了?
  - 判断之前的数据和当前的数据是不是相等
  - 但是如果是对象的话?
    - 是会比较地址值的
- 为什么要求更新的额数据是同一份数据?
  - 如果使用push/splice方法更新数据,(是在原来数据上进行操作),此时数据会是同一份数据,只要更新的数据是新数据,地址值就不同,就可判断
  - shouldComponentUpdate(nextProps, nextState)
    - 组件要不要更新（此时还没有更新，所以this.state/this.props还是上一次的值 而nextProps, nextState 就是组件接受最新的值
  - 需要判断的值包括:this.state 是否=== nextState  this.props 是否=== nextProps
  - 代码如下:`!this.state.hasOwnProperty(nextStateKey) || nextState[nextStateKey] !== this.state[nextStateKey]`

## forwardRef

- ref是将工厂函数内部的元素提供给父元素

## model

- ReactDOM.createPortal(要渲染的元素,渲染到哪个容器里边) 将组件渲染到根节点之外  ==>最终级别和根节点相同
- 操作步骤:
  - 1.constructor创建dom元素:`this.div = document.createElement('div')`
  - 2.将要渲染的元素添加到div上`render ReactDOM.createPortal(要渲染的元素, this.div)`
  - 3.将div放到body内生效:`componentDidMount document.body.appendChild(this.div)`
  - 4.卸载组件:`componentWillUnmount --> this.div.remove()`==>在创建多个组件时要卸载

## 高阶组件

- 注意是一个函数:此函数接收一个组件作为参数,并返回一个新的组件
- 作用:实现代码的复用(当两个组件有重复的逻辑时)
- 如果两个函数有类似功能时可以使用高阶函数来进行封装
- 使用:
  - 向外暴露一个函数widthForm(接收一个新的组件)
  - 新的组件中放置公共代码,提取到新的组件内部,实现复用
  - 通过props的方式,将代码进行传递
  - 在使用高阶组件的组件中 调用高阶组件 并返回新的组件 :`const NewLogin = withForm(Login);`
  - 将新的组件暴露出去,新组建内部渲染login组件 :`export default NewLogin;`
