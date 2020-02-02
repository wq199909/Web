import { Square } from "./Square";
import { Point, Shape } from "./types";
import { SquarePageViewer } from "./viewer/SquarePageViewer";
import $ from "jquery"

export class SquareGroup{
    private _squares: readonly Square[]
    public get squares(){
        return this._squares
    }
    public get centerPoint(): Point{
        return this._centerPonit
    }
    public get shape():Shape{
        return this._shape;
    }
    public set centerPoint(v: Point){
        this._centerPonit = v;
        this._shape.forEach((p,i)=>{
            this._squares[i].point = {
                x: this._centerPonit.x + p.x, 
                y: this._centerPonit.y + p.y
            }
        })
    }
    constructor(
        private _shape: Shape,
        private _centerPonit: Point,
        private _color: string
    ){
        const arr: Square[] = [];
        this._shape.forEach(p=>{
            const sq = new Square({
                x: this._centerPonit.x + p.x, 
                y: this._centerPonit.y + p.y
            }, this._color);
            // sq.viewer = new SquarePageViewer(sq, $("#root"));
            arr.push(sq);
        })
        this._squares = arr;
    }
    protected isClock = true; //是否为顺时针旋转
    afterRotateShape():Shape{
        if(this.isClock){
            return this._shape.map(p=>{
                const newP:Point = {
                    x: -p.y,
                    y: p.x
                };
                return newP;
            })
        }else{
            return this._shape.map(p=>{
                const newP:Point = {
                    x: p.y,
                    y: -p.x
                };
                return newP;
            })
        }
    }
    rotate(){
        const newShap = this.afterRotateShape();
        this._shape = newShap;
        this._shape.forEach((p,i)=>{
            this.squares[i].point = {
                x: this._centerPonit.x + p.x, 
                y: this._centerPonit.y + p.y
            }
        })
    }
}