/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-11 11:48:38
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 11:55:34
 */
import {getValue} from "../../util/ObjectUtil.js";

export function checkVOn(vm, vnode) {
    if (vnode.nodeType != 1) {
        return;
    }
    let attrNames = vnode.elm.getAttributeNames();
    for (let i = 0 ; i < attrNames.length ; i ++) {
        if (attrNames[i].indexOf("v-on:") == 0 || attrNames[i].indexOf("@") == 0) {
            von(vm, vnode, attrNames[i].split(":")[1], vnode.elm.getAttribute(attrNames[i]));
        }
    }
}

function von(vm, vnode, event, key) {
    let method = getValue(vm._methods, key);
    if (method) {
        vnode.elm.addEventListener(event, proxyExecute(vm, method));
    }
}

function proxyExecute(vm, method) {
    return function () {
        method.call(vm);
    }
}