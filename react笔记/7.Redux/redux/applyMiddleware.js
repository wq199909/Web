/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 13:06:12
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 12:30:13
 */
import compose from './utils/compose';

export default function(...middlewares){
    return function(createStore){
        return function(reducer, defaultState){
            const store = createStore(reducer, defaultState);
            let dispatch = () => {throw new Error("目前还不能使用")};
            const simpleStore = {
                getState: store.getState,
                dispatch: (...args)=>dispatch(...args)
            }

            const dispatchProducers = middlewares.map(mid=>mid(simpleStore));
            dispatch = compose(...dispatchProducers)(store.dispatch);

            return {
                ...store,
                dispatch
            }
        }
    }
}