/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-14 16:03:24
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 18:43:44
 */
/**
 * 扑克牌小练习
 * 目标
 * 1. 创建一副扑克牌（不包括大小王），打印该扑克牌
 * 2. 使用枚举进行优化
 * 3. 使用模块化优化
 * 4. 用接口改造程序，加入大小王
 * 5. 用类改造程序，增加洗牌、发牌功能
 */

 
import { Deck } from './deck'

let deck = new Deck();
console.log("===========初始化后=============")
deck.print();
deck.shuffle();
console.log("===========洗牌之后=============")
deck.print();
const result = deck.publish();
console.log("============发牌之后============")
console.log("==============玩家1============")
result.player1.print();
console.log("==============玩家2============")
result.player2.print();
console.log("==============玩家3============")
result.player3.print();
console.log("===============剩余============")
result.left.print();