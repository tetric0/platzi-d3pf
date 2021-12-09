<template>
  <div>
    <BaseLoading v-if="isLoading"/>
    <template v-if="profileData !== null">
     <MainBlock :profile-data="profileData"/>
     <ArtisansBlock :artisans-data="artisansData"/>
    </template>
  </div>
</template>

<script>
// Importamos el componente de Loading
import BaseLoading from '@/components/BaseLoading'
// Importamos el componente MainBlock
import MainBlock from './MainBlock/Index'
// Importamos el componente MainBlock
import ArtisansBlock from './ArtisansBlock/Index'

import setError from '@/mixins/setError'
import { getApiAccount } from '@/api/search'

export default {
  name: 'ProfileView',

  // Habilitamos los mixins importados en el componente
  mixins: [
    setError
  ],

  // Habilitamos los componentes importados en el componente
  components: {
    ArtisansBlock,
    BaseLoading,
    MainBlock
  },

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

  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore
      }
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
