import Vue from 'vue'
import Vuex from 'vuex'

// Importamos nuestro módulo oauth para Vuex
import oauth from './modules/oauth'
import loading from './modules/loading'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  // Aquí registramos los módulos de Vuex
  modules: {
    oauth,
    loading,
    error
  }
})
