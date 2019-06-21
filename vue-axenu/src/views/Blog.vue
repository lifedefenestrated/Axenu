<template>
  <div class="blog">
    <NavBar :title="$options.name"></NavBar>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, key) in blogPosts" :key="post.key">
          <td>
            <p>{{post.title}}</p>
            <p>{{key}}</p>
          </td>
          <!-- <td>{{book.author}}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from "@/components/NavBar.vue"; // @ is an alias to /src

export default {
  name: "Blog",
  components: {
    NavBar
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
    }
  }
};
</script>
