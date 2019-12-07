/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-04 21:12:17
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-04 21:13:26
 */
import store from "./index"
import { change } from "./action/student/searchCondition"
import { fetchStudents } from "./action/student/searchResult"
// store.dispatch(change({
//     key: "abc",
//     page: 2
// }))

store.dispatch(fetchStudents())