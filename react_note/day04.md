# day 04(课下笔记重新总结***)

## HOC

- 使用ES7高级语法
  - 装饰类语法(不经常使用)
  - `@withForm('登录组件') class Login extends Component {} export default Login;`
  - 等价于`class Login extends Component {}  Login = withForm('登录组件')(Login) export default Login`
  - 在使用时需要修改vscode的配置 experimentalDecorators
  - 由于是实验性功能,babel不能识别==>
    - `plugins: [ // 插件
        ["@babel/plugin-proposal-decorators", { legacy: true }], // 解决装饰器语法
        ["@babel/plugin-proposal-class-properties", { loose: true }], // 解决state={xxx}
      ],`

## renderProps

- 实现代码的复用
- 本质:是一个组件
- 执行过程:将B组件渲染到A组件的内部,同时A组件要传递必要的props( 注意一般是传递数据)

## hooks

- 实现代码的复用
- 本质:是一个函数
- 通过产生新组件的方式来进行代码的复用(注意一般针对的是方法)
- 本身彻底消除this
- 使用:
  - useState用来定义和更新state
  - useEffect==>副作用函数（发请求获取数据、订阅事件、修改 DOM 等）- 相当于生命周期函数的用法： componentDidMount \ componentDidUpdate \ shouldComponentUpdate
  - useContext==>相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>用来获取上层组件传递过来的 context
  - useMemo =>返回缓存函数结果
  - useCallback=>缓存函数
  - useRef==>ref 用法，在纯函数组件获取 DOM 元素=>前后更新获取的 ref 是同一个，而不像 createRef 发生变化
  - useImperativeHandle=>让你在使用 ref 时，自定义暴露给父组件的实例值，不能让父组件想干嘛就干嘛正常 ref 只能获取到一个 DOM 元素，使用这个可以获取 N 个 DOM 元素和一些方法
  - useLayoutEffect=>在 layout（布局/重排）之后，在 paint（重绘）之前触发
  - useDebugValue=>在 react-devtool-extension 中显示信息

## react-router

- 面试:
  - 原理
  - 区别 
- hash模式
  - 优点:兼容性好
  - 缺点: # 刷新页面时只会把#前面地址发请求
- history模式
  - 优点:地址不含#
  - 缺点:兼容性比较差
  - 刷新页面时,所有地址都会发送请求
    - 会出现问题:404()
    - 解决:webpack配置devServer historyApiFallback: true
    - bootstrap的样式也要修改
  - Link组件和NavLink组件
    - 前者:添加浏览器历史记录
    - 后者: 添加浏览器历史记录 也可选中时多一个类名 active
    有特殊样式用NavLink,否则直接用Link组件
    -switch
    - (能保证Route只有一个生效，只有一个会加载默认情况下，从上到下依次匹配)
    - route
      - (负责根据浏览器历史记录的变化，一旦匹配上，就会加载当前组件=>如果之前加载过，没有匹配上，就会卸载/反之就不加载)
      - redirect
        - (会匹配所有地址，一旦匹配上就会自动更新浏览器历史记录)
    - 路由组件的三大属性:
      -location=> pathname 当前路由地址 state undefined
      - history =>push/replace/goBack/goForward/listen 等方法=>用来操作浏览历史记录~
      - match=>params 参数
    - 路由跳转的两种方式:
      - 使用编程式导航: history.push/replace(path)
        - `// 编程式导航
          push = () => {
            this.props.history.push("/home/message/5", { name: "jack" });
          };
          replace = () => {
            this.props.history.replace("/home/message/3");
          };
          goForward = () => {
            this.props.history.goForward();
          };
          goBack = () => {
            this.props.history.goBack();
          };`
    - 什么时候用第一种？什么时候用第二种？
      - 如果仅仅只需要跳转地址，不需要做其他事：用第一种
      - 如果你需要发送请求（如：登录按钮，点击需要将收集的数据发送到后台，验证成功才能跳转）
      - 收集数据等其他事，做完才能跳转：用第二种

    路由传参:
    - /home/message/5 --> params参数  this.props.match.params
      1. this.props.history.push("xxx", data); --> state参数 (注意： hash history没有这个功能,browser history才有)
