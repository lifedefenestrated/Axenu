<template>
  <div class="projects">
    <NavBar :title="product.title"></NavBar>

    <div class="card">
      <div class="card-body">
        <div class="card-column flex-1">
          <div class="img-container ios-screenshot">
            <img
              class="screenshot"
              src="../assets/images/dreamwedding/screenshot1.jpg"
              alt="Image of product"
            />
          </div>
        </div>
        <div class="card-column flex-2">
          <h3>Plan your wedding</h3>
          <p>
            Sweden’s best wedding planner shares all her tips and tricks from many years of experience. This app has got everything you need, starting off with an easy to follow 7 step checklist, taking you all the way to your dream wedding.
            Other smart tools included are:
          </p>
          <div class="card-row">
            <div class="card-column column-small no-margin">
              <h5>Budget</h5>
              <p>Budget tool where you can easily plan your budget and easily sum up all your needs. It also includes smart suggestions of most of the common items that your budget should include</p>
            </div>
            <div class="card-column column-small no-margin">
              <h5>Priority</h5>
              <p>Priority-list where you can decide and follow what you think is the most important for you wedding. Knowing what you want to focus on will get you a long way</p>
            </div>
            <div class="card-column column-small no-margin">
              <h5>Guests</h5>
              <p>Guest-list where you can gather all your guests, keep track of who is coming and address lists. It is also integrated into our table setting tool</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card orange">
      <div class="card-body">
        <div class="card-row">
          <div class="card-column flex-3">
            <h4>Developed with:</h4>
            <h3>Great Weddings</h3>
          </div>
          <div class="card-column">
            <div class="flex-1 img-container">
              <img
                src="../assets/images/dreamwedding/Icon.png"
                alt="Image of founer"
                class="round vertical-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div class="card-column">
          <h3>Dream Weddings with Great-Weddings</h3>
          <div class="card-row center">
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../assets/images/dreamwedding/screenshot1.jpg"
                alt="Image of product"
              />
            </div>
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../assets/images/dreamwedding/screenshot2.jpg"
                alt="Image of product"
              />
            </div>
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../assets/images/dreamwedding/screenshot3.jpg"
                alt="Image of product"
              />
            </div>
            <div class="img-container ios-screenshot">
              <img
                class="screenshot"
                src="../assets/images/dreamwedding/screenshot4.jpg"
                alt="Image of product"
              />
            </div>
          </div>
          <!-- <div class="card-row flex-end"> -->
          <!-- <img
              src="../assets/images/apple/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          />-->
          <div style="display: flex; flex-direction: row;">
            <DownloadApp type="google"></DownloadApp>
            <DownloadApp type="apple"></DownloadApp>
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
import DownloadApp from "@/components/DownloadApp.vue";
// import Markdown from "@/components/Markdown.vue"; // @ is an alias to /src

export default {
  name: "Product",
  components: {
    NavBar,
    DownloadApp
    // Markdown
  },
  data() {
    return {};
  },
  computed: {
    product() {
      return this.$store.state.products[this.$route.params.key];
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

<style lang="sass" scoped>
.arrow
  display: block
  width: 50px
  height: 50px
  background-color: red


// .screenshot
//   width: 200px
//   margin-right: 10px

.googleBadge
  max-width: 150px
  max-height: 100px
  align-self: center

li
  text-align: left

</style>
