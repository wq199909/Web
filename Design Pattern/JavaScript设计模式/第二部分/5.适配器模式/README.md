# 适配器模式

现有接口和不兼容的类之间进行适配

```js
const arr = ['Javascript', 'book', '前端编程语言', '8月1日']
function arr2objAdapter(arr) {    // 转化成我们需要的数据结构
  return {
    name: arr[0],
    type: arr[1],
    title: arr[2],
    time: arr[3]
  }
}

const adapterData = arr2objAdapter(arr)
```

> 个人理解：重新封装内容，继承已有对象，不改变接口，改变接口内部实现，但不影响原有对象，或者改变内部数据结构形式