<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 14:05:02
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-25 15:40:56
 * @FilePath: \Nelson-Vue-Blog\src\views\main\BlogMain.vue
 * @Description: 管理页
-->
<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <main-menu />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from "@/components/main-menu/main-menu.vue";
import MainHeader from "@/components/main-header/main-header.vue";
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.main-content {
  height: 100%;
  .el-aside {
    background-color: #e5eaf3;
  }
  .el-header {
    background-color: #cfd3dc;
  }
  .el-main {
    background-color: #ffffff;
  }
}
</style>
