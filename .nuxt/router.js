import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a4baeda = () => interopDefault(import('..\\pages\\cotizador.vue' /* webpackChunkName: "pages/cotizador" */))
const _7ae7d963 = () => interopDefault(import('..\\pages\\domicilios.vue' /* webpackChunkName: "pages/domicilios" */))
const _1c0dc8ab = () => interopDefault(import('..\\pages\\examenes.vue' /* webpackChunkName: "pages/examenes" */))
const _3623b5a0 = () => interopDefault(import('..\\pages\\reservas.vue' /* webpackChunkName: "pages/reservas" */))
const _23268999 = () => interopDefault(import('..\\pages\\resultados.vue' /* webpackChunkName: "pages/resultados" */))
const _10037a64 = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _593eaba6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2a4baeda,
    name: "cotizador"
  }, {
    path: "/domicilios",
    component: _7ae7d963,
    name: "domicilios"
  }, {
    path: "/examenes",
    component: _1c0dc8ab,
    name: "examenes"
  }, {
    path: "/reservas",
    component: _3623b5a0,
    name: "reservas"
  }, {
    path: "/resultados",
    component: _23268999,
    name: "resultados"
  }, {
    path: "/blogs/:slug?",
    component: _10037a64,
    name: "blogs-slug"
  }, {
    path: "/",
    component: _593eaba6,
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
