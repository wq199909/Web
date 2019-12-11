import { getValue, getEnvAttr} from "../../util/ObjectUtil.js";
import {generateAnnoCode, isTrue} from '../../util/Code.js'
import {prepareRender} from '../render.js'
/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-11 10:35:45
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 11:40:00
 */
export function checkVBind(vm, vnode){
    if(vnode.nodeType!=1){
        return;
    }
    let attrNames = vnode.elm.getAttributeNames();
    for(let i=0;i<attrNames.length;i++){
        if(attrNames[i].indexOf("v-bind")==0||attrNames[i].indexOf(":")==0){
            prepareRender(vm, vnode);
            vBind(vm, vnode, attrNames[i], vnode.elm.getAttribute(attrNames[i]));
        }
    }
}

function vBind(vm, vnode, name, value){
    let k = name.split(":")[1];
    if(/^{[\w\W]+}$/.test(value)){
        let str = value.trim().substring(1, value.length-1);
        let expressionList = str.split(",");
        let result = analysisExpressionList(vm, vnode, expressionList);
        vnode.elm.setAttribute(k, result);
    }else{
        let v = getValue(vm._data, value);
        vnode.elm.setAttribute(k, v);
    }
}

function analysisExpressionList(vm, vnode, expressionList) {
    let attr = getEnvAttr(vm, vnode);
    let code = generateAnnoCode(attr);
    let result = "";
    for(let i=0;i<expressionList.length;i++){
        let site = expressionList[i].indexOf(":");
        if(site>-1){
           if(isTrue(expressionList[i].substring(site+1, expressionList[i].length), code)){
               result+=expressionList[i].substring(0, site)+",";
           }
        }else{
            result+=expressionList[i]+",";
        }
    }
    return result.replace(/[,]/g, " ");
}