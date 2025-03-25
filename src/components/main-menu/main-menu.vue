<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-03-25 14:59:21
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-25 15:45:30
 * @FilePath: \Nelson-Vue-Blog\src\components\main-menu\main-menu.vue
 * @Description: 导航栏页面
-->
<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/vue.svg" alt="" />
      <h2 class="title">松哥博客后台</h2>
    </div>
    <div class="menu">菜单</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: #e5eaf3;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: black;
    white-space: nowrap;
  }
}
</style>
