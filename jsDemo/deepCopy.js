// 实现一个深拷贝
let obj = {
  a: 1,
  b: {
    c: 2
  }
}
function _deepCopy (obj) {
  if (!obj || typeof obj !== 'object') return
  let copyObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] =
        typeof obj[key] === "object" ? _deepCopy(obj[key]) : obj[key];
    }
  } 
  return copyObj
}

console.log(_deepCopy(obj), '---')