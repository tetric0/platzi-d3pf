<template>
  <div class="header-bar">
    <div class="navigation-bar">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{ name: 'Home' }">
          <img src="@/assets/img/diablo-iii.svg" alt="D3" width="30">
          <span class="font-diablo ml-2">{{ title }}</span>
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HeaderBar',
  data () {
    return {
      // Ten en cuenta de que sólo las variables que empiezan con ‘VUE_APP_’ quedaran integrades,
      // de forma estàtica, dentro del bundle cliente con ‘webpack.DefinePlugin’.
      // Con la siguiente instrucción, recuperamos la variable de entorno y la guardamos en 'title'
      title: process.env.VUE_APP_TITLE
    }
  }
}
</script>
