/*
 * @Descripttion:
 * @version:
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 17:01:08
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-15 17:44:12
 */
class User {
    constructor(name, _age, gender = "男") {
        this.name = name;
        this._age = _age;
        this._publishNumber = 3;
        this._curNumber = 0;
        this.id = Math.random();
        this.gender = gender;
    }
    setAge(age) {
        if (age < 0) {
            this._age = 0;
        }
        else if (age > 200) {
            this._age = 200;
        }
        else {
            this._age = age;
        }
    }
    getAge() {
        return this._age;
    }
    publish(title) {
        if (this._curNumber < this._publishNumber) {
            console.log("发布一篇文章：" + title);
        }
        else {
            console.log("你今天不能发布文章了");
        }
    }
}
let u = new User("aa", 2);
