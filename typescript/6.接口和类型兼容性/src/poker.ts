/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-14 16:03:24
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 16:30:26
 */
/**
 * 扑克牌小练习
 * 目标
 * 1. 创建一副扑克牌（不包括大小王），打印该扑克牌
 * 2. 使用枚举进行优化
 * 3. 使用模块化优化
 * 4. 用接口改造程序，加入大小王
 */
import {Color, Mark} from './enums'
import {Deck, Joker, NomalCard} from './types'

function createDeck(): Deck{
    const deck:Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for(const m of marks){
        for(const c of colors){
            deck.push({
                color: c,
                mark: m,
                getString(){
                    return this.color + this.mark
                }
            } as NomalCard)
        }
    }
    deck.push({
        type: "big",
        getString:()=>"BigJoker"
    } as Joker);
    deck.push({
        type: "small",
        getString:()=>"SmallJoker"
    } as Joker);
    return deck;
}

function printDeck(deck:Deck){
    deck.forEach(card=>{
        let str = card.getString();
        console.log(str);
    })
}

let deck = createDeck();
printDeck(deck);