/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-14 16:52:09
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-15 21:28:33
 */
let http = require('http');
let url = require('url')
let fs = require('fs');
let conf = require('./conf');
let loader = require('./loader');
let log = require('./log.js')

http.createServer(function(request, response){
    let pathName = url.parse(request.url).pathname.replace(/\//g, '\\');
    let params = url.parse(request.url, true).query;
    log(pathName);
    var isStatic = isStaticsRequest(pathName);
    if(isStatic){
        try{
            var data = fs.readFileSync(conf.page_path + pathName);
            response.writeHead(200);
            response.write(data);
            response.end();
        }catch(e){
            response.writeHead(404);
            response.write(`<html>
            <body>
                <h1>404 NotFound</h1>
            </body>
            </html>`)
            response.end();
        }
    }else{
        if (loader.get(pathName) != null) {
            try {
                loader.get(pathName)(request, response);
            } catch (e) {
                console.log(e);
                response.writeHead(500);
                response.write("<html><body><h1>500 BadServer</h1></body></html>");
                response.end();
            }

        } else {
            response.writeHead(404);
            response.write("<html><body><h1>404 NotFound</h1></body></html>");
            response.end();
        }
    }
}).listen(conf.port)

log("服务已启动");

function isStaticsRequest(pathName){
    for(let static of conf.static_file_type){
        if(pathName.indexOf(static)==pathName.length-static.length)return true;
    }
    return false;
}
