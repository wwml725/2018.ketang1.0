import * as types from '../action-types';
//首页的初始状态
let initState = {
  type:'',//课程的分类 默认为空串
  sliders: {
    loading: false,
    list: []
  },
  lessons: {
    loading: false,//是否加载中：true代表正在加载
    list: [],//这个课程列表课程列表
    offset: 0,//偏移量你从第几条开始取
    limit: 5,//最多取5条
    hasMore: true//是否有更多：当它为true时候，才可以继续加载
  }
};
export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_SLIDERS:
      return {
        ...state,
        sliders: {
          loading: true,//轮播图加载状态改为加载中
          list: []//轮播图数据重置为空数组
        }
      }
    // action对象一般会有两个属性{type,payload}
    case types.FETCH_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders: {
          loading: false,//轮播图加载状态改为加载完毕
          list: action.payload//轮播图数据等于取回来的数组
        }
      }

    case types.FETCH_LESSONS:
      return {
        ...state,
        lessons: {
          ...state.lessons,
          loading: true
        }
      }
    case types.FETCH_LESSONS_SUCCESS:
      //{type:payload:{list,hasMore}}
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading: false,
          list:[...state.lessons.list,...action.payload.list],//老课程列表+返回的课程列表=新课程列表
          offset:state.lessons.offset+action.payload.list.length,//老的偏移量+返回的条数=新的偏移量
          hasMore:action.payload.hasMore//是否有更多
        }
      }

    case types.REFRESH_LESSONS:
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading:true,
          list:[]
        }
      }
    case types.REFRESH_LESSONS_SUCCESS:
      return {
        ...state,
        lessons:{
          ...state.lessons,
          loading:false,
          list:[...action.payload.list],
          offset:action.payload.list.length,
          hasMore:action.payload.hasMore
        }
      }

    case types.CHANGE_TYPE:
      return {
        ...state,
        type:action.payload
      }
    default:
      return state;
  }
}