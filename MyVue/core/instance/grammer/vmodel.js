/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-10 20:06:03
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-10 22:20:19
 */
import {setValue} from '../../util/ObjectUtil.js'
export function vmodel(vm, elm, data){
    elm.onchange = function(event){
        setValue(vm, data, event.target.value)
    }
}