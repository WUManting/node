//引入express模块
const express = require('express')
//创建express实例
const app = express()
//处理来自根目录的get请求
app.get('/', (req, res) => res.send('Hello World!'))
//监听3000端口
app.listen(3000, () => console.log('Example app listening on port 3000!'))