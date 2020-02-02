import { GameStatus, MoveDirection, GameViewer } from "./types";
import { SquareGroup } from "./SquareGroup";
import { createTeris } from "./Teris";
import { TerisRule } from "./TerisRule";
import GameConfig from "./GameConfig";
import { Square } from "./Square";

export class Game{
    // 游戏状态
    private _gameStatus:GameStatus = GameStatus.init;
    // 当前操作的方块
    private _curTeris?: SquareGroup;
    // 下一个方块
    private _nextTeris: SquareGroup = createTeris({x: 0, y: 0});
    /**
     * 游戏开始
     */
    private _timer?:number;
    private _duration:number = 1000;
    // 当前游戏中存在的方块
    private _exists: Square[] = [];

    private score = 0;
    constructor(private _viewer:GameViewer){
        this.createNext();
        this._viewer.init(this);
        this._viewer.showState(this._gameStatus);
        this._viewer.showScore(this.score);
    }
    private createNext(){
        this._nextTeris = createTeris({x:0,y:0});
        this.resetCenterPoint(GameConfig.nextSize.width, this._nextTeris);
        this._viewer.showNext(this._nextTeris);
    }
    init(){
        this._exists.forEach(sq=>{
            if(sq.viewer){
                sq.viewer.remove();
            }
        })
        this._exists = [];
        this._curTeris = undefined;
        this.createNext();
        this.score = 0;
        this._viewer.showScore(this.score);
        this._duration = 1000;
    }
    start(){
        if(this._gameStatus === GameStatus.playing){
            return;
        }
        if(this._gameStatus===GameStatus.over){
            this.init();
        }
        this._gameStatus = GameStatus.playing;
        this._viewer.showState(this._gameStatus);
        if(!this._curTeris){
            this.switchTeris();
        }
        this.autoDrop();
    }
    /**
     * 游戏暂停
     */
    pause(){
        if(this._gameStatus===GameStatus.playing){
            this._gameStatus=GameStatus.pause;
            clearInterval(this._timer);
            this._timer = undefined;
        }
        this._viewer.showState(this._gameStatus);
    }
    control_left(){
        if(this._curTeris&&this._gameStatus===GameStatus.playing){
            TerisRule.move(this._curTeris,MoveDirection.left, this._exists);
        }
    }
    control_right(){
        if(this._curTeris&&this._gameStatus===GameStatus.playing){
            TerisRule.move(this._curTeris,MoveDirection.right, this._exists);
        }
    }
    control_down(){
        if(this._curTeris&&this._gameStatus===GameStatus.playing){
            TerisRule.moveDirectly(this._curTeris,MoveDirection.down, this._exists);
        }
    }
    control_rotate(){
        if(this._curTeris&&this._gameStatus===GameStatus.playing){
            TerisRule.rotate(this._curTeris, this._exists);
        }
    }
    /**
     * 方块自由下落
     */
    private autoDrop(){
        if(this._timer || this._gameStatus !== GameStatus.playing){
            return;
        }
        this._timer = setInterval(()=>{
            if(this._curTeris){
                if(!TerisRule.move(this._curTeris, MoveDirection.down, this._exists)){
                    this.hitBottom();
                }
            }
        }, this._duration)
    }
    /**
     * 切换方块
     */
    private switchTeris(){
        this._curTeris = this._nextTeris;
        this._curTeris.squares.forEach(sq=>{
            if(sq.viewer){
                sq.viewer.remove();
            }
        })
        this.resetCenterPoint(GameConfig.panelSize.width, this._curTeris);
        if(!TerisRule.canIMove(this._curTeris.shape, this._curTeris.centerPoint, this._exists)){
            this._gameStatus = GameStatus.over;
            clearInterval(this._timer);
            this._timer = undefined;
            this._viewer.showState(this._gameStatus);
            return;
        }
        this.createNext();
        this._viewer.switch(this._curTeris);
    }

    private resetCenterPoint(width: number, teris: SquareGroup){
        const x = Math.ceil(width / 2) - 1;
        const y = 0;
        teris.centerPoint = {x, y};
        while(teris.squares.some(it=>it.point.y<0)){
            teris.centerPoint = {
                x: teris.centerPoint.x,
                y: teris.centerPoint.y + 1
            }
        }
    }
    private hitBottom(){
        this._exists.push(...this._curTeris!.squares);
        this.switchTeris();
        const num = TerisRule.deleteSquares(this._exists);
        this.addScore(num);
    }
    private addScore(lineNum:number){
        if(lineNum==0){
            return;
        }else if(lineNum===1){
            this.score += 10;
        }else if(lineNum===2){
            this.score += 30;
        }else if(lineNum===3){
            this.score += 60;
        }else if(lineNum===4){
            this.score += 100;
        }
        this._viewer.showScore(this.score);
        if(this.score>=3000){
            this._duration = 400;
        }else if(this.score>=2000){
            this._duration = 600;
        }else if(this.score>=1000){
            this._duration = 800;
        }else if(this.score>=500){
            this._duration = 900;
        }

    }
}