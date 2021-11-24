import Vue from 'vue'
import Vuex from 'vuex'

// Importamos nuestro módulo oauth para Vuex
import oauth from './modules/oauth'

Vue.use(Vuex)

export default new Vuex.Store({
  // Aquí registramos los módulos de Vuex
  modules: {
    oauth
  }
})
