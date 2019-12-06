<template>
  <div class="card orange">
    <div class="card-body">
      <div class="card-row">
        <div class="card-column flex-3">
          <h4>{{ settings.subtitle }}</h4>
          <h3>{{ settings.title }}</h3>
        </div>
        <div class="card-column">
          <div class="flex-1 img-container">
            <img
              :src="image"
              alt="Image of founer"
              class="vertical-center"
              :class="{ round: !settings.square }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'highlightCard',
  props: { settings: {} },
  data() {
    return {}
  },
  computed: {
    image() {
      if (this.settings.image) {
        return (
          process.env.IMAGE_URL +
          '&w=250&h=250&o=true&m=fitToHeight&src=' +
          this.settings.image.path
        )
      }
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
