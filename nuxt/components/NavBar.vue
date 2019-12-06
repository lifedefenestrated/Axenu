<template>
  <div class="navContainer">
    <!-- <img class="headerImage" :class="{home: home}" src="../assets/images/header_image.jpg"> -->

    <b-navbar toggleable="md" type="dark">
      <!-- <b-navbar-brand>Axenu</b-navbar-brand> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item-dropdown text="Portfolio">
            <b-dropdown-item
              v-for="(product, key) in products"
              :key="key"
              :to="`/products/${product.title_slug}`"
              >{{ product.title }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item to="/contact">Contact</b-nav-item>
          <!-- <b-nav-item to="/products">Products</b-nav-item> -->
          <b-nav-item v-if="blogActive" to="/blog">Blog</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link class="dropdownToggle" to="/products">
        Products
        <div class="dropdownContainer">
          <router-link to="/products/micke">Micke</router-link>
          <router-link to="/products/Dreamweddings">Dreamweddings</router-link>
        </div>
      </router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>-->
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
    <h1 v-if="!home" :class="{ smallTitle: smallTitle }">
      {{ title || 'Missing title' }}
    </h1>

    <div v-if="home" class="iconContainer">
      <img
        src="../assets/images/loggo/loggo_white_transparent.png"
        class="icon"
        alt="Axenu Logo"
      />
    </div>
    <h2 v-if="home">We Build the Service of the Future</h2>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['title', 'home', 'smallTitle'],
  data() {
    return {
      // blogEnabled: false
    }
  },
  computed: {
    blogActive() {
      return this.$store.state.blogActive
    },
    products() {
      return this.$store.state.products
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.navContainer
  background-image: url("../assets/images/header_image.jpg")
  background-size: cover
  background-repeat: no-repeat
  background-position: 50% 50%
  padding: 50px 0px
  margin-bottom: 40px
  display: flex
  justify-content: center
  flex-direction: column

.navbar-dark
  .navbar-nav
    .nav-link
      color: white

nav
  // background-color: white
  background-color: rgba(0,0,0,0.6)
  backdrop-filter: blur(8px)
  -webkit-backdrop-filter: blur(8px)
  position: fixed
  top: 0px
  width: 100%
  z-index: 10

  @media (max-width: 768px)
    .navbar-collapse
      background: #333

  a
    // list-style-type: none
    // text-decoration: none
    // color: white
    // padding: 10px 40px
    // margin: 5px 0
    // color: white

    &:hover
      background-color: rgba(0,0,0,0.2)
      border-radius: 5px

h1
  color: white
  font-size: 6em
  font-weight: bold
  // align-self: center
  text-align: center
  word-wrap: break-word
  padding: 0px 10px
  padding-top: 40px
  // padding-bottom: 70px

  @media (max-width: 960px)
    font-size: 10vw

  &.smallTitle
    font-size: 3em

.iconContainer
  background-color: rgba(0,0,0,0.5)
  height: 300px
  width: 300px
  display: flex
  border-radius: 150px
  align-self: center
  justify-content: center
  margin: 20px 0px
  .icon
    align-self: center
    // justify-content: center
    // margin-top: 90px
    // margin: 30px
    // margin-bottom: 30px
    // padding: 50px
    height: 150px
    // background-color: rgba(0,0,0,0.5)
    // border-radius: 150px

h2
  color: white
  font-size: 1.7em
  font-weight: bold
  // align-self: center
  text-align: center
  margin-bottom: 50px


// .dropdownToggle

//   position: relative

//   .dropdownContainer
//     // display: none
//     display: flex
//     position: absolute
//     flex-direction: column
//     z-index: 1
//     background-color: rgba(0,0,0,0.5)
//     // margin-top: 10px

//     &:hover
//       display: flex

//   &:hover
//     .dropdownContainer
//       display: flex
</style>
