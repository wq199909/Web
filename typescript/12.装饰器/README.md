# 装饰器

## 概述

> 面向对象的概念（Java：注解，C#：特征），decorator
> angular大量使用，react中也会用到
> 目前js支持装饰器，目前处于建议征集的第二阶段

### 解决的问题

装饰器，能够带来额外的信息，可以达到分离关注点的作用

- 信息书写位置的问题
- 重复代码的问题

上述两个问题产生的根源：某些信息，在定义时，能够附加的信息量有限

装饰器的作用：为某些属性、类、参数、方法提供的元数据信息（metadata）

元数据：描述数据的数据

### 装饰器的本质

在js中，装饰器是一个函数。（装饰器是要参与运行的）





## 类装饰器

类装饰器的本质是一个函数，该函数接受一个参数，表示类本身（构造函数本身）

使用装饰器时```@得到一个函数```

在ts中，如何约束一个变量为类

- Function
- ```new (参数)=>object

在ts中要使用装饰器，需要开启```experimentalDecorators```

装饰器函数的运行时间：在类定义后直接运行

类装饰器可以具有的返回值

- void：仅运行函数
- 返回一个新的类：会将新的类替换原来的类

多个装饰器的情况：会按照后加入先调用的顺序调用你

## 成员装饰器

- 属性

属性的装饰器也是一个函数，该函数需要两个参数：
1. 如果是静态属性，则类本身；如果是实例属性，则为类的原型
2. 固定为一个字符串，表示属性名

- 方法

属性的装饰器也是一个函数，该函数需要三个参数：
1. 如果是静态属性，则类本身；如果是实例属性，则为类的原型
2. 固定为一个字符串，表示方法名
3. 属性描述对象

可以有多个装饰器修饰

## 练习：类和属性的描述装饰器

```ts
function classDescriptor(description: string) {
    return function (target: new ()=>object) {
        target.prototype.$classDescription = description;
    }
}

function propDescriptor(description: string) {
    return function (target: any, propName: string) {
        if(!target.$propDescriptions){
            target.$propDescriptions = [];
        }
        target.$propDescriptions.push({
            propName,
            description
        });
    }
}

function printObj(obj: any){
    console.log(obj.$classDescription);
    console.log(obj.$propDescriptions)
}

@classDescriptor("用户")
class User{
    @propDescriptor("账号")
    loginid: string
    @propDescriptor("密码")
    loginPwd: string
}

const u = new User();
printObj(u);
```

## reflect-metadata库

该库的作用：保存元数据

```ts
import "reflect-metadata";

const key = Symbol.for("descriptor");
function descriptor(description: string) {
    return Reflect.metadata(key, description);
}

function printObj(obj: any){
    const cons = Object.getPrototypeOf(obj).constructor;
    if(Reflect.hasMetadata(key, cons)){
        console.log(Reflect.getMetadata(key, cons));
    }else{
        console.log(cons.constructor.name);
    }
    for(const k in obj){
        if(Reflect.hasMetadata(key, obj, k)){
            console.log(`\t${Reflect.getMetadata(key, obj, k)}:${obj[k]}`);
        }
    }
}

@descriptor("用户")
class User{
    @descriptor("账号")
    loginid: string
    @descriptor("密码")
    loginPwd: string
}

const u = new User();
u.loginid = "abc";
u.loginPwd = "123";
printObj(u);
```

## class-validator库

https://www.npmjs.com/package/class-validator

## class-transformer库

https://www.npmjs.com/package/class-transformer

## 补充

- 参数修饰器

依赖注入、依赖倒置

要求函数有三个参数：
1. 如果方法是静态的，则为类本身；如果方法是实例方法，则为类的原型
2. 方法名称
3. 在参数列表中的索引

- 关于ts自动注入的元数据

如果安装了```class-validator```,并且导入了该库，并且在某个成员上添加了元数据，并且启用了```emitDecoratorMetadata```，则ts在编译结果中，会将约束的类型作为元数据加入到相应的位置。这样一来，ts的类型检查将有机会在运行时运行

- AOP（aspect oriented programming）

编程方式，属于面向对象开发

将一些业务中出现的共同的功能块，横向切分，已达到分离关注点的目的