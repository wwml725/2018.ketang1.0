import './style/comm.less'

import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import Tab from "./components/Tab/index";
import Home from "./containers/Home/index";
import Course from "./containers/Course/index";
import Profile from "./containers/Profile/index";
import Detail from "./containers/Detail/index";
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";


import PrivateRoute from "./PrivateRoute"
import createHashHistory from 'history/createHashHistory'//可以创建历史
let history = createHashHistory();//用来跳转路径
//ConnectedRouter实现了redux仓库和本组件的链接
import {ConnectedRouter} from 'react-router-redux'
/*
//库的使用：https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
//The prop `history` is marked as required in `Router`
//如果是HashRouter hash
//BrowserRouter html5 pushState
//Router本身需要外界传入history
* */

export default class App extends Component {

    render() {
        return (
            /*ConnectedRouter：这是 第三方库 react-router-redux中的语法
            * 在这里的目的是为了注册成功之后跳转到登录页面
            * */
            <ConnectedRouter history={history}>
                <div>
                    {/*所有的路由跳转都是从这个页面设置的*/}
                    {/*Tab组件中的路由*/}
                    <Route exact path="/" component={Home}/>
                    <PrivateRoute path="/course" component={Course}/>
                    <Route path="/profile" component={Profile}/>
                    {/*HomeLessons中的路由*/}
                    <Route path="/detail/:id" component={Detail}/>
                    {/*Profile中的登录路由*/}
                    <Route path="/login" component={Login}/>
                    {/*登录界面Login中的注册路由*/}
                    <Route path="/reg" component={Reg}/>
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}