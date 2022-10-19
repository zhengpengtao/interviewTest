/* 
  防抖函数，连续触发多次，只执行一次
*/

function debounce (fn, wait) {
  let timer = null;
  return function (e){
      //如果定时器存在则清空定时器
      if(timer){
          clearTimeout(timer);
      }
      //设置定时器，规定时间后执行真实要执行的函数
      timer = setTimeout(() => {//此箭头函数里的this指向btn这个按钮
          fn.call(this, arguments);//改变真实要执行函数的this指向，原submit函数里面的this指向window
      },delay);
  }
}

console.log(debounce(function() {
  console.log(1111)
}, 3000)())


function debounce (fn, await) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, await)
  }
}