/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:03:02
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-16 15:55:35
 */
var dbutil = require("./dbutil");
function queryAllStudent(success){
    let querySql = "select * from student;";
    let connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, function(error, result){
        if(error==null){
            result(result);
        }else{
            console.log(error);
        }
    });
    connection.end();
}

function queryStudentByClassAndAge(className, age){
    var querySql = "select * from student where class = ? and age = ?;";
    var queryParams = [className, age];
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, queryParams, function(){
        if(error==null){
            console.log(result);
        }else{
            console.log(error);
        }
    })
    connection.end();
}

function queryStudentByStuNum(stuNum, success) {

    var querySql = "select * from student where userId = ?;";
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, stuNum, function (error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports = {
    queryAllStudent,
    queryStudentByClassAndAge,
    queryStudentByStuNum
}