<template>
  <div class="home">
    <HomeTitle/>
    <MainForm/>
  </div>
</template>

<script>
import MainForm from './HomeForm'
import HomeTitle from './HomeTitle'

export default {
  name: 'HomeView',

  components: {
    HomeTitle,
    MainForm
  }
}
</script>
