# 封装和信息隐藏

封装可以被定义为对对象的内部数据表现形式和实现细节进行隐藏。
要想访问封装过的对象中的数据，只有使用已定义的操作这一种方法。
通过封装可以强制实施信息隐藏。

接口提供一份记载着可供公众访问的方法的契约。定义两个对象间可以具有的关系。

## 创建对象的基本模式

1. 门户大开型对象

```js
var Book = function(isbn, title, author){
    if(isbn == undefined) throw new Error('Book constructor requires an isbn');
    this.isbn = isbn;
    this.title = title;
    this.author = author;
}
Book.prototype.display = function(){
    // ...
}
```
强化ISBN的检查如下：

```js
var Book = function(isbn, title, author){
    if(!this.checkIsbn(isbn)) throw new Error('Book constructor requires an isbn');
    this.isbn = isbn;
    this.title = title || 'No title specified';
    this.author = author || 'No author specified';
}
Book.prototyp = {
    checkIsbn: function(isbn){
        if(isbn==undefined||typeof isbn!='string'){
            return false;
        }
        isbn = isbn.replace(/-/, '');
        // 书的ISBN是10位或13位
        if(isbn.length!=0&&isbn.length!=13){
            return false;
        }
        var sum = 0;
        if(isbn.length === 0){
            if(isbn.math(/^\d{9}/)){
                return false;
            }
            for(var i = 0; i < 9; i++){
                sum += isbn.charAt(i) * (10 - i);
            }
            var checksum = sum % 11;
            if(checksum === 10) checksum = 'X';
            if(isbn.charAt(9)!=checksum){
                return false;
            }
        }else{
            if(isbn.math(/^\d{12}/)){
                return false;
            }
            for(var i = 0; i < 12; i++){
                sum += isbn.charAt(i) * (10 - i);
            }
            var checksum = sum % 11;
            if(checksum === 10) checksum = 'X';
            if(isbn.charAt(12)!=checksum){
                return false;
            }
        }
        return true;
    },
    display: function(){
        // ...
    }
}
```

使用取值器

```js
var Book = function(isbn, title, author){
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);
}
Book.prototyp = {
    checkIsbn: function(isbn){
        // ...
    },
    getIsbn: function(){
        return this.isbn;
    },
    setIsbn: function(isbn){
        if(!this.checkIsbn(isbn)) throw new Error('Book constructor requires an isbn');
        this.isbn = isbn;
    }
    getTitle: function(){
        return this.title;
    },
    setTitle: function(title){
        this.title = title || 'No title specified';
    },
    getAuthor: function(){
        return this.author;
    },
    setAuthor: function(author){
        this.author = author || 'No author specified';
    }
    display: function(){
        // ...
    }
}
```

属性都是公开的

2. 用命名规范区别私有成员

本质上和门户大开型对象的创建模式一样，只不过在一些方法和属性的名称前加上下划线以示私有属性


```js
var Book = function(isbn, title, author){
    this.setIsbn(isbn);
    this.setTitle(title);
    this.setAuthor(author);
}
Book.prototyp = {
    checkIsbn: function(isbn){
        // ...
    },
    getIsbn: function(){
        return this._isbn;
    },
    setIsbn: function(isbn){
        if(!this.checkIsbn(isbn)) throw new Error('Book constructor requires an isbn');
        this._isbn = isbn;
    }
    getTitle: function(){
        return this._title;
    },
    setTitle: function(title){
        this._title = title || 'No title specified';
    },
    getAuthor: function(){
        return this._author;
    },
    setAuthor: function(author){
        this._author = author || 'No author specified';
    }
    display: function(){
        // ...
    }
}
```

3. 用闭包实现私有成员


```js
var Book = function(newIsbn, newTitle, newAuthor){
    var isbn, title, author;
    function checkIsbn(isbn){
        // ...
    }
    this.getIsbn = function(){
        return isbn;
    }
    this.setIsbn = function(newIsbn){
        if(!this.checkIsbn(isbn)) throw new Error('Book constructor requires an isbn');
        isbn = newIsbn;
    }
    this.getTitle = function(){
        return title;
    }
    this.setTitle = function(newTitle){
        title = newTitle || 'No title specified';
    }
    this.getAuthor = function(){
        return author;
    }
    this.setAuthor = function(newAuthor){
        author = newAuthor || 'No author specified';
    }
    this.setIbsn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);
}
Book.prototyp = {
    display: function(){
        // ...
    }
}
```

## 更多高级对象创建模式

1. 静态方法和属性

```js
var Book = (function(){
    var numOfBooks = 0; // private static atributes
    // private static method
    function checkIsbn(isbn){
        //...
    }
    return //...
}())
// public static method
Book.convertToTitleCase = function(){
    // ...
}
```

2. 常量

只有取值器，没有赋值器的私有成员

## 封装之利

- 保护了内部数据的完整性
- 弱化了模块之间的耦合


## 封装之弊

- 难进行单元测试
- 与作用域链打交道，调试困难
- 过度封装
- js实现封装困难