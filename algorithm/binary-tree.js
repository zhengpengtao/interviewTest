/* 
  二叉树遍历
  1、广度优先遍历 数据结构是 队列  2、深度优先遍历 数据结构： 栈
*/

let tree = {
  value: 0,
  childLeft: {
    value: 1,
    childLeft: {
      value: 3,
    },
    childRight: {
      value: 4,
    },
  },
  childRight: {
    value: 2,
    childLeft: {
      value: 5,
    },
    childRight: {
      value: 6,
    },
  },
}

// 广度优先，一排排的遍历 队列先进先出

function ergodic(tree) {
  let list = [],
    queue = [tree]
  while (queue.length !== 0) {
    let target = queue.shift()
    list.push(target.value)
    if (target.childLeft) {
      queue.push(target.childLeft)
    }
    if (target.childRight) {
      queue.push(target.childRight)
    }
  }
  return list
}

// console.log(ergodic(tree))

// 广度优先遍历 队列  先进后出

function deepSort(tree) {
  let list = [],
    stack = [tree]

  while (stack.length != 0) {
    let target = stack.pop() // pop()方法用于删除并返回数组的最后一个元素
    list.push(target.value)

    if (target.childRight) {
      stack.push(target.childRight)
    }

    if (target.childLeft) {
      stack.push(target.childLeft)
    }
  }
  return list
}

// console.log(ergodic(tree), 'pp')
