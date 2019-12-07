/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 21:52:16
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 21:57:56
 */
import { createEffect, effectTypes } from "../effectHelper"


export function cancel(task) {
    return createEffect(effectTypes.CANCEL, {
        task
    })
}

export function runCancelEffect(env, effect, next) {
    effect.payload.task.cancel(); //cancel中的next指向的它对应的任务的next
    next(); //这里的next是当前的next
}