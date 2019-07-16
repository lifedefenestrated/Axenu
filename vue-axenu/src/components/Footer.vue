<template>
  <footer>
    <div class="row">
      <Social type="facebook" :large="true"></Social>
      <Social type="linkedin" :large="true"></Social>
      <Social type="twitter" :large="true"></Social>
      <!-- <img
        style="cursor:pointer;"
        v-on:click="facebook"
        src="../assets/images/facebook/f_logo_RGB-Blue_100.png"
        alt="Social media1"
      />
      <img
        style="cursor:pointer;"
        v-on:click="linkedin"
        src="../assets/images/linkedin/LI-In-Bug.png"
        alt="Social media2"
      />
      <img
        style="cursor:pointer;"
        v-on:click="twitter"
        src="../assets/images/twitter/Twitter_Social_Icon_Circle_Color.png"
        alt="Social media3"
      />-->
    </div>
    <div class="row">
      <h5>
        <a href="mailto:simon@axenu.se">simon@axenu.se</a> | Copyright Axenu 2019 | Designed by Sofia Tatidis
      </h5>
    </div>
  </footer>
</template>

<script>
import Social from "@/components/Social.vue";
export default {
  name: "Footer",
  components: { Social },
  props: [],
  methods: {
    linkedin: function() {
      location.href = "https://www.linkedin.com/company/axenu/";
    },
    facebook: function() {
      location.href = "https://www.facebook.com/Axenu-AB-494206151325798/";
    },
    twitter: function() {
      location.href = "https://twitter.com/AxenuAB";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

footer
  // height: 300px
  padding: 30px
  // display:flex
  align-self: flex-end
  // align-items: center

  .row
    // width: 100%
    display: flex
    justify-content: center
    margin: 30px 0px

  h5
    color: white
    font-size: 0.9em

    a
      color: inherit
      text-decoration: none

  img
    // width: 100px
    height: 80px
    margin: 0px 10px
    // border-radius: 50px

</style>
