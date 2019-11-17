const gameWidth = gameDom.clientWidth;
class Pipe extends Rectangle{
    constructor(height, top, speed, dom){
        super(52, height, gameWidth, top, speed, 0, dom)
    }
    onMove(){
        if(this.left < -this.width){
            // 移除dom
            this.dom.remove();
        }
    }
}
function getRandom(max, min){
    return Math.random()*(max-min) + min;
}
class PipePare{
    constructor(speed){
        this.spaceHeight = 150; //水管空隙高度
        this.minHeight = 80; //水管最小高度
        this.maxHeight = landTop - this.minHeight - this.spaceHeight;
        
        const upHeight = getRandom(this.maxHeight, this.minHeight);
        const upDom = document.createElement('div');
        upDom.className = "pipe up";
        this.upPipe = new Pipe(upHeight, 0, speed, upDom); //上水管

        const downHeight = landTop - upHeight - this.spaceHeight;
        const downTop =  landTop - downHeight;
        const downDom = document.createElement('div');
        downDom.className = "pipe down";
        this.downPipe = new Pipe(downHeight, downTop, speed, downDom) //下水管
        gameDom.appendChild(upDom);
        gameDom.appendChild(downDom);
    }
    move(duration){
        this.upPipe.move(duration);
        this.downPipe.move(duration);
    }
    /**
     * 判断是否可用
     */
    get useLess(){
        return this.upPipe.left < -this.upPipe.width;
    }
}
class PipePareProducer{
    constructor(speed){
        this.pairs = [];
        this.timer = null;
        this.tick = 1500;
        this.speed = speed;
    }
    startProducer(){
        if(this.timer){
            clearInterval(this.timer);
        }
        this.timer = setInterval(()=>{
            this.pairs.push(new PipePare(this.speed));
            for (let i = 0; i < this.pairs.length; i++) {
                var pair = this.pairs[i];
                if (pair.useLess) {
                    //没用的柱子对
                    this.pairs.splice(i, 1);
                    i--;
                }
            }

        }, this.tick);
    }
    stopProduce() {
        if(this.timer){
            clearInterval(this.timer);
        }
    }
}
