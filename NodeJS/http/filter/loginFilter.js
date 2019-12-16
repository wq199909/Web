/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:13:45
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-16 15:47:06
 */
let url = require('url');

let conf = require('../conf');

function loginFilter(request, response){
    let pathName = url.parse(request.url).pathname;
    console.log(pathName)
    if(pathName=="/login.html"||pathName=="/login"||isStaticsRequest(pathName)){
        return true;
    }
    if(request.headers.cookie){
        let cookies = request.headers.cookie.split("; ");
        for(let i=0;i<cookies.length;i++){
            if(cookies[i].split("=")[0]=="userId"){
                return true;
            }
        }
    }
    response.writeHead(302, {"location": "/login.html"});
    response.end();
    return false;
}

function isStaticsRequest(pathName){
    for(let static of conf.static_file_type){
        if(static==".html")continue;
        if(pathName.indexOf(static)==pathName.length-static.length)return true;
    }
    return false;
}
module.exports = loginFilter