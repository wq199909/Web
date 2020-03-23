# 桥接模式

将抽象与其实现隔离开来，以便二者独立变化

```js
var Color = function(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
}
var Size = function(d){
    this.d = d;
}
var BirdgeClass = function(a, b, c, d){
    this.one = new Color(a, b, c);
    this.two = new Size(d);
}
```

> 个人理解：功能横向切割，分离接口