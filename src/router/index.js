// ATENCION - IMPORTANTE!!!
//
// Si tienes la versión actual de babel
//
// "babel-eslint": "^10.1.0"
// Y te sale este error
//
// Cannot read property 'range' of null
// configura los rules en el package.json
//
// "rules": {
//       "template-curly-spacing": "off",
//       "indent": [
//         "error",
//         2,
//         {
//           "ignoredNodes": [
//             "TemplateLiteral"
//           ]
//         }
//       ]
//     },
// de lo contrario tienes que cambiar a la versión que recomendaron al inicio.
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Configuración rutas
const routerOptions = [
  { path: '/', name: 'Home' },
  { path: '/region/:region/profile/:battleTag', name: 'Profile' },
  { path: '/region/:region/profile/:battleTag/hero/:heroId', name: 'Hero' },
  { path: '/about', name: 'About' },
  { path: '/error', name: 'Error' },
  { path: '*', redirect: { name: 'Home' } }
]

// Rutas
const routes = routerOptions.map(r => {
  return {
    ...r,
    // Lazy load
    component: () => import(`@/views/${r.name}/Index.vue`)
  }
})

const router = new Router({
  routes
})

export default router
