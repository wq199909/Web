import { renderData } from "./render.js";
import {rebuild} from "./mount.js";
import {getValue} from "../util/ObjectUtil.js";
/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-10 15:02:10
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 12:34:19
 */

export function constructProxy(vm, obj, namespace){
    let proxyObj = null;
    if(obj instanceof Array){
        proxyObj = new Array(obj.length);
        for (let i = 0 ; i < proxyObj.length ; i ++) {
            if(proxyObj[i] instanceof Object){
                proxyObj[i] = constructProxy(vm, obj[i], namespace);
            }
        }
        proxyObj = proxyArr(vm, obj, namespace);
    }else if(obj instanceof Object){
        proxyObj = constructObjectProxy(vm, obj, namespace)
    }else{
        throw new Error("error");
    }
    return proxyObj;
}
function proxyArr(vm, arr, namespace){
    let obj = {
        eleType: "Array",
        toString: function() {
            let result = "";
            for (let i = 0 ; i < arr.length ; i ++) {
                result += arr[i] + ", "
            }
            return result.substring(0, result.length - 2);
        },
        push() {},
        pop() {},
        shift() {},
        unshift() {}
    }
    defArrayFunc.call(vm, obj, 'push', namespace, vm);
    defArrayFunc.call(vm, obj, 'pop', namespace, vm);
    defArrayFunc.call(vm, obj, 'shift', namespace, vm);
    defArrayFunc.call(vm, obj, 'unshift', namespace, vm);
    arr.__proto__ = obj;
    return arr;
}

function defArrayFunc(obj, func, namespace, vm){
    Object.defineProperty(obj, func, {
        enumerable: true,
        configurable: true,
        value: function(...args){
            let original = [].__proto__[func];
            const result = original.apply(this, args);
            rebuild(vm, getNameSpace(namespace, ""));
            return result;
        }
    })
}

function constructObjectProxy(vm, obj, namespace){
    let proxyObj = {};
    for(let prop in obj){
        Object.defineProperty(proxyObj, prop, {
            configurable: true,
            set: function(value){
                obj[prop] = value;
                if(value===value){
                    return
                }
                renderData(vm, getNameSpace(namespace, prop));
            },
            get(){
                return obj[prop];
            }
        });
        if(namespace==""){
            Object.defineProperty(vm, prop, {
                configurable: true,
                set: function(value){
                    obj[prop] = value;
                    renderData(vm, getNameSpace(namespace, prop));
                    let val = getValue(vm._data, getNameSpace(namespace, prop))
                    if (val instanceof Array) {
                        rebuild(vm, getNameSpace(namespace, prop));
                        renderData(vm, getNameSpace(namespace, prop));
                    } else {
                        renderData(vm, getNameSpace(namespace, prop));
                    }
                },
                get(){
                    return obj[prop];
                }
            });
        }
        if(obj[prop] instanceof Object){
            proxyObj[prop] = constructProxy(vm, obj[prop], getNameSpace(namespace, prop));
        }
    }
    return proxyObj;
}

function getNameSpace(nowNameSpace, nowProp) {
    if (nowNameSpace == null || nowNameSpace == "") {
        return nowProp;
    } else if (nowProp == null || nowProp == "") {
        return nowNameSpace;
    } else {
        return nowNameSpace + "." + nowProp;
    }
}