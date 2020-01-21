
/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-17 10:57:40
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-17 11:54:39
 */
// function take<T>(arr:T[], n: number): T[]{
//     if(n>=arr.length){
//         return arr;
//     }
//     const newArr:T[] = [];
//     for(let i = 0; i < n; i++){
//         newArr.push(arr[i]);
//     }
//     return newArr;
// }

// let arr = take(["djalf", 6, 4], 1);

// type callback<T> = (n:T, i:number)=>boolean

// function filter<T>(arr: T[], callback: callback<T>):T[]{
//     const newArr:T[] = [];
//     arr.forEach((n, i)=>{
//         if(callback(n, i)){
//             newArr.push(n);
//         }
//     })
//     return newArr;
// }

// const arr = [3, 4, 6, 2, 222];

// console.log(filter(arr, n=>n%2!==0));

// import { ArrayHelper } from "./ArrayHelper";

// const helper = new ArrayHelper([3, 4, 5]);

// helper.take([2,1,4], 2);

// interface hasNameProperty {
//     name: string
// }

// /**
//  * 将某个对象的name属性的每个单词的首字母大写,返回该对象
//  * @param obj 
//  */
// function nameToUpperCase<T extends hasNameProperty>(obj: T):T{
//     obj.name = obj.name
//         .split(" ")
//         .map(s=>s[0].toUpperCase+s.substr(1))
//         .join(" ");
//     return obj;
// }

// const o = {
//     name: "kevin yuan",
//     age: 222,
//     gender: "男"
// }
// const newO = nameToUpperCase(o);
// console.log(newO.name);
/**
 * 将两个数组进行混合
 * @param arr1 
 * @param arr2 
 */
function mixinArray<T, K>(arr1:T[], arr2:K[]):(T|K)[]{
    if(arr1.length!=arr2.length){
        throw new Error("两个数组长度不相等");
    }
    let result: (T|K)[] = [];
    for(let i = 0; i < arr1.length; i++){
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    return result;
}