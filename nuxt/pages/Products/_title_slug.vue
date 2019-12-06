<template>
  <div class="blog">
    <NavBar :title="product.title || ''" smallTitle="true"></NavBar>

    <!-- <div class="card">
      <h4>{{ product.title }}</h4>
    </div> -->

    <div v-for="component in product.components" :key="component.component">
      <Highlight
        v-if="component.component === 'highlight'"
        :settings="component.settings"
      ></Highlight>
      <AboutProduct
        v-else-if="component.component === 'aboutProductCard'"
        :settings="component.settings"
      ></AboutProduct>
      <AppImages
        v-else-if="component.component === 'appImages'"
        :settings="component.settings"
      ></AppImages>
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
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from '../../components/NavBar.vue' // @ is an alias to /src
import Highlight from '../../components/cards/highlight.vue'
import AboutProduct from '../../components/cards/aboutProduct.vue'
import AppImages from '../../components/cards/appImages.vue'

export default {
  name: 'BlogPost',
  components: {
    NavBar,

    //cards
    Highlight,
    AboutProduct,
    AppImages
  },
  data() {
    return {}
  },
  computed: {
    blogPost() {
      if (this.$store.state.blogPosts[this.$route.params.blogpost]) {
        // this.markDownBody = this.$store.state.blogPosts[
        //   this.$route.params.blogpost
        // ].body
        console.log(this.$store.state.blogPosts[this.$route.params.blogpost])
      }
      return this.$store.state.blogPosts[this.$route.params.blogpost] || {}
    }
  },
  mounted() {},
  methods: {},
  async asyncData({ app, params, payload }) {
    var product = payload
    if (!payload) {
      let { data } = await app.$axios.post(
        process.env.PRODUCTS_URL,
        JSON.stringify({
          filter: { title_slug: params.title_slug },
          sort: { _created: -1 },
          populate: 1
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      product = data.entries[0]

      // // if (!data.entries[0]) { // TODO: Handle 404 post not found
      // //   return error({ message: '404 Page not found', statusCode: 404 })
      // // }
      // //   return { post: post, posts: res2.data.entries }
      // // console.log(data)

      // post = data.entries[0]

      // let result = await app.$axios.get(
      //   process.env.IMAGE_URL +
      //     '&w=1200&h=300&m=fitToHeight&src=storage/uploads' +
      //     post.image.path
      // )
      // post.imageUrl = result.data
    }

    // fetch date for latest blog posts
    // const res2 = await app.$axios.post(
    //   process.env.POSTS_URL,
    //   JSON.stringify({
    //     filter: { published: true },
    //     sort: { _created: -1 },
    //     populate: 1
    //   }),
    //   {
    //     headers: { 'Content-Type': 'application/json' }
    //   }
    // )
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
    return { product }
  }
}
</script>

<style lang="sass" scoped>
textarea
  height: 200px
</style>
