/* 
  数组去重~~
*/

// es6 去重
let arr = [1,3,4,5,5,2,4,null,1,null, undefined, undefined, '1', '2', '1']
function es6 (arr) {
  return new Set(Array.from(arr))
}
console.log(es6(arr))

// map: 使用map存储不重复的数字
let array = [1,3,4,5,5,2,4,null,1,null, undefined, undefined, '1', '2', '1']
function mapArr (array) {
  let map = new WeakSet()
  let res = []
  for(let i = 0; i< array.length; i++) {
    if (!map.hasOwnProperty(array[i])) {
      map[array[i]] = 1
      res.push(array[i])
    }
  }
  return res
}

console.log(mapArr(array))