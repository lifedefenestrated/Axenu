<template>
  <div class="blog">
    <NavBar title="Privacy Policy"></NavBar>

    <div>
      <div class="card card-action">
        <div class="card-body card-row" v-for="(policy, key) in policies" :key="key">
          <nuxt-link class="h4-link" :to="'/privacy-policy/' + policy.title_slug">{{ policy.title }}</nuxt-link>
          <div class="card-row flex-end">
            <p style="text-align: center;">Modified: {{ formatDate(policy._modified) }}</p>
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

export default {
  name: 'privacy-policy',
  components: {
    NavBar
  },
  data() {
    return {
      policies: [],
      uploadsUrl: process.env.UPLOADS_URL,
      apiToken: process.env.API_TOKEN
    }
  },
  computed: {
    // blogPosts() {
    //   return this.$store.state.blogPosts
    // }
  },
  mounted() {
    // this.getBlogPosts()
  },
  methods: {
    // async getBlogPosts() {
    //   this.$store.dispatch('getBlogPosts')
    // },
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
  },

  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.PRIVACY_URL,
      JSON.stringify({
        sort: { _modified: -1 },
        // populate: 1
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    return { policies: data.entries }
  }
}
</script>

<style lang="sass" scoped>
.read-more
  cursor: pointer
</style>
