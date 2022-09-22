// 手写call 改变this指向

let obj = {
  name: '小红'
}
let callFn = function (name) {
  console.log('我的名字', name)
}

Function.prototype._call = function (target, arguments) {
  if (typeof this !== 'function') {
    throw new TypeError('Not a function')
  }

  target = target || window
  target.fn = this

  let res = target.fn(...arguments) // 调用target.fn, 此时的this指向为目标对象
  delete target.fn // 删除target的fn属性
  return res // 返回结果
}

console.log(callFn._call(obj, '小明'))