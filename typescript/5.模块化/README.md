<!--
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-15 10:57:04
 * @LastEditors: WangQing
 * @LastEditTime: 2020-01-15 11:45:11
 -->
# 模块化

|配置名称|含义|
|:-:|:-:|
|module|设置编译结果中使用的模块化标准|
|moduleResolution|设置解析模块的模式|
|noImplicitUseStrict|编译结果中不包含"use strict"|
|removeComments|编译结果移除注释|
|noEmitOnError|错误时不生成编译结果|
|esModuleInterop|启用es模块化交互非es模块导出|

> 前端领域中出现的模块化标准：ES6、commonjs、amd、umd、systemm、esnext

## TS中如何书写模块化语句

TS中，导入和导出模块，统一使用ES6的模块化标准（import、export）

## 编译结果中的模块化

可配置

ts中的模块化在编译结果中：

- 如果编译结果的模块化标准是ES6:没有区别
- 如果编译结果的模块化标准的commonjs：导出的声明会变成exports的属性，默认的导出会变成exports的default属性

## 解决默认导出的错误

```ts
// 1
import {readFile} from 'fs';
// 2
import * as fs from 'fs';
// 3. 配置esModuleInterop
import fs from 'fs'
```

## 如何在ts中书写commonjs模块化的代码

导出：export = xxx

导入：import xxx = require(xxx)

## 模块解析

模块解析：应该从什么位置寻址模块

ts中，有两种模块解析策略

- classic: 经典
- node: node解析模块（唯一的变化，是将js替换为ts）
    - 相对路径```require("./xxx")```
    - 非相对路径```require("xxx")```