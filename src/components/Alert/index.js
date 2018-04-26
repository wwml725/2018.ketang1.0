import React, {Component} from 'react'
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/session'


class Alert extends Component {
    static defaultProps = {
        level: 'default'
    };
    //组件销毁之前把redux中的消息清除掉
    componentDidMount(){
        /*该仓库的唯一方法就是派发action*/
        setTimeout(()=>{
            this.props.clearMessage()
        },3000)
    }

    render() {
       if(this.props.success){
           return <div className="alert success">{this.props.success}</div>
       }else if(this.props.error){
           return <div className="alert error">{this.props.error}</div>
       }else{
           return null
       }
    }
}

export default connect(
    state => state.session,
    actions
)(Alert)