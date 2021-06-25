<template>
  <div id="app">
    <!-- <HeaderComponent></HeaderComponent> -->
      <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
  // import HeaderComponent from './components/sub-component/header.vue'
  import FooterComponent from './components/sub-component/footer.vue'

export default {
  name: 'App',
  components: {
    // HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
