/* 
  手动实现一个vue类
  原理：vue 类负责数据初始化，进行数据代理（用vue实例对象来代替data 对data中的数据进行操作）,并调用Observer类和Complier类,对数据进行劫持和解析
  
*/

class myVue {
  constructor(options) {
    this.$data = options.data
    this.$el = document.querySelector(options.el)
    // 1、数据代理
    this.proxyData()
  }
  proxyData() {
    for(const key in this.$data) {
      /* 参数一：obj
        绑定属性的目标对象
      参数二：property
        绑定的属性名
      参数三：descriptor
        属性描述（配置），且此参数本身为一个对象

      属性值1：value
        设置属性默认值
      属性值2：writable
        设置属性是否能够修改
      属性值3：enumerable
        设置属性是否可以枚举，即是否允许遍历
      属性值4：configurable
        设置属性是否可以删除或编辑
      属性值5：get
        获取属性的值
      属性值6：set
        设置属性的值 */
      Object.defineProperty(this, key, {
        configurable: false,
        enumerable: true,
        set: function () {
          return this.$data[key]
        },
        get: function (newVal) {
          this.$data[key] = newVal
        }
      })
    }
  }
}


/* 
  observer类
  数据监听器的核心方法就是Object.defineProperty( )，通过遍历循环对data所有属性值进行监听，并对其进行Object.defineProperty( )处理。在getter中我们将消息订阅者添加到依赖收集器dep中，在setter中，如果数据变化，就会通知所有的订阅者，订阅者们将会执行相对应的更新函数。
*/

class observer {
  constructor (data) {
    this.obser(data)
  }
  obser(data) {
    const dependency = new dep()
    for (let key in data) {
      let val = data[key]
      Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get() {
          console.log('依赖被添加了', val)
          dep.target && dependency.addWatcher(dep.target)
          return val
        },
        set(newVal) {
          val = newVal
          dependency.notify()
        }
      })
    }
  }
}

/* 
  dep 类

  dep类负责收集依赖.添加观察者模式.通知data对应的所有观察者watcher来更新视图.
*/

class dep {
  // 当数据变化时，通知所有观察者更新视图
  constructor (){
    this.watcherList = []
  }
  addWatcher(watcher) {
    this.watcherList.push(watcher)
  }
  // 通知所有观察者更新视图
  notify() {
    this.watcherList.forEach(w => w.update())
  }
}

/* 
  watcher 类

  watcher类负责数据更新后,使关联视图重新渲染(更新DOM).
*/
class watcher {
  // 当观察者观察到数据的变化时，更新视图
  constructor(vm, key, callback) {
    this.vm = vm
    this.key = key
    this.callback = callback
    this.oldVal = this.getOldVal()
  }

  getOldVal() {
    dep.target = this
    //本质是对mv实例对象中的mv.$data[key]的访问
    const oldVal = compileUtil.getValue(this.key, this.vm)
    dep.target = null
    return oldVal
  }

  update() {
    this.callback()
  }
}

/* 
  compile 类
*/
class compile {
  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    // 1. createDocumentFragment()方法，是用来创建一个有虚拟节点的对象
    const fragment = this.nodeToFragment()
    // 2.编译解析文档片段
    this.compileFragment(fragment)
    // 3.将编译后的文档片段追加到模版容器中
    this.el.appendChild(fragment)
  }
  nodeToFragment() {
      const fragment = document.createDocumentFragment()
      while(this.el.firstChild) {
          fragment.appendChild(this.el.firstChild)
      }
      return fragment
  }

  compileFragment(fragment) {
      const nodeList = fragment.childNodes
      nodeList.forEach(node => {
          const nType = node.nodeType
          if (nType === 1) {
              //元素节点，解析指令
              this.compileElement(node)
          }else if (nType === 3) {
              //文档节点，解析{{}}
              this.compileText(node)
          }
          //如果node有子节点，递归调用compile
          if(node.childNodes && node.childNodes.length > 0) {
              this.compileFragment(node)
          }
      })
  }
  compileText(node) {
      const con = node.textContent
      //匹配 {{xx.xx}}的正则
      const reg = /\{\{(.+?)\}\}/g
      if(reg.test(con)) {
          const newVal = con.replace(reg, (...args) => {
              //key -> args[1]
              //object -> this.vm.$data
              new watcher(this.vm, args[1], () => {
                  node.textContent = con.replace(reg, (...args) => {
                      return this.vm.$data[args[1]]
                  })
              })
              return this.vm.$data[args[1]]
          })
          console.log(newVal)
          node.textContent = newVal
      }
  }
  compileElement(node) {
    //1.获取元素节点的所有属性
    const atrs = node.attributes
    Array.from(atrs).forEach(atr => {
        const {name, value} = atr
        if (name.startsWith('v-')) {
            const [,b] = name.split('-')
            if (b === 'model') {
                node.value = this.vm.$data[value]
                //数据驱动视图
                new watcher(this.vm, value, () => {
                    node.value = this.vm.$data[value]
                })
                //dom事件监听，更新数据
                node.addEventListener('input', (e) => {
                    this.vm.$data[value] = e.target.value
                })
            }
        }
    })
     
  }
}