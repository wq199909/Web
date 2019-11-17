class Game{
    constructor(){
        this.sky = new Sky(-100);
        this.land = new Land(-100);
        this.bird = new Bird();
        this.pipeProducer = new PipePareProducer(-100);
        this.timer = null;
        this.tick = 16;
    }
    /**
     * 判断两个矩形碰撞
     * @param {*} rec1 
     * @param {*} rec2 
     */
    isHit(rec1, rec2){
        // 横向：两个矩形中心点的距离，是否小于矩形宽度之和的一半
        // 纵向：两个矩形中心点的距离，是否小于矩形高度之和的一半
        let centerX1 = rec1.left + rec1.width / 2;
        let centerY1 = rec1.top + rec1.height / 2;
        let centerX2 = rec2.left + rec2.width / 2;
        let centerY2 = rec2.top + rec2.height / 2;
        let disX = Math.abs(centerX1 - centerX2);
        let disY = Math.abs(centerY1 - centerY2);
        if (disX < (rec1.width + rec2.width) / 2 &&
            disY < (rec1.height + rec2.height) / 2
        ){
            console.log(rec1, rec2, disX, disY);
            return true;
        }
        return false;
    }
    start(){
        if(this.timer){
            return;
        }
        if (this.gameOver) {
            //重新开始游戏
            window.location.reload();
        }
        const duration = this.tick / 1000;
        this.pipeProducer.startProducer();
        this.timer = setInterval(()=>{
            if(this.isGameOver()){
                this.gameOver = true;
                clearInterval(this.timer);
                this.pipeProducer.stopProduce();
                return;
            }
            this.sky.move(duration);
            this.land.move(duration);
            this.bird.move(duration);
            this.pipeProducer.pairs.forEach(pair => {
                pair.move(duration);
            })
        }, this.tick)
    }
    isGameOver(){
        if(this.bird.top === this.bird.maxY){
            // 碰到大地
            return true;
        }
        for(let i = 0; i < this.pipeProducer.pairs.length; i++){
            const pair = this.pipeProducer.pairs[i];
            if(this.isHit(this.bird, pair.upPipe) || this.isHit(this.bird, pair.downPipe)){
                console.log(2)
                return true;
            }
        }
        return false;
    }
    stop() {
        clearInterval(this.timer);
        this.timer = null;
        this.pipeProducer.stopProduce();
    }
    regEvent() {
        window.onkeydown = (e) => {
            if (e.key === "Enter") {
                if (this.timer) {
                    this.stop();
                }
                else {
                    this.start();
                }
            }
            else if (e.key === " ") {
                this.bird.jump();
            }
        }
    }
}
let game = new Game();
game.regEvent();