import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'
import NavHeader from '../../components/NavHeader'
import actions from '../../store/actions/session'
import Alert from "../../components/Alert/index";

class Reg extends Component {
    handleReg = () => {
        //获取用户名调用接口
        let username = this.username.value;
        let password = this.password.value;
        this.props.reg({username, password})
        console.log(this.props);
    };

    render() {
        return (
            <div className="reg-panel">
                <NavHeader title="注册"/>
                <div className="reg-logo">
                    <img src={require("../../images/profile.png")} alt=""/>
                </div>
                <input ref={input => this.username = input} placeholder="用户名" type="text"/>
                <input ref={input => this.password = input} placeholder="密码" type="text"/>
                <Link to="/login">前往登录</Link>
                <div
                    onClick={this.handleReg}
                    className="reg-btn">注&nbsp;册
                </div>
                <Alert/>

            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(Reg)