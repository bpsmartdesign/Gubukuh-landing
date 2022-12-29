import { RouteRecordRaw } from "vue-router"

//#region web routes
const errorWeb: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "unknown",
    redirect: { name: "404" },
  },
  {
    path: "/401",
    name: "401",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 401 Unauthorized",
      description: "lorem ipsum 401 Unauthorized",
      title: "401 Unauthorized",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
  {
    path: "/403",
    name: "403",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 403 Forbidden",
      description: "lorem ipsum 403 Forbidden",
      title: "403 Forbidden",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 404 Not Found",
      description: "lorem ipsum 404 Not Found",
      title: "404 Not Found",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
  {
    path: "/500",
    name: "500",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 500 Internal server error",
      description: "lorem ipsum 500 Internal server error",
      title: "500 Internal server error",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
  {
    path: "/502",
    name: "502",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 502 Bad gateway",
      description: "lorem ipsum 502 Bad gateway",
      title: "502 Bad gateway",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
  {
    path: "/503",
    name: "503",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 401 Unauthorized",
      description: "lorem ipsum 401 Unauthorized",
      title: "401 Unauthorized",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
  {
    path: "/504",
    name: "504",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - 503 Service Unavailable",
      description: "lorem ipsum 503 Service Unavailable",
      title: "503 Service Unavailable",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolorem placeat laborum! Beatae et, possimus quisquam eligendi ducimus suscipit distinctio.",
    },
    component: () => import("@/views/pages/Error.vue"),
  },
]
const mainWeb: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - Home",
      description: "lorem ipsum home",
    },
    name: "home_page",
    component: () => import("@/views/pages/Home.vue"),
  },
  {
    path: "/home",
    meta: {
      layout: "page-layout",
      name: "Gubukuh - Landing page - Home",
      description: "lorem ipsum home",
    },
    name: "home",
    component: () => import("@/views/pages/Home.vue"),
  },
]
//#endregion

const routes: RouteRecordRaw[] = [
  ...mainWeb,
  ...errorWeb,
]
export default routes
