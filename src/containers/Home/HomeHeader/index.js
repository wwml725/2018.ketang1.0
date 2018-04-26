import React, {Component} from 'react';
import './index.less';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export default class HomeHeader extends Component {
    constructor() {
        super();
        this.state = {showList: false};
    }

    switchShow = () => {
        this.setState({showList: !this.state.showList});
    }

    changeType = (event) => {
        let type = event.target.dataset.type;
        this.props.changeType(type);
        this.switchShow();
    };
    getMenuList = () => (
        <CSSTransition classNames="fade" timeout={500}>
            <ul className="menu-list" onClick={this.changeType}>
                {/*this.props.type：是指redux中的type*/}
                <li className={this.props.type == "" ? 'active' : ''} data-type="">全部课程</li>
                <li className={this.props.type == "react" ? 'active' : ''} data-type="react">React课程</li>
                <li className={this.props.type == "vue" ? 'active' : ''} data-type="vue">Vue课程</li>
            </ul>
        </CSSTransition>
    )

    render() {
        return (
            <div className="home-header">
                <div className="home-logo">
                    {/*<img src={require('../../../images/login_bg.png')}/>*/}
                    <h2 style={{color:"white",marginLeft:"10px"}}>课程管理</h2>
                    <div onClick={this.switchShow}>
                        {
                            this.state.showList ? <i className="iconfont icon-guanbi"></i> :
                                <i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                <TransitionGroup>
                    {
                        this.state.showList && this.getMenuList()
                    }
                </TransitionGroup>
            </div>
        )
    }
}