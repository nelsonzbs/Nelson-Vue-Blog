<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 14:04:47
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-27 14:40:31
 * @FilePath: \Nelson-Vue-Blog\src\views\login\BlogLogin.vue
 * @Description: 登录页
-->
<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "./c-cpns/LoginPanel.vue";
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-image: url("@/assets/img/login-bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
