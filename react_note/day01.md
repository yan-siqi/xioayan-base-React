# day01

## 介绍

- react是facebook公司开发,主要用构建用户界面
- react和vue的不同:前者是使用jsx渲染界面,后者是使用templete
  
## 使用

- 首先要引react.development.js ==>react的核心库
- 接下来是react-dom.developement.js ==>操作dom的扩展库
- 最后是babel.min.js ==>解析jsx语法,并转化为js
- 注意:只要使用babel都加上type="text/babel", 声明需要babel来处理
  
## 构建react

- 1.创建虚拟dom对象  ==>`const vDom = <h1>hello react</h1>;`
- 2.将虚拟dom对象渲染到页面指定的容器中 ==>`ReactDOM.render(vDom, document.getElementById("root"));`
  
## JSX(JavaScript XML)

- 1.是什么?
  - 类似于XML的js扩展语法
- 2.作用?
  - 用来产生虚拟dom对象
- 3.注意点?
  - 不是字符串也不是标签,最后生成的是js对象
  - 标签名及标签属性名任意
- 4. 语法规则?
  - 1.以<开头,如果页面是html元素,最终解析成html,特殊标签特殊解析
  - 2.在jsx语法内要是用{} 以{ 开头,以js代码进行解析{是js表达式}

## babel.js

- 本身浏览器不能解析jsx代码,要通过babel转化成js进行解析

## 创建虚拟dom的方式

- 1.js:`const vDom1 = React.createElement();`
- 2.jsx:`const vDom2 = <h1>{xxx}</h1>`

## 自定义组件

- 1.工厂函数
  - `function Component1(){返回要渲染的虚拟dom对象==>return返回}`
- 2.ES6类组件
  - `class Component2 extends React.Component{返回要渲染的虚拟dom对象==>通过render方法返回}`
  - 3.两者的区别:
    - this不同 ==>工厂函数没this 类组件有this
    - 功能不同==>工厂函数没this有些功能默认不能实现,类组件有this,实现的功能较多
  - 4.总结:工厂函数定义简单的组件,类组件定义功能复杂的组件
  - 5.注意事项:
    - (1)组件名首字母大写
      - 原因:如果小写会当做组件解析,大写才会当成组件解析
    - (2)内部返回的虚拟dom对象元素必须是有结束符
    - (3)内部返回多个dom元素对象有且只有一个根标签

## 使用组件

- 以组件标签的方式使用

## 组件的三大属性

### state ==>更新用户界面

- 使用?
  - 1.初始化状态:`constructor(){super(); this.sate={xxx}}` 可以简写 ==>`state={xxx}` ,<==注意要在webpack中添加插件: "@babel/plugin-proposal-class-properties"
  - 2.读取状态:`this.state.xxx`
  - 3.更新状态:`this.setState({xxx})`
- 在react类组件中this指向
  - 1.生命周期函数,this指向的是组件实例对象 ==>constructor/render
  - 2.自定义函数,this指向的是undefined(在严格模式下) ,要使用箭头函数,让this指向组件的实例对象

### props ==>更新用户界面 ==>通过标签属性从组件外向组件内传递变化的数据

- 理解:每个组件内都会有props属性,每个组件标签内的属性都会保存在props中
- 使用?
  - 1.内部读取props :`this.props.xxx`
  - 2.对props中的属性值进行类型限制(number/string...)和必要性限制(是否是isRequired)  例如:`name: PropTypes.string.isRequired`
  - 3.扩展属性:通过props传递所有对象的属性`<Person {...person}/>`
  - 4.设置默认属性值:`static defaultProps={}`
  - 5.组件类的构造函数:`constructor (props){super()}`
- class==>定义类
- extends==>继承
- constructor ==>类的构造方法
- super()==>调用父类的构造方法
- static==>定义类的静态方法
  - 是类的直接方法,只有类可以使用,实例对象不能使用
  - 而普通方法是:实例对象可以使用,类不能使用

### ref ==>通过ref获取组件内容特定标签对象, 进行读取其相关数据(不重点)

- 组件内的标签可以定义ref属性来标识自己
- 代码实现:`<input type="text" ref={this.createRef}/>`
- `在组件中可以通过this.createRef.current / this.funcRef / this.stringRef来得到对应的真实DOM元素`

## 补充:对多个功能类似的函数进行封装一个函数来实现复用

- 函数的柯里化
- 实例:`function fn(a, b) { return a + b} 普通函数`--> 经过函数柯里化处理的函数
        function fn(a) {
           return function (b) {
              return a + b;
            } }
- 实例2:
`handleChange = (key) => {
    // 返回一个新函数（事件回调函数）
    return (e) => {
      this.setState({
        [key]: e.target.value.trim(),
      });
    };
  }`
  