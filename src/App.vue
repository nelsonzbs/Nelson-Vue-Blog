<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-21 16:32:28
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-24 14:50:47
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

<style lang="less" scoped></style>
