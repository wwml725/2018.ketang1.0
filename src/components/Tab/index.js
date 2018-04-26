import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import actions from '../../store/actions/session'
import './index.less'

export default class Tab extends Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="selected">
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/course" activeClassName="selected">
                    <i className="iconfont icon-react"></i>
                    <span>我的课程</span>
                </NavLink>
                <NavLink to="/profile" activeClassName="selected">
                    <i className="iconfont icon-xiaolian"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}
