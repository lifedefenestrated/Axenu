<template>
  <div class="card" v-if="blogActive">
    <h3 class="center">Latest blog posts</h3>
    <div class="card-body">
      <div class="card-row">
        <div class="card-column min-w-3" v-for="(post, key) in blogPosts" :key="key">
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
export default {
  name: "LatestBlogPosts",
  props: [],
  data() {
    return {};
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    blogActive() {
      return this.$store.state.blogActive;
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
