<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 14:05:02
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-03 23:02:39
 * @FilePath: \Nelson-Vue-Blog\src\views\main\BlogMain.vue
 * @Description: 管理页
-->
<template>
  <div class="main">
    <el-container class="MainContent">
      <el-aside width="180px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.MainContent {
  height: 100%;

  .el-aside {
    background-color: #404040;
  }
  .el-header {
    background-color: #808080;
  }
  .el-main {
    background-color: #c0c0c0;
  }
}
</style>
