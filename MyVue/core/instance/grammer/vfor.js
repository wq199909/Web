/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-10 20:58:09
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 11:27:39
 */
import VNode from "../../vdom/vnode.js";
import {getValue} from "../../util/ObjectUtil.js";

export function vforInit(vm, elm, parent, instructions){
    let virtualNode = new VNode(elm.nodeName, elm, [], "", getVirtualNodeData(instructions)[2], parent, 0, "");
    virtualNode.instructions = instructions;
    parent.elm.removeChild(elm);
    analysisInstructions(vm, instructions, elm, parent);
    return virtualNode;
}

function getVirtualNodeData(instructions){
    let str = instructions.trim();
    let str1 = str.match(/\(.+\)/g);
    let insSet = [];
    if(str1){
        str1 = str1[0].replace(/\s/g, "");
        str = str.substring(str1.length+1, str.length);
        str1 = str1.substring(1, str1.length-1);
        insSet.push(str1.split(","));
        insSet = insSet.concat(str.trim().split(" "));
    }else{
        insSet = instructions.trim().split(" ");
        insSet[0] = [insSet[0]];
    }
    if(insSet.length!=3||insSet[1]!="in"&&insSet[1] != "of"){
        throw new Error("error");
    }
    return insSet;
}

function analysisInstructions(vm, instructions, elm, parent){
    let insSet = getVirtualNodeData(instructions);
    let dataSet = getValue(vm._data, insSet[2]);
    if (!dataSet) {
        throw new Error("error");
    }
    for (let i = 0 ; i < dataSet.length ; i ++) {
        let tempDom = document.createElement(elm.nodeName);
        tempDom.innerHTML = elm.innerHTML;
        let env = analysisKV(insSet[0], dataSet[i], i);
        tempDom.setAttribute("env", JSON.stringify(env));
        parent.elm.appendChild(tempDom);
    }
}

function analysisKV(instructions, value, index) {
    return {
        [instructions[0]]: value
    }
}