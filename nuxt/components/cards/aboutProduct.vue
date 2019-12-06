<template>
  <div class="card">
    <div class="card-body">
      <div class="card-column flex-1">
        <div class="img-container ios-screenshot">
          <img class="screenshot" :src="image" alt="Image of product" />
        </div>
      </div>
      <div class="card-column flex-2">
        <h3>{{ settings.title }}</h3>
        <p>
          {{ settings.preblock }}
        </p>
        <div class="card-row">
          <div class="card-column column-small no-margin margin-right">
            <h5>{{ settings.subheading1 }}</h5>
            <p>
              {{ settings.block1 }}
            </p>
          </div>
          <div class="card-column column-small no-margin margin-right">
            <h5>{{ settings.subheading2 }}</h5>
            <p>
              {{ settings.block2 }}
            </p>
          </div>
          <div class="card-column column-small no-margin margin-right">
            <h5>{{ settings.subheading3 }}</h5>
            <p>{{ settings.block3 }}</p>
          </div>
        </div>
        <div class="card-row">
          <div class="card-column column-small no-margin margin-right">
            <h5>{{ settings.subheading4 }}</h5>
            <p>{{ settings.block4 }}</p>
          </div>
          <div class="card-column column-small no-margin margin-right">
            <h5>{{ settings.subheading4 }}</h5>
            <p>{{ settings.block5 }}</p>
          </div>
          <div class="card-column column-small no-margin margin-right">
            <h5>{{ settings.subheading6 }}</h5>
            <p>
              {{ settings.block6 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutProductCard',
  props: { settings: {} },
  data() {
    return {}
  },
  computed: {
    image() {
      if (this.settings.image) {
        return (
          process.env.IMAGE_URL +
          '&w=600&h=500&o=true&m=fitToHeight&src=' +
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
