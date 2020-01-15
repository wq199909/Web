/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-14 16:03:24
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 11:47:28
 */
/**
 * 扑克牌小练习
 * 目标
 * 1. 创建一副扑克牌（不包括大小王），打印该扑克牌
 * 2. 使用枚举进行优化
 * 3. 使用模块化优化
 */

import {Color, Mark} from './enums'

type NomalCard = {
    color: Color,
    mark: Mark
};
type Deck = NomalCard[];

function createDeck(): Deck{
    const deck:Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for(const m of marks){
        for(const c of colors){
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck;
}

function printDeck(deck:Deck){
    deck.forEach(card=>{
        let str = card.color+card.mark;
        console.log(str);
    })
}

let deck = createDeck();
printDeck(deck);