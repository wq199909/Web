/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-11-26 16:38:24
 * @LastEditors: WangQing
 * @LastEditTime: 2019-11-26 22:42:45
 */
import {createStore} from 'redux';
import reducer from './reducer'
import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"


window.store = createStore(reducer);


const action = createAddUserAction({
    id: 3,
    name: "abc",
    age: 10
})

console.log(window.store.getState()); //得到仓库中当前的数据

window.store.dispatch(action); //向仓库分发action

console.log(window.store.getState());