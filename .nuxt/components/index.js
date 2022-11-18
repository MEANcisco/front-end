export { default as Cotizador } from '../../components/Cotizador.vue'
export { default as Domicilios } from '../../components/Domicilios.vue'
export { default as Examenes } from '../../components/Examenes.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Reservas } from '../../components/Reservas.vue'
export { default as Resultados } from '../../components/Resultados.vue'
export { default as Sucursales } from '../../components/Sucursales.vue'
export { default as ModalEx } from '../../components/modalEx.vue'
export { default as ModulesVideoBg } from '../../components/Modules/VideoBg.vue'
export { default as LayoutLayFooter } from '../../components/Layout/LayFooter.vue'
export { default as LayoutLayHeader } from '../../components/Layout/LayHeader.vue'

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
