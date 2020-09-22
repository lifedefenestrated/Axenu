<template>
  <div class="card">
    <div class="card-body">
      <div class="card-column">
        <h3>{{ settings.Title }}</h3>
        <div class="card-row space-around">
        <div v-for="(partner, index) of settings.Partners" :key="index" class="partnerCard" @click="navigate(partner.value.link)">
          <!-- {{partner.value.name}} -->
          <img class="partnerImage" :src="getImage(partner.value.logo.path)" :alt="partner.value.name"  />
          <!-- <p>{{partner.value.name}}</p> -->
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'partnersCard',
  components: {
  },
  props: { settings: {} },
  data() {
    return {}
  },
  computed: {
  },
  methods: {
    getImage(url) {
      if (url) {
        return (
          process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' +
          url
        )
      }
      return ''
    },
    navigate(url) {
      // this.$router.push()
      if (!url) {
        return
      }
      window.open(url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.partnerCard
  max-width: 150px
  max-height: 200px
  // height: 33%
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 0px
  cursor: pointer

  p
    font-size: 1.5em

.partnerImage
  max-width: 80%
  max-height: 100%
  margin-bottom: 20px
</style>
