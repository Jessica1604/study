<template>
  <div>
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'onItem',
  provide() {
      return {
          form: this
      }
  },
  props: {
    model: {
        type: Object,
        default: true
    },
    rules: {
        type: Object,
        default: true 
    }
  },
  data() {
    return {
       error: ''
    }
  },
  methods: {
      validate(cb) {
          const task = this.$children
          .filter((item)=> {item.prop})  // 只留下有prop属性的
          .map((item)=> {
              item.validate()
          })
          Promise.all(task).then(() => cb(true)).catch(() => cb(false))
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
