<template>
  <div class="blog">
    <NavBar :title="blogPost.title || ''" smallTitle="true"></NavBar>

    <div class="card">
      <h4>{{ blogPost.title }}</h4>
      <p>Date:</p>
      <Markdown :content="markDownBody"></Markdown>
      <p v-on:click="updateBlogPost">Update</p>
    </div>

    <div class="card">
      <textarea
        v-model="markDownBody"
        placeholder="add multiple lines"
      ></textarea>
    </div>

    <div class="card">
      <Markdown :content="blogPost.body"></Markdown>
    </div>

    <!-- <div class="card"> -->
    <!-- <vue-markdown :source="blogPost.body"></vue-markdown> -->
    <!-- </div> -->

    <!-- <div class="card" v-html="renderMarkdown(blogPost.body)"></div> -->

    <LatestBlogPosts></LatestBlogPosts>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import LatestBlogPosts from "@/cards/LatestBlogPosts.vue"; // @ is an alias to /src
import Markdown from "@/components/Markdown.vue"; // @ is an alias to /src

export default {
  name: "BlogPost",
  components: {
    NavBar,
    LatestBlogPosts,
    // VueMarkdown,
    // MarkdownItVue,
    Markdown
  },
  data() {
    return {
      markDownBody: ""
    };
  },
  computed: {
    blogPost() {
      if (this.$store.state.blogPosts[this.$route.params.key]) {
        // this.markDownBody = this.$store.state.blogPosts[
        //   this.$route.params.key
        // ].body;
      }
      return this.$store.state.blogPosts[this.$route.params.key] || {};
    }
  },
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    getBlogPosts() {
      this.$store.dispatch("getBlogPosts");
    },
    updateBlogPost() {
      console.log("updateBlogPost");

      this.$store.dispatch("updateBlogPost", {
        key: this.$route.params.key,
        data: { ...this.blogPost, body: this.markDownBody }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
textarea
  height: 200px
</style>
