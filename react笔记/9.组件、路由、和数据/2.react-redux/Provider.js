/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-08 10:37:44
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-08 10:39:20
 */
import React from 'react'
import ctx from './ctx'

export default function Provider(props){
    return (<ctx.Provider value={props.store}>
        {props.children}
    </ctx.Provider>)
}