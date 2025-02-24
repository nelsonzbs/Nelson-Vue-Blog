/*
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-21 16:32:28
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-24 09:57:40
 * @FilePath: \Nelson-Vue-Blog\src\main.ts
 * @Description: 项目入口
 */
import { createApp } from "vue";
import App from "./App.vue";
// 插入normalize.css 重置CSS样式,引入全局CSS文件
import "normalize.css";
import "./styles/index.less";

const app = createApp(App);
app.mount("#app");
