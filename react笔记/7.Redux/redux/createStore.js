/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 12:43:14
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-03 13:02:49
 */
import ActionTypes from './utils/ActionTypes';
import isPlainObject from './utils/isPlainObject';

/**
 * 实现createStore功能
 * @param {*} reducer reducer
 * @param {*} defaultState 默认状态值
 * @param {*} enhanced 中间件 
 */
export default function createStore(reducer, defaultState, enhanced){
    
    if(typeof defaultState === "function"){
        enhanced = defaultState;
        defaultState = undefined;
    }
    
    if(typeof enhanced === "function"){
        return enhanced(createStore)(reducer, defaultState);
    }
    
    let currentReducer = reducer, //当前使用的reducer
        currentState = defaultState; //当前仓库的状态

    const listeners = [];

    function dispatch(action){
        if(!isPlainObject(action)){
            throw new TypeError("action must be a plain object");
        }
        if(action.type === undefined){
            throw new TypeError("action must have a property of type");
        }
        currentState = currentReducer(currentState, action);

        for(const listener of listeners){
            listener();
        }
    }

    function getState(){
        return currentState;
    }

    /**
     * 添加一个监听器，返回一个取消监听器的函数
     * @param {*} listener 
     */
    function subscribe(listener){
        listeners.push(listeners);
        let isRemove = false;
        return function(){
            if(isRemove){
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index, 1);
            isRemove = true;
        }
    }
    dispatch({
        type: ActionTypes.INIT()
    })

    return {
        dispatch,
        getState,
        subscribe
    }
}