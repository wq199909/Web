/*
 * @Descripttion: 
 * @version: 
 * @Author: WangQing
 * @email: 2749374330@qq.com
 * @Date: 2019-12-07 22:32:42
 * @LastEditors: WangQing
 * @LastEditTime: 2019-12-07 22:37:54
 */
function createAction(type, payloadCreator) {
    return function actionCreator(...args) {
        if (typeof payloadCreator === "function") {
            const payload = payloadCreator(...args)
            return {
                type,
                payload
            }
        }
        else {
            return {
                type
            }
        }
    }
}

function createActions(mapToActionCreators) {
    const result = {};
    for (const prop in mapToActionCreators) {
        const payloadCreator = mapToActionCreators[prop]; //取出属性值
        const newPropName = toSmallCamel(prop); //得到一个小驼峰命名的属性名
        const actionCreator = createAction(newPropName, payloadCreator);
        actionCreator.toString = function(){
            return prop;
        }
        result[newPropName] = actionCreator
    }
    return result;
}
//得到小驼峰命名法
function toSmallCamel(str) {
    // ASYNC_INCREASE ->  ["ASYNC", "INCREASE"] -> ["async", "Increase"] -> "asyncIncrease"
    return str.split("_").map((s, i) => {
        s = s.toLowerCase();
        if (i !== 0 && s.length >= 1) {
            s = s[0].toUpperCase() + s.substr(1);
        }
        return s;
    }).join("")
}