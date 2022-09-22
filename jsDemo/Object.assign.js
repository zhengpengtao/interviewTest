// 手写 object.assgin

Object.prototype._assign = function (target, ...source) {
  let res = Object(target)
  source.forEach(function (obj) {
    if (obj !== null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          res[key] = obj[key]
        }
      }
    }
  })
  return res
}

let a = {
  c: 1,
  b: 'sss'
}
let m = {
  c: 2,
  m: 1111
}
console.log(Object._assign(a, m))