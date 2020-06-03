import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../config/routes";
export default class Content extends Component {
  renderRoutes = () => {
    const renderRoutes = [];

    routes.forEach((route) => {
      if (route.children) {
        route.children.forEach((childRoute) => {
          //需要添加子路由
          renderRoutes.push(
            <Route
              path={childRoute.path}
              key={childRoute.path}
              component={childRoute.component}
            />
          );
        });
      }
      renderRoutes.push(//设置一级路由
        <Route path={route.path} key={route.path} component={route.component} />
      );
    });
    return renderRoutes; //返回的是一个函数
  };
  render() {
    return <Switch>{this.renderRoutes()}</Switch>;
  }
}
