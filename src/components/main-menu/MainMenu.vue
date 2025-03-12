<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-03-12 10:31:20
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-12 15:18:00
 * @FilePath: \Nelson-Vue-Blog\src\components\main-menu\MainMenu.vue
 * @Description: 左侧导航
-->
<template>
  <div class="MainMenu">
    <div class="logo">
      <img class="img" src="" alt="" />
      <h2 class="title">松哥博客管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        active-text-color="#fff"
        text-color="#b7bdc3"
        background-color="#001529"
      ></el-menu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.logo {
  display: flex;
  height: 28%;
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
    color: white;
    white-space: nowrap;
  }
}
.el-menu {
  border-right: none;
  user-select: none;
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }
  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
