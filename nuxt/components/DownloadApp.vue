<template>
  <div v-if="type == 'apple'" class="container" v-on:click="click">
    <img
      src="../assets/images/apple/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
      class="apple"
      alt="Download on the iOS app store"
    />
  </div>
  <div v-else class="container" v-on:click="click">
    <img
      src="../assets/images/google/google-play-badge.png"
      class="image"
      alt="Download on google play store"
    />
    <!-- <img
          src="../assets/images/linkedin/LI-In-Bug.png"
          alt="Icon divider"
          class="socialImage"
          :class="{large: large}"
    />-->
  </div>
</template>

<script>
export default {
  name: 'Social',
  props: ['type', 'link'],
  methods: {
    click: function() {
      location.href = this.link
      // if (this.type == 'apple') {
      //   location.href =
      //     'https://apps.apple.com/us/app/dreamwedding-great-weddings/id1353935336'
      // } else {
      //   location.href =
      //     'https://play.google.com/store/apps/details?id=com.axenu.weddingplanner&hl=en'
      // }
    }
  }
}
</script>

<style lang="sass" scoped>

.container
  max-width: 150px
  flex: 1
  margin: 0
  padding: 0
  max-height: 100px
  cursor: pointer
  // margin: 10px
  // align-items: center
  // justify-content: center
  // display: flex

  .image
    width: 100%
    align-self: center

  .apple
    margin: 10px
</style>
