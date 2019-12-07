/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 21:20:06
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 21:44:07
 */
import { createEffect, effectTypes } from "../effectHelper"
export function take(actionType) {
    return createEffect(effectTypes.TAKE, {
        actionType
    })
}

export function runTakeEffect(env, effect, next) {
    const actionType = effect.payload.actionType;
    env.channel.take(actionType, action => {
        //订阅函数，当action发生的时候要运行的函数
        next(action)
    })
}