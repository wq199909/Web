/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-08 10:39:41
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-08 11:32:17
 */
import React, { useContext, useState, useEffect } from "react"
import { bindActionCreators } from "redux"
import ctx from "./ctx";

function compare(obj1, obj2) {
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

export default function (mapStateToProps, mapDispatchToProps) {
    return function(Comp){
        function Temp(props){
            const store = useContext(ctx);
            const [state, setState] = useState(mapStateToProps && mapStateToProps(store.getState()));

            useEffect(() => {
                return store.subscribe(() => {
                    var newState = mapStateToProps && mapStateToProps(store.getState());
                    setState(prevState => {
                        if (compare(prevState, newState)) {
                            return prevState;
                        }
                        else {
                            return newState;
                        }
                    })
                })
            }, [store])

            /**
            * 得到需要传递的事件处理属性
            */
            function getEventHandlers() {
                if (typeof mapDispatchToProps === "function") {
                    return mapDispatchToProps(store.dispatch, props);
                }
                else if (typeof mapDispatchToProps === "object") {
                    return bindActionCreators(mapDispatchToProps, store.dispatch)
                }
            }
            var handlers = {};
            if (mapDispatchToProps) {
                handlers = getEventHandlers();
            }
            Temp.displayName = Comp.displayName || Comp.name; //类组件的名称和传入的组件一致
            return Temp;
        }
    }
}
