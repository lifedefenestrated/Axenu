<template>
  <div class="card">
    <div class="card-body">
      <div class="card-column">
        <h3>{{ settings.title }}</h3>
        <div class="card-row scroll" >
          <!-- <div class="img-container ios-screenshot">
            <img class="screenshot" :src="image1" alt="Image of product" />
          </div>
          <div class="img-container ios-screenshot">
            <img class="screenshot" :src="image2" alt="Image of product" />
          </div>
          <div class="img-container ios-screenshot">
            <img class="screenshot" :src="image3" alt="Image of product" />
          </div>
          <div class="img-container ios-screenshot">
            <img class="screenshot" :src="image4" alt="Image of product" />
          </div> -->
          <div v-for="(image, index) of settings.images" :key="index" class="img-container ios-screenshot">
            <img class="screenshot" :src="getImage(image)" alt="Image of product" />
          </div>
        </div>
        <!-- <div class="card-row flex-end"> -->
        <!-- <img
              src="../assets/images/apple/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          />-->
        <div style="display: flex; flex-direction: row;">
          <DownloadApp v-if="settings.apple_link" type="apple" :link="settings.apple_link"></DownloadApp>
          <DownloadApp v-if="settings.google_link" type="google" :link="settings.google_link"></DownloadApp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadApp from '../../components/DownloadApp.vue'

export default {
  name: 'appImagesCard',
  components: {
    DownloadApp
  },
  props: { settings: {} },
  data() {
    return {}
  },
  mounted() {
    console.log(this.settings);
  },
  computed: {
    image1() {
      if (this.settings.image1) {
        return (
          process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' +
          this.settings.image1.path
        )
      }
      return ''
    },
    image2() {
      if (this.settings.image2) {
        return (
          process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' +
          this.settings.image2.path
        )
      }
      return ''
    },
    image3() {
      if (this.settings.image3) {
        return (
          process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' +
          this.settings.image3.path
        )
      }
      return ''
    },
    image4() {
      if (this.settings.image4) {
        return (
          process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' +
          this.settings.image4.path
        )
      }
      return ''
    },
  },
  methods: {
    getImage(image) {
      if (!image || !image.value || !image.value.path) {
        return ''
      }
      return process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' + image.value.path
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
