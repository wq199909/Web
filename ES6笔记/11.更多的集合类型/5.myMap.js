const myMap = (()=>{
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
                this.set(...item);
            }
        }
        set(...data){
            if(!this.has(data[0])){
                __datas.push(data);
            }
            this[Datas] = this.arrayToClassArray();
            return this;
        }
        get(key){
            for(const item of __datas){
                if(this.isEqual(item[0], key)){
                    return item[1];
                }
            }
            return undefined;
        }
        has(key){
            for(const item of __datas){
                if(this.isEqual(item[0], key)){
                    return true;
                }
            }
            return false;
        }
        delete(key){
            for (let i = 0; i < __datas.length; i++) {
                const element = __datas[i];
                if (this.isEqual(element[0], key)) {
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
        isEqual(key1, key2){
            if(key1 === 0 && key2 === 0){
                return true;
            }
            return Object.is(key1, key2);
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
                obj[i] = {
                    key: element[0],
                    value: element[1]
                };
                obj[i].__proto__ = null;
            }
            obj.__proto__ = null;
            return obj;
        }
    }
})()
