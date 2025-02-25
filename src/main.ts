/*
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-21 16:32:28
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-24 13:59:03
 * @FilePath: \Nelson-Vue-Blog\src\main.ts
 * @Description: 项目入口
 */
import { createApp } from "vue";
import App from "./App.vue";
// 挂载normalize.css 重置CSS样式,引入全局CSS文件
import "normalize.css";
import "./styles/index.less";
// 挂载路由
import router from "./router/index";
// 挂载pinia状态管理工具
import pinia from "./stores/index";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
