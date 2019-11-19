# Table插件

## 基本使用

```html
<link rel="stylesheet" href="./Table.css">
<script src="./Table.js"></script>
```

```js
plugin = {
    //...
}
const table = new Table(plugin);
table.dataSource = [
    //...
]
```

## 参数对象属性

- columns: 表头信息，默认值为[], 数组由对象组成
    - title: 字符串，表头内容
    - propName: 字符串，每列表的标识
    - render(propValue, data): 函数，如果存在,表体部分信息会根据其返回值渲染
- container: 表放在什么地方，默认值为document.body
- className: 分页插件类名，默认值为easy-table,改写类名需要重写css文件

- dataSource: 数组，数组中存储对象，对象的属性和columns中对象的propName一致，改变该值，表体会重新渲染
