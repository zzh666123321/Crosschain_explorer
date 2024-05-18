import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);
app.use(ElementPlus)



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