//action creator
import * as types from '../action-types';
import {reg, login, logout, validate} from '../../api/session'  //调用接口
import {push} from 'react-router-redux'

import util from '../../util';

export default {
    reg(user) {
        return function (dispatch, getState) {
            //掉接口会返回一个Promise
            reg(user).then(result => {
                let {code, success, error} = result;
                dispatch({
                    type: types.REG,
                    payload: {success, error}
                });
                if (code == 0) {//code==0表示成功 调到登录页
                    dispatch(push('/login'))
                }
            })
        }
    },
    login(user) {
        return function (dispatch, getState) {
            login(user).then(result => {
                let {code, success, error, user} = result;
                if (user) {
                    util.set('User', user); //存入到sessionStorage中
                }

                dispatch({
                    type: types.LOGIN,
                    payload: {success, error, user}
                });
                if (code == 0) {
                    dispatch(push('/profile'))
                }
            })
        };
    },
    logout(user) {
        return function (dispatch, getState) {
            logout().then(result => {//logout():退出接口返回result数据
                let {code, success, error, user} = result;
                sessionStorage.removeItem("User");
                dispatch({
                    type: types.LOGOUT,
                    payload: {success, error, user}
                })
                dispatch(push('/profile'))
            })

        }
    },
    clearMessage() {
        return {
            type: types.CLEAR_MESSAGES
        }
    },
    validate() {
        return function (dispatch, getState) {
            //api接口返回的是一个Promise
            //执行这个函数，从后台获取用户数据
            validate().then(result => {
                let {user, code, success, error} = result;

                dispatch({
                    type: types.VALIDATE,
                    payload: {success, error, user}
                })
            })
        }
    }
}