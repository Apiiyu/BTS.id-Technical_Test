import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles 
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import '@/assets/css/styles.css'

//vue-sax (just for loader)
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

// Script
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

window.$ = window.jQuery = require('jquery')
window.axios = require('axios')

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuesax)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
