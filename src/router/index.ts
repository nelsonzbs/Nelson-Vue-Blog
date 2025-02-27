/*
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-24 12:42:00
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-27 14:03:32
 * @FilePath: \Nelson-Vue-Blog\src\router\index.ts
 * @Description: 项目路由
 */
import { createRouter, createMemoryHistory } from "vue-router";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("../views/login/BlogLogin.vue"),
    },
    {
      path: "/main",
      component: () => import("../views/main/BlogMain.vue"),
    },
  ],
});

// 导航守卫

export default router;
