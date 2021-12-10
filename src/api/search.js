// Axios para hacer la llamada HTTP
import { get } from 'axios'

// Store, donde tenemos almacenado nuestro token
import store from '@/store/index'

// La variable 'locales' de la librería utils/regions, dónde se encuentran los locales,
// por defecto, correspondientes a cada región
import { locales } from '@/utils/regions'

// Según la documentación de Blizzard, la URL general a la API de Diablo 3 es:
// https://{region}.api.blizzard.com, dónde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = 'https://'
const host = '.api.blizzard.com/'

/**
 * Según la documentación de Blizzard, para obtener el perfil de la cuenta
 * especificada se debe acceder, por GET, al endpoint /d3/profile/{account}
 * desde la URL general a la API de Diablo 3
 *
 * Los parámetros requeridos por este endpoint son:
 * @param region {String}
 * @param account {String}
 *
 * El endpoint nos devuelve una promesa
 * @returns {Promise}
 */
function getApiAccount ({ region, account }) {
  // Recurso (EndPoint) de la API al que queremos acceder
  const resource = `d3/profile/${account}/`

  // URL de la API completa
  const API_URL = `${protocol}${region}${host}${resource}`

  // Locale
  const locale = locales[region]

  // Parámetros:
  // - Token de acceso (recuperado desde Vuex)
  // - Locale
  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  // Retornamos el resultado de hacer la llamada a la API, es decir,
  // la promesa, que controlaremos (éxito / error) desde el componente
  return get(API_URL, { params })
}

/**
 * Devuelve todos los datos de un único héroe (stats, habilidades, etc.)
 *
 * GET – /d3/profile/{account}/hero/{heroId}
 *
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 *
 * @returns {Promise}
 */
function getApiHero ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

/**
 * Devuelve una lista de los ítems para el héroe especificado
 *
 * GET – /d3/profile/{account}/hero/{heroId}/items
 *
 * @param region {String}
 * @param account {String}
 * @param heroId {String}
 *
 * @returns {Promise}
 */
function getApiDetailedHeroItems ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return get(API_URL, { params })
}

export {
  getApiAccount,
  getApiHero,
  getApiDetailedHeroItems
}
