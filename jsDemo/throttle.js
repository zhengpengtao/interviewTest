/* 
  节流函数

  当事件触发之后，约定单位时间之内，事件里面的代码最多只能执行 1 次。所以，节流减少了单位时间内代码的执行次数，从而提高性能
*/

function throttle (fn, await) {
  let timer = null
  return function() {
    if (!timer) {
      time = setTimeout(() => {
        fn.apply(this, arguments);
        timer = null;
      }, await)
    }
  }
}