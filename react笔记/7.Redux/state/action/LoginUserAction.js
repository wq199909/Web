/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-11-26 22:14:14
 * @LastEditors: WangQing
 * @LastEditTime: 2019-11-26 22:31:04
 */
export const SETLOGINUSERTYPE = Symbol("set-login-user");

/**
 * 设置登录用户的action
 * @param {*} user 
 */
export function createSetLoginUserAction(user){
    return {
        type: SETLOGINUSERTYPE,
        payload: user
    }
}