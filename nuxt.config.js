const title = 'IBM Quantum Experience';
const description = 'Program real quantum systems with the leading quantum cloud application.';

const polyfillFeatures = [
  'Element.prototype.append',
  'Element.prototype.closest',
  'HTMLCanvasElement.prototype.toBlob',
  'ResizeObserver'
];


export default {

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/composition-api'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
