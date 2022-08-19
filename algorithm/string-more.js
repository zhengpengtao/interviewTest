/* 
  字符串中出现最多字符的次数
*/

function fn (str) {
  let temStr = ''
  let arr = [0]
  for(let i=0; i<str.length -1; i++) {
    temStr = str.charAt(i)
    if (str.split(temStr).length > arr[0]) {
      console.log(str.split(temStr).length, '进来', arr[0])
      arr[0] = str.split(temStr).length - 1
      arr[1] = temStr
    }
  }
  return arr
}
console.log(fn('dqweqweqweasdasdassfdfgd'), '测试的结果')


// 第二种对象

function funObj (str) {
  let o = {}

  for(let i = 0; i <str.length; i++) {
    let chart = str.charAt(i)
    if (o[chart]) {
      o[chart]++
    } else {
      o[chart] = 1
    }
  }

  console.log(o, '查看对象')
  let max = 0
  let maxChar = null

  for (let j in o) {
    if (max < o[j]) {
      max = o[j]
      maxChar = j
    }
  }
  console.log('出现的最多的字符和次数',maxChar, max)
}
funObj('dqweqweqweasdasdassfdfgd')
