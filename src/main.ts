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
      meta: {
        header: 1
      }
    },
    {
      path: "/soon",
      name: "soon",
      component: Soon,
      meta: {
        header: 2
      }
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
      meta: {
        header: 3
      }
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
