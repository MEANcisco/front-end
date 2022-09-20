export const Cotizador = () => import('../../components/Cotizador.vue' /* webpackChunkName: "components/cotizador" */).then(c => wrapFunctional(c.default || c))
export const Domicilios = () => import('../../components/Domicilios.vue' /* webpackChunkName: "components/domicilios" */).then(c => wrapFunctional(c.default || c))
export const Examenes = () => import('../../components/Examenes.vue' /* webpackChunkName: "components/examenes" */).then(c => wrapFunctional(c.default || c))
export const Home = () => import('../../components/Home.vue' /* webpackChunkName: "components/home" */).then(c => wrapFunctional(c.default || c))
export const Reservas = () => import('../../components/Reservas.vue' /* webpackChunkName: "components/reservas" */).then(c => wrapFunctional(c.default || c))
export const Resultados = () => import('../../components/Resultados.vue' /* webpackChunkName: "components/resultados" */).then(c => wrapFunctional(c.default || c))
export const ModalEx = () => import('../../components/modalEx.vue' /* webpackChunkName: "components/modal-ex" */).then(c => wrapFunctional(c.default || c))
export const LayoutLayFooter = () => import('../../components/Layout/LayFooter.vue' /* webpackChunkName: "components/layout-lay-footer" */).then(c => wrapFunctional(c.default || c))
export const LayoutLayHeader = () => import('../../components/Layout/LayHeader.vue' /* webpackChunkName: "components/layout-lay-header" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
