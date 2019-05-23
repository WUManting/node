# Node.js

官网：<http://nodejs.cn/api/>

## 1 核心模块

### 1.1 引入核心模块

```javascript
//引入需要依赖的核心模块
const http = require("http"),    // 搭建服务器
      fs = require("fs"),       // 读取文件
      path = require("path"),  // 路径处理
      router = require("./router");  // 配置路由模块，（引入自己书写的文件，引入时，添加./;利于读取）
```

#### 1.1.1 http

搭建一个服务器

```javascript
// request 请求数据  response 响应数据
http.createServer((req,resp) =>{
    
	// 书写请求数据，响应数据的代码
    
}).listen(8080)
```

#### 1.1.2 File System

```javascript
// 读取文件 fs
fs.readFile(path.resolve('./static_1/', router[req.url]), (err,data)=>{
        if(err) throw err;
        else resp.end(data);  // 发送前端
    })
```

#### 1.1.3 path

```javascript
// path.resolve 拼接路径
fs.readFile(path.resolve('./static_1/', router[req.url]), (err,data)=>{
        if(err) throw err;
        else resp.end(data);  // 发送前端
    })
```

#### 1.1.4 Query String

处理请求参数

### 1.2 router

```javascript
// 路由
// 配置模块
const router = {
    "/" : "index.html",
    "/list" : "list.html",
    "/detail" : "detail.html",
    "/index" : "../index1.html"
}
// node.js模块规范是 commonJS
// 导出（暴露）模块
module.exports = router;
```



## 2 Express 开发框架

### 2.1 Express安装命令

Express 基于Node.js 平台的web开发框架

$ npm install express -g                         全局安装

$ express -v  /  express --version          检查版本号

$ npm list express                                   检查版本号

$ mkdir myapp				           创建myApp目录

$ cd myApp					           进入myAPP目录

$ npm init -y                                             初始化

$ npm install express --save                  局部安装



### 2.2 Express-generator 应用程序生成器

$ npm install  express-generator -g     全局安装

$ express -h						   help 参数

$ express --view=ejs exapp                   运用应用生成器生成一个文件夹exapp

> 根据生成后的代码提示进行

​	$  cd exapp				          进入exapp

​	$ npm install				          安装所有要依赖的包/文件

​	$ npm start					  运行

​	$ port=8090 npm start                  修改端口号为8090 ，并重新运行（默认端口号为3000）

### 2.3 注意事项

- 如图所示，"scripts"  即表示  "npm  script"。

  可以在"scripts" 里配置命令。

  之所以输入 npm start，能够执行运行<http://localhost:3000/>这个网页；是因为在 "scripts"里配置了

  "start": "node ./bin/www"  这个命令。所以输入 npm start  能直接运行这个网页。

![1558432132587](C:\Users\qianfeng\AppData\Roaming\Typora\typora-user-images\1558432132587.png)



- 如图所示

  public  用于放静态资源（写静态页面）

  routes  用于放路由文件

  views    用于放视图文件

  app.js   用于引入模块，配置。

  ![1558439037530](C:\Users\qianfeng\AppData\Roaming\Typora\typora-user-images\1558439037530.png)





### 2.4 nodemon  自动重启node

 npm install nodemon -g        全局安装

执行 nodemon   接文件名        即可自动运行，每次修改保存代码后，自动重启node刷新

在生成的**package.json**文件中，可以在**"scripts"** 里配置命令（如 st : nodemon ./bin/www)。

使用npm  `run ` st命令自动运行  （注：st  这个命令是自定义，可以修改）。



### 2.5 ejs  参考官网文档

https://ejs.bootcss.com



## 3 mongoDB  数据库

### 3.1 mongoDB定义

#### 3.1.1 官网

<https://www.mongodb.com/>

#### 3.1.2 官方定义

- MongoDB 将数据存储在灵活的，类似**JSON**的文档中，这意味着字段可能因文档而异，并且数据结构可以随时间变化
- 文档模型映射到**应用程序代码中的对象**，使数据易于使用
- **即席查询**，索引和实时聚合提供了访问和分析数据的强大方法
- MongoDB是一个**分布式数据库**，因此内置了高可用性，水平扩展和地理分布，并且易于使用

#### 3.1.3 数据库类型

MongoDB 是**非关系型数据库**，依赖性低（相较于MySQL，MySQL属于关系型数据库）

### 3.2 与mysql数据库的区别

mongoDB 与mysql数据库的区别：

| mysql             | mongoDB            |
| ----------------- | ------------------ |
| database          | database           |
| table（表格形式） | collection（集合） |
| col(列)           | field（域）        |
| row（行）         | document（文档）   |

### 3.3 mongoDB安装程序

#### 3.3.1 安装包

作为windows系统，对于高版本的安装包在安装过程中可能会发生未知错误，因此建议安装低版本的安装包，如 `3.1.2`版本安装包

