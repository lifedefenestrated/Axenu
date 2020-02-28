<template>
  <div class="card">
    <div class="card-body">
      <div class="card-column">
        <h3>Axenu's work</h3>

        <p>
          Axenu was in charge of developpment from customer to finished product, including design, protootyping and release
        </p>
        <h4>Technologies</h4>
        <div class="card-row">
          <p v-for="item of items" :key="item" class="card-column">
            <span class="bullet" >{{item}}</span>
          </p>
        </div>
        
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
        'React Native',
        'Vue',
        'Firebase',
        'Audio streaming',
        'Youtube and Vimeo video streaming',
        'Fastlane',
        'Push Notifications',
        'In-app purchase',
      ]
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>