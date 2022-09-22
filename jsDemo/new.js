// 手写new
function Test () {
  this.say = function () {
    console.log('akaka')
  }
}

// new Test().say()


function _new (target, ...arguments) {
  // 或者  Array.prototype.shift.call(arguments); 通过类数组的形式 获取第一个参数
  
  let obj = Object.create(constructor.prototype) //  新建一个空对象，对象的原型为构造函数的 prototype 对象
  let res = target.apply(obj, arguments)
  return res && (typeof res === 'function' || typeof res === 'object') ? res : obj
}

_new(Test).say()