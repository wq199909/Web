/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-18 15:04:09
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-18 15:31:57
 */
let studentService = require("../service/studentService");

let path = new Map();

function upload(request, response) {
    console.log(request.file.originalname, request.file.path);

}

path.set("/upload", upload);

module.exports.path = path;