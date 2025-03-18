<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-03-12 10:41:26
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-18 15:44:13
 * @FilePath: \Nelson-Vue-Blog\src\components\main-header\MainHeader.vue
 * @Description: 头部导航
-->
<template>
  <el-header>
    <el-icon @click="isCollapse = !isCollapse">
      <Expand v-show="isCollapse" />
      <Fold v-show="!isCollapse" />
    </el-icon>

    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">promotion management</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>

    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="32"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户名称</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script setup lang="ts">
import { isCollapse } from "../isCollapse";
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: #cfd3dc;
  .el-icon {
    margin-right: 20px;
  }
  .el-dropdown {
    margin-left: auto;
  }
}
</style>
