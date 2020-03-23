# 继承

## 类式继承

用函数声明类，new来创建实例

1. 原型链

js没有extend关键字，使用原型链

2. extend函数

```js
function extend(subClass, superClass){
    var F = function(){}
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
}
```

## 原型式继承

用一个类的声明定义对象的结构，实例化该类创建一个新对象

**clone函数**

```js
function clone(object){
    var F = function (){};
    F.prototype = object;
    return new F;
}
```

## 掺元类

创建一个包含各种通用方法的掺元类，然后在用它扩充其他类

**argument函数**

```js
function argument(receivingClass, givingClass){
    if(arguments[2]){
        for(var i = 2, len = arguments.length; i < len; i++){
            receivingClass.prototype[arguments[i]] = givingClass.protoype[arguments[i]];
        }
    }else{
        for(methodName in givingClass.protoype){
            if(!receivingClass.prototype[methodName]){
            receivingClass.prototype[methodName] = givingClass.protoype[methodName];
                
            }
        }
    }
}
```