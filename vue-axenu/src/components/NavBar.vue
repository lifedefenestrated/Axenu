<template>
  <div class="navContainer">
    <!-- <img class="headerImage" :class="{home: home}" src="../assets/images/header_image.jpg"> -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
    <!-- <nav>
      <ul>
        <li><a href="#">Homes</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="#">Work with us</a></li>
        <li><a href="#">Products/projects</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>-->
    <h1 v-if="!home">{{title || "Missing title"}}</h1>

    <img v-if="home" src="../assets/images/frame-2.png" class="icon">
    <h2 v-if="home">Your friendly neighborhood developer</h2>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["title", "home"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.navContainer
  background-image: url("../assets/images/header_image.jpg")
  background-size: cover
  background-repeat: no-repeat
  background-position: 50% 50%
  padding-bottom: 50px
  margin-bottom: 40px

nav
  z-index: 100
  display: flex
  flex-direction: row
  justify-content: space-around
  background-color: rgba(0,0,0,0.6)
  position: fixed
  top: 0px
  width: 100%

  a
    list-style-type: none
    text-decoration: none
    color: white
    padding: 10px 40px
    margin: 5px 0

    &:hover
      background-color: rgba(0,0,0,0.2)
      border-radius: 5px

h1
  color: white
  font-size: 6em
  font-weight: bold
  // align-self: center
  text-align: center
  padding-top: 40px
  // padding-bottom: 70px

.icon
  padding-top: 90px
  margin: 30px
  height: 200px

h2
  color: white
  font-size: 1.7em
  font-weight: bold
  // align-self: center
  text-align: center
  margin-bottom: 50px

</style>