**备注：**安装时记录下安装的目录位置（后面需要配置路径）

#### 3.3.2 配置路径

为解决访问路径问题，需将安装好的mongoDB文件中的`bin`文件的**绝对路径**配置到本地电脑的环境变量中，具体操作如下：

1.打开安装好的MongoDB文件目录中的`bin`文件，然后在`ur`l地址栏中复制该绝对地址；

2.右键此电脑→属性→高级系统设置→环境变量→双击`path`→在最后一个地址后加上`;`,然后粘贴地址

#### 3.3.3 安装可视化工具

为了使MongoDB使用起来更简单和方便，可以安装它的可视化工具（数据库实例化）；

工具安装包有两种：**Robo 3T**（以前称为Robomongo）工具 、**Navicat for mongoDB** 工具，这里推荐使用后面的Navicat for mongoDB 工具。

> 说明    Robo 3T工具下载地址：<https://robomongo.org/>

#### 3.3.4 创建数据库文件夹

在本地磁盘中创建一个`db`文件夹，用作存储数据库产生的数据，**建议**此文件夹直接创建在本地磁盘的根目录下，不要隐藏的太深

#### 3.3.5 关联数据库

打开MongoDB文件夹中的`bin`文件，在里面打开命令窗口输入执行命令，对创建的数据库文件夹进行关联。

**使用命令工具的两种方法：**

* 点击右键，再单击**git bash**进行打开
* 按下shift键，点击鼠标右键，再单击**在此处打开命令窗口**

**执行命令**：  mongod --dbpath 磁盘:/文件名

示例：

```git
$ mongod --dbpath d:/db
```

#### 3.3.6 注意事项

1.在安装MongoDB安装包时要记录好安装目录的位置；

2.创建数据库文件夹是尽量简单易懂，并且最好放置在磁盘的根目录下；

3.执行关联数据库命令以后，会出现MongoDB的端口号：27017（需记忆）

### 3.4 mongoose对象模型工具

#### 3.4.1 mongoose定义

Mongoose是在node.js环境下对mongodb进行便捷操作的对象模型工具。

它提供了一种直接的，基于模式的解决方案来为应用程序数据建模。它包括内置的类型转换，验证，查询构建，业务逻辑钩子等，开箱即用。

#### 3.4.2 mongoose安装

在目标文件夹中安装nodejs和mongodb之后 ，使用npm来安装mongoose

```git
$ npm install mongoose --save
```

安装成功后，会在目标文件中生成两个文件，如下图：![node](C:\Users\qianfeng\Desktop\课程\三阶段-课程\Nodejs整理\node.png)



#### 3.4.3 使用方法

##### 3.4.3.1 定义初始模块

**1.创建工作区**

在目标文件夹中创建一个子文件夹**db**，然后在db中创建需要的文件，如 `index.js`

具体如下图：![db](C:\Users\qianfeng\Desktop\课程\三阶段-课程\Nodejs整理\db.png)

**2.引入mongoose模块**

在安装mongoose成功后，就可以通过 `require('mongoose')` 在创建的index.js中来使用

示例：

```javascript
const mongoose = require('mongoose'); 
```

**3.`connect` 创建数据库连接**

示例：

```javascript
mongoose.connect(url(s), [options], [callback])
//url(s):数据库地址,可以是多个,以`,`隔开
//options:可选,配置参数
//callback:可选,回调
mongoose.connect('mongodb://localhost/1902', {useNewUrlParser: true});
```

**4.得到连接实例**

示例：

```javascript
let db = mongoose.connection;
```

**5.处理连接错误输出**

示例：

```javascript
db.on('error', console.error.bind(console, 'connection error:'));
```

**6.监听一次打开事件**

示例：

```javascript
db.once('open', function() {
  console.log("we're connected!");
});
```

**7.将mongoose暴露出去**

示例：

```javascript
module.exports = mongoose;
```



##### 3.4.3.2 Model模型

Model是由`Schema`编译而成的假想（fancy）构造器，具有抽象属性和行为。Model的每一个**实例**（instance）就是一个**document**，document可以保存到数据库和对数据库进行操作。简单说就是model是由`schema`生成的模型，可以对数据库的操作。

**1.创建工作区**

在目标文件夹中再创建一个子文件夹**model**，然后在model中创建需要的文件，如 `user.js`

具体如下图：![model](C:\Users\qianfeng\Desktop\课程\三阶段-课程\Nodejs整理\model.png)

**2.model模块操作流程**

① 先引入需要依赖的模块（db/index)

示例：

```javascript
const mongoose = require('../db/index');
```

② 使用`schema`把非关系型数据库转换成关系型结构

示例：

```javascript
let userSchema = new mongoose.Schema({
    // 这里对你储存数据的名称进行定义
    name: String,
    password: String
});
```

