class kvue {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        // 数据的劫持
        this.observe(this.$data)
        // 编译过程的实现
        new Compile(options.el, this);
    }
    observe(data) {
        // 传进来的数据必须是对象
        if (!data || typeof data !== 'object') {
            return 
        }
        Object.keys(data).forEach((key) => {
            // 执行数据响应化
            this.defineProperty(data,key, data[key])
            // 执行代理
            this.proxyData(key)
        })
    }
    defineProperty(data,key,val) {
        // 这个是递归处理
        this.observe(key)
        // 
        const deps = new Dep()
        // 监听数据属性的变化
        Object.defineProperty(data,key,{
            get () {
                // 数据的依赖收集
                deps.addDep(key)
                return key
            },
            set (newVal) {
                if (newVal === val) {
                    return
                }
                val = newVal
                // 执行若干个watcher类
                deps.notify()
                //console.log(key + '数据发生了更新')
            }
        })
    }
    proxyData(key) {
        // 想Vue实例上面定义属性key this 指代当前的new 出来的实例
        Object.defineProperty(this, key, {
            get() {
                return this.$data[key]
            },
            set(newVal) {
                this.$data[key] = newVal;
            }
        })
    }
}
// 大管家 管理watcher
class Dep{
    constructor() {
        this.deps = []
    }
    addDep(newVal) {
        this.deps.push(newVal)
    }
    notify() {
        this.deps.forEach((val) => {
          val.update()
        })
    }
}

// watcher 类
class watcher{
    constructor(vm, key) {
      this.vm = vm
      this.key = key
      Dep.target = this
    }
    update() {
      console.log(key + '属性更新了')
    }
}