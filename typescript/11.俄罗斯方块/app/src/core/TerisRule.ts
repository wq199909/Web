import { Shape, Point, MoveDirection } from "./types";
import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { Square } from "./Square";

function isPoint(obj:any):obj is Point{
    if(typeof obj.x === "undefined"){
        return false;
    }
    return true;
}

export class TerisRule{
    /**
     * 是否可移动到目标位置
     * @param shape 
     * @param targetPoint 
     * @param exists 
     */
    static canIMove(shape:Shape, targetPoint: Point, exists: Square[]):boolean{
        let canMove = true;
        shape.forEach(point=>{
            if(point.x+targetPoint.x<0||point.x+targetPoint.x>=GameConfig.panelSize.width){
                canMove = false;
            }else if(point.y+targetPoint.y<0||point.y+targetPoint.y>=GameConfig.panelSize.height){
                canMove = false;
            }else{
                if(canMove){
                    canMove = !exists.some((it)=>(it.point.x === point.x+targetPoint.x && it.point.y === point.y+targetPoint.y));
                }
            }
        })
        return canMove;
    }
    /**
     * 移动到目标
     * @param teris 
     * @param targetPointOrDirection 
     * @param exists 
     */
    static move(teris:SquareGroup, targetPointOrDirection:Point|MoveDirection, exists:Square[]):boolean{
        if(isPoint(targetPointOrDirection)){
            if(this.canIMove(teris.shape, targetPointOrDirection, exists)){
                teris.centerPoint = targetPointOrDirection;
                return true;
            }
            return false;
        }else{
            const direction = targetPointOrDirection;
            let targetPoint;
            if(direction === MoveDirection.down){
                targetPoint = {
                    x: teris.centerPoint.x,
                    y: teris.centerPoint.y + 1
                }
            }else if(direction === MoveDirection.left){
                targetPoint = {
                    x: teris.centerPoint.x - 1,
                    y: teris.centerPoint.y
                }
            }else{
                targetPoint = {
                    x: teris.centerPoint.x + 1,
                    y: teris.centerPoint.y
                }
            }
            return this.move(teris, targetPoint, exists);
        }
    }
    /**
     * 移动到最远到目标方向
     * @param teris 
     * @param direction 
     * @param exists 
     */
    static moveDirectly(teris:SquareGroup, direction:MoveDirection, exists:Square[]){
        while(this.move(teris, direction, exists)){}
    }
    /**
     * 旋转
     * @param teris 
     * @param exists 
     */
    static rotate(teris:SquareGroup, exists:Square[]):boolean{
        const newShape = teris.afterRotateShape();
        if(this.canIMove(newShape, teris.centerPoint, exists)){
            teris.rotate();
            return true;
        }else{
            return false;
        }
    }
    /**
     * 获得y行到方块数组
     * @param exists 
     * @param y 
     */
    static getLineSquare(exists: Square[], y:number){
        return exists.filter(sq=>sq.point.y===y);
    }
    /**
     * 消除，返回消除行数
     * @param exists 
     */
    static deleteSquares(exists: Square[]):number{
        const ys = exists.map(sq=>sq.point.y);
        const maxY = Math.max(...ys);
        const minY = Math.min(...ys);
        let num = 0
        for(let y = minY; y <= maxY; y++){
            if(this.deleteLine(exists, y)){
                num++;
            }
        }
        return num;
    }
    private static deleteLine(exists: Square[], y: number):boolean{
        const squares = this.getLineSquare(exists, y);
        if(squares.length === GameConfig.panelSize.width){
            squares.forEach(sq=>{
                if(sq.viewer){
                    sq.viewer.remove();
                }
                exists.splice(exists.indexOf(sq),1);
            })
            exists.filter(sq=>sq.point.y<y).forEach(sq=>{
                sq.point = {
                    x: sq.point.x,
                    y: sq.point.y + 1
                }
            })
            return true;
        }
        return false;
    }
}