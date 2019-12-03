/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 12:53:00
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-03 12:55:04
 */
export default function isPlainObject(obj){
    if(typeof obj !== "object"){
        return false;
    }
    return Object.getPrototypeOf(obj) === Object.prototype;
}