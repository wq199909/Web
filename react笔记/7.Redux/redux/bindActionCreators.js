/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 13:13:53
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-03 13:20:06
 */
export default function(acitonCreators, dispatch){
    if(typeof actionCreators === "function"){
        return getAutoDispatchActionCreator(actionCreators, dispatch);
    }
    else if(typeof actionCreators === "object"){
        const result = {};
        for(const key in actionCreators){
            const actionCreator = actionCreators[key];
            if(typeof actionCreator === "function"){
                return[key] = getAutoDispatchActionCreator(actionCreator, dispatch);
            }
        }
        return result;
    }
    else{
        throw new TypeError("actionCreators must be an objcect or function");
    }
}

function getAutoDispatchActionCreator(actionCreator, dispatch){
    return function(...args){
        const action = actionCreator(...args);
        dispatch(action);
    }
}