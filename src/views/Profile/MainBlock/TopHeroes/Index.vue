<template>
  <div class="top-heroes">
    <!-- Título con nuestra fuente tipo Diablo -->
    <h2 class="my-4 font-diablo">Top Heroes</h2>
    <!-- 3 columnas: Una para cada TopHero -->
    <b-row>
      <!-- No te olvides de poner el ‘key’ cuando use la directiva v-for -->
      <b-col sm="4" v-for="hero in heroes" :key="hero.id">
        <!-- TopHero con datos como prop -->
        <TopHero :hero="hero"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TopHero from './TopHero'

export default {
  name: 'TopHeroes',

  components: {
    TopHero
  },

  props: {
    heroes: {
      required: true,
      type: Array
    }
  }
}
</script>
