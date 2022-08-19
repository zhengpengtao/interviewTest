/* 
  每日复习联系
*/

// 字符串出现最多的次数
// function fn (str) {
//   let obj = {}
//   for (let index = 0; index < str.length; index++) {
//     const element = str.charAt(index);
//     if (obj[element]) {
//       obj[element]++
//     } else {
//       obj[element] = 1
//     }
//   }
//   let max = 0
//   let maxNum = null
//   for(let key in obj) {
//     if (max < obj[key]) {
//       max = key
//       maxNum = obj[key]
//     }
//   }

//   return `最多的字母是：${max}, 次数是：${maxNum}`
// }

// console.log(fn('adadfgfgqweqwvtgrerq'), '测试的结果')

// 斐波那切数列

// function fb (n) {
//   if (n === 1 || n === 2) {
//     return 1
//   }

//   return fb(n - 1) + fb(n - 2)
// }

// console.log(fb(5), 'ooooo')

// 数字扁平化
// let arr = [1, [1,3,4], [1,5,6, [12,23]]]
// function fn (arr) {
//   // 第一种 es6
//   // arr = arr.flat(Infinity)
//   // console.log(arr, '')
  
//   // 第二种 转字符串
//   // arr = arr.toString().split(',').map((item) => {
//   //   return Number(item)
//   // })

//   // 第三种基于 some 函数

//   while (arr.some((item) => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }

//   return arr

// }
// console.log(fn(arr), '测试的结果')

// 二叉树 广度和深度 ，广度为队列，先进先出  深度为栈先进后出
// let tree = {
//   value: 0,
//   childLeft: {
//     value: 1,
//     childLeft: {
//       value: 3
//     },
//     childRight: {
//       value: 4
//     }
//   },
//   childRight: {
//     value: 2,
//     childLeft: {
//       value: 5
//     },
//     childRight: {
//       value: 6
//     }
//   }
// }
// function g (tree) {
//   let list = [], q = [tree]
//   while(q.length != 0) {
//     let target = q.shift()
//     list.push(target.value)
//     console.log(target, 'target')
//     if (target.childLeft) {
//       q.push(target.childLeft)
//     }
//     if (target.childRight) {
//       q.push(target.childRight)
//     }
//   }
//   return list
// }

// function s (tree) {
//   let list = [], s = [tree]
//   while (s.length != 0) {
//     let target = s.pop()
//     console.log(target.value, 'target')
//     list.push(target.value)
//     if (target.childLeft) {
//       s.push(target.childLeft)
//     }
//     if (target.childRight) {
//       s.push(target.childRight)
//     }
//   }
//   return list
// }

// console.log(s(tree), '测试的广度结果')

// 二分法查找, 如果是无序的可以先排序
// function er (arr, key) {
//   let low = 0
//   let hight = arr.length - 1
//   while (low <= hight) {
//     let mid = parseInt((low + hight) / 2)
//     console.log(mid, '00')
//     if (key == arr[mid]) {
//       return mid
//     } else if (key > arr[mid]) {
//       low = mid + 1
//     } else {
//       hight = mid - 1
//     }
//   }
//   return -1
// }

// console.log(er([1,3,4,5,6,7], 5), '测试的结果')

// 冒泡算法
// let arr = [12,45,4,6,34,2,13,5]
// function mp (arr) {
//   let len = arr.length
//   for(let i=0; i < len-1; i++) {
//     for (let j= 0; j < len-i-1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }
// console.log(mp(arr), '测试的结果。。')

// 选择排序
// let arr = [12,45,4,6,34,2,13,5]
// function choose (arr) {
//   for (let i=0; i<arr.length-1; i++) {
//     let min = i
//     for (let j=i+1; j<arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j
//       }
//     }
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp
//   }
//   return arr
// }

// console.log(choose(arr), '测试的结果。。')

// 插入排序
// let arr = [12,45,4,6,34,2,13,5]
// function insert (arr) {
//   for(let i = 1; i<arr.length; i++) {
//     let j = i
//     let temp = arr[i]
//     while(arr[j - 1] > temp && j > 0) {
//       arr[j] = arr[j-1]
//       j--
//     }
//     arr[j] = temp
//   }
//   return arr
// }
// console.log(insert(arr), '测试的结果')

// 快速排序
// let arr = [12,45,4,6,34,2,13,5]
// function quickSort (arr) {
//   if (arr.length <=1) {
//     return arr
//   }
//   let left = []
//   let right = []
//   let mid = arr.splice(0, 1)[0]
//   for (let i = 0; i< arr.length; i++) {
//     if (arr[i] > middle) {
//       right.push(arr[i])
//     } else {
//       left.push(arr[i])
//     }
//   } 
//   return quickSort(left).concat([middle], quickSort(right))
// }

// 桶排序
// let arr = [12,45,4,6,34,2,13,5]
// function tong (arr) {
//   let newArr = []
//   for(let i=0; i<arr.length; i++) {
//     newArr[arr[i]] = 1
//   }
//   arr.length = 0
//   for (let key in newArr) {
//     arr.push(Number(key))
//   }
//   return arr
// }
// console.log(tong(arr), '测试的结果..')

// 归并排序
//归并排序
function mergeSort(arr){
  var len = arr.length;
  if(len < 2){
    return arr;
  }
  //首先将无序数组划分为两个数组
  var mid = Math.floor(len / 2);
  var left = arr.slice(0,mid);
  var right = arr.slice(mid,len);
  return merge(mergeSort(left),mergeSort(right));//递归分别对左右两部分数组进行排序合并
}
//合并
function merge(left,right){
  var result = [];
  while(left.length>0 && right.length>0){
    if(left[0]<=right[0]){
      //如果左边的数据小于右边的数据，将左边数据取出，放在新数组中
       result.push(left.shift());
    }else{
       result.push(right.shift());
    }
  }
  while(left.length){
     result.push(left.shift());
  }
  while(right.length){
     result.push(right.shift());
  }
  return result;
}
var arr = [12,45,4,6,34,2,13,5];
console.log(mergeSort(arr));//[1,2,3,4,6,7,8]
