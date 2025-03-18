<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 14:05:02
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-18 15:28:29
 * @FilePath: \Nelson-Vue-Blog\src\views\main\BlogMain.vue
 * @Description: 管理页
-->
<template>
  <div class="common-layout">
    <el-container>
      <MainMenu />
      <el-container class="header-and-main">
        <MainHeader />
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
.header-and-main {
  flex-direction: column;
}
.el-main {
  background-color: #e5eaf3;
}
</style>
