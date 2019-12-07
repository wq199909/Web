/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 21:12:43
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 21:17:22
 */
import { createEffect, effectTypes } from "../effectHelper"

export function select(func){
    return createEffect(effectTypes.SELECT, {
        fn: func
    })
}

export function runSelectEffect(env, effect, next){
    var state = env.store.getState();
    if(effect.payload.fn){
        state = effect.payload.fn(state);
    }
    next(state);
}