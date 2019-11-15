// compile 函数 编译过程
class Compile{
    constructor(el,vm){
        this.$el = document.querySelector(el);
        this.$vm = vm
        // 这一点没有考虑到
        if (this.$el){
            this.compile(this.$el)
        }
    }
    compile(el) {
        let node = el.childNodes
        // 将节点转换成数组
        Array.from(node).forEach((childNode)=> {
            // 元素节点判断
            if (this.isElement(childNode)) {
              console.log(123)
            } else if (this.isInter(childNode)){
             //插值文本的判断
              this.compileText(childNode)
            }
            // 递归判断 这一块的递归也没有考虑到 写到了循环的外面
            if (childNode.childNodes && childNode.childNodes.length>0){
                // 忘记在这里加上this 了  this 
                this.compile(childNode.childNodes)
            }

        })
    }
    isElement(node) {
        return node.nodeType === 1
    }
    isInter(node) {
        return node.nodeTyoe === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }
    compileText(node) {
        node.textContent = this.$vm[RegExp.$1]
    }
    
}