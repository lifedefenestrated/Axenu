<template>
  <div class="home">
    <NavBar title="Admin"></NavBar>
    <div>
      <div class="" v-for="(post, key) in blogPosts" :key="key">
        <p>{{ post.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue' // @ is an alias to /src

export default {
  name: 'admin',
  components: {
    NavBar
  },
  data() {
    return {}
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  mounted() {
    this.getBlogPosts()
  },
  methods: {
    getBlogPosts() {
      this.$store.dispatch('getBlogPosts')
    }
  }
  // middleware: 'auth'
}
</script>

<style lang="sass" scoped></style>
