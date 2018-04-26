//注意：
// 在index中封装了一个通过不同路径获取数据的一个方法，在这里引入那个方法，输入实参（也就是路径），并且执行函数，就获取了相对路径上的数据
import {get, post} from './index';
//获取轮播图
export function getSliders() {
  return get('/api/sliders');//这个对应的是server.js中的app.get('/api/sliders',function(req,res){res.json(sliders);});  这个路径从后台返回了一个数据sliders(这就是轮播图所需要的图片)
}
//获取课程列表
export function getLessons(type,offset,limit) {
  return get(`/api/lessons?type=${type}&offset=${offset}&limit=${limit}`);
}

