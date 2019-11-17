const birdDom = document.querySelector('.bird');
const birdStyles = getComputedStyle(birdDom);
const birdWidth = parseFloat(birdStyles.width);
const birdHeight = parseFloat(birdStyles.height);
const birdTop = parseFloat(birdStyles.top);
const birdLeft = parseFloat(birdStyles.left);
const gameDom =  document.querySelector('.game');
const gameHeight = gameDom.clientHeight;

class Bird extends Rectangle{
    constructor(){
        super(birdWidth,birdHeight,birdLeft,birdTop,0,0,birdDom);
        this.g = 1500; //向下的加速度，单位：像素/秒^2
        this.maxY = gameHeight - landHeight - this.height;
        this.swingStatus = 1; //小鸟的翅膀状态
    }
    render(){
        super.render();
        this.dom.className = `bird swing${this.swingStatus}`
    }
    move(duration){
        //根据加速度改变速度
        this.ySpeed += this.g * duration;
        if(Math.abs(this.ySpeed) < this.g * duration){
            this.swingStatus = 2;
        }else if(this.ySpeed > this.g * duration){
            this.swingStatus = 1;
        }else{
            this.swingStatus = 3;
        }
        super.move(duration);
    }
    onMove(){
        // 控制坐标范围
        if(this.top<0){
            this.top = 0;
        }
        else if(this.top > this.maxY){
            this.top = this.maxY;
        }
    }
    // 向上跳，直接给一个向上的速度
    jump(){
        this.ySpeed = -550;
    }
}
