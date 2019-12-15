/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-14 16:34:15
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-14 16:40:51
 */
var net = require('net');
var fs = require("fs");
var conf = require('./conf')

var server = net.createServer();
server.listen(conf.port, conf.ip);

server.on("listening", function(){
    console.log("服务已启动")
})

server.on("connection", function(socket){
    socket.on("data", function(data){
        var url = data.toString().split("\r\n")[0].split(" ")[1].replace(/\//g, '\\');
        console.log(conf.port+url)
        try{
            var data = fs.readFileSync(conf.path+url);
            socket.write("HTTP1.1 200OK\r\nContent-type:text/html;charset=utf-8\r\n\r\n");
            socket.write(data);
            socket.end();
        }catch(err){
            socket.write("HTTP1.1 404NotFound\r\nContent-type:text/html;charset=utf-8\r\n\r\n<html><body>该页面不存在<body><html>")
        }
    })
})