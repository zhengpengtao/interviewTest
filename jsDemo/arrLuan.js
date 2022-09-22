// 数组乱序输出
let arr = [1,2,3,4,5,6]
for (let i = 0; i < arr.length; i++) {
  const fromIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
  [arr[i], arr[fromIndex]] = [arr[fromIndex], arr[i]];
}

console.log(arr, '000')

// 数组倒序遍历
let arr2 = [1,2,3,4,5,6]
let len = arr2.length
let randomIndx;
let temp;
while (len) {
  randomIndx = Math.floor(Math.random() * len--)
  temp = arr2[len]
  arr2[len] = arr2[randomIndx]
  arr2[randomIndx] = temp
}

console.log(arr2, 'arr2')
