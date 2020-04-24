<template>
  <div class="blog">
    <NavBar :title="policy.title + ' Terms' || ''" smallTitle="true"></NavBar>

    <div class="card">
      <h4>{{ policy.title + ' Terms' }}</h4>
      <p>{{ formatDate(policy._modified * 1000) }}</p>
      <!-- <Markdown :content="markDownBody"></Markdown> -->
      <Markdown :content="policy.content" class="markdown-container"></Markdown>
      <!-- <p v-on:click="updateBlogPost">Update</p> -->
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from '../../components/NavBar.vue' // @ is an alias to /src
import Markdown from '../../components/Markdown.vue' // @ is an alias to /src

export default {
  name: 'BlogPost',
  components: {
    NavBar,
    Markdown
  },
  data() {
    return {
      markDownBody: '',
      policy: {}
    }
  },
  mounted() {
    // this.getBlogPosts()
  },
  methods: {
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
    }
  },
  async asyncData({ app, params, payload }) {
    var policy = payload
    if (!payload) {
      let { data } = await app.$axios.post(
        process.env.TERMS_URL,
        JSON.stringify({
          filter: { title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      policy = data.entries[0]
  }
    return { policy }
  }
}
</script>
