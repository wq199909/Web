/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:11:20
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-16 15:13:08
 */
let studentDao = require('../dao/studentDao');

function queryAllStudent(success) {

    studentDao.queryAllStudent(success);

}

function queryStudentByStuNum(stuNum, success) {
    studentDao.queryStudentByStuNum(stuNum, success);
}

module.exports = {
    queryAllStudent,
    queryStudentByStuNum
}