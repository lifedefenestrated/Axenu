<template>
  <div id="app">
    <router-view/>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue"; // @ is an alias to /src

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>


<style lang="sass">
@import "./assets/styles/config.sass"
@import "./assets/styles/card.sass"

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  padding: 0
  margin: 0
  

html
body
  margin: 0
  padding: 0

body
  font-family: $font
  background-color: $body-background-color
  @include linear-gradient($gradient-start-color, $gradient-end-color)
  // background-color: linear-gradient(to bottom, $gradient-start-color, $gradient-end-color)
  // background-image: repeating-linear-gradient(bottom, $gradient-start-color, $gradient-end-color)
</style>
