/* eslint-disable no-unused-vars */
import { RouteLocationNormalized } from "vue-router"

export const removeQueryParams = (to: RouteLocationNormalized) => {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

export const removeHash = (to: RouteLocationNormalized) => {
  if (to.hash) return { path: to.path, query: to.query, hash: "" }
}

export const confirmRouteLeave = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {
  // Do something
}

export const checkAppAccess = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {
  // Do something
}
