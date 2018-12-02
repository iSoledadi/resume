const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/


var app = express();
var server = app.listen(7777);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('../resume'));