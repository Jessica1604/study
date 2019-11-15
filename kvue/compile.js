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
              this.compileElement(childNode)
            } else if (this.isInter(childNode)){
             //插值文本的判断
              this.compileText(childNode)
            }
            // 递归判断 这一块的递归也没有考虑到 写到了循环的外面
            if (childNode.childNodes && childNode.childNodes.length>0){
                // 忘记在这里加上this 了  this 
                this.compile(childNode)
            }

        })
    }
    isElement(node) {
        return node.nodeType === 1
    }
    isInter(node) {
       // return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent);
          return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
    }        
    compileElement(node) {  // 这段代码是拷贝过来的
        // 获取属性
        const nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(attr => {
        //   k-text="test"
        const attrName = attr.name; // k-text
        const exp = attr.value; // test

        if (attrName.indexOf("k-") === 0) {
            // 指令 k-text k-model
            const dir = attrName.substring(2); // text
            this[dir] && this[dir](node, exp);
        }
        });
    }

    text(node, exp) {
        this.update(node, exp, "text");
    }
    compileText(node) {
        console.log(RegExp.$1)
        // debugger
        const exp = RegExp.$1
        this.update(node,exp,'text')
        //node.textContent = this.$vm[RegExp.$1]
    }
    update(node,exp,dir) {
        // 数据初始化操作
        let updaterFn = this[dir + 'Updater']
        //updateFn && updateFn(node,exp)
        updaterFn && updaterFn(node, this.$vm[exp]);

        // 创建watcher，执行后续更新操作
        // 额外传递一个更新函数：能够更新指定dom元素
        new watcher(this.$vm, exp, function(value) {
            updaterFn && updaterFn(node, value);
        });
    }
    textUpdater(node,value) {
        // 这一块写错了
        node.textContent = value
    }
    
}