/* 
  数组扁平化
  将一个复杂的嵌套多层的数组，一层一层的转化为层级较少或者只有一层的数组。
*/

let arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];

/**
 * 方法一  es6 flat 将多维数组，降维，传的参数是几就降几维
 * 
*/

// arr = arr.flat(Infinity)

/* 
  方法二  将多维数组变为字符串，然后分割
*/

// arr = arr.toString().split(',').map((item) => {
//   return Number(item)
// })


/* 
  方法三  基于数组的some方法进行判断检测:判断某一类数组里面有没有这个东西,只要一个存在就返回
*/

while(arr.some((item) => Array.isArray(item))) {
  arr = [].concat(...arr)
}
console.log(arr, '降维的数组')
