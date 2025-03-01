/*
 * @Author: Nelsonzbs zhangbaisong@88.com
 * @Date: 2025-03-01 03:07:50
 * @LastEditors: Nelsonzbs zhangbaisong@88.com
 * @LastEditTime: 2025-03-01 03:14:17
 * @FilePath: \Nelson-Vue-Blog\src\global\RegisterIcons.ts
 * @Description: element-plus icons全局
 */
import type { App } from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

function registerIcons(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export default registerIcons;
