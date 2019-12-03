/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-11-26 22:13:29
 * @LastEditors: WangQing
 * @LastEditTime: 2019-11-26 22:18:53
 */
import {SETLOGINUSERTYPE} from '../action/LoginUserAction'

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SETLOGINUSERTYPE:
        return payload

    default:
        return state
    }
}
