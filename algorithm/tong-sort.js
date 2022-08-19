/* 
  桶排序
*/

let arr = [4,3,1,5,6,33,42]
function tongSort (arr) {
  // 创建一个空桶
  let newArr = []
  // 遍历数组中的数，将数值作为桶索引添加数据
  for(let i=0; i<arr.length; i++) {
    // arr[i]是需要排列的数字 需要随意填一个数据，这个数据是什么不重要
    newArr[arr[i]] = 1; // 新数组的索引为arr[0]-arr[i] 值全为1
  }
  //清空原数组取出下标
  arr.length = 0 
  //用for in 遍历桶对对象的key值进行循环，遍历出来的就是原数组的排好序的数值，空值不会被遍历
  for(let attr in newArr) {
    console.log(attr, 'attr')
    arr.push(Number(attr));
  }
  return arr
}

console.log(tongSort(arr), '测试的结果。。')