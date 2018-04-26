# 初始化项目
```
npm init -y
```
# 安装依赖的模块
## 后端的模块
```
npm install body-parser connect-mongo ejs express express-session mongoose -S
```
## 生产依赖
```
npm install es6-promise history react react-dom react-redux react-router-dom react-router-redux react-swipe react-transition-group redux redux-thunk swipe-js-iso whatwg-fetch -S
```
## 开发依赖
```
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 css-loader file-loader html-webpack-plugin less less-loader style-loader webpack webpack-dev-server html-webpack-plugin -D
```

## 一个完整的redux流程
1. 写一个后台接口 /api/lessons
2. 在前台的api里增加获取此接口数据的方法
3. 定义新的动作类型action-type
4. 在reducer里添加两个case以处理这两种动作类型
5. 在actions里添加一个新的方法
6. 在组件里调用action的方法
7. 在组件用最新的属性进行渲染

## 如何使用react-router-redux
目的只有一个，就是在actions里跳转路径
1、创建history
2、使用connectedRouter
3、合并reducer的时候增加一个子reducer
4、应用中间件



### 注意点
1、如果已经登陆了，就会把登录的用户保存在session中，

2、验证是否登录，就是看session中是否保存了用户。

