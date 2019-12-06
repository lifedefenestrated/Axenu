<template>
  <div class="card" v-if="blogActive">
    <h3 class="center">Latest blog posts</h3>
    <div class="card-body">
      <div class="card-row">
        <div
          class="card-column min-w-3 max-w-4 hoverable"
          v-for="(post, key) in posts"
          :key="key"
          v-on:click="selectPost(post.title_slug)"
        >
          <img
            class="rect-image"
            :src="getImage(post.image)"
            alt="Image of founer"
          />
          <h4>{{ post.title }}</h4>
          <p class="card-date">{{ formatDate(post._created * 1000) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestBlogPosts',
  props: ['posts'],
  data() {
    return {
      // posts: []
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    },
    blogActive() {
      return this.$store.state.blogActive
    }
  },
  mounted() {
    this.getBlogPosts()
    // console.log('mounted')
  },
  methods: {
    getBlogPosts() {},
    selectPost(key) {
      this.$router.push(`/blog/${key}`)
    },
    getImage: image => {
      if (image) {
        return (
          process.env.IMAGE_URL +
          '&w=300&h=300&o=true&m=fitToHeight&src=' +
          image.path
        )
      }
      return ''
    },
    formatDate(time) {
      if (!time) {
        return ''
      }
      try {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        var date = new Date(time)
        return date.toLocaleDateString('en-US', options) //+ ' ' + date.toLocaleTimeString()
      } catch (e) {
        console.log(e)

        return 'Invalid time format'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass"></style>
