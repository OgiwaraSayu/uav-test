<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './pages/MainPage.vue'

export default {
  name: 'App',
  components: {
      MainPage
  }
}
</script>

<style>
@import "assets/css/public.css";
#app div{
    float: left;
}
</style>
