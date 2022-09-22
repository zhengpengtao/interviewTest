// 手写 instanceof

function _instance (left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype
  while (true) {
    if (!proto) return false
    if (proto === prototype)  return true
    return false
  }
}

function Test() {}

let a = new Test()

console.log(_instance(a, Test))