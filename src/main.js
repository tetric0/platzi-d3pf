// Paquetes de npm
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Configuración extra
Vue.use(BootstrapVue)
Vue.config.productionTip = false

// Instancia principal dew Vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
