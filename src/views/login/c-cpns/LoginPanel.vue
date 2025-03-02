<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-27 14:22:55
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-02 23:37:56
 * @FilePath: \Nelson-Vue-Blog\src\views\login\c-cpns\LoginPanel.vue
 * @Description: 登录页子组件
-->
<template>
  <div class="LoginPanel">
    <h1 class="title">Logo</h1>
    <h1 class="title">博客管理后台</h1>
    <div class="form">
      <el-form
        :model="account"
        :rules="accountRules"
        :ref="formRef"
        status-icon
      >
        <el-form-item prop="name">
          <el-input
            placeholder="主人请输入帐号~"
            v-model="account.name"
            :prefix-icon="User"
          />
        </el-form-item>
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
        <el-form-item prop="password">
          <el-input
            placeholder="主人请输入密码~"
            v-model="account.password"
            show-password
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
      @click="onSubmit"
      >点击登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";

const account = reactive({
  name: "",
  password: "",
});

// 登录事件
// 表单校验
const onSubmit = async () => {
  await formRef.value?.validate().catch((err) => {
    ElMessage.error("表单校验失败...");
    throw err;
  });
  //正式发送正式请求
  console.log("正式登录请求");
};
// 校验规则
const accountRules: FormRules = {
  name: [{ required: true, message: "要输入帐号信息呦~", trigger: "blur" }],
  password: [{ required: true, message: "要输入密码信息呦~", trigger: "blur" }],
};

const formRef = ref<FormInstance>();
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
