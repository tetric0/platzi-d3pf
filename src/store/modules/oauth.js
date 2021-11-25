// Importamos la función que obtiene el token.
// El carácter @ es un alias para /src
import * as oauth from '@/api/oauth'

// Creamos el objeto con "Espacio de Nombres"
export default {
  namespaced: true,

  state: {
    accessToken: null
  },

  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.accessToken = payload
    }
  },

  actions: {
    // Creamos la función getToken, que recibe como parámetro el objeto `context`
    // Gracias a la asignación de desestructuración de JavaScript, recogemos `commit` como argumento
    getToken ({ commit }) {
      // Antes de lanbzar el proceso de obtención del token de autentificación, cambiamos el estado
      // del módulo de Vuex 'loading' a true
      commit('loading/SET_LOADING', true, { root: true })

      //  Realizamos la llamada HTTP para obtener el token
      oauth.getToken()
        //  Si no hay ningún error, guardamos el token en el módulo y continuamos con el flujo normal
        .then(({ data }) => {
          commit('SET_ACCESS_TOKEN', data.access_token)
        })
        // Si hay algún error, borramos el token del módulo y mostramos el error por la consola
        .catch((err) => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error OAuth: ', err)
        })
        .finally(() => {
          // Cuando acaba el proceso de obtención del token de autentificación, ya sea con errores o no,
          // cambiamos el estado del módulo de Vuex 'loading' a false
          commit('loading/SET_LOADING', false, { root: true })
        })
    }
  }
}
