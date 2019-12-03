/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 13:20:28
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-03 13:26:50
 */
import isPlainObject from "./utils/isPlainObject"
import ActionTypes from "./utils/ActionTypes"

function validateaReducer(reducers){
    if (!isPlainObject(reducers)) {
        throw new TypeError("reducers must be a plain object");
    }
    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];//拿到reducer
            //传递一个特殊的type值
            let state = reducer(undefined, {
                type: ActionTypes.INIT()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined");
            }
            state = reducer(undefined, {
                type: ActionTypes.UNKNOWN()
            })
            if (state === undefined) {
                throw new TypeError("reducers must not return undefined");
            }
        }
    }
}

export default function (reducers) {
    validateReducers(reducers);
    return function (state = {}, action) {
        const newState = {}; //要返回的新的状态
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action);
            }
        }
        return newState; //返回状态
    }
}