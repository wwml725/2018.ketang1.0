import React, {Component} from 'react';
import './index.less';

import Loading from "../../../components/Loading/index";

import ReactSwipe from 'react-swipe';

export default class HomeSlider extends Component {
  //设置当前组件的初始状态，设置index值是为了控制焦点图
  constructor(){
    super();
    this.state = {index:0};
  }
  render() {
    let swipeOptions = {
      auto: 3000,//加载完成后等待多少毫秒开始轮播
      continuous: true,//是否启动无缝轮播
      callback: (index) => {
        this.setState({index});
      },//当动画完成后执行回调函数
    };
    let swipe = (<ReactSwipe swipeOptions={swipeOptions}>
        {
          this.props.sliders.map((item,index)=>(
            <div key={index}>
              <img src={item}/>
            </div>
          ))
        }
      </ReactSwipe>);
    return (
      <div className="home-sliders" >
        {
          this.props.sliders.length>0?swipe:<Loading/>
        }
        <div className="dots">
          {
            this.props.sliders.map((item,index)=>(
              <span key={index} className={"dot "+(this.state.index == index?"active":"")}></span>
            ))
          }
        </div>
      </div>
    )
  }
}