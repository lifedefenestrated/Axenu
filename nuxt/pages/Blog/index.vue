<template>
  <div class="blog">
    <NavBar :title="$options.name"></NavBar>

    <div>
      <div class="card card-action" v-for="(post, key) in posts" :key="key">
        <h3 v-on:click="selectPost(post.title_slug)">{{ post.title }}</h3>
        <div class="card-body card-row">
          <div class="card-column flex-3">
            <Markdown :content="firstBlock(post.content)"></Markdown>
            <p v-on:click="selectPost(post.title_slug)" class="read-more">
              Read more...
            </p>
          </div>
          <div class="card-column">
            <img
              class="rect-image"
              :src="getImage(post.image)"
              alt="Image of founer"
            />
            <p>{{ formatDate(post.date) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from '../../components/NavBar.vue' // @ is an alias to /src
import Markdown from '../../components/Markdown.vue' // @ is an alias to /src

export default {
  name: 'Blog',
  components: {
    NavBar,
    Markdown
  },
  data() {
    return {
      posts: [],
      uploadsUrl: process.env.UPLOADS_URL,
      apiToken: process.env.API_TOKEN
    }
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
    },
    formatDate(time) {
      if (!time) {
        return ''
      }
      try {
        var date = new Date(time)
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
      } catch (e) {
        return 'Invalid time format'
      }
    },
    selectPost(key) {
      this.$router.push(`/blog/${key}`)
    },
    firstBlock(text) {
      // split by second newline
      if (!text) {
        return ''
      }
      // return text.split('\n')[0]
      if (text.length < 800) {
        return text
      }
      return text.slice(0, 800) + ' ...'
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
    }
  },

  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.POSTS_URL,
      JSON.stringify({
        filter: { published: true },
        sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    return { posts: data.entries }
  }
}
</script>

<style lang="sass" scoped>
.read-more
  cursor: pointer
</style>
