/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-10 14:25:02
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-11 11:57:56
 */
import {initMixin} from './init.js';
import {renderMixin} from './render.js'

function MyVue(options){
    this._init(options);
    if (this.created != null) {
        this.created.call(this);
    }
    this._render();
}

initMixin(MyVue);
renderMixin(MyVue);

export default MyVue;