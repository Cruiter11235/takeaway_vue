// import './assets/main.css'

import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import Router from "@/router/router.js";
const app = createApp(App);
app.use(Router);
app.use(Antd);
app.mount("#app");
