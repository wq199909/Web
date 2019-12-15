/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-12 22:03:57
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-12 22:39:51
 */
// function xxx(exports, require, module, __filename, __dirname){
// NodeJS的模块是运行在函数中的
console.log(arguments);
console.log(arguments[0]===exports);
console.log(arguments[1]===require);
console.log(arguments[2]===module);
console.log(arguments[3]===__filename);
console.log(arguments[4]===__dirname);


var test = require("./test");
console.log(test);
//  return module.exports;
// }