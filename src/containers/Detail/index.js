import React, {Component} from 'react';
import NavHeader from "../../components/NavHeader/index";
import './index.less'
export default class Detail extends Component {
    render() {
        /*这里为什么不能直接用this.porps.state*/
        let lesson = this.props.location.state;
        if(!lesson){
            this.props.history.push('/');
        }
        return (
            <div className="lesson-detail">
                <NavHeader
                    title="课程详情"/>
                <video src={lesson.video} controls={true}/>
                <p>{lesson.title}</p>
                <p>{lesson.price}</p>
            </div>
        )
    }
}