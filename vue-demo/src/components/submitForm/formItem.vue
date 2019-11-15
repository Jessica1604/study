<template>
  <div>
   <label v-if="label">{{label}}</label>
   <slot></slot>
   <p v-if=error>{{error}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'onItem',
  inject: ['form'],
  props: {
    label: {
        type: String,
        default: ''
    },
    prop: {
        type: String,
        default: ''
    }
  },
  data() {
    return {
       error: ''
    }
  },
  mounted() {
      this.$on('validate',this.validate)
  },
  methods: {
      validate() {
          console.log('监听数据')
          // 获取表单校验的值
          let value = this.form.model[this.prop]
          // 获取表单校验的规则
          let rules = this.form.rules[this.prop]
        //   console.log(value)
        //   console.log(rules)
          let description = {[this.prop]: rules}
        //   const schema = new Schema({[this.prop]: rules});
          let schema = new Schema(description)
          return schema.validate({[this.prop]: value},errors => {
              if (errors) {
                  this.error = errors[0].message
              } else {
                  this.error = ''
              }
          })
            // 做校验
            // 1.获取数值和规则
            // const value = this.form.model[this.prop]
            // const rule = this.form.rules[this.prop]
            // // 2.创建校验规则
            // const schema = new Schema({[this.prop]: rule})
            // // 校验返回Promise
            // return schema.validate({[this.prop]: value}, errors => {
            //     if (errors) {
            //         // 有错
            //         this.error = errors[0].message;
            //     } else {
            //         this.error = ''
            //     }
            // })
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
