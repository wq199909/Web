/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-11 11:02:01
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 11:13:23
 */

export function generateAnnoCode(obj) {
    let code = "";
    for (let temp in obj) {
        code += "let " + temp + "=" + JSON.stringify(obj[temp]) + ";";
    }
    return code;
}

export function isTrue(expression, env){
    let bool = false;
    let code = env;
    code += "if(" + expression + "){bool=true}";
    eval(code);
    return bool;
}