import React ,{Component} from 'React'
import Pubsub from 'pubsub-js';
import Child from './Child'
import { render } from 'react-dom';
export default class App extends Component{
 handleClick=()=>{
   console.log('爹发送了数据');
   PubSub.publish('RECEIVE_DATA','乖给你买猪饲料')
 };
  render(){
    return(
      <div>
        App... 
        <button onClick={this.handleClick}>点我给儿子发消息</button>
        <Child />
      </div>
    )
  }
}