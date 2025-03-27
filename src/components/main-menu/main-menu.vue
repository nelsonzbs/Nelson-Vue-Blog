<!--
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-03-25 14:59:21
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-27 17:51:46
 * @FilePath: \Nelson-Vue-Blog\src\components\main-menu\main-menu.vue
 * @Description: 导航栏页面
-->
<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="@/assets/vue.svg" alt="" />
      <h2 class="title">松哥博客后台</h2>
    </div>
    <div class="menu">
      <el-menu
        text-color="#e5eaf3"
        background-color="rgb(102.2, 177.4, 255)"
        active-text-color="#409EFF"
      >
        <el-menu-item>
          <el-icon><Platform /></el-icon> <span>首页</span>
        </el-menu-item>

        <el-sub-menu>
          <template #title>
            <el-icon><List /></el-icon> <span>文章管理</span>
          </template>
          <el-menu-item>文章列表</el-menu-item>
          <el-menu-item>新增文章</el-menu-item>
          <el-menu-item>标签管理</el-menu-item>
          <el-menu-item>分类管理</el-menu-item>
        </el-sub-menu>

        <el-menu-item>
          <el-icon><PictureFilled /></el-icon> <span>相册管理</span>
        </el-menu-item>

        <el-menu-item>
          <el-icon><UserFilled /></el-icon> <span>个人中心</span>
        </el-menu-item>

        <el-sub-menu>
          <template #title>
            <el-icon><List /></el-icon> <span>网站管理</span>
          </template>
          <el-menu-item>博客信息</el-menu-item>
          <el-menu-item>背景管理</el-menu-item>
          <el-menu-item>友链管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main-menu {
  height: 100%;
  background-color: rgb(28.8, 47.6, 67);
}
.logo {
  display: flex;
  height: 24px;
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
    color: #e5eaf3;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
  background-color: rgb(28.8, 47.6, 67);
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: rgb(24.4, 33.8, 43.5);
  }
  .el-menu-item:hover {
    color: #e5eaf3;
  }
  .el-menu-item.is-active {
    background-color: #409eff;
  }
}
</style>
