<template>
  <div class="projects">
    <NavBar :title="$options.name"></NavBar>

    <div>
      <div
        class="card card-action"
        v-for="(product, key) in products"
        :key="key"
      >
        <h3 v-on:click="selectPost(key)">{{ product.title }}</h3>
        <div class="card-body card-row">
          <div class="card-column">
            <!-- <Markdown :content="firstBlock(post.body)"></Markdown> -->
            <p>{{ product.body }}</p>
          </div>
          <div class="card-column">
            <img
              class="rect-image"
              :src="product.headerImage"
              alt="Image of product"
            />
            <!-- <p>{{formatDate(post.date)}}</p> -->
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
// import Markdown from "@/components/Markdown.vue"; // @ is an alias to /src

export default {
  name: "Products",
  components: {
    NavBar
    // Markdown
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    // this.getBlogPosts();
  },
  methods: {
    // getBlogPosts() {
    //   this.$store.dispatch("getBlogPosts");
    // },
    // formatDate(time) {
    //   if (!time) {
    //     return "";
    //   }
    //   try {
    //     var date = new Date(time);
    //     return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    //   } catch (e) {
    //     return "Invalid time format";
    //   }
    // },
    // selectPost(key) {
    //   this.$router.push(`/blogpost/${key}`);
    // },
    // firstBlock(text) {
    //   // split by second newline
    //   if (!text) {
    //     return "";
    //   }
    //   return text.split("\n")[0];
    // }
  }
};
</script>
