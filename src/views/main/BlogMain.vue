<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 14:05:02
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-12 11:16:23
 * @FilePath: \Nelson-Vue-Blog\src\views\main\BlogMain.vue
 * @Description: 管理页
-->
<template>
  <div class="main">
    <el-container class="MainContent">
      <el-aside width="210px">
        <MainMenu />
      </el-aside>
      <el-container>
        <el-header>
          <MainHeader />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from "../../components/main-menu/MainMenu.vue";
import MainHeader from "../../components/main-header/MainHeader.vue";
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.MainContent {
  height: 100%;

  .el-aside {
    background-color: #001529;
  }
  .el-header {
    background-color: #808080;
  }
  .el-main {
    background-color: #c0c0c0;
  }
}
</style>
