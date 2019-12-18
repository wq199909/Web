<!--
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-18 16:28:16
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-18 17:06:59
 -->
# MongoDB

- show dbs;
    - show database;
- use <database>;
    - use <database>;
- db.getName();
    - 查看当前数据库名
- show collections;
    - 集合，相当于mysql的表
    - show tables;
- use <新的数据库名>
    - create database <新的数据库名>
- db.createCollection(<新的集合名>)
    - 创建新的集合
- db.<集合名>.save({name:"p"});
    - insert into <表名> (name) values ("p")
- db.<集合名>.find({...})
    - select * from <表名> where ...;
- db.<集合名>.remove({...})
    - delete from <表名> where ...;
- db.<集合名>.update({...})
    - update <表名> set (key = value) where (key = value);

> https://www.runoob.com/nodejs/nodejs-mongodb.html