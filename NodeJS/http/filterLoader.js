/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:20:35
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-16 15:38:17
 */
let fs = require('fs');
let conf = require("./conf");

let filterSet = [];

var files = fs.readdirSync(conf["filter_path"]);

for (var i = 0 ; i < files.length ; i ++) {
    console.log(".\\" + conf["filter_path"] + "\\" + files[i])
    var temp = require(".\\" + conf["filter_path"] + "\\" + files[i]);
    filterSet.push(temp);
}
console.log(filterSet)

module.exports = filterSet;
