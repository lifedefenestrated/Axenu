<template>
  <div class="blog">
    <NavBar title="Terms and Conditions"></NavBar>

    <div>
      <div class="card card-action">
        <div class="card-body card-row" v-for="(policy, key) in policies" :key="key">
          <nuxt-link class="h4-link" :to="'/terms/' + policy.title_slug">{{ policy.title }}</nuxt-link>
          <div class="card-row flex-end">
            <p style="text-align: center;">Modified: {{ formatDate(policy._modified * 1000) }}</p>
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
  name: 'terms',
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
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        var date = new Date(time)
        return date.toLocaleDateString('en-US', options) //+ ' ' + date.toLocaleTimeString()
      } catch (e) {
        console.log(e)

        return 'Invalid time format'
      }
    },
  },

  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      process.env.TERMS_URL,
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
