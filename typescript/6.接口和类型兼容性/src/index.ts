/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 15:16:09
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 15:56:54
 */
// // type User = {
// //     name: string
// //     age: number
// //     sayHello(): void
// // }

// interface User{
//     name: string
//     age: number
//     sayHello(): void
// }

// // type Condition = {
// //     (n:number):boolean
// // }

// interface Condition{
//     (n:number): boolean
// }

// function sum(numbers:number[], callBack: Condition){
//     let s = 0;
//     numbers.forEach(n=>{
//         if(callBack(n)){
//             s += n;
//         }
//     })
//     return s;
// }

// interface A{
//     T1: string
// }
// interface B extends A{
//     T2: number
// }
// interface C extends A, B{
//     T3: boolean
// }
// let u:B={
//     T1: "fdkja",
//     T2: 23
// }
// let x:C={
//     ...u,
//     T3: true
// }

// interface User{
//     readonly id: string
//     name: string
//     age: number
//     readonly arr: readonly number[]
// }

// let u:User = {
//     id: '123',
//     name: 'asdf',
//     age: 20,
//     arr: [1,2]
// }

interface Duck{
    sound: "嘎嘎嘎",
    swin(): void
}

let person = {
    name: "伪装成鸭子的人",
    age: 11,
    sound: "嘎嘎嘎" as "嘎嘎嘎",
    swin:()=>{
        console.log(`${this.name}正在游泳，并且发出${this.sound}的叫声`);
    }
}
