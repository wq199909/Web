/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 12:49:37
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-03 12:52:42
 */
/**
 * 得到一个指定长度的字符串
 * @param {*} length 
 */
function getRandomString(length){
    return Math.random().toString(36).substr(2, length).split("").join(".");
}

export default{
    INIT(){
        return `@@redux/INIT${getRandomString(6)}`;
    },
    UNKNOWN(){
        return `@@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
    }
}