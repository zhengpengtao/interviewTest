/* 
  斐波那契数列

  斐波那契数列（兔子序列）1、1、2、3、5、8、13，21…
*/


function fo (n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fo(n-1) + fo(n-2)
}