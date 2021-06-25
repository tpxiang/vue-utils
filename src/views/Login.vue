<template>
    <div>
        <el-form ref="form" :model="loginForm" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="loginForm.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Api from '@/api'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {}
    }
  },
  methods: {
    onSubmit() {
      Api.user.login().then((res) => {
        console.log(res)
        this.$message({
          showClose: true,
          message: '登录成功',
          type: 'success'
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped>

</style>
