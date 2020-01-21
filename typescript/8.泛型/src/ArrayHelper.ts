/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-17 11:28:31
 * @LastEditors: WangQing
 * @LastEditTime: 2020-01-17 11:33:45
 */
export class ArrayHelper<T>{
    constructor(private arr:T[]){

    }
    take(arr:T[], n: number): T[]{
        if(n>=arr.length){
            return arr;
        }
        const newArr:T[] = [];
        for(let i = 0; i < n; i++){
            newArr.push(arr[i]);
        }
        return newArr;
    }
    private getRandom(min:number, max:number){
        return Math.floor(Math.random()*(max-min)+min);
    }
    shuffle(arr:T[]){
        for(let i = 0; i < arr.length; i++){
            const targetIndex = this.getRandom(0, arr.length);
            const temp = arr[i];
            arr[i] = arr[targetIndex];
            arr[targetIndex] = temp;
        }
    }
}