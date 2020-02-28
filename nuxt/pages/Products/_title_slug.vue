<template>
  <div class="blog">
    <NavBar :title="product.title || ''" smallTitle="true"></NavBar>

    <!-- <div class="card">
      <h4>{{ product.title }}</h4>
    </div> -->

    <!-- <div v-for="component in product.components" :key="component.component">
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
    </div> -->

    <ComponentFlow v-if="product" :components="product.components">

    </ComponentFlow>

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
import ComponentFlow from '../../components/ComponentFlow.vue'

export default {
  name: 'BlogPost',
  components: {
    NavBar,

    //cards
    Highlight,
    AboutProduct,
    AppImages,
    ComponentFlow
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
    }
    return { product }
  }
}
</script>

<style lang="sass" scoped>
textarea
  height: 200px
</style>
