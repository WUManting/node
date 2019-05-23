/*引入http核心模块，文件系统核心模块*/
const   http    =require('http'),
        fs      =require('fs'),
        path    =require('path'),
        router  =require('./router')//router指router.js;使用router模块
// request respose
http.createServer((req,resp)=>{
    // 过滤/favicon.ico文件
    if(req.url==='/favicon.ico'){
        resp.end();
        return;
    }
    fs.readFile(path.resolve('./static',router[req.url]),(err,data)=>{//router指router.js中const的router
        if(err) throw err;
        else resp.end(data);//前端请求列表页就返回list.html
    });
    
  
}).listen(8080)