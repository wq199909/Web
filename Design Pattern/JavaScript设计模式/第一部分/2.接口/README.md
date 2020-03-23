# 接口

## 什么是接口

接口提供了一种用以说明一个对象应该具有那些方法的手段

### 利

- 自我描述性，促进代码的重用
- 有利于稳定不同的类之间的通信方式
- 测试和调试因此变得更轻松

### 弊

- 降低了语言的灵活性
- js没有内部支持，有风险
- 对性能有影响
- 无法强制要求其他程序遵循接口

## js中模仿接口

### 注释模仿接口

接口说明放在注释中

```js
/*
interface Composite{
    function add(child)
    function remove(child)
    function getChild(index)
}
*/
// Implement the Composite interface
```

### 用属性检查模仿接口

所有的类明确声明自己实现了那些接口

```js
/*
interface Composite{
    function add(child)
    function remove(child)
    function getChild(index)
}
interface FormItem {
    function save()
}
*/
var CompositeForm = function(id, method, action){
    this.implementsInterfaces = ["Composite", "FormItem"]
}
```

### 用鸭子辩形模型模仿接口

如果对象具有与接口定义的方法同名的所有方法，那么就认为它实现了这个接口

```js
var Composite = new Interface("Composite", ["add", "remove", "getChild"]);
var FormItem = new Interface("FormItem", ["save"]);

var CompositeForm = function(id, method, action){
    // ...
}
```

## 接口定义和检查

```js
let Interface = function(name, methods){
    if(arguments.length!==2){
        throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected 2");
    }
    this.name = name;
    this.methods = [];
    if(methods instanceof Array){
        for(let i = 0; i < methods.length; i++){
            if(typeof methods[i] === "string"){
                this.methods.push(methods[i]);
            }
        }
    }
}
Interface.ensureImplement(object, ...interfaces){
    if(arguments.length<2){
        throw new Error("Interface constructor called with " + arguments.length + "arguments, but expected at least 2");
    }
    for(let i = 0; i < interfaces.length; i++){
        let interface = interfaces[i];
        if(interface instanceof Interface){
            throw new Error("Function arguments Error, must instance of Interface")
        }
        for(j = 0; j < interface.methods.length; i++){
            let method = 
            if(!object[method] || !(object[method] instanceof Function)){
                throw new Error("method" + object[method] + "was not found");
            }
        }
    }
}
```