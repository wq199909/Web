# 富有表现力的 JavaScript

## 灵活性

```js
// 开始和停止一个动作
function startAnimation(){
    // ...
}
function endAnimation(){
    // ...
}
``` 

```js
// 开始和停止一个动作
let Anima = function(){
    // ...
};
Anima.prototype.start = function(){
    // ...
};
Anima.prototype.end = function(){
    // ...
};
``` 

```js
// 开始和停止一个动作
let Anima = function(){
    // ...
};
Anima.prototype = {
    start : function(){
        // ...
    },
    end : function(){
        // ...
    }
};
```

```js
// 开始和停止一个动作
let Anima = function(){
    // ...
};
Function.prototype.method = function(name, fn){
    this.prototype[name] = fn;
};
Anima.method("start", function(){
    // ...
});
Anima.method("end", function(){
    // ...
});
```

```js
// 开始和停止一个动作
let Anima = function(){
    // ...
};
Function.prototype.method = function(name, fn){
    this.prototype[name] = fn;
    return this;
};
Anima
    .method("start", function(){
        // ...
    }).method("end", function(){
        // ...
    });
```

## 弱类型

定义变量时不必声明类型，但不是说变量没有类型

## 函数是一等对象

可以存储在变量中，可以作为返回值、参数

匿名函数

闭包

## 对象的易变性

js中一切皆为对象，而对象都是易变的

## 继承

js中继承是基于对象的原型链

## 设计模式

使用设计模式的原因

1. 可维护性
2. 沟通
3. 性能

不使用设计模式的原因

1. 复杂性
2. 性能