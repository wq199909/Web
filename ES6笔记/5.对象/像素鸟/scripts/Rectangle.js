/**
 * 矩形类：可以移动
 * 属性：宽度、高度、横坐标、纵坐标、横向速度、纵向速度、对应的dom对象
 * xSpeed:横向速度，单位（像素/秒），正数向右，负数向左
 * ySpeed:纵向速度，单位（像素/秒），正数向下，负数向上
 */

class Rectangle{
    constructor(width, height, left, top, xSpeed, ySpeed, dom){
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.dom = dom;
    }
    render() {
        this.dom.style.height = this.height + 'px';
        this.dom.style.width = this.width + 'px';
        this.dom.style.left = this.left + 'px';
        this.dom.style.top = this.top + 'px';   
    }
    /**
     * 按照矩形的速度，和指定的时间移动
     * @param {*} duration 单位（秒）
     */
    move(duration){
        const xDis = this.xSpeed * duration; //横向的距离
        const yDis = this.ySpeed * duration; //纵向的距离
        const newLeft = this.left + xDis;
        const newTop = this.top + yDis;
        if(new.target==Bird){
            console.log(this.xSpeed, duration)
        }
        // 有可能会重新更改坐标
        this.left = newLeft;
        this.top = newTop;
        this.onMove && this.onMove();
        this.render();
    }
}