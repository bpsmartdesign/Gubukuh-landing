import { createApp } from "vue"
import { createHead } from "@vueuse/head"

import router from "@/router"
import LayoutLoader from "@/views/layouts/loader/layout-loader.vue"
import App from "./App.vue"

import "animate.css"
import "./main.css"
import "@/assets/line-awesome-1.3.0/scss/line-awesome.scss"
import "@/styles/main.scss"

const head = createHead()
const app = createApp(App)

app
  .use(head)
  .use(router)
  .component("LayoutLoader", LayoutLoader)
  .mount("#app")
