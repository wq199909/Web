<!--
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2020-01-14 11:10:21
 * @LastEditors  : WangQing
 * @LastEditTime : 2020-01-14 11:53:11
 -->
# 在node中搭建ts开发环境

## 安装ts

> npm install typescript -g

默认情况下，ts会做出下面集中假设

1. 假设当前的执行环境是dom
2. 如果代码中没有使用模块化语句（import、export），便认为该代码是全局执行
3. 编译的目标代码是ES3

有两种方式更改以上假设

1. 使用tsc命令行的时候，加上选项参数
2. 使用ts配置文件，更改编译选项

## ts配置文件

> tsc --init

使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件

@types/node

@types是一个ts官方的类型库，其中包含了很多对js代码类型描述

> jQuery: 用js写的，没有类型检查
> 安装@types/jquery,为jquery库添加类型定义

## 使用第三方库简化流程

ts-node: 将ts代码在内存中完成编译，同时完成运行

> npm install -g ts-node
> ts-node src/index.ts

nodemon: 用于监测文件的变化

> npm install -g nodemon
> nodemon --exec ts-node src/index.ts
> nodemon -e ts --exec ts-node src/index.ts
> nodemon --watch src -e ts --exec ts-node src/index.ts
