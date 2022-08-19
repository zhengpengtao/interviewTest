// 快速排序

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let mid = Math.floor(arr.length / 2)
  let center = arr.splice(mid, 1)[0]
  let left = []
  let right = []

  for(let i=0;i<arr.length;i++) {
    if (arr[i] <= center) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([center],quickSort(right))
}

console.log(quickSort([4,98,76,5,7,90,1]), '测试的结果')