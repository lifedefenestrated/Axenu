<template>
  <div>
    <div v-if="type == 'facebook'" class="social" v-on:click="click">
      <div class="socialImageContainer" :class="{large: large}">
        <img
          src="../assets/images/facebook/f_logo_RGB-Blue_100.png"
          alt="Icon divider"
          class="socialImage"
          :class="{large: large}"
        />
      </div>
      <div class="socialLabelContainer">
        <p v-if="hasText" class="socialLabel">Facebook</p>
      </div>
    </div>
    <div v-if="type == 'linkedin'" class="social" v-on:click="click">
      <div class="socialImageContainer" :class="{large: large}">
        <img
          src="../assets/images/linkedin/LI-In-Bug.png"
          alt="Icon divider"
          class="socialImage"
          :class="{large: large}"
        />
      </div>
      <div class="socialLabelContainer">
        <p v-if="hasText" class="socialLabel">Linkedin</p>
      </div>
    </div>
    <div v-if="type == 'twitter'" class="social" v-on:click="click">
      <div class="socialImageContainer" :class="{large: large}">
        <img
          src="../assets/images/twitter/Twitter_Social_Icon_Circle_Color.png"
          alt="Icon divider"
          class="socialImage"
          :class="{large: large}"
        />
      </div>
      <div class="socialLabelContainer">
        <p v-if="hasText" class="socialLabel">Twitter</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Social",
  props: ["type", "hasText", "large"],
  methods: {
    click: function() {
      if (this.type == "facebook") {
        location.href = "https://www.facebook.com/Axenu-AB-494206151325798/";
      } else if (this.type == "linkedin") {
        location.href = "https://www.linkedin.com/company/axenu/";
      } else {
        location.href = "https://twitter.com/AxenuAB";
      }
    }
  }
};
</script>

<style lang="sass" scoped>

.social
  display: flex
  flex: 1
  flex-wrap: nowrap
  flex-direction: row
  justify-content: space-between
  margin-bottom: 10px
  cursor: pointer

  .socialImageContainer
    max-width: 50px

    &.large
      max-width: 120px

    .socialImage
      width: 100%

      &.large
        max-width: 100px
        height: 80px
        width: auto
        margin: 0px 10px

  .socialLabelContainer
    display: flex
    flex: 1
    flex-direction: column
    justify-content: center
    
    .socialLabel
      margin: 0
      padding: 0
      margin-left: 10px

</style>
