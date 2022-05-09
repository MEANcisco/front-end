export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',
  fetchOnServer: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Laboratorio Clínico Alemán - Expertos en exámenes médicos ',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Laboratorio Clínico Alemán, con mas de 300 exámenes diferentes, uno de los laboratorios mas completos del Maule.' },
      { name: 'format-detection', content: 'telephone=yes' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate.css',
    '~/style.css',
    '~/assets/fonts/flaticon.css',
    '~/assets/css/slick.css',
    '~/assets/css/off-canvas.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/rsmenu-main.css',
    '~/assets/css/rs-spacing.css',
    '~/assets/css/responsive.css',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-slick-carousel.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/device',
    '@nuxtjs/fontawesome',
    [
      '@nuxtjs/eslint-module',
      {
        fix: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    [
      'vuejs-google-maps/nuxt',
      {
        apiKey: 'AIzaSyBksX3YKsB-yEtD383OXqBnkTvImIG8awA',
        libraries: ['places', 'geometry', 'drawing'],
      },
    ],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://laboratorio-front.netlify.app',
    gzip: true,
    routes: [
      '/',
      '/reservas',
      '/domicilios',
      '/resultados',
    ]  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  script: [
    {
      src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBksX3YKsB-yEtD383OXqBnkTvImIG8awA&libraries=places,geometry,drawing&language=es',
    },
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
}
