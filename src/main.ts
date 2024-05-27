import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import router, { setupRouter } from "@/router";
setupRouter(app);

import { setupAntd } from "@/libs/antdv";
setupAntd(app);

import { setupStore } from "@/store";
setupStore(app)

// the router has resolved all async enter hooks 
// and async components that are associated with the initial route.
router.isReady().then(() => {
    app.mount("#app");
});