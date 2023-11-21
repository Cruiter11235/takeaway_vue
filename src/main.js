// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import Router from "@/router/router.js";
import { createPinia } from "pinia";
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Router);
app.use(Antd);
app.mount("#app");
