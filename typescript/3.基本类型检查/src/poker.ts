/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-14 16:03:24
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-14 16:19:32
 */
/**
 * 扑克牌小练习
 * 目标
 * 1. 创建一副扑克牌（不包括大小王），打印该扑克牌
 */

type Color =  "♥"|"♠"|"♦"|"♣"; 
type NomalCard = {
    color: Color,
    mark: number
};
type Deck = NomalCard[];

function createDeck(): Deck{
    const deck:Deck = [];
    for(let i = 1; i <= 13; i++){
        deck.push({
            mark:i,
            color:"♠"
        })
        deck.push({
            mark:i,
            color:"♣"
        })
        deck.push({
            mark:i,
            color:"♥"
        })
        deck.push({
            mark:i,
            color:"♦"
        })
    }
    return deck;
}

function printDeck(deck:Deck){
    deck.forEach(card=>{
        let str = card.color;
        if(card.mark<=10){
            str+=card.mark;
        }else if(card.mark==11){
            str+="J";
        }else if(card.mark==12){
            str+="Q";
        }else{
            str+="K";
        }
        console.log(str);
    })
}

let deck = createDeck();
printDeck(deck);