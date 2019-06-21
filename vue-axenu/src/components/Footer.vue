<template>
  <footer>
    <div class="row">
      <img src="../assets/images/frame-2.png" alt="Social media1">
      <img src="../assets/images/frame-2.png" alt="Social media2">
      <img src="../assets/images/frame-2.png" alt="Social media3">
    </div>
    <div class="row">
      <h5>
        <a href="mailto:simon@axenu.se">simon@axenu.se</a> | Copyright Axenu 2019 | Designed by Sofia Tatidis
      </h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: []
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

footer
  // height: 300px
  padding: 30px
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
    width: 100px
    height: 100px
    margin: 0px 10px
    border-radius: 50px

</style>
