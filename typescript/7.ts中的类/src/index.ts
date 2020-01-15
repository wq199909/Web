/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 17:01:08
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 17:44:12
 */
class User{
    readonly id: number
    gender: "男"|"女"
    pid?: string
    private _publishNumber: number = 3
    private _curNumber: number = 0

    constructor(public name: string,private _age: number, gender:"男"|"女"="男"){
        this.id = Math.random();
        this.gender = gender;
    }
    setAge(age:number){
        if(age<0){
            this._age=0;
        }else if(age>200){
            this._age=200
        }else{
            this._age=age
        }
    }
    getAge(){
        return this._age
    }
    publish(title:string){
        if(this._curNumber<this._publishNumber){
            console.log("发布一篇文章："+title);
        }else{
            console.log("你今天不能发布文章了");
        }
    }
}

let u = new User("aa", 2);