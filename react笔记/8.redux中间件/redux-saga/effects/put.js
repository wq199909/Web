/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 21:10:20
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 21:12:38
 */
import { createEffect, effectTypes } from "../effectHelper"

export function put(action){
    return createEffect(effectTypes.PUT, {
        action
    })
}

export function runPutEffect(env, effect, next){
    const action = effect.payload.action;
    const result = env.store.dispatch(action);
    next(result);
}