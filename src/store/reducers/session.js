import * as types from '../action-types';
//会话
let initState = {
    error: '',//存放错误消息
    success: '',//成功消息
    user: null,//如果登陆成功的话需要给此属性赋值为登录用户
};
export default function (state = initState, action) {
    switch (action.type) {
        case types.REG://注册方法调用完成后执行的action
            return {//不需要解构老的状态
                ...action.payload
            };
        case types.LOGIN://注册方法调用完成后执行的action
            return {
                ...action.payload
            };
        case types.CLEAR_MESSAGES:
            return {
                ...state,
                error: '',
                success: ''
            };
        case types.LOGOUT://退出
            return {
                ...action.payload
            };
        case types.VALIDATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

