//向服务器发送get请求，获取响应
//credentials 在向服务器发请求的时候要带上cookie
const HOST = 'http://localhost:3000';
//获取url这个路径的数据，这是一个或去相应路径数据的函数，将这个函数导入home，在函数中执行这个函数，获取那个路径的数据
export function get(url){
  return fetch(HOST+url,{
    method:'GET',
    credentials:"include",//向服务器发送cookie
    headers:{
      // "Content-Type":"application/json",
      "Accept":"application/json",//请求头
    }
  }).then(res=>res.json())//把响应体转成json
}
//url后台地址 data 请求体
export function post(url,data) {
  return fetch(HOST+url,{
    method:'POST',//请求方法
    credentials:"include",
    headers:{//请求头
        "Content-Type":"application/json",
        "Accept":"application/json"//告诉服务器我客户端需要的数据类型
    },
    body:JSON.stringify(data)//请求体
  }).then(res=>res.json())
}