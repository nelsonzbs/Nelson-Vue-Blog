<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 14:05:02
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-17 18:47:17
 * @FilePath: \Nelson-Vue-Blog\src\views\main\BlogMain.vue
 * @Description: 管理页
-->
<template>
  <div class="common-layout">
    <el-container>
      <MainMenu />
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from "../../components/main-menu/MainMenu.vue";
</script>

<style lang="less" scoped></style>
