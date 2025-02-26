<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-21 16:32:28
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-26 18:16:30
 * @FilePath: \Nelson-Vue-Blog\src\App.vue
 * @Description: 项目根组件
-->
<template>
  <div class="app">
    <h1>松哥博客</h1>
    <router-link to="/main">主要页面</router-link>
    <router-link to="/login">登录页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.app {
  width: 100vw;
  height: 100vh;

  background-image: url("@/assets/img/login-bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
