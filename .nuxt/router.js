import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b01575c0 = () => interopDefault(import('../pages/cotizador.vue' /* webpackChunkName: "pages/cotizador" */))
const _9b1de846 = () => interopDefault(import('../pages/domicilios.vue' /* webpackChunkName: "pages/domicilios" */))
const _075551a5 = () => interopDefault(import('../pages/examenes.vue' /* webpackChunkName: "pages/examenes" */))
const _5f94a3ac = () => interopDefault(import('../pages/reservas.vue' /* webpackChunkName: "pages/reservas" */))
const _5aafbc13 = () => interopDefault(import('../pages/resultados.vue' /* webpackChunkName: "pages/resultados" */))
const _297fff7d = () => interopDefault(import('../pages/Sucursales.vue' /* webpackChunkName: "pages/Sucursales" */))
const _1693a026 = () => interopDefault(import('../pages/blogs/_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _45a7591a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cotizador",
    component: _b01575c0,
    name: "cotizador"
  }, {
    path: "/domicilios",
    component: _9b1de846,
    name: "domicilios"
  }, {
    path: "/examenes",
    component: _075551a5,
    name: "examenes"
  }, {
    path: "/reservas",
    component: _5f94a3ac,
    name: "reservas"
  }, {
    path: "/resultados",
    component: _5aafbc13,
    name: "resultados"
  }, {
    path: "/Sucursales",
    component: _297fff7d,
    name: "Sucursales"
  }, {
    path: "/blogs/:slug?",
    component: _1693a026,
    name: "blogs-slug"
  }, {
    path: "/",
    component: _45a7591a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
