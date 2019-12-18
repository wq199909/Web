/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:00:22
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-18 14:56:58
 */
let mysql = require('mysql');

function createConnection(){
    let connection = mysql.createConnection({
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "123456",
        database: "node"
    });
    return connection;
}

module.exports.createConnection = createConnection;