③ 根据userSchema得到了一个`model`

**注意**：这个**model**是一个抽象结构，没有具体值，只是代表这个**集合的抽象的模型**

示例：

```javascript
let Users = mongoose.model('list', userSchema);
```

④ 封装增删改查等各种方法

参考官网：https://mongoosejs.com/docs/queries.html

mongoose为我们提供了很多增删改查的方法，现简单列举几种，如下：

- [`Model.deleteMany()`](https://mongoosejs.com/docs/api.html#model_Model.deleteMany)
- [`Model.deleteOne()`](https://mongoosejs.com/docs/api.html#model_Model.deleteOne)
- [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model.find)
- [`Model.findById()`](https://mongoosejs.com/docs/api.html#model_Model.findById)
- [Model.remove()](https://mongoosejs.com/docs/api.html#model_Model.remove)
- [`Model.findByIdAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)
- [`Model.findByIdAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)
- [`Model.findByIdAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
- [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model.findOne)
- [`Model.findOneAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)
- [`Model.findOneAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove)
- [`Model.findOneAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
- [`Model.replaceOne()`](https://mongoosejs.com/docs/api.html#model_Model.replaceOne)
- [Model.update()](https://mongoosejs.com/docs/api.html#model_Model.update)
- [`Model.updateMany()`](https://mongoosejs.com/docs/api.html#model_Model.updateMany)
- [`Model.updateOne()`](https://mongoosejs.com/docs/api.html#model_Model.updateOne)

在封装将这些方法时，将它们合并到一个对象中，方便以后调用。

示例：

```javascript
const userModel = {
    /** 
     * 插入方法insert
     * 插入document
     * @param userInfo <object> {name,password}
     * 
    */
    insert: (userInfo) => {
        // 往模型当中去填值，得到一个实例的document
        let users = new Users(userInfo);
        // 使用promise解决异步
        return new Promise((resolve, reject) => {
            //存数据
            users.save((err, user) => {
                if(err) reject(err);
                else resolve(user);
            })
        })
    },
    
    /** 
     * 查询方法find
     * @param where 查询条件 <object>
     * @param isOne 是否查一条 默认为false(查一条数据)
    */
    find: (where, isOne = false) => {
        // 判断是否为查询一条数据
        if(isOne) {
            // 这里是查一条数据，使用promise做异步处理
            return new Promise((resolve, reject) => {
                Users.findOne(where, (err, docs) => {
                    if(err) reject(err)
                    else resolve(docs)
                })
            })
        }else{
            // 这里是查所有数据，同样使用promise做异步处理
            return new Promise((resolve, reject) => {
                Users.find(where, (err, docs) => {
                    if(err) reject(err)
                    else resolve(docs)
                })
            }) 
        }
    },
    
    /** 
     * 更新方法update
     * @param thisUser 查询更改的数据 <object>
     * @param what 最终更改的数据 <object>
    */
    update: (thisUser, what) => {
        return new Promise((resolve, reject) => {
            Users.update(thisUser, what, (err, docs) => {
                if(err) reject(err)
                else resolve(docs)
            })
        })
    },
    
    /** 
     *  删除方法remove
     *  @param where 查询更改的数据 <object>
    */
    remove: (where) => {
        return new Promise((resolve, reject) => {
            Users.remove(where, (err, docs) => {
                if(err) reject(err)
                else resolve(docs)
            })
        })
    }
}
```

⑤ 将需要的userModel暴露出去

```javascript
module.exports = userModel;
```



##### 3.4.3.3 controller控制器

**1.创建工作区**

在目标文件夹中再创建一个子文件夹**controller**，然后在model中创建需要的文件，如 `user.js`

具体如下图：![model](C:\Users\qianfeng\Desktop\课程\三阶段-课程\Nodejs整理\controller.png)

**2.controller模块操作流程**

① 引入需要依赖的模块（../model/user）

示例：

```javascript
const userModel = require('../model/user');
```

② 调用依赖模块中的各种方法

示例：

```javascript
// 这里是调用增加的方法
userModel.insert({
    "name": "虞姬",
    "password": "222"
}).then(user => {
    console.log("success");
    console.log(user);
}).catch(err => {
    console.log("fail");
    console.log(err);
})

// 这里是调用查询的方法
userModel.find({
    //"name": "娜美"
    //"password": "456"
}, true).then(docs => {
    console.log(docs);
}).catch(err => {
    console.log(err);
})

// 这里是调用更改的方法
userModel.update(
    {"name": "大乔"},
    {"name": "小乔"}
).then(docs => {
    console.log(docs);
}).catch(err => {
    console.log(err);
})

// 这里是调用删除的方法
userModel.remove(
    {"name": "小乔"}
).then(docs => {
    console.log(docs);
}).catch(err => {
    console.log(err);
})
```

