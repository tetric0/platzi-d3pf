// Traemos el método post de 'axios'
import { post } from 'axios'

// Deberás utilizar los datos de tu cuenta Blizzard a la hora de hacer las llamadas a las
// APIs.

// NOTA: La documentación comenta que hay número máximo de llamadas por segundo y hora
//       permitidas a la API.

// El client_id y el clientSecret deberían ser privados…
const clientId = '139ee6f2bd134e269ad17b031ee99d32'
const clientSecret = 'ijRfBb536w2z2zefg28ZMsh85UsqNAMU'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  // FormData es una clase que genera objetos para contener conjuntos de pares clave/valor
  const body = new FormData()

  // El método 'append' de FormDgit ass -Aata sirve apara agregar un par clave/valor
  // Agregamos el par 'grantType': 'client-credentials'
  body.append('grant_type', 'client_credentials')

  // En el objeto config especificamos los parámetros necesarios para hacer la llamada
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
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
