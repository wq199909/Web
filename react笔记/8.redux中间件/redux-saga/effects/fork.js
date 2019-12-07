/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 21:44:42
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 21:52:26
 */
import { createEffect, effectTypes } from "../effectHelper"
import runSaga from "../runSaga"

export function fork(generatorFunc, ...args) {
    return createEffect(effectTypes.FORK, {
        fn: generatorFunc,
        args
    })
}

export function runForkEffect(env, effect, next) {
    //启动一个新的任务
    var task = runSaga(env, effect.payload.fn, ...effect.payload.args);
    next(task) //当前任务不回阻塞
}