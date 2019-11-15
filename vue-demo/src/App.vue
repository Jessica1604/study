<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <kForm :model='model' :rules='rules' ref='loginForm'>
      <kFormItem label='用户名' prop='userName'>
        <onInput type='text' @inputValue='handleValue' v-model="model.userName" placeholder='请输入用户名'></onInput>
      </kFormItem>
      <kFormItem label='密码' prop='passWord'>
        <onInput type='password' v-model="model.passWord" placeholder='请输入密码'></onInput>
      </kFormItem>
      <kFormItem>
        <!-- <onInput type='button' @click="submit">登录</onInput> -->
        <button @click='submit'>登录</button>
      </kFormItem>
    </kForm>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import onInput from './components/submitForm/formInput.vue'
import kFormItem from './components/submitForm/formItem.vue'
import kForm from './components/submitForm/kForm.vue'
import create from './until/create.js'
import Notice from './components/Notice.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    onInput,
    kFormItem,
    kForm
  },
  data() {
    return {
      value: '',
      model: {userName: 'jessica',passWord: ''},
      rules: {userName:[{required:true,message: '用户名不能为空'}],passWord:[{required:true,message: '密码不不能为空'}]}

    }
  },
  methods: {
    handleValue(value) {
      // console.log(value)
      this.value = value
    },
    submit() {
      this.$refs['loginForm'].validate((cb)=> {
        if (cb) {
          const comp = create(Notice, {
            title: '社会你杨哥喊你来搬砖',
            message: '登录成功',
            times: 1000
          })
          comp.show()
          // const comp = create(Notice, {
          //   title: "社会你杨哥喊你来搬砖",
          //   message: cb ? "请求登录!" : "校验失败!",
          //   times: 3000
          // })
          // console.log(comp)
          // comp.show()
        }
        // if (cb) {
        //   console.log('登录成功')
        // } else {
        //   console.log('登录失败')
        // }

      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
