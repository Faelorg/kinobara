import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Main from "./components/Main.vue";
import VueCookies from "vue-cookies";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
  ],
  history: createWebHistory(),
});

createApp(App)
  .use(VueCookies, {
    expires: "1d",
  })
  .use(router)
  .mount("#app");
