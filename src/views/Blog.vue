<template>
  <div class="blog">
    <NavBar :title="$options.name"></NavBar>

    <div>
      <div class="card card-action" v-for="(post, key) in posts" :key="key">
        <h3 v-on:click="selectPost(key)">{{ post.title }}</h3>
        <div class="card-body card-row">
          <div class="card-column">
            <Markdown :content="firstBlock(post.body)"></Markdown>
            <p>Read more...</p>
          </div>
          <div class="card-column">
            <img
              class="rect-image"
              :src="post.headerImage"
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
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src
import Markdown from "@/components/Markdown.vue"; // @ is an alias to /src

export default {
  name: "Blog",
  components: {
    NavBar,
    Markdown
  },
  data() {
    return {};
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  mounted() {
    this.getBlogPosts();
  },
  methods: {
    getBlogPosts() {
      this.$store.dispatch("getBlogPosts");
    },
    formatDate(time) {
      if (!time) {
        return "";
      }
      try {
        var date = new Date(time);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
      } catch (e) {
        return "Invalid time format";
      }
    },
    selectPost(key) {
      this.$router.push(`/blogpost/${key}`);
    },
    firstBlock(text) {
      // split by second newline
      if (!text) {
        return "";
      }
      return text.split("\n")[0];
    }
  },

  async asyncData({ app }) {
    const { data } = await app.$axios.post(
      "http://localhost:8080/api/collections/get/blogposts?token=33e0931c16c9feee202fa016554e47",
      JSON.stringify({
        filter: { published: true },
        sort: { _created: -1 },
        populate: 1
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    return { posts: data.entries };
  }
};
</script>
