<template>
  <div class="blog">
    <NavBar :title="post.title || ''" smallTitle="true"></NavBar>

    <div class="card">
      <div class="img-container" style="height: 500px; display: flex; ">
        <img
          class="rect-image"
          :src="getImage(post.image)"
          alt="Image of founer"
          style="object-fit: contain;"
        />
      </div>
      <h4>{{ post.title }}</h4>
      <p>{{ formatDate(post._created * 1000) }}</p>
      <!-- <Markdown :content="markDownBody"></Markdown> -->
      <Markdown :content="post.content" class="markdown-container"></Markdown>
      <!-- <p v-on:click="updateBlogPost">Update</p> -->
    </div>

    <!-- <div class="card">
      <textarea
        v-model="markDownBody"
        placeholder="add multiple lines"
      ></textarea>
    </div>-->

    <!-- <div class="card">
      <Markdown :content="blogPost.body"></Markdown>
    </div>-->

    <!-- <div class="card"> -->
    <!-- <vue-markdown :source="blogPost.body"></vue-markdown> -->
    <!-- </div> -->

    <!-- <div class="card" v-html="renderMarkdown(blogPost.body)"></div> -->

    <LatestBlogPosts :posts="posts"></LatestBlogPosts>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from '../../components/NavBar.vue' // @ is an alias to /src
import LatestBlogPosts from '../../components/cards/LatestBlogPosts.vue' // @ is an alias to /src
import Markdown from '../../components/Markdown.vue' // @ is an alias to /src

export default {
  name: 'BlogPost',
  components: {
    NavBar,
    LatestBlogPosts,
    // VueMarkdown,
    // MarkdownItVue,
    Markdown
  },
  data() {
    return {
      markDownBody: '',
      post: {},
      posts: []
    }
  },
  computed: {
    blogPost() {
      if (this.$store.state.blogPosts[this.$route.params.blogpost]) {
        // this.markDownBody = this.$store.state.blogPosts[
        //   this.$route.params.blogpost
        // ].body
      }
      return this.$store.state.blogPosts[this.$route.params.blogpost] || {}
    }
  },
  mounted() {
    this.getBlogPosts()
  },
  methods: {
    getBlogPosts() {
      this.$store.dispatch('getBlogPosts')
    },
    updateBlogPost() {
      console.log('updateBlogPost')

      this.$store.dispatch('updateBlogPost', {
        key: this.$route.params.blogpost,
        data: { ...this.blogPost, body: this.markDownBody }
      })
    },
    getImage: image => {
      if (image) {
        return (
          process.env.IMAGE_URL +
          '&w=1200&h=300&o=true&m=fitToHeight&src=' +
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
    var post = payload
    if (!payload) {
      let { data } = await app.$axios.post(
        process.env.POSTS_URL,
        JSON.stringify({
          filter: { published: true, title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      // if (!data.entries[0]) { // TODO: Handle 404 post not found
      //   return error({ message: '404 Page not found', statusCode: 404 })
      // }
      //   return { post: post, posts: res2.data.entries }
      // console.log(data)

      post = data.entries[0]

      // let result = await app.$axios.get(
      //   process.env.IMAGE_URL +
      //     '&w=1200&h=300&m=fitToHeight&src=storage/uploads' +
      //     post.image.path
      // )
      // post.imageUrl = result.data
    }

    // fetch date for latest blog posts
    const res2 = await app.$axios.post(
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
    // console.log(res2.data)

    // let posts = await Promise.all(
    //   await res2.data.entries.map(async p => {
    //     let result = await app.$axios.get(
    //       process.env.IMAGE_URL +
    //         '&w=300&h=300&src=storage/uploads' +
    //         p.image.path
    //     )

    //     p.ThumbUrl = result.data
    //     return p
    //   })
    // )
    return { post, posts: res2.data.entries }
  }
}
</script>

<style lang="sass" scoped>
textarea
  height: 200px
</style>
