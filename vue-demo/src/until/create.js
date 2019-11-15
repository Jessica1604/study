
import Vue from 'vue'
// export default function create(comp, props) {
//     // 申明渲染函数
//     // h的作用是 渲染虚拟的dom
//     // render 是一个渲染函数
//     let vm = new Vue({
//         render(h) {
//             return h(comp, {props})
//         }
//       }).$mount()
//     // 挂载元素
//     document.body.appendChild(vm.$el)
//     const cmp = vm.$children[0]
//     // 销毁dom
//     cmp.remove = () => {
//         document.body.removeChild(vm.$el)
//         vm.destory()
//     }
//     return cmp
// }
export default function create(Component, props) {
    // 1. 创建Component实例
    const vm = new Vue({
        render(h) {
            // 渲染函数使用
            // h === createElement
            // h(Component) => vdom
            return h(Component, {props})
        }
    }).$mount() // 先渲染不挂载

    // 方式2：Vue.extend() 返回组件构造函数
    // const Ctor = Vue.extend(Component)
    // const comp = new Ctor({propsData: props})    
    // document.body.appendChild(comp.$el)

    // 获取dom
    document.body.appendChild(vm.$el)

    // 2. 挂载
    const comp = vm.$children[0];

    // 3. 销毁
    comp.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }

    return comp
}