/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:26:21
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-16 15:56:43
 */
var studentService = require("../service/studentService");
var url = require("url");

var path = new Map();

function getData(request, response) {


    studentService.queryAllStudent(function (result) {
        var resArr = [];
        for (var i = 0 ; i < result.length ; i ++) {
            resArr.push(result[i].name);
        }
        response.write(resArr.toString());
        response.end();
    });

}
path.set("/getData", getData);


function login(request, response) {

    request.on("data", function(data){
        var stuNum = data.toString().split("&")[0].split("=")[1];
        var password = data.toString().split("&")[1].split("=")[1];
        studentService.queryStudentByStuNum(stuNum, function (result) {
            var res = "";
            if (result == null || result.length == 0) {
                res = "Fail";
                response.writeHead(302, {"location": "/error.html"});
                response.end();
            } else {
                if (result[0].passWord == password) {
                    res = "OK";
                    response.writeHead(302, {"location": "/index.html", "Set-Cookie": "userId=" + result[0].userId});
                    response.end();
                } else {
                    res = "Fail";
                    response.writeHead(302, {"location": "/error.html"});
                    response.end();
                }
            }
        });
    });

}
path.set("\\login", login);


module.exports.path = path;
