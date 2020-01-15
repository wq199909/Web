<!--
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 10:00:38
 * @LastEditors: WangQing
 * @LastEditTime: 2020-01-15 10:56:22
 -->
# 扩展类型-枚举

> 扩展类型：类型别名、枚举、接口、类

枚举通常用于约束某个变量的取值范围

字面量和联合类型配合使用，也能达到相同的目的

## 字面量类型的问题

- 在类型约束位置，会产生重复代码。可以使用类型别名解决该问题。
- 逻辑含义和真实的值产生混淆，会导致修改真实的时候，产生大量的修改。
- 字面量类型不会进入编译结果

## 枚举

如何定义一个枚举:

```
enum 枚举名称{
    枚举字段1=值1,
    枚举字段2=值2,
    ...
}
```

枚举会出现在编译结果中，编译结果表现为对象

枚举的规则：

- 枚举的字段值可以是字符串或数字
- 数字枚举的值会自动自增
- 被数字枚举约束的变量，可以直接赋值为数字（尽力避免）
- 数字枚举的编译结果会有 值:键 的元素

最佳实践：

- 尽量不要在一个枚举中既出现字符串字段又出现数字字段
- 使用枚举时，尽量使用枚举字段的名称，而不使用真实的值

## 扩展知识：位枚举（枚举的位运算）

针对的数字枚举

```ts
enum Permission{
    Read: 1,
    Write: 2,
    Create: 4,
    Delete: 8
}
let p = Permission.Read|Permission.Write;//按位或增加权限
function hasPermission(target:Permission, per: permission){
    return (per & target) === per;//按位与判断相同
}
p = p^Permission.Read;//按位异或删除权限
```
