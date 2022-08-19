/* 
  插入排序

  原理：每一步将一个待排序的数据插入到前面已经排好序的有序序列中，直到插完所有元素为止
*/

let arr = [4,3,1,5,6,33,42]
function insertSort (arr) {
  // 外层循环： 第一个数是有序的，所以从第二个数开始，然后像前面局部有序的插入
  for (let i=1; i< arr.length; i++) {
    // 内层循环：获取i位置的元素，和前面的元素作为比较
    let temp = arr[i]
    let j = i
    while(arr[j - 1] > temp && j > 0) {
      // 将大于考察对象的数往后移以为
      arr[j] = arr[j - 1]
      // 继续比较
      j--
    }
    // 找到考察的数应处于的位置
    arr[j] = temp
  }
  return arr
}
console.log(insertSort(arr), '测试的结果。。')