/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 17:45:42
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 18:38:50
 */
import { Mark, Color } from './enums'
import { Card, NomalCard, Joker } from './types'

interface PublishResult{
    player1: Deck,
    player2: Deck, 
    player3: Deck, 
    left: Deck
}

export class Deck {
    private cards: Card[] = []
    constructor(cards?:Card[]) {
        if(cards){
            this.cards = cards
        }else{
            this.init();
        }
    }
    private init() {
        const marks = Object.values(Mark);
        const colors = Object.values(Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark
                    }
                } as NomalCard)
            }
        }
        this.cards.push({
            type: "big",
            getString: () => "BJ"
        } as Joker);
        this.cards.push({
            type: "small",
            getString: () => "SJ"
        } as Joker);
    }
    /**
     * 打印牌
     */
    print() {
        let res = "\n";
        this.cards.forEach((card, i) => {
            res += card.getString();
            if ((i + 1) % 6 == 0) res += "\n";
            else res += "\t";
        })
        console.log(res);
    }
    /**
     * 洗牌
     */
    shuffle(){
        for(let i = 0; i < this.cards.length; i++){
            const targetIndex = this.getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }

    publish():PublishResult{
        let player1:Deck, player2:Deck, player3:Deck, left:Deck;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards);
        return {
            player1,
            player2, 
            player3, 
            left
        }; 
    }
    
    private takeCards(n: number):Deck{
        const cards: Card[] = [];
        for(let i = 0; i < n; i++){
            cards.push(this.cards.shift() as Card);
        }
        return new Deck(cards);
    }

    private getRandom(min: number, max: number){
        return Math.floor(Math.random()*(max-min))+min;
    }
}