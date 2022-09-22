// 实现sleep函数

function sleep1 (ms, callback) {
  setTimeout(callback, ms)
}

sleep1(1000, function() {
  console.log('我是一个睡眠函数')
})

function sleep2 (time) {
  return new Promise((reslove) => setTimeout(reslove, time))
}

sleep2(1000).then(() => {
  console.log('我是一个sleep函数')
})