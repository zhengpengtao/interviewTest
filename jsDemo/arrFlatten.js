// 数组的扁平化

// 递归方法实现
let arr = [1, [2, [3, 4, 5]]];
function floatDg (arr) {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(floatDg(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(floatDg(arr), '递归')


// reduce迭代的方式
let arr2 = [1, [2, [3, 4, 5]]]
function reduceArr (arr2) {
  let result = arr2.reduce((newArr, i) => {
    return newArr.concat(Array.isArray(i) ? reduceArr(i) : i)
  }, [])
  return result
}
console.log(reduceArr(arr2), '迭代的方式')

// es6格式
let arr3 = [1,2,[3,4,5]]

function es6Arr (arr3) {
  return arr3.flat(Infinity)
}

console.log(es6Arr(arr3), 'es6..')

// toString 和 split

let arr4 = [1,2,[3,4,[5,6,7]]]
function strSplit (arr4) {
  return arr4.toString().split(',').map((i) => Number(i))
}
console.log(strSplit(arr4), 'toString')