<template lang="">
  <div class="wrapper">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <HelloWorld msg="You did it!" />
  </div>
  <a-form style="text-align: center">
    <a-form-item label="Username" required v-bind="validateInfos.username">
      <a-input v-model:value="userInfo.username"/>
    </a-form-item>
    <a-form-item label="Password" required  v-bind="validateInfos.password">
      <a-input v-model:value="userInfo.password" />
    </a-form-item>
    <a-form-item>
      <a-button @click.prevent="handleLogin">登录</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { reactive, toRaw } from 'vue'
import { useUserStore } from '@/stores/modules/user'
import { Form } from 'ant-design-vue'

const userStore = useUserStore()

const userInfo = reactive({
  username: '',
  password: ''
})

const useForm = Form.useForm
const { validate, validateInfos } = useForm(
  userInfo,
  reactive({
    username: [{ required: true, message: '请输入用户名' }],
    password: [{ required: true, message: '请输入密码' }]
  })
)

function handleLogin() {
  // 表单验证在标签:rules中已经完成，具体可见vantui表单验证方法
  validate()
    .then(async () => {
      const data = toRaw(userInfo)
      if (data) {
        await userStore.login(data)
      }
    })
    .catch(err=>{
      console.log(err)
    })
}
</script>

<style lang="less">
.wrapper {
  text-align: center;

  .logo {
    display: inline-block;
  }
}
</style>
