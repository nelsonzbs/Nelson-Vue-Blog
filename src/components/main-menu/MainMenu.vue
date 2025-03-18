<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-03-12 10:31:20
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-18 15:46:41
 * @FilePath: \Nelson-Vue-Blog\src\components\main-menu\MainMenu.vue
 * @Description: 左侧导航
-->
<template>
  <el-aside>
    <el-scrollbar>
      <el-menu router="true" unique-opened :collapse="isCollapse">
        <a href="/" class="logo">
          <img src="@/assets/vue.svg" alt="" />
          <h1 style="font-weight: bold">松哥博客后台</h1>
        </a>
        <el-menu-item index="/home">
          <el-icon><Platform /></el-icon> <span>后台首页</span>
        </el-menu-item>

        <el-sub-menu index="1">
          <template #title>
            <el-icon><List /></el-icon> <span>文章管理</span>
          </template>
          <el-menu-item index="/ArticleList">
            <span>文章列表</span>
          </el-menu-item>
          <el-menu-item index="AddArticle">
            <span>新增文章</span>
          </el-menu-item>
          <el-menu-item index="CategoryManagement">
            <span>分类管理</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/PhotoAlbum">
          <el-icon><PictureFilled /></el-icon> <span>相册列表</span>
        </el-menu-item>

        <el-menu-item index="/UserManagement">
          <el-icon><Avatar /></el-icon> <span>用户管理</span>
        </el-menu-item>

        <el-menu-item index="/PersonalManage">
          <el-icon><UserFilled /></el-icon> <span>个人中心</span>
        </el-menu-item>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><Tools /></el-icon> <span>网站管理</span>
          </template>
          <el-menu-item index="/SiteManagement">
            <span>博客信息管理</span>
          </el-menu-item>
          <el-menu-item index="HeaderManagement">
            <span>背景管理</span>
          </el-menu-item>
          <el-menu-item index="Links">
            <span>友链管理</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup lang="ts">
import { isCollapse } from "../isCollapse";
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #cfd3dc;
  height: 100vh;
  width: auto;
  .el-menu {
    background-color: #cfd3dc;
    border-right: none;
    width: 200px;
    &.el-menu--collapse {
      width: 60px;
      & h1 {
        display: none;
      }
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: black;
      height: 60px;
      .img {
        width: 32px;
        height: 32px;
      }
    }
  }
}
</style>
