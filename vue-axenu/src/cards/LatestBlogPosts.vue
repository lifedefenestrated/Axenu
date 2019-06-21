<template>
  <div class="card">
    <h3 class="center">Latest blog posts</h3>
    <div class="card-body">
      <div class="card-row">
        <div class="card-column" v-for="(post, key) in blogPosts" :key="key">
          <img class="rect-image" :src="post.headerImage" alt="Image of founer">
          <h4>{{post.title}}</h4>
          <p>{{key}}</p>
          <p class="card-date">{{formatDate(post.date)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "LatestBlogPosts",
  props: [],
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
