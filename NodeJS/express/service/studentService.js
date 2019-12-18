/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-16 15:11:20
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-18 15:03:49
 */
let studentDao = require('../dao/studentDao');

function queryAllStudent(success) {

    studentDao.queryAllStudent(success);

}

function queryStudentByStuNum(stuNum, success) {
    studentDao.queryStudentByStuNum(stuNum, success);
}
function updateStudentPathURLById(pathURL, id){
    studentDao.updateStudentPathURLById(pathURL, id);
}
module.exports = {
    queryAllStudent,
    queryStudentByStuNum,
    updateStudentPathURLById
}