var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 8082 });
wss.on('connection', function (ws) {
    console.log('服务端：客户端已连接');
    ws.on('message', function (message) {
        //打印客户端监听的消息
        console.log(message.toString());
    });
});


module.exports = router;
