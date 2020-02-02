import { Point, IViewer } from "./types"

/**
 * 小方块
 */

export class Square{
    private _viewer?: IViewer
    constructor(private _point:Point, private _color: string){

    }
    public get viewer(){
        return this._viewer;
    }
    public set viewer(v){
        this._viewer = v;
    }
    public get point(){
        return this._point
    }
    public set point(val){
        this._point = val;
        if(this._viewer){
            this._viewer.show();
        }
    }
    public get color(){
        return this._color
    }
}