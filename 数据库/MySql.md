<!--
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-15 21:54:33
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-15 22:39:35
 -->
# MySql

- show databases;
    - 查看所有数据库
- use <数据库名>;
    - 选择数据库
- create database <数据库名>;
    - 创建数据库
- drop database <数据库名>;
    - 删除数据库
- show tables;
    - 查看所有表
- desc <表名>;
    - 查看某个表
- create table <表名>;
    - 创建表
- drop table <表名>；
    - 删除表
- select */(key as key1) from <表名> (where ...);
    - 数据表查
- insert into <表名> (key1, key2, key3) values (value1, value2, value3);
    - 数据表增
- update <表名> set (key = value) where (key = value);
    - 数据表改
- delete from <表名> where (key = value);
    - 数据表删