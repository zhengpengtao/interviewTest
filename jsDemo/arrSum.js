// 数组求和
let arr = [1,2,3,4,5,6]

let sum = arr.reduce((total, i) => total += i, 0)

console.log(sum, '0000')

let arr2 = [1,2,3,[4, 5],6,7]

let sum2 = arr2.flat(Infinity).reduce((total, i) => total += i, 0)
console.log(sum2, '----')


// 递归实现

let arr3 = [1,2,3,4,5,6]
function add (arr3) {
  if (arr3.length === 1) return arr3[0] 
  return arr3[0] + add(arr3.slice(1))
}

console.log(add(arr3), 'arr3')