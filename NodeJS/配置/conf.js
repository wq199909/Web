/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-14 16:23:01
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-14 17:28:56
 */
var fs = require('fs');

var globalConf = {};
var conf = fs.readFileSync('./server.conf');
var confs = conf.toString().split('\r\n');
for(let i = 0; i < confs.length; i++){
    let tempConf = confs[i].replace(/\s/g, '').split("=");
    if(tempConf.length<2){
        globalConf[tempConf[0]] = true;
    }else{
        globalConf[tempConf[0]] = tempConf[1]
    }
}
if(!globalConf.path_absolute){
    globalConf.path = __dirname + globalConf.path
}

module.exports = globalConf