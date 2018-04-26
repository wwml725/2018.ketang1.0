import React, {Component} from 'react';
import actions from '../../store/actions/home';
import {connect} from 'react-redux';


import HomeHeader from "./HomeHeader/index";
import HomeSlider from "./HomeSlider/index";
import HomeLessons from "./HomeLessons/index";

import {upLoadMore, downRefresh} from '../../utils';

import './index.less'


class Home extends Component {
    componentDidMount() {
        //将轮播图片引入的当前组件中
        this.props.fetchSliders();//也就是派发action，将新的状态放入reducer
        //2、获取课程列表
        this.props.fetchLessons();//派发action
        //3、上拉加载
        //upLoadMore(dom,callback)
        upLoadMore(this.content, this.props.fetchLessons);//获取数据
        downRefresh(this.content, this.props.refreshLessons);//刷新页面
    }

    render() {
        return (
            <div className="home" ref={home => this.home = home}>
                <HomeHeader type={this.props.type} changeType={this.props.changeType}/>
                <div ref={content => this.content = content} className="main-content">
                    <div className="main-logo"></div>
                    <HomeSlider sliders={this.props.sliders.list}/>
                    {/*从redux中引入课程组件所需要的属性*/}
                    <HomeLessons
                        hasMore={this.props.lessons.hasMore}
                        loading={this.props.lessons.loading}
                        fetchLessons={this.props.fetchLessons}
                        lessons={this.props.lessons.list}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.home,//把仓库中的状态对象映射为组件的属性对象
    actions
)(Home);