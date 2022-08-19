/**
 * 冒泡排序
 * */ 

let arr = [1, 3, 6, 3, 23, 76, 1, 34, 222, 6, 456, 221]
function bubbleSort (arr) {
  let len = arr.length
  if (len <= 1) {
    return arr
  }

  let tem = null
  for (let i=0; i<len-1; i++) {
    for (let j=0; j<len-1-i; j++) {
      if (arr[j] > arr[j+1]) {
        tem = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tem
      }
    }
    console.log("第"+i+"次排序"+arr)
  }
  return arr
}

console.log(bubbleSort(arr), '冒泡排序最终结果')