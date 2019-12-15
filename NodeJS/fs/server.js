/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-14 15:50:10
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-14 16:10:51
 */
var net = require('net');
var fs = require("fs");

var server = net.createServer();
server.listen(12306, "127.0.0.1");

server.on("listening", function(){
    console.log("服务已启动")
})

server.on("connection", function(socket){
    socket.on("data", function(data){
        var url = data.toString().split("\r\n")[0].split(" ")[1].replace(/\//g, '\\');
        console.log(__filename+url)
        try{
            var data = fs.readFileSync(__dirname+url);
            socket.write("HTTP1.1 200OK\r\nContent-type:text/html;charset=utf-8\r\n\r\n");
            socket.write(data);
            socket.end();
        }catch(err){
            socket.write("HTTP1.1 404NotFound\r\nContent-type:text/html;charset=utf-8\r\n\r\n<html><body>该页面不存在<body><html>")
        }
    })
})