//注册登录和退出
import {get,post} from './index'  //从index中引入get和post方法
export function reg(user) {
    return post('/api/reg',user);//{username,password}
}
export function login(user) {
    return post('/api/login',user);//{username,password}
}
export function logout() {
    return get('/api/logout')
}
//获取这个接口的数据
export function validate() {
    return get('/api/validate')
}