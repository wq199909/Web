/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 20:38:04
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 21:27:44
 */
import { actionTypes } from "../../action/student/searchResult"

const initialState = {
    datas: [],
    total: 0,
    isLoading: false
}

export default (state=initialState, {type, payload})=>{
    switch(type){
        case actionTypes.setStudentsAndTotal:
            return {
                ...state,
                ...payload
            };
        case actionTypes.setIsLoading:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}