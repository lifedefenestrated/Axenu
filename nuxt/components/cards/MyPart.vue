<template>
  <div class="card">
    <div class="card-body">
      <div class="card-column">
        <h3>What we did</h3>

        <p>
          {{settings.Header}}
        </p>
        <p><b>Features:</b> {{settings.features}}</p>
        <h4>Technologies</h4>
        <div class="card-row flex-start">
          <div class="atooltip" v-for="tech of settings.technologies" :key="tech._id">
            <img :src="getImage(tech)" class="techImage" />
            <span class="tooltiptext">{{tech.name}}</span>
          </div>
          <!-- <img :src="require('../../assets/images/technologies/ReactNative.png')" class="techImage"/>
          <img :src="require('../../assets/images/technologies/firebase.png')" class="techImage"/>
          <img :src="require('../../assets/images/technologies/fastlane.png')" class="techImage"/>
          <img :src="require('../../assets/images/technologies/wordpress.png')" class="techImage"/> -->
        </div>
        <!-- <div class="card-row flex-start">
          <p v-for="item of items" :key="item" class="card-column" style="flex: unset;">
            {{item}}
          </p>
        </div> -->
        
      </div>
    </div>
  </div>
</template>

<script>
import DownloadApp from '../../components/DownloadApp.vue'

export default {
  name: 'MyPartCard',
  components: {
    DownloadApp
  },
  props: { settings: {} },
  data() {
    return {
      items: [
        // 'React Native',
        // 'Vue',
        // 'Firebase',
        'Audio streaming',
        'Youtube and Vimeo video streaming',
        // 'Fastlane',
        'Push Notifications',
        'In-app purchase',
      ]
    }
  },
  methods: {
    getImage(image) {
      console.log(JSON.stringify(image));
      if (!image || !image.image || !image.image.path) {
        return ''
      }
      return process.env.IMAGE_URL +
          '&w=100&h=100&o=true&m=fitToHeight&src=' + image.image.path
    }
  },
  computed: {
  },
  mounted() {
    console.log(this.settings.technologies);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.techImage 
  max-width: 100px
  height: auto
  max-height: 100px
  object-fit: contain
  padding: 10px

.atooltip
  position: relative
  // display: inline-block
  // border-bottom: 1px dotted black

.atooltip .tooltiptext
  visibility: hidden
  width: 120px
  background-color: black
  color: #fff
  text-align: center
  border-radius: 6px
  padding: 5px 0
  position: absolute
  z-index: 1
  top: 100%
  left: 50%
  margin-left: -60px


.atooltip .tooltiptext::after
  content: ""
  position: absolute
  bottom: 100%
  left: 50%
  margin-left: -5px
  border-width: 5px
  border-style: solid
  border-color: transparent transparent black transparent

.atooltip:hover .tooltiptext
  visibility: visible
</style>