import { Square } from "../Square";
import $ from "jquery";
import { IViewer } from "../types";
import PageConfig from "./PageConfig";
/**
 * 显示一个小方块到页面上
 */
export class SquarePageViewer implements IViewer{
    private dom?: JQuery<HTMLElement>
    private _isRemove: boolean = false
    show(): void {
        if(!this.dom){
            this.dom = $("<div>").css({
                position: "absolute",
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: "1px solid #ccc",
                boxSizing: "border-box"
            }).appendTo(this._container);
        }
        this.dom.css({
            left: this._square.point.x * PageConfig.SquareSize.width,
            top: this._square.point.y * PageConfig.SquareSize.height,
            backgroundColor: this._square.color
        })
    }
    remove(): void {
        if(this.dom && !this._isRemove){
            this.dom.remove();
            this._isRemove = true; 
        }
    }
    constructor(
        private _square: Square,
        private _container: JQuery<HTMLElement>
    ){}
}