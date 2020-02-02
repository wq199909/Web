import { GameViewer, GameStatus } from "../types";
import { SquareGroup } from "../SquareGroup"
import { SquarePageViewer } from "./SquarePageViewer";
import $ from "jquery"
import { Game } from "../Game";
import GameConfig from "../GameConfig";
import PageConfig from "./PageConfig";

export class GamePageViewer implements GameViewer{
    showState(state: GameStatus): void {
        if(state===GameStatus.playing){
            this.stateDom.html("");
        }else if(state===GameStatus.over){
            this.stateDom.html("游戏结束");
        }else if(state===GameStatus.pause){
            this.stateDom.html("游戏暂停");
        }else{
            this.stateDom.html("开始游戏");
        }
    }
    showScore(score: number): void {
        this.scoreDom.html("分数&nbsp;"+score.toString());
    }
    private stateDom = $("#state");
    private scoreDom = $("#score");
    private nextDom = $("#next");
    private panelDom = $("#panel");
    init(game: Game): void {
        this.panelDom.css({
            width: GameConfig.panelSize.width * PageConfig.SquareSize.width,
            height: GameConfig.panelSize.height * PageConfig.SquareSize.height
        })
        this.nextDom.css({
            width: GameConfig.nextSize.width * PageConfig.SquareSize.width,
            height: GameConfig.nextSize.height * PageConfig.SquareSize.height
        })
        document.onkeydown = e => {
            if(e.keyCode===32){
                game.pause();
            }else if(e.keyCode===40){
                game.control_down();
            }else if(e.keyCode===13){
                game.start();
            }else if(e.keyCode===37){
                game.control_left();
            }else if(e.keyCode===39){
                game.control_right();
            }else if(e.keyCode===38){
                game.control_rotate();
            }
        }
    }
    showNext(teris: SquareGroup): void {
        teris.squares.forEach(sq=>{
            sq.viewer = new SquarePageViewer(sq, this.nextDom);
            sq.viewer.show();
        })
    }    
    switch(teris: SquareGroup): void {
        teris.squares.forEach(sq=>{
            sq.viewer!.remove();
            sq.viewer = new SquarePageViewer(sq, this.panelDom);
            sq.viewer.show();
        })
    }
}