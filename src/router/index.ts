import { createRouter, createWebHistory } from "vue-router"
import routes from "@/router/routes"

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    let ret1 = savedPosition ?? undefined
    let ret2 = to.hash ? { el: to.hash } : undefined

    return ret1 ?? ret2 ?? { top: 0 }
  },
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  // TODO Implement Navigation guard
  if(to.meta?.access) {
    // TODO Check user role and make the flow
  }
  next()
})

// eslint-disable-next-line no-unused-vars
router.beforeResolve((to, from, next) => {
  // TODO Implement Resolve guard
  next()
})

router.afterEach((to, from, failure) => {
  // TODO Implement After navigation hook
  if(!failure) {
    // Do something
  }
})

export default router
