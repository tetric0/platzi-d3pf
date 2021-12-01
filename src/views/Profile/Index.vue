<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData"/>
    </template>
  </div>
</template>

<script>
// Importamos el componente de Loading
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'

import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',

  // Damos de alta el mixin en el componente
  mixins: [
    setError
  ],

  // Damos de alta el componente de Loading
  components: { BaseLoading, MainBlock },
  data () {
    return {
      // Añadimos la variable isLoading para controlar el componente BaseLoading
      isLoading: false,
      profileData: null
    }
  },

  methods: {
    fetchData () {
      const { region, battleTag: account } = this.$route.params

      getApiAccount({ region, account })
        .then(({ data }) => {
          // Guardamos los datos en una variable local
          this.profileData = data
        })
        .catch((err) => {
          this.profileData = null

          // Creamos el objeto error
          const errObj = {
            routeParams: this.$route.params,
            message: err.message
          }

          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }

          // Hacemos uso del Mixin
          // Guardamos el objeto en el Store
          this.setApiErr(errObj)

          // Navegamos a la ruta de nombre 'Error'
          this.$router.push({ name: 'Error' })
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },

  created () {
    // Establecemos la variable isLoading a true cuando iniciamos la petición de datos
    // a la API
    this.isLoading = true
    this.fetchData()
  }
}
</script>
