const mySet = (()=>{
    const __datas = [];
    const Datas = Symbol('datas');
    return class{
        constructor(iterator = []){
            // 验证是否可迭代的对象
            if(typeof iterator[Symbol.iterator] !== 'function'){
                throw new Error(`TypeError: ${typeof iterator} ${iterator} is not iterable`);
            }
            this[Datas] = [];
            for(const item of iterator){
                this.add(item);
            }
        }
        add(data){
            if(!this.has(data)){
                __datas.push(data);
            }
            this[Datas] = this.arrayToClassArray();
            return this;
        }
        has(data){
            for(const item of __datas){
                if(this.isEqual(item, data)){
                    return true;
                }
            }
            return false;
        }
        delete(data){
            for (let i = 0; i < __datas.length; i++) {
                const element = __datas[i];
                if (this.isEqual(element, data)) {
                    //删除
                    __datas.splice(i, 1);
                    this[Datas] = this.arrayToClassArray();
                    return true;
                }
            }
            return false;
        }
        clear() {
            __datas.length = 0;
            this[Datas] = this.arrayToClassArray();
        }
        get size(){
            return __datas.length;
        }
        isEqual(data1, data2){
            if(data1 === 0 && data2 === 0){
                return true;
            }
            return Object.is(data1, data2);
        }
        *[Symbol.iterator]() {
            for (const item of __datas) {
                yield item;
            }
        }
        forEach(callback){
            for(const item of __datas){
                callback(item, item, this[Datas])
            }
        }
        arrayToClassArray(){
            const obj = {};
            for (let i = 0; i < __datas.length; i++) {
                const element = __datas[i];
                obj[i] = element;
            }
            obj.__proto__ = null;
            return obj;
        }
    }
})()