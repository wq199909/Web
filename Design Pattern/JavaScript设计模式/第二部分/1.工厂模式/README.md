# 工厂模式

工厂是一个将其对象成员实例化推迟到子类中进行的类

```js
var BicycleShop = function(){}
BicycleShop.prototype = {
    sellBicycleShop: function(model){
        var bicycle = this.createBicycle(model);
        bicycle.assmble();
        bicycle.wash();
        return bicycle;
    },
    createBicycle: function(model){
        throw new Error("Unsupported");
    }
}
var AcmeBicycleShop = function(){}
extend(AcmeBicycleShop, BicycleShop);
AcmeBicycleShop.prototype.createBicyle = function(model){
    var bicycle;
    switch(model){
        //...
    }
    return bicycle;
}
```

> 个人理解 抽象类