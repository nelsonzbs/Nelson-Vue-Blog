<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-27 14:22:55
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-01 15:21:00
 * @FilePath: \Nelson-Vue-Blog\src\views\login\c-cpns\LoginPanel.vue
 * @Description: 登录页子组件
-->
<template>
  <div class="LoginPanel">
    <h1 class="title">Logo</h1>
    <h1 class="title">博客管理后台</h1>
    <div class="form">
      <el-form :model="form">
        <el-form-item prop="account">
          <el-input
            placeholder="主人请输入帐号~"
            v-model="form.account"
            :prefix-icon="User"
          />
        </el-form-item>
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
        <el-form-item prop="password">
          <el-input
            placeholder="主人请输入密码~"
            v-model="form.password"
            :prefix-icon="Lock"
          />
        </el-form-item>
      </el-form>
    </div>
    <el-button
      class="login-btn"
      size="large"
      type="success"
      round
      plain
      @click="submitForm"
      >点击登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";

const form = ref({
  account: "",
  password: "",
});

const submitForm = () => {
  console.log("提交表单数据:", form.value);
};
</script>

<style lang="less" scoped>
.LoginPanel {
  width: 300px;
  margin-bottom: 150px;
  .title {
    height: 30px;
    text-align: center;
    margin-bottom: 15px;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
