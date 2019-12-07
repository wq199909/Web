/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 20:42:44
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 21:13:32
 */
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const store = createStore(reducer,
    applyMiddleware(thunk, logger)
)
export default store;