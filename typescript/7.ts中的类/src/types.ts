/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 16:14:22
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 16:23:17
 */
import {Color, Mark} from './enums'
export type Deck = (NomalCard|Joker)[];

export interface Card{
    getString(): string
}

export interface NomalCard extends Card{
    color: Color,
    mark: Mark
};

export interface Joker extends Card{
    type: "big"|"small"
}