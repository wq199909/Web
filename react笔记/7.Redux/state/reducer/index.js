/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-11-26 22:32:56
 * @LastEditors: WangQing
 * @LastEditTime: 2019-11-26 22:37:48
 */
import loginUserReducer from './LoginUser'
import userReducer from './users'
import {combineReducers} from 'redux'

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: loginUserReducer(state.loginUser, action),
//         users: usersReducer(state.users, action)
//     };
//     return newState;
// }

export default combineReducers({
    loginUser: loginUserReducer,
    users: userReducer
})