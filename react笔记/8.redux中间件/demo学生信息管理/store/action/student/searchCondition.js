/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 20:37:55
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 20:54:54
 */
export const actionTypes = {
    change: Symbol("change")
}

export function change(newCondition){
    return {
        type: actionTypes.change,
        payload: newCondition
    }
}