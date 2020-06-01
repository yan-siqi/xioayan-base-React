# day02

## todos 练习

- 注意状态数据在哪,更新状态数据的方法就定义在哪
- state->this.setState->const{xxx}=this.state ->组件中使用方法 ->子组件中声明接收数据并进行数据类型限制
- `{{ display: this.state.display }}`
  - 第一层:表示是jsx语法,代表里边写js代码
  - 第二层:代表的是一个对象数据
  
## 生命周期函数

- react中的函数this
  - 1. 生命周期函数的this指向组件的实例对象
  - 2.其他函数的this默认=>undefined, 都是使用箭头函数
- 流程:初始化  ==>更新 ==>卸载
  - 1.初始化:
    - constructor  
    - componentWillMount  
    - render  
    - componentDidMount
  - 2.更新(三种方式触发)
    - 1.父组件的使用this.setSate导致子组件重新渲染,子组件触发
      - componentWillReceiveProps
      - shouldComponentUpdate
      - componentWillUpdate
      - render
      - componentDidUpdate
    - 2.父组件this.setState,是父组件触发
      - shouldComponentUpdate
      - componentWillUpdate
      - render
      - componentDidUpdate
    - 3.父组件this.forceUpdate, 父组件触发
      - componentWillUpdate
      - render
      - componentDidUpdate
    - 3.卸载
      - componentWillUnmount
  - 重要的生命周期函数
    - componentDidMount=>适用于一次性任务
      - 发送请求
      - 设置定时器
      - 绑定事件
    - shouldComponentUpdate
      - 进行性能优化 看返回值 为true要更新,反之不跟新
    - componentWillUnmount
  - 新的生命周期函数
    - static getDerivedStateFromProps
    - getSnapshotBeforeUpdate
- 补充:react可以自动清除合成事件 但是 不会清除 定时器、ajax请求、原生DOM事件

## pubsub

- 下载: npm install pubsub-js --save
- import PubSub from 'pubsub-js' //引入
- PubSub.subscribe('delete', function(msg,data){ }); //订阅
- PubSub.publish('delete', data) //发布消息
  