<template>
  <div class="projects">
    <NavBar title="Drop A Story"></NavBar>

    <div class="card orange">
      <div class="card-body">
        <div class="card-row">
          <div class="card-column flex-3">
            <!-- <h4>Coming Soon</h4> -->
            <h3>Coming Soon</h3>
          </div>
          <div class="card-column">
            <div class="flex-1 img-container">
              <img
                src="../../assets/images/dropAstory/logo_violet@3x.png"
                alt="Image of founer"
                class="vertical-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import { db } from "../config/firebase";
import NavBar from '../../components/NavBar.vue' // @ is an alias to /src
// import DownloadApp from '../../components/DownloadApp.vue'
// import Markdown from "@/components/Markdown.vue"; // @ is an alias to /src

export default {
  name: 'Brollop',
  components: {
    NavBar
    // Markdown
  },
  data() {
    return {}
  },
  computed: {
    product() {
      return this.$store.state.products[this.$route.params.key]
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
}
</script>

<style lang="sass" scoped>
.arrow
  display: block
  width: 50px
  height: 50px
  background-color: red

.googleBadge
  max-width: 150px
  max-height: 100px
  align-self: center

li
  text-align: left
</style>
