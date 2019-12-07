/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 20:37:55
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 20:57:42
 */
import {actionTypes} from '../../action/student/searchCondition'

const initialState = {
    key: "",
    sex: -1,
    page: 1,
    limit: 10
}

export default (state=initialState, {type, payload})=>{
    switch(type){
        case actionTypes.change:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}