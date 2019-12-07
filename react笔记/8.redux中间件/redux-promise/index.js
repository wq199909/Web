/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-06 22:45:07
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-06 23:07:59
 */
import {isPlainObject, isString} from 'lodash';
export default ({dispatch})=>next=>action=>{
    if(!isFSA(action)){
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return isPromise(action.payload) ? 
        action.payload.then(payload => dispatch({...action, payload}))
        .catch(err=>dispatch({...action, payload : err, error: true})) :
        then(action);
}

/**
 * 判断一个action是否是一个标准的flux的action
 * @param {*} action 
 */
function isFSA(action){
    // action必须是一个平面对象
    // action.type必须是一个字符串
    // 属性不能有包含非标准属性 标准属性["type", "payload", "error", "meta"]
    return isPlainObject(action)
        && isString(action)
        && Object.keys(action).every(key=>["type", "payload", "error", "meta"].indexOf(key)>-1);
}