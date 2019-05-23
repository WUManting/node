// 引入http报错模块
var createError = require('http-errors');
// 引入express模块
var express = require('express');
// 引入核心path模块
var path = require('path');
// 引入处理cookie的模块
var cookieParser = require('cookie-parser');
// 引入日志模块
var logger = require('morgan');


// 引入路由文件模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 创建express实例
var app = express();

// 设置模板引擎， 如果要加载视图文件，就去views目录
/*      __dirname 当前路径     C:\1902-node\express-project\exApp       */
/*    (__dirname, 'views')  C:\1902-node\express-project\exApp\views   */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


/*app.use 中间件 */

// 使用日志的中间件
app.use(logger('dev'));
// 使用处理json格式数据的中间件
app.use(express.json());
// 使用解析url的中间件
app.use(express.urlencoded({ extended: false }));
// 使用cookie解析器的中间件
app.use(cookieParser());
// 处理静态文件的中间件（静态资源从public里面获取）
app.use(express.static(path.join(__dirname, 'public')));
// 使用路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 处理404错误
app.use(function(req, res, next) {
  next(createError(404));
});

//处理500错误
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 暴露app模块,/exapp/bin/www中可以require到app模块
module.exports = app;
