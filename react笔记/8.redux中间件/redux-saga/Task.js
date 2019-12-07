/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 20:32:49
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 22:04:54
 */
export class Task {

    constructor(next, cbObj) {
        this.next = next;
        this.cbObj = cbObj;
        this.cbObj.callback = () => {
            //结束了
            this.resolve && this.resolve();
        }
    }

    /**
     * 取消当前任务
     */
    cancel() {
        this.next(null, null, true);
    }

    /**
     * 将当前的task转换为一个promise对象
     */
    toPromise() {
        return new Promise(resolve => {
            this.resolve = resolve;
        })
    }
}