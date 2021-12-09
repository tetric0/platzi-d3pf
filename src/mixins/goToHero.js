export default {
  methods: {
    /**
     * Ir a la vista de detaller del héroe con el 'id' recibido
     *
     * @param heroId {String | Number}
     */
    goToHero (heroId) {
      // Conseguir los datos de la URL
      const { region, battleTag } = this.$route.params
      // Navegar a la ruta "Hero"
      this.$router.push({ name: 'Hero', params: { region, battleTag, heroId } })
    }
  }
}
