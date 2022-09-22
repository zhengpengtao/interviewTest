// 手写Object.create 方法

function _create (obj) {
  function F () {}
  F.prototype = obj // 将obj 赋值 到函数原型上
  return new F()
}

console.log(_create({a: 1}))