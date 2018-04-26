import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'

class Profile extends Component {
    componentDidMount(){
        this.props.validate()//验证用户是否登录
    }
   handleLogout = ()=>{
       this.props.logout();
   };
    render() {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={require('../../images/profile.png')} alt=""/>
                    <div>
                            {
                                this.props.user?<span>{this.props.user.username}</span>:<Link to="/login"> 登录</Link>
                            }
                        {this.props.user&&<div onClick={this.handleLogout}>退出</div>}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(Profile)