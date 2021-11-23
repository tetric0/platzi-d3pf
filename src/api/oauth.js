// Traemos el método post de 'axios'
import { post } from 'axios'

// Deberás utilizar los datos de tu cuenta Blizzard a la hora de hacer las llamadas a las
// APIs.

// La documentación comentas que hay número máximo de llamadas por segundo y hora a la API.

// El client_id y el clientSecret deberían ser privados…
const clientId = 'db5d7d6e7db543e0a3e13cf5812ce76'
const clientSecret = 'wuf4Ym9jX5kOurOUnmnB8wdBO6VKSm6'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // FormData es una clase que genera objetos para contener conjuntos de pares clave/valor
  const body = new FormData()

  // El método 'append' de FormData sirve apara agregar un par clave/valor
  // Agregamos el par 'grantType': 'client-credentials'
  body.append('grantType', 'client-credentials')

  // En el objeto config especificamos los parámetros necesarios para hacer la llamada
  const config = {
    headers: { 'Content-type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret }
  }

  // Una vez especificados todos los elementos necesarios, realizamos y devolvemos la
  // petición POST, pasando la URL como primer parámetro, seguida del body (el objeto de
  // tipo FormData) y los parámetros adicionales necesarios.
  return post(API_URL, body, config)
}

// Exportamos la función de esta API para que puedan usarla otros componentes
export {
  getToken
}
