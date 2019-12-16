/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-14 18:46:13
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-16 15:32:43
 */
let fs = require('fs');
let conf = require('./conf');

let pathMap = new Map();

let files = fs.readdirSync(conf.web_path);

for(let i = 0; i < files.length; i++){
    let temp = require(".\\"+conf.web_path + "\\" + files[i]);
    if(temp.path){
        for(let [key, value] of temp.path){
            if(pathMap.get(key) == null){
                pathMap.set(key, value);
            }else{
                throw new Error("url path异常，url"+key);
            }
        }
    }
}

module.exports = pathMap;