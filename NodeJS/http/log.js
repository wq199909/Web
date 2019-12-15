/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-15 21:09:44
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-15 21:39:18
 */
let fs = require('fs');
let conf = require('./conf');
let fileName = __dirname + conf.log_path;
function log(data){
    fs.appendFile(fileName, data+'\r\n', function(){});
}

module.exports = log;