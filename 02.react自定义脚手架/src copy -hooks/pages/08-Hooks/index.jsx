import React, { Component,useContext,useCallback} from "react";
import PubSub from "pubsub-js";
import ReactDOM from "react-dom";
import context from './context.js'
//工厂函数组件[数据,跟新数据的方法]
/* 
ES6类组件和工厂函数组件的区别:课下整理笔记啊****123
*/

/* 
1.让组件拥有更新状态的数据
2.拥有生命周期
*/
/* export default function Hooks() {
    const [count,setCount]=React.useState(0);
   const handelClick=()=>{
        setCount(count+1)//更新count数据,导致重新渲染组件
    }
    React.useEffect(()=>{
        //相当于didmount和updatemount 初始化调用 和更新调用    
        //可以模拟定时器
        setTimeout(() => {
            console.log('useEffect');
            
            setCount(10)//更新数据 ==>此时有bug 点击一次为11 之后迅速变成10
            //要求只有didmount,不在跟新时调用==>可以在useEffect中传第二个参数
            //useEffect会监视列表,如果参数值变化就会调用[传参数],如果不用就传一个[] 就会调用一次
        }, 1000);
        PubSub.subscribe('MSG',(msg,data)=>{})
        return()=>{
            console.log('返回值函数调用了');
            
        }
    },[])//初始化渲染的时候调用一次,别的时候不会调用
    const removeCom=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    return(
        <div>
            <p>点击次数:{count}</p>
            <button onClick={handelClick}>请点击</button>
            <button onClick={removeCom}>卸载组件</button>
        </div>
    )
} */

export default function Hooks() {
  const defaultValue = useContext(context);
  const [count, setCount] = useState(defaultValue);
  const[num,setNum]=useState(0)
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleCLick2 = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>点击次数:{count}</p>
      <button onClick={handelClick}>点击更新</button>
      <button onClick={handleCLick2}>第二次跟新请点击</button>
    </div>
  );
}
