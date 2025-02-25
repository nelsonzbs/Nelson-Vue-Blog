/*
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-02-21 16:32:28
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-02-25 17:19:35
 * @FilePath: \Nelson-Vue-Blog\vite.config.ts
 * @Description: 项目配置
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// 安装SRC别名依赖
import path from "path";
// 配置Element-plus自动按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 以下AutoImport/Components是为配置Element-plus自动按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
});
