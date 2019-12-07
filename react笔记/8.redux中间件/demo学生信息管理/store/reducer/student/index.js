/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 20:40:43
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 20:47:08
 */
import searchCondition from './searchCondition'
import searchResult from './searchResult'
import {combineReducers} from 'redux'

export default combineReducers({
    condition: searchCondition,
    result: searchResult
})