# Api目录

> api通常用于vuex的action中调用
> 所有api返回一个Promise

各自负责的模块单独在一个文件中写api，在index.js中引入，并统一从index.js导出（参照user.js）