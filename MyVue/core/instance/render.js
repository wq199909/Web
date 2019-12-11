/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-10 17:15:02
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 12:41:48
 */
import { getValue } from "../util/ObjectUtil.js";
import { checkVBind } from "./grammer/vbind.js";

let template2Vnode = new Map();
let vnode2Template = new Map();

export function renderMixin(MyVue){
    MyVue.prototype._render = function(){
        renderNode(this, this._vnode);
    }
}

export function renderNode(vm, vnode){
    if(vnode.nodeType==3){
        let template = vnode2Template.get(vnode);
        if(template){
            let result = vnode.text;
            for(let i=0;i<template.length;i++){
                let templateValue =  getTemplateValue([vm._data, vnode.env], template[i]);
                if(templateValue==null)templateValue="";
                result = result.replace("{{"+template[i]+"}}", templateValue);
            }
            vnode.elm.nodeValue = result;
        }
    }else if(vnode.nodeType==1&&vnode.tag == "INPUT"){
        let template = vnode2Template.get(vnode);
        if(template){
            for(let i=0;i<template.length;i++){
                let templateValue =  getTemplateValue([vm._data, vnode.env], template[i]);
                if(templateValue==null)templateValue="";
                vnode.elm.value = templateValue;
            }
        }
    }else {
        for(let i=0;i<vnode.children.length;i++){
            renderNode(vm, vnode.children[i])
        }
    }
}

export function getVNodeByTemplate(template) {
    return template2Vnode.get(template);
}

function getTemplateValue(objs, templateName){
    for(let i = 0; i < objs.length; i++){
        let temp = getValue(objs[i], templateName);
        if(temp!=null){
            return temp;
        }
    }
    return "";
}

export function renderData(vm, data){
    let vnodes = template2Vnode.get(data);
    if(vnodes != null){
        for(let i=0;i<vnodes.length;i++){
            renderNode(vm, vnodes[i]);
        }
    }
}

export function prepareRender(vm, vnode){
    if(vnode == null){
        return;
    }
    if(vnode.nodeType==3){
        analysisTemplateString(vnode);
    }
    if(vnode.nodeType==0){ 
        setTemplate2Vnode("{{" + vnode.data + "}}", vnode);
        setVnode2Template("{{" + vnode.data + "}}", vnode);
    }
    analysisAttr(vm, vnode);
    for(let i = 0; i < vnode.children.length; i++){
        prepareRender(vm, vnode.children[i]);
    }
}

function analysisTemplateString(vnode){
    let templateStringList = vnode.text.match(/{{[a-zA-Z0-9_.]+}}/g);
    if(templateStringList == null) return;
    for(let i = 0; i<templateStringList.length;i++){
        setTemplate2Vnode(templateStringList[i], vnode);
        setVnode2Template(templateStringList[i], vnode);
    }
}

function setTemplate2Vnode (template, vnode){
    let templateName = getTemplateName(template);
    let vnodeSet = template2Vnode.get(templateName);
    if(vnodeSet){
        vnodeSet.push(vnode);
    }else{
        template2Vnode.set(templateName, [vnode]);
    }
}

function setVnode2Template (template, vnode){
    let templateSet = vnode2Template.get(vnode);
    if(templateSet){
        templateSet.push(getTemplateName(template));
    }else{
        vnode2Template.set(vnode, [getTemplateName(template)]);
    }
}

function getTemplateName(text) {
    return text.substring(2, text.length - 2);
}

function analysisAttr(vm, vnode) {
    if (vnode.nodeType != 1) {
        return;
    }
    let attrNames = vnode.elm.getAttributeNames();
    if (attrNames.indexOf("v-model") > -1) {
        setTemplate2Vnode("{{" + vnode.elm.getAttribute("v-model") + "}}", vnode);
        setVnode2Template("{{" + vnode.elm.getAttribute("v-model") + "}}", vnode);
    }
}


export function clearMap(){
    template2Vnode.clear();
    vnode2Template.clear();
}