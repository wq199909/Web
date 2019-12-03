/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-11-26 22:19:10
 * @LastEditors: WangQing
 * @LastEditTime: 2019-11-26 22:49:28
 */
import * as usersAction from '../action/usersAction';
import uuid from "uuid";

const initialState = [
    {id:uuid(), name: "用户1", age: 11},
    {id:uuid(), name: "用户2", age: 12}
]

export default (state = initialState, { type, payload }) => {
    console.log(type, payload)
    switch (type) {

    case usersAction.ADDUSER:
        return [ ...state, payload ]
    case usersAction.DELETEUSER:
        return state.filter(it=>it.id!==payload);
    case usersAction.UPDATEUSER:
        return state.map(it=>it.id===payload.id?{...it,...payload}:it);
    default:
        return state
    }
}
