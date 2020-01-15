"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Descripttion:
 * @version:
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 17:45:42
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 18:38:50
 */
const enums_1 = require("./enums");
class Deck {
    constructor(cards) {
        this.cards = [];
        if (cards) {
            this.cards = cards;
        }
        else {
            this.init();
        }
    }
    init() {
        const marks = Object.values(enums_1.Mark);
        const colors = Object.values(enums_1.Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    }
                });
            }
        }
        this.cards.push({
            type: "big",
            getString: () => "BJ"
        });
        this.cards.push({
            type: "small",
            getString: () => "SJ"
        });
    }
    /**
     * 打印牌
     */
    print() {
        let res = "\n";
        this.cards.forEach((card, i) => {
            res += card.getString();
            if ((i + 1) % 6 == 0)
                res += "\n";
            else
                res += "\t";
        });
        console.log(res);
    }
    /**
     * 洗牌
     */
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }
    publish() {
        let player1, player2, player3, left;
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
    takeCards(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift());
        }
        return new Deck(cards);
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
exports.Deck = Deck;
