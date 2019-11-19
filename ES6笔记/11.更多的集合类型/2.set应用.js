// 两个数组的并集、交集、差集 （不能出现重复项），得到的结果是一个新数组
const arr1 = [33, 22, 55, 33, 11, 33, 5];
const arr2 = [22, 55, 77, 88, 88, 99, 99];

//并集
// const result = [...new Set(arr1.concat(arr2))];
console.log("并集", [...new Set([...arr1, ...arr2])]);

const cross = [...new Set(arr1)].filter(item => arr2.indexOf(item) >= 0);
//交集
console.log("交集", cross)

//差集
// console.log("差集", [...new Set([...arr1, ...arr2])].filter(item => arr1.indexOf(item) >= 0 && arr2.indexOf(item) < 0 || arr2.indexOf(item) >= 0 && arr1.indexOf(item) < 0))
console.log("差集", [...new Set(arr2)].filter(item => arr1.indexOf(item) < 0), [...new Set(arr1)].filter(item => arr2.indexOf(item) < 0))