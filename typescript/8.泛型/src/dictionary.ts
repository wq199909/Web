/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-17 12:00:41
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-17 12:26:38
 */
/**
 * 开发一个字典类（Dictionary）
 * 字典中会保存键值对的数据
 * 
 * 键值对数据的特点：
 * 1. 键（key）可以是任何类型，但不允许重复
 * 2. 值（value）可以是任何类型
 * 3. 每个键对应一个值
 * 4. 所有的键类型相同，所有的值类型相同
 * 
 * 字典中对键值对数据的操作：
 * 1. 按照键，删除对应的键值对
 * 2. 循环每一个键值对
 * 3. 得到当前键值对的数量
 * 4. 判断某个键是否存在
 * 5. 重新设置某个键对应的值，如果不存在，则添加
 */
export type callback<K,V>  = (key:K, val:V) => void
export class Dictionary<K, V>{
    private keys:K[] = [];
    private vals:V[] = [];
    get size(){
        return this.keys.length;
    }
    constructor(){

    }
    set(key: K, val: V){
        const i = this.keys.indexOf(key);
        if(i<0){
            this.keys.push(key);
            this.vals.push(val);
        }else{
            this.vals[i] = val;
        }
        console.log(this.keys);
        console.log(this.vals);
    }

    forEach(callback:callback<K,V>){
        this.keys.forEach((k, i)=>{
            const v = this.vals[i];
            callback(k, v);
        })
    }

    has(key: K){
        return this.keys.includes(key);
    }

    delete(key: K){
        const i = this.keys.indexOf(key);
        if(i===-1){
            return;
        }
        this.keys.splice(i, 1);
        this.vals.splice(i, 1);
    }
}