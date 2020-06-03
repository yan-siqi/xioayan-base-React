import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import routes from "../../config/routes";
4;
@withRouter
class Header extends Component {
  renderChildren = () => {
    //console.log(this.props.location.pathname); //不能获取到路径,不是路由组件(1)
    //需要路由组件的属性:
    //解决办法:通过内部的widthRouter 保存路由组件的三大属性,会被包装(2)
    const { pathname } = this.props.location; //(5)
    //判断路由中谁匹配上了当前路径
    //遍历数组的方式:for(应用于库/框架,性能好=>用于遍历可中断的场景) /for Each(语义化更好=>便于遍历所有 的场景)
    for (let i = 0; i < routes.length; i++) {//(6)
      const route = routes[i];
      if (pathname.startsWith(route.path)) {//判断是不是应该以/timeline开头(8)
        //一级是否相等,若果相等,降属性中遍历生成二级导航(7)==>pathname===route.name
        return route.children || [];
      }
     // 继续遍历判断路径和二级菜单路径是否相同 
     // 一级菜单路径 /timeLine
     //当前路径pathname
     //生成的路径==>/timeline/二级菜单
     //通过startwith
    }
    return [];
  };
  render() {
    const routeChildren=this.renderChildren()
    return (
      <div>
        {/* 一级导航链接 */}
        <ul>
          {routes.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* 
          二级导航链接:
            思路： 
              1. 获取当前路径location.pathname
              2. 判断routes中哪个配置匹配上当前路径
              3. 取出route.children属性，将属性中配置遍历生成二级导航链接
            坑：如果当前路径是二级导航链接，该怎么判断routes中哪个配置匹配上当前路径？  
        */}
        <ul>
          {/* 遍历展示(7) */}
        {routeChildren.map((route) => {
            return (
              <li key={route.path}>
                <NavLink to={route.path}>{route.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
//export default withRouter(Header)//暴露的是新组件,内部渲染header==>使用装饰器
export default Header;
3;
