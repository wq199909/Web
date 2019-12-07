/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 20:50:59
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 21:27:08
 */
import { searchStudents } from "../../../services/student";

export const actionTypes = {
    setStudentsAndTotal: Symbol("setStudentsAndTotal"),
    setIsLoading: Symbol("setIsLoading")
}

export function setStudentsAndTotal(arr, total){
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: {
            datas: arr,
            total
        }
    }
}

export function setIsLoading(isLoading){
    return {
        type: actionTypes.setIsLoading,
        payload: isLoading
    }
}

export function fetchStudents(){
    return async (dispatch, getState)=>{
        dispatch(setIsLoading(true));
        const condition = getState().students.condition;
        const resp = await searchStudents(condition);
        dispatch(setStudentsAndTotal(resp.datas, resp.cont));
        dispatch(setIsLoading(false));
    }
}