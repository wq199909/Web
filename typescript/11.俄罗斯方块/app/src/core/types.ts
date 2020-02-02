import { SquareGroup } from "./SquareGroup";
import { Game } from "./Game";

export interface Point{
    x: number,
    y: number
}
export interface IViewer{
    /**
     * 显示
     */
    show():void,
    /**
     * 移除
     */
    remove():void
}
export type Shape = {
    x: number,
    y: number
}[]

export enum MoveDirection{
    left,
    right,
    down
}

export enum GameStatus{
    init,
    playing,
    pause,
    over
}

export interface GameViewer{
    /**
     * 
     * @param teris 下一个方块对象
     */
    showNext(teris:SquareGroup):void;
    /**
     * 
     * @param teris 切换的方块对象
     */
    switch(teris:SquareGroup):void
    /**
     * 完成界面的初始化
     * @param game 
     */
    init(game:Game):void

    showScore(score:number):void

    showState(state:GameStatus):void
}