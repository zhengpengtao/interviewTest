/* 
  选择排序

  思路： 在一个长度为N的无序数组中，在第一趟遍历N个数据，找出其中最小的数值与第一个元素交换，第二趟遍历剩下的N-1个数据，找出其中最小的数值与第二个元素交换……第N-1趟遍历剩下的2个数据，找出其中最小的数值与第N-1个元素交换，至此选择排序完成
*/

let arr = [4,3,1,5,6,33,42]
function chooseSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for(let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
  }
  return arr
}
console.log(chooseSort(arr), '测试的结果。。')