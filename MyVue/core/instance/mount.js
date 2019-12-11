/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-10 16:51:03
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 12:43:53
 */
import VNode from "../vdom/vnode.js";
import {prepareRender,getVNodeByTemplate,renderNode, clearMap} from './render.js'
import { vmodel } from "./grammer/vmodel.js";
import { vforInit } from "./grammer/vfor.js";
import { checkVBind } from "./grammer/vbind.js";
import { checkVOn } from "./grammer/von.js";
import {mergeAttr} from "../util/ObjectUtil.js";

export function mount(vm, elm){
    vm._vnode = constructVNode(vm, elm, null);
    prepareRender(vm, vm._vnode);
}

function constructVNode(vm, elm, parent){
    let vnode = analysisAttr(vm,elm,parent);
    if(vnode==null){
        let children = [];
        let text = getNodeText(elm);
        let data = null;
        let nodeType = elm.nodeType;
        let tag = elm.nodeName;
        let key = null;
        vnode = new VNode(tag, elm, children, text, data, parent, nodeType, key);
        if (elm.nodeType == 1 && elm.getAttribute("env")) {
            vnode.env = mergeAttr(vnode.env, JSON.parse(elm.getAttribute("env")));
            
        } else {
            vnode.env = mergeAttr(vnode.env, parent ? parent.env : {});
        }
    }
    checkVBind(vm, vnode);
    checkVOn(vm, vnode);
    let childs = vnode.nodeType == 0 ? vnode.parent.elm.childNodes : vnode.elm.childNodes;
    let len = childs.length;
    for(let i = 0; i < childs.length; i++){
        
    if(childs[i]==null){
        debugger
    }
        let childNodes = constructVNode(vm, childs[i], vnode);
        if(childNodes instanceof VNode){
            vnode.children.push(childNodes)
        }else{
            vnode.children = vnode.children.concat(childNodes);
        }
    }
    return vnode;
}

function getNodeText(elm) {
    if (elm.nodeType == 3) {
        return elm.nodeValue;
    } else {
        return "";
    }
}
function analysisAttr(vm, elm, parent){
    if(elm.nodeType==1){
        let attrNames = elm.getAttributeNames();
        if(attrNames.indexOf("v-model")>-1){
            return vmodel(vm, elm, elm.getAttribute("v-model"));
        }
        if(attrNames.indexOf("v-for")>-1){
            return vforInit(vm, elm, parent, elm.getAttribute("v-for"));
        }
    }
}

export function rebuild(vm, template) {
    let virtualNode = getVNodeByTemplate(template);
    for (let i = 0 ; i < virtualNode.length ; i ++) {
        virtualNode[i].parent.elm.innerHTML = "";
        virtualNode[i].parent.elm.appendChild(virtualNode[i].elm);
        let result = constructVNode(vm, virtualNode[i].elm, virtualNode[i].parent);
        virtualNode[i].parent.children = [result];
        clearMap();
        prepareRender(vm, vm._vnode);
    }
    renderNode(vm, virtualNode[0].parent);
}