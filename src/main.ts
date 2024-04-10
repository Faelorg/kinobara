import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Main from "./components/Main.vue";
import Soon from "./components/Soon.vue";
import VueCookies from "vue-cookies";
import Contacts from "./components/Contacts.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path:"/soon",
      name:"soon",
      component:Soon
    },
    {
      path:"/contacts",
      name:"contacts",
      component: Contacts
    }
  ],
  history: createWebHistory(),
});

createApp(App)
  .use(VueCookies, {
    expires: "1d",
  })
  .use(router)
  .mount("#app");
