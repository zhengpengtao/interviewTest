/*
  归并排序 -- 递归方法
*/

// 第一步 先合并
function merge(arr1, arr2) {
  var result = []
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      result.push(arr1.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return result.concat(arr1, arr2)
}
console.log(merge([11, 24, 3, 2, 28, 98], [9, 67, 56, 7]))

// 第二步 排序
function sort(arr) {
  // 如果数组元素个数为0或1，则返回原数组
  if (arr.length <= 1) {
    return arr
  }

  // 把数组一分为2
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  left = sort(left)
  right = sort(right)

  return merge(left, right)
}

// console.log(sort(merge([11,24,3,2,28,98], [9,67,56,7])), '测试的结果')
