/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-03 13:03:42
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-03 13:05:57
 */
export default function component(...func){
    if(func.length == 0){
        return args => args;
    }
    if(func.length==1){
        return func[0];
    }
    return func.reduce((a, b) => (...args)=>b(a(...args)))
}