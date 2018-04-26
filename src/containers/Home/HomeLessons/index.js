import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './index.less'

import Loading from "../../../components/Loading/index";
export default class HomeLessons extends Component {
  render() {
    return (
      <div className="home-lessons">
        <div className="lessons-title">
          <i className="iconfont icon-book"></i>
          <span>全部课程</span>
        </div>
        {
          this.props.lessons.map((item, index) => (
              <Link  key={item.id} to={{pathname:`/detail/${item.id}`,state:item}}>
                  <div className="lesson">
                      <img src={item.url}/>
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                  </div>
              </Link>
          ))
        }
        {
            /*正在加载显示Loading组件，加载完毕后就显示后面的内容，如果还有更多显示加载按钮，没有就显示别扯了*/
          this.props.loading?<Loading/>:(this.props.hasMore?<div onClick={this.props.fetchLessons} className="load-more">加载更多</div>:<div className="load-more">别扯了，到底了</div>)

        }
      </div>
    )
  }
}