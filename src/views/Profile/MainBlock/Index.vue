<template>
  <div class="grid-container">
    <!-- Bloque izquierdo -->
    <div class="grid-item item-left">
      <!-- Usamos el componente TopHeroes -->
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>
      <!-- Usamos el componente HeroesList -->
      <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>
      <!-- Usamos el componente ProgressList -->
      <ProgressList :acts="profileData.progression"/>
    </div>
    <!-- Bloque derecho -->
    <div class="grid-item item-right">
      <!-- Usamos el componente PlayerStats -->
      <PlayerStats :stats="statsData"/>
    </div>
  </div>
</template>

<script>
// Importamos el componente PlayerStats
import PlayerStats from './PlayerStats/Index'
// Importamos el componente ProgressList
import ProgressList from './ProgressList/Index'
// Importamos el componente TopHeroes
import TopHeroes from './TopHeroes/Index'
// Importamos el componente HeroesList
import HeroesList from './HeroesList/Index'

export default {
  name: 'MainBlock',

  components: {
    // Damos de alta el componente PlayerStats
    PlayerStats,
    // Damos de alta el componente ProgressList
    ProgressList,
    // Damos de alta el componente HeroesList
    HeroesList,
    // Damos de alta el componente TopHeroes
    TopHeroes
  },

  props: {
    profileData: {
      type: Object,
      required: true
    }
  },

  computed: {
    // Stats del perfil de usuario
    statsData () {
      const { paragonLevel, kills, timePlayed } = this.profileData
      return { paragonLevel, kills, timePlayed }
    },

    // Comprobamos que hay héroes
    hasHeroes () {
      return this.profileData.heroes.length > 0
    },

    // Devolvemos los héroes del top 3 de la cuenta
    topHeroes () {
      return this.profileData.heroes.slice(0, 3)
    },

    hasHeroesList () {
      return this.profileData.heroes.length > 3
    },

    heroesList () {
      return this.profileData.heroes.slice(3, this.profileData.heroes.length)
    }
  }
}
</script>

<style lang="stylus">
  .grid-container
    display grid
    grid-template-columns 1fr

    .grid-item
      &.item-left
        grid-column span 1

      &.item-right
        grid-column span 1

  @media (min-width: 992px)
    .grid-container
      display grid
      grid-template-columns repeat(6, 1fr)

      .grid-item
        &.item-left
          grid-column span 4

        &.item-right
          grid-column span 2
</style>
