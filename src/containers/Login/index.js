import React, {Component} from 'react'
import {Link} from 'react-router-dom'//路由链接
import './index.less'
import NavHeader from '../../components/NavHeader'
import {connect} from 'react-redux';//连接组件和redux
import actions from '../../store/actions/session'
import Alert from "../../components/Alert/index";

class Login extends Component {
    handleClick = ()=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.login({username,password})
    }
    render() {
        return (
            <div className="login-panel">
                <NavHeader title="登录"/>
                <div className="login-logo">
                    <img src={require("../../images/profile.png")} alt=""/>
                </div>
                <input ref={input=>this.username=input} placeholder="用户名" type="text"/>
                {/*placeholder 属性提供可描述输入字段预期值的提示信息（hint）。*/}
                <input ref={input=>this.password=input} placeholder="密码" type="text"/>
                <Link to="/reg">前往注册</Link>
                <div className="login-btn" onClick={this.handleClick} >登&nbsp;录</div>
                <Alert/>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(Login)