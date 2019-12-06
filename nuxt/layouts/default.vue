<template>
  <div id="app">
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
  components: {
    Footer
  }
}
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
  height: 100%
  // justify-content: space-between
  // align-content: space-between
  // display: flex

html
  // height: 100%
  min-height: 100%

html
body
  margin: 0
  padding: 0
  // height: 100vh
  // display:flex
  // height: 100%

body
  font-family: $font
  background-color: $body-background-color
  @include linear-gradient($gradient-start-color, $gradient-end-color)
  // min-height: 100vh
  // background-color: linear-gradient(to bottom, $gradient-start-color, $gradient-end-color)
  // background-image: repeating-linear-gradient(bottom, $gradient-start-color, $gradient-end-color)
</style>